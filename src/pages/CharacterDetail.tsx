import { Link, useParams } from 'react-router-dom';
import { db } from '../core/repository';
import { RELATION_LABELS } from '../core/repository';
import { useLang } from '../i18n/LanguageContext';
import { CharacterPill, StoryPill } from '../components/Cards';
import { Mandala, Ornament, SceneBanner, Sigil } from '../components/art/Art';
import { NotFound } from './NotFound';

export function CharacterDetail() {
  const { id = '' } = useParams();
  const { lang, t } = useLang();
  const database = db();
  const person = database.person(id);

  if (!person) return <NotFound />;

  const relations = database.relationsOf(person.id);
  const stories = database.storiesFor(person.id);
  const { previous, next } = database.neighbours(person.id);

  return (
    <article className="page page--detail">
      <SceneBanner variant={person.art} />

      <div className="detail-wrap">
        <nav className="breadcrumbs" aria-label={t({ en: 'Breadcrumb', te: 'మార్గం' })}>
          <Link to="/">{t({ en: 'Home', te: 'ముఖ్య పుట' })}</Link>
          <span aria-hidden="true">/</span>
          <Link to="/characters">{t({ en: 'Characters', te: 'పాత్రలు' })}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{lang === 'te' ? person.name.te : person.name.en}</span>
        </nav>

        <header className="detail-header">
          <span className="detail-sigil" style={{ color: person.accent }}>
            <Sigil art={person.art} />
          </span>
          <div>
            <p className="detail-kicker">
              {t(person.kindLabel)} · {t({ en: 'Adi Parva', te: 'ఆది పర్వం' })}
            </p>
            <h1 className="detail-title">
              <span className="detail-title-primary">{lang === 'te' ? person.name.te : person.name.en}</span>
              <span className="detail-title-alt">{lang === 'te' ? person.name.en : person.name.te}</span>
            </h1>
            {person.epithets.length > 0 && (
              <ul className="epithet-list">
                {person.epithets.map((epithet) => (
                  <li key={epithet.en}>{t(epithet)}</li>
                ))}
              </ul>
            )}
          </div>
          <Mandala className="detail-mandala" />
        </header>

        <div className="detail-grid">
          <div className="detail-main">
            <section className="prose-block">
              <p className="detail-lineage">{t(person.lineage)}</p>
              <p className="detail-summary">{t(person.summary)}</p>
              <div className="detail-description">
                {t(person.description)
                  .split(/(?<=\.)\s+/)
                  .reduce<string[][]>((paragraphs, sentence) => {
                    const last = paragraphs[paragraphs.length - 1];
                    if (!last || last.join(' ').length > 240) paragraphs.push([sentence]);
                    else last.push(sentence);
                    return paragraphs;
                  }, [])
                  .map((sentences, index) => (
                    <p key={index}>{sentences.join(' ')}</p>
                  ))}
              </div>
            </section>

            <section className="detail-section">
              <h2 className="detail-section-title">
                {t({ en: 'Family & teachers', te: 'కుటుంబం, గురువులు' })}
              </h2>
              <Ornament className="ornament--left" />
              {relations.length === 0 ? (
                <p className="muted">
                  {t({
                    en: 'No named kin survive in the Adi Parva for this figure — the epic remembers them through their deed alone.',
                    te: 'ఆది పర్వంలో ఈ పాత్రకు పేరుతో చెప్పబడిన బంధువులు లేరు — వారి కర్మ ద్వారానే ఇతిహాసం వారిని గుర్తుంచుకుంటుంది.',
                  })}
                </p>
              ) : (
                <div className="relation-grid">
                  {relations.map((entry) => (
                    <div className="relation-card" key={entry.key}>
                      <h3 className="relation-label">{t(RELATION_LABELS[entry.key])}</h3>
                      <ul className="relation-people">
                        {entry.people.map((relative) => (
                          <li key={relative.id}>
                            <Link to={`/characters/${relative.id}`} className="relation-link">
                              <span className="relation-dot" style={{ background: relative.accent }} />
                              <span>
                                <span className="relation-name">
                                  {lang === 'te' ? relative.name.te : relative.name.en}
                                </span>
                                <span className="relation-alt">
                                  {lang === 'te' ? relative.name.en : relative.name.te}
                                </span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="detail-section">
              <h2 className="detail-section-title">{t({ en: 'Appears in', te: 'ఈ కథల్లో' })}</h2>
              <Ornament className="ornament--left" />
              {stories.length === 0 ? (
                <p className="muted">
                  {t({
                    en: 'This figure belongs to the wider Mahabharata rather than the nineteen sub-parvas of Adi Parva.',
                    te: 'ఈ పాత్ర ఆది పర్వ ఉపపర్వాల కంటే మహాభారతం మొత్తానికి చెందినది.',
                  })}
                </p>
              ) : (
                <div className="pill-row">
                  {stories.map((story) => (
                    <StoryPill key={story.id} story={story} />
                  ))}
                </div>
              )}
            </section>

            {person.aliases.length > 0 && (
              <section className="detail-section">
                <h2 className="detail-section-title">{t({ en: 'Also known as', te: 'ఇతర పేర్లు' })}</h2>
                <Ornament className="ornament--left" />
                <div className="alias-row">
                  {person.aliases.map((alias) => (
                    <span key={alias} className="chip">
                      {alias}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="detail-aside">
            <div className="aside-card">
              <h2 className="aside-title">{t({ en: 'At a glance', te: 'ఒక్క చూపులో' })}</h2>
              <dl className="fact-list">
                <div>
                  <dt>{t({ en: 'Kind', te: 'జాతి' })}</dt>
                  <dd>{t(person.kindLabel)}</dd>
                </div>
                <div>
                  <dt>{t({ en: 'Lineage', te: 'వంశం' })}</dt>
                  <dd>{t(person.lineage)}</dd>
                </div>
                <div>
                  <dt>{t({ en: 'Named bonds', te: 'పేరుతో బంధాలు' })}</dt>
                  <dd>{person.relationCount}</dd>
                </div>
                <div>
                  <dt>{t({ en: 'Stories', te: 'కథలు' })}</dt>
                  <dd>{stories.length}</dd>
                </div>
              </dl>
            </div>

            {relations.length > 0 && (
              <div className="aside-card">
                <h2 className="aside-title">{t({ en: 'Quick kin', te: 'కుటుంబ లంకెలు' })}</h2>
                <div className="pill-row">
                  {relations
                    .flatMap((entry) => entry.people)
                    .slice(0, 8)
                    .map((relative) => (
                      <CharacterPill key={relative.id} person={relative} />
                    ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        <nav className="detail-nav" aria-label={t({ en: 'Alphabetical neighbours', te: 'అక్షర క్రమంలో పొరుగు పాత్రలు' })}>
          {previous ? (
            <Link to={`/characters/${previous.id}`} className="detail-nav-link detail-nav-link--prev">
              <span className="detail-nav-dir">← {t({ en: 'Previous', te: 'మునుపటి' })}</span>
              <span>{lang === 'te' ? previous.name.te : previous.name.en}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/characters/${next.id}`} className="detail-nav-link detail-nav-link--next">
              <span className="detail-nav-dir">{t({ en: 'Next', te: 'తరువాత' })} →</span>
              <span>{lang === 'te' ? next.name.te : next.name.en}</span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </article>
  );
}
