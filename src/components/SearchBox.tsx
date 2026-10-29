import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../core/repository';
import type { SearchHit } from '../core/repository';
import { useLang } from '../i18n/LanguageContext';
import { Sigil } from './art/Art';

interface SearchBoxProps {
  readonly variant?: 'hero' | 'page';
  readonly initialQuery?: string;
  readonly autoFocus?: boolean;
}

/**
 * Prefix search over the character index.
 * Typing "k" lists every character whose name, alias or epithet begins with
 * "k"; Telugu typing matches Telugu names the same way.
 */
export function SearchBox({ variant = 'hero', initialQuery = '', autoFocus = false }: SearchBoxProps) {
  const { lang, t } = useLang();
  const navigate = useNavigate();
  const [query, setQuery] = useState(initialQuery);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();

  useEffect(() => setQuery(initialQuery), [initialQuery]);

  const hits = useMemo<readonly SearchHit[]>(() => {
    if (query.trim().length === 0) return [];
    return db().persons.search(query, 8);
  }, [query]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    if (!open) return;
    const onClick = (event: MouseEvent) => {
      if (!boxRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  const go = (personId: string) => {
    setOpen(false);
    navigate(`/characters/${personId}`);
  };

  const submit = () => {
    if (hits.length > 0) {
      go(hits[Math.min(active, hits.length - 1)].person.id);
      return;
    }
    setOpen(false);
    navigate(`/characters?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className={`search-box search-box--${variant}`} ref={boxRef}>
      <form
        className="search-field"
        role="search"
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
      >
        <svg viewBox="0 0 24 24" className="search-icon" aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M15.5 15.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          ref={inputRef}
          type="search"
          value={query}
          autoFocus={autoFocus}
          placeholder={t({
            en: 'Search any character — try “K” for Karna, Kunti, Krishna…',
            te: 'ఏ పాత్రనైనా వెతకండి — “క” అని టైప్ చేస్తే కర్ణుడు, కుంతి, కృష్ణుడు…',
          })}
          aria-label={t({ en: 'Search characters', te: 'పాత్రలను వెతకండి' })}
          aria-controls={listId}
          aria-expanded={open && hits.length > 0}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(event) => {
            if (event.key === 'ArrowDown') {
              event.preventDefault();
              setOpen(true);
              setActive((current) => Math.min(current + 1, Math.max(hits.length - 1, 0)));
            } else if (event.key === 'ArrowUp') {
              event.preventDefault();
              setActive((current) => Math.max(current - 1, 0));
            } else if (event.key === 'Escape') {
              setQuery('');
              setOpen(false);
            }
          }}
        />
        <button type="submit" className="search-submit">
          {t({ en: 'Search', te: 'వెతుకు' })}
        </button>
      </form>

      {open && query.trim().length > 0 && (
        <div className="search-results" id={listId} role="listbox" aria-label={t({ en: 'Matching characters', te: 'సరిపోలిన పాత్రలు' })}>
          {hits.length === 0 ? (
            <p className="search-empty">
              {t({
                en: `No character begins with “${query.trim()}”. Try a shorter prefix.`,
                te: `“${query.trim()}” తో మొదలయ్యే పాత్ర లేదు. చిన్న అక్షరాలతో ప్రయత్నించండి.`,
              })}
            </p>
          ) : (
            <ul className="search-list">
              {hits.map((hit, index) => (
                <li key={hit.person.id}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={index === active}
                    className={index === active ? 'search-hit is-active' : 'search-hit'}
                    onMouseEnter={() => setActive(index)}
                    onClick={() => go(hit.person.id)}
                  >
                    <span className="search-hit-sigil" style={{ color: hit.person.accent }}>
                      <Sigil art={hit.person.art} />
                    </span>
                    <span className="search-hit-text">
                      <span className="search-hit-name">{lang === 'te' ? hit.person.name.te : hit.person.name.en}</span>
                      <span className="search-hit-alt">
                        {lang === 'te' ? hit.person.name.en : hit.person.name.te}
                      </span>
                    </span>
                    <span className="chip chip--ghost">{t(hit.person.kindLabel)}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
          <button
            type="button"
            className="search-all"
            onClick={() => {
              setOpen(false);
              navigate(`/characters?q=${encodeURIComponent(query.trim())}`);
            }}
          >
            {t({ en: 'See all matches', te: 'అన్ని ఫలితాలు చూడండి' })} →
          </button>
        </div>
      )}
    </div>
  );
}
