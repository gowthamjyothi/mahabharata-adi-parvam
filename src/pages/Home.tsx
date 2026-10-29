import { Link } from 'react-router-dom';
import { db } from '../core/repository';
import { useLang } from '../i18n/LanguageContext';
import { CharacterCard, CharacterPill, StoryCard } from '../components/Cards';
import { SearchBox } from '../components/SearchBox';
import { HeroScene, Mandala, Ornament, SceneBanner } from '../components/art/Art';

const FEATURED = [
  'krishna',
  'bhima',
  'arjuna',
  'karna',
  'draupadi',
  'bhishma',
  'yudhishthira',
  'duryodhana',
  'veda-vyasa',
  'dronacharya',
  'kunti',
  'ghatotkacha',
];

const SCENES: { art: 'mace' | 'flame' | 'serpent' | 'bow' | 'chariot' | 'scroll'; title: { en: string; te: string }; body: { en: string; te: string }; to: string }[] = [
  {
    art: 'mace',
    title: { en: 'Bhima’s strength', te: 'భీముని బలం' },
    body: {
      en: 'He splits rocks at birth, kills Hidimba and Bakasura, and carries his family through a tunnel while a palace burns above them.',
      te: 'పుట్టుకతోనే రాళ్లను పగలగొట్టాడు; హిడింబుని, బకాసురుని చంపాడు; భవనం మీద మండుతుండగా సొరంగంలో కుటుంబాన్ని కాపాడాడు.',
    },
    to: '/characters/bhima',
  },
  {
    art: 'flame',
    title: { en: 'The house of lac', te: 'లాక్షాగృహం' },
    body: {
      en: 'A palace built to burn: Duryodhana’s first plot, Vidura’s coded warning, and an escape dug in secret.',
      te: 'కాల్చడానికే కట్టిన భవనం: దుర్యోధనుని మొదటి కుట్ర, విదురుని సంకేత హెచ్చరిక, రహస్యంగా తవ్విన సొరంగం.',
    },
    to: '/stories/jatugriha',
  },
  {
    art: 'serpent',
    title: { en: 'The snake sacrifice', te: 'సర్పయాగం' },
    body: {
      en: 'A king burns every serpent in creation, and a child sage stops the fire with a single plea.',
      te: 'ఒక రాజు సృష్టిలోని ప్రతి పామును కాల్చేస్తాడు; ఒక బాల ఋషి ఒక్క విజ్ఞప్తితో ఆ అగ్నిని ఆపుతాడు.',
    },
    to: '/stories/astika',
  },
  {
    art: 'bow',
    title: { en: 'A fish, a bow, a queen', te: 'చేప, విల్లు, రాణి' },
    body: {
      en: 'Kings fail, Karna is turned away, and a disguised Brahmin shoots five arrows through an eye he can only see in a mirror.',
      te: 'రాజులందరూ విఫలమవుతారు, కర్ణుడు తిరస్కరింపబడతాడు; అద్దంలో కనిపించే కన్ను గుండా వేషధారి బ్రాహ్మణుడు ఐదు బాణాలు వేస్తాడు.',
    },
    to: '/stories/svayamvara',
  },
];

export function Home() {
  const { lang, t } = useLang();
  const database = db();
  const stats = database.stats;
  const stories = database.stories.ordered();
  const featured = database.featured(FEATURED);

  const kinds = [
    { kind: 'royal' as const, en: 'Kings & Queens', te: 'రాజులు, రాణులు' },
    { kind: 'warrior' as const, en: 'Warriors & Teachers', te: 'యోధులు, గురువులు' },
    { kind: 'sage' as const, en: 'Sages & Seers', te: 'ఋషులు' },
    { kind: 'divine' as const, en: 'Gods', te: 'దేవతలు' },
    { kind: 'demon' as const, en: 'Rakshasas', te: 'రాక్షసులు' },
    { kind: 'serpent' as const, en: 'Nagas', te: 'నాగులు' },
    { kind: 'celestial' as const, en: 'Celestials', te: 'అప్సర, గంధర్వ' },
    { kind: 'bard' as const, en: 'Narrators', te: 'కథకులు' },
  ];

  return (
    <div className="page page--home">
      <section className="hero">
        <div className="hero-art">
          <HeroScene />
        </div>
        <div className="hero-veil" />
        <Mandala className="hero-mandala" />
        <div className="hero-content">
          <p className="hero-eyebrow">
            {t({ en: 'The Mahabharata · Book One', te: 'మహాభారతం · ప్రథమ పర్వం' })}
          </p>
          <h1 className="hero-title">
            <span className="hero-title-te">ఆది పర్వం</span>
            <span className="hero-title-en">Adi Parva</span>
          </h1>
          <p className="hero-subtitle">
            {t({
              en: 'The Book of the Beginning — where the Kuru line is planted, the Pandavas are born, and the fire that will consume Kurukshetra is first lit.',
              te: 'ప్రారంభ పర్వం — కురు వంశం నాటబడి, పాండవులు జన్మించి, కురుక్షేత్రాన్ని దహించే అగ్ని మొదటిసారి రగిలిన చోటు.',
            })}
          </p>

          <SearchBox variant="hero" />

          <div className="hero-stats">
            <span className="stat">
              <strong>{stats.characters}</strong>
              {t({ en: 'characters', te: 'పాత్రలు' })}
            </span>
            <span className="stat-divider" aria-hidden="true" />
            <span className="stat">
              <strong>{stats.stories}</strong>
              {t({ en: 'stories', te: 'కథలు' })}
            </span>
            <span className="stat-divider" aria-hidden="true" />
            <span className="stat">
              <strong>{stats.relations}</strong>
              {t({ en: 'family bonds', te: 'కుటుంబ బంధాలు' })}
            </span>
            <span className="stat-divider" aria-hidden="true" />
            <span className="stat">
              <strong>2</strong>
              {t({ en: 'languages', te: 'భాషలు' })}
            </span>
          </div>

          <div className="hero-pills">
            {['krishna', 'bhima', 'karna', 'draupadi', 'bhishma'].map((id) => {
              const person = database.person(id);
              return person ? <CharacterPill key={id} person={person} /> : null;
            })}
          </div>
        </div>
      </section>

      <section className="section section--stories" id="stories">
        <div className="section-head">
          <p className="section-kicker">{t({ en: 'Nineteen sub-parvas', te: 'పంతొమ్మిది ఉపపర్వాలు' })}</p>
          <h2 className="section-title">
            {t({ en: 'Every story of the Book of the Beginning', te: 'ఆది పర్వంలోని ప్రతి కథ' })}
          </h2>
          <p className="section-lede">
            {t({
              en: 'From the sages’ question in the Naimisha forest to the burning of Khandava, each card opens a complete retelling in English and Telugu.',
              te: 'నైమిశారణ్యంలో ఋషుల ప్రశ్న నుండి ఖాండవ దహనం వరకు — ప్రతి కార్డు ఆంగ్లం, తెలుగులో పూర్తి కథను తెరుస్తుంది.',
            })}
          </p>
          <Ornament />
        </div>

        <div className="story-grid">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </section>

      <section className="section section--scenes">
        <div className="section-head">
          <p className="section-kicker">{t({ en: 'The Parva in pictures', te: 'చిత్రాల్లో పర్వం' })}</p>
          <h2 className="section-title">{t({ en: 'Scenes that carry the epic', te: 'ఇతిహాసాన్ని మోసే దృశ్యాలు' })}</h2>
          <Ornament />
        </div>
        <div className="scene-grid">
          {SCENES.map((scene) => (
            <Link key={scene.title.en} to={scene.to} className="scene-card">
              <SceneBanner variant={scene.art} />
              <div className="scene-card-body">
                <h3>{t(scene.title)}</h3>
                <p>{t(scene.body)}</p>
                <span className="scene-card-link">{t({ en: 'Explore', te: 'చూడండి' })} →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section--featured">
        <div className="section-head">
          <p className="section-kicker">{t({ en: 'Who is who', te: 'ఎవరు ఎవరు' })}</p>
          <h2 className="section-title">{t({ en: 'The people of Adi Parva', te: 'ఆది పర్వ పాత్రలు' })}</h2>
          <Ornament />
        </div>
        <div className="character-grid">
          {featured.map((person) => (
            <CharacterCard key={person.id} person={person} />
          ))}
        </div>
        <div className="center-action">
          <Link to="/characters" className="btn btn--outline">
            {t({ en: 'Open the full character archive', te: 'పూర్తి పాత్రల సంపుటిని తెరవండి' })}
          </Link>
        </div>
      </section>

      <section className="section section--kinds">
        <div className="section-head">
          <p className="section-kicker">{t({ en: 'Browse by kind', te: 'జాతి ప్రకారం చూడండి' })}</p>
          <h2 className="section-title">{t({ en: 'Gods, kings, sages and serpents', te: 'దేవతలు, రాజులు, ఋషులు, నాగులు' })}</h2>
          <Ornament />
        </div>
        <div className="kind-grid">
          {kinds.map((entry) => {
            const list = database.persons.byKind(entry.kind);
            if (list.length === 0) return null;
            return (
              <Link key={entry.kind} to={`/characters?kind=${entry.kind}`} className="kind-card">
                <span className="kind-card-count">{list.length}</span>
                <span className="kind-card-label">{t({ en: entry.en, te: entry.te })}</span>
                <span className="kind-card-names">
                  {list.slice(0, 3).map((person) => (lang === 'te' ? person.name.te : person.name.en)).join(' · ')}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section section--quote">
        <blockquote className="quote">
          <p className="quote-te">యదా యదా హి ధర్మస్య గ్లానిర్భవతి భారత ।</p>
          <p className="quote-en">
            “Whenever dharma declines, O Bharata…” — the promise the whole epic is built to keep.
          </p>
          <footer className="quote-source">
            {t({
              en: 'The thread that begins in Adi Parva and is spoken aloud again on the field of Kurukshetra.',
              te: 'ఆది పర్వంలో మొదలై, కురుక్షేత్రంలో మళ్లీ వినిపించే ఆ వాగ్దానం.',
            })}
          </footer>
        </blockquote>
      </section>
    </div>
  );
}
