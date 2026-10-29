import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { db } from '../core/repository';
import type { EntityKind, MythicPerson } from '../core/entities';
import { useLang } from '../i18n/LanguageContext';
import { CharacterCard } from '../components/Cards';
import { SearchBox } from '../components/SearchBox';
import { Mandala, Ornament } from '../components/art/Art';

const KIND_ORDER: EntityKind[] = ['royal', 'warrior', 'sage', 'divine', 'demon', 'serpent', 'celestial', 'bard'];

const KIND_LABELS: Record<EntityKind, { en: string; te: string }> = {
  royal: { en: 'Kings & Queens', te: 'రాజులు, రాణులు' },
  warrior: { en: 'Warriors', te: 'యోధులు' },
  sage: { en: 'Sages', te: 'ఋషులు' },
  divine: { en: 'Gods', te: 'దేవతలు' },
  demon: { en: 'Rakshasas', te: 'రాక్షసులు' },
  serpent: { en: 'Nagas', te: 'నాగులు' },
  celestial: { en: 'Celestials', te: 'అప్సర, గంధర్వ' },
  bard: { en: 'Narrators', te: 'కథకులు' },
};

export function Characters() {
  const { lang, t } = useLang();
  const [params, setParams] = useSearchParams();
  const query = params.get('q')?.trim() ?? '';
  const kindParam = params.get('kind');
  const kind = KIND_ORDER.find((entry) => entry === kindParam);

  const database = db();
  const allPeople = database.persons.alphabetical();

  const results = useMemo<readonly MythicPerson[]>(() => {
    let list: readonly MythicPerson[] = allPeople;
    if (query) list = database.persons.search(query, 500).map((hit) => hit.person);
    if (kind) list = list.filter((person) => person.kind === kind);
    return list;
  }, [allPeople, database, kind, query]);

  const groups = useMemo(() => {
    const map = new Map<string, MythicPerson[]>();
    for (const person of results) {
      const key = person.initial;
      const bucket = map.get(key) ?? [];
      bucket.push(person);
      map.set(key, bucket);
    }
    return [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [results]);

  const update = (next: { q?: string; kind?: string }) => {
    const merged = new URLSearchParams(params);
    if (next.q !== undefined) {
      if (next.q) merged.set('q', next.q);
      else merged.delete('q');
    }
    if (next.kind !== undefined) {
      if (next.kind) merged.set('kind', next.kind);
      else merged.delete('kind');
    }
    setParams(merged, { replace: true });
  };

  return (
    <div className="page page--characters">
      <section className="page-hero page-hero--compact">
        <Mandala className="page-hero-mandala" />
        <div className="page-hero-inner">
          <p className="section-kicker">{t({ en: 'The character archive', te: 'పాత్రల సంపుటి' })}</p>
          <h1 className="page-title">
            {t({ en: 'Everyone in the Adi Parva', te: 'ఆది పర్వంలోని ప్రతి పాత్ర' })}
          </h1>
          <p className="page-subtitle">
            {t({
              en: 'Gods, kings, sages, demons and bards — each with parents, teachers, spouses, children and the stories they appear in.',
              te: 'దేవతలు, రాజులు, ఋషులు, రాక్షసులు, కథకులు — తల్లిదండ్రులు, గురువులు, భార్యాభర్తలు, సంతానం, కథలతో సహా.',
            })}
          </p>
          <SearchBox variant="page" initialQuery={query} />
        </div>
      </section>

      <section className="section section--archive">
        <div className="filter-bar">
          <button
            type="button"
            className={!kind ? 'filter-chip is-active' : 'filter-chip'}
            onClick={() => update({ kind: '' })}
          >
            {t({ en: 'All', te: 'అందరూ' })} <span className="filter-count">{allPeople.length}</span>
          </button>
          {KIND_ORDER.map((entry) => {
            const count = database.persons.byKind(entry).length;
            if (count === 0) return null;
            return (
              <button
                key={entry}
                type="button"
                className={kind === entry ? 'filter-chip is-active' : 'filter-chip'}
                onClick={() => update({ kind: entry })}
              >
                {t(KIND_LABELS[entry])} <span className="filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="archive-meta">
          <p>
            {query
              ? t({
                  en: `${results.length} character${results.length === 1 ? '' : 's'} begin with “${query}”.`,
                  te: `“${query}” తో మొదలయ్యే ${results.length} పాత్రలు.`,
                })
              : t({
                  en: `${results.length} characters, arranged by their first letter.`,
                  te: `${results.length} పాత్రలు, మొదటి అక్షరం ప్రకారం.`,
                })}
          </p>
          {(query || kind) && (
            <button type="button" className="link-button" onClick={() => setParams(new URLSearchParams(), { replace: true })}>
              {t({ en: 'Clear filters', te: 'ఫిల్టర్లు తీసివేయండి' })}
            </button>
          )}
        </div>

        {results.length === 0 ? (
          <div className="empty-state">
            <Ornament />
            <p>
              {t({
                en: `Nothing in the archive begins with “${query}”. The search is a prefix match — try “bh” for Bhima, Bhishma and Bhishmaka’s line.`,
                te: `“${query}” తో మొదలయ్యేది ఏదీ లేదు. ఇది ఆది అక్షరాల శోధన — “భీ” అని ప్రయత్నించండి.`,
              })}
            </p>
            <Link to="/characters" className="btn btn--outline">
              {t({ en: 'Show everyone', te: 'అందరినీ చూపించు' })}
            </Link>
          </div>
        ) : (
          <div className="letter-groups">
            {groups.map(([letter, people]) => (
              <section key={letter} className="letter-group" id={`letter-${letter}`}>
                <div className="letter-heading">
                  <span className="letter-glyph">{letter}</span>
                  <span className="letter-rule" />
                  <span className="letter-count">{people.length}</span>
                </div>
                <div className="character-grid">
                  {people.map((person) => (
                    <CharacterCard key={person.id} person={person} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        <p className="archive-footnote">
          {lang === 'te'
            ? 'ప్రతి పాత్ర పేరు మీద నొక్కి తల్లిదండ్రులు, గురువులు, పెంపుడు తల్లిదండ్రులు, భార్యాభర్తలు, కుమారులు, కుమార్తెలు, సోదరులను చూడవచ్చు.'
            : 'Open any character to see father, mother, teachers, adopted parents, spouses, sons, daughters, siblings and every story they appear in.'}
        </p>
      </section>
    </div>
  );
}
