import { Link, useParams } from 'react-router-dom';
import { db } from '../core/repository';
import { useLang } from '../i18n/LanguageContext';
import { CharacterPill } from '../components/Cards';
import { Mandala, Ornament, SceneBanner } from '../components/art/Art';
import { NotFound } from './NotFound';

export function StoryDetail() {
  const { id = '' } = useParams();
  const { lang, t } = useLang();
  const database = db();
  const story = database.story(id);

  if (!story) return <NotFound />;

  const cast = database.castOf(story.id);
  const ordered = database.stories.ordered();
  const position = ordered.findIndex((entry) => entry.id === story.id);
  const previous = ordered[position - 1];
  const next = ordered[position + 1];

  return (
    <article className="page page--story-detail">
      <SceneBanner variant={story.art} />

      <div className="detail-wrap">
        <nav className="breadcrumbs" aria-label={t({ en: 'Breadcrumb', te: 'మార్గం' })}>
          <Link to="/">{t({ en: 'Home', te: 'ముఖ్య పుట' })}</Link>
          <span aria-hidden="true">/</span>
          <Link to="/stories">{t({ en: 'Stories', te: 'కథలు' })}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{t(story.title)}</span>
        </nav>

        <header className="story-header">
          <p className="detail-kicker">
            {t({ en: 'Sub-parva', te: 'ఉపపర్వం' })} {String(story.index).padStart(2, '0')}{' '}
            {t({ en: 'of nineteen', te: '/ పంతొమ్మిది' })}
          </p>
          <h1 className="detail-title">
            <span className="detail-title-primary">{lang === 'te' ? story.title.te : story.title.en}</span>
            <span className="detail-title-alt">{lang === 'te' ? story.title.en : story.title.te}</span>
          </h1>
          {story.sanskrit && <p className="story-sanskrit">{story.sanskrit}</p>}
          <p className="story-lede">{t(story.summary)}</p>
          <p className="story-meta">
            {story.sectionCount} {t({ en: 'sections', te: 'విభాగాలు' })} ·{' '}
            {cast.length} {t({ en: 'characters', te: 'పాత్రలు' })} ·{' '}
            {story.wordCount.toLocaleString()} {t({ en: 'words in English', te: 'ఆంగ్ల పదాలు' })}
          </p>
          <Mandala className="detail-mandala" />
        </header>

        <div className="story-layout">
          <div className="story-body">
            {story.chapters.map((chapter, index) => (
              <section className="chapter" key={chapter.heading.en}>
                <div className="chapter-head">
                  <span className="chapter-number">{String(index + 1).padStart(2, '0')}</span>
                  <h2 className="chapter-title">{t(chapter.heading)}</h2>
                </div>
                {chapter.body.map((paragraph) => (
                  <p key={paragraph.en.slice(0, 48)} className="chapter-text">
                    {t(paragraph)}
                  </p>
                ))}
              </section>
            ))}

            <div className="story-end">
              <Ornament />
              <p className="muted">
                {t({
                  en: 'Retold from the Adi Parva of the Mahabharata. Traditional tellings differ in detail; this archive follows the widely recited Sanskrit narrative.',
                  te: 'మహాభారత ఆది పర్వం ఆధారంగా పునర్నిర్మించబడింది. సాంప్రదాయ కథనాల్లో వివరాలు మారుతాయి; ఇక్కడ విస్తృతంగా చెప్పబడే సంస్కృత కథనాన్ని అనుసరించాం.',
                })}
              </p>
            </div>
          </div>

          <aside className="story-aside">
            <div className="aside-card">
              <h2 className="aside-title">{t({ en: 'In this story', te: 'ఈ కథలో' })}</h2>
              <div className="pill-row">
                {cast.map((person) => (
                  <CharacterPill key={person.id} person={person} />
                ))}
              </div>
            </div>
            <div className="aside-card">
              <h2 className="aside-title">{t({ en: 'Continue reading', te: 'చదవడం కొనసాగించండి' })}</h2>
              <ul className="aside-list">
                {previous && (
                  <li>
                    <Link to={`/stories/${previous.id}`}>
                      <span className="aside-dir">← {t({ en: 'Previous', te: 'మునుపటి' })}</span>
                      {t(previous.title)}
                    </Link>
                  </li>
                )}
                {next && (
                  <li>
                    <Link to={`/stories/${next.id}`}>
                      <span className="aside-dir">{t({ en: 'Next', te: 'తరువాత' })} →</span>
                      {t(next.title)}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
