import { Link } from 'react-router-dom';
import type { MythicPerson, ParvaStory } from '../core/entities';
import { useLang } from '../i18n/LanguageContext';
import { Sigil } from './art/Art';

export function CharacterCard({ person }: { person: MythicPerson }) {
  const { lang, t } = useLang();
  return (
    <Link to={`/characters/${person.id}`} className="character-card" style={{ ['--accent' as string]: person.accent }}>
      <span className="character-card-sigil">
        <Sigil art={person.art} />
      </span>
      <span className="character-card-body">
        <span className="character-card-kind">{t(person.kindLabel)}</span>
        <span className="character-card-name">{lang === 'te' ? person.name.te : person.name.en}</span>
        <span className="character-card-alt">{lang === 'te' ? person.name.en : person.name.te}</span>
        <span className="character-card-summary">{t(person.summary)}</span>
      </span>
    </Link>
  );
}

export function StoryCard({ story }: { story: ParvaStory }) {
  const { lang, t } = useLang();
  return (
    <Link to={`/stories/${story.id}`} className="story-card">
      <span className="story-card-art" aria-hidden="true">
        <span className="story-card-art-glow" />
        <Sigil art={story.art} className="story-card-sigil" />
        <span className="story-card-number">{String(story.index).padStart(2, '0')}</span>
      </span>
      <span className="story-card-body">
        <span className="story-card-kicker">
          {t({ en: 'Sub-parva', te: 'ఉపపర్వం' })} · {story.sectionCount} {t({ en: 'sections', te: 'విభాగాలు' })}
        </span>
        <span className="story-card-title">{t(story.title)}</span>
        <span className="story-card-alt">{lang === 'te' ? story.title.en : story.title.te}</span>
        <span className="story-card-summary">{t(story.summary)}</span>
        <span className="story-card-cta">{t({ en: 'Read the story', te: 'కథ చదవండి' })} →</span>
      </span>
    </Link>
  );
}

export function CharacterPill({ person }: { person: MythicPerson }) {
  const { lang } = useLang();
  return (
    <Link to={`/characters/${person.id}`} className="pill" style={{ ['--accent' as string]: person.accent }}>
      <Sigil art={person.art} className="pill-sigil" />
      <span>{lang === 'te' ? person.name.te : person.name.en}</span>
    </Link>
  );
}

export function StoryPill({ story }: { story: ParvaStory }) {
  const { t } = useLang();
  return (
    <Link to={`/stories/${story.id}`} className="pill pill--story">
      <span className="pill-index">{String(story.index).padStart(2, '0')}</span>
      <span>{t(story.title)}</span>
    </Link>
  );
}
