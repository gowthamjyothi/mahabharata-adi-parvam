import { db } from '../core/repository';
import { useLang } from '../i18n/LanguageContext';
import { StoryCard } from '../components/Cards';
import { Mandala, Ornament } from '../components/art/Art';

export function Stories() {
  const { t } = useLang();
  const stories = db().stories.ordered();

  return (
    <div className="page page--stories-list">
      <section className="page-hero page-hero--compact">
        <Mandala className="page-hero-mandala" />
        <div className="page-hero-inner">
          <p className="section-kicker">{t({ en: 'Adi Parva · nineteen sub-parvas', te: 'ఆది పర్వం · పంతొమ్మిది ఉపపర్వాలు' })}</p>
          <h1 className="page-title">{t({ en: 'The stories, in order', te: 'కథలు, క్రమంగా' })}</h1>
          <p className="page-subtitle">
            {t({
              en: 'Read the Book of the Beginning as the bards told it: from the question in the Naimisha forest to the last night of Khandava.',
              te: 'కథకులు చెప్పిన క్రమంలో ప్రారంభ పర్వాన్ని చదవండి: నైమిశారణ్య ప్రశ్న నుండి ఖాండవ చివరి రాత్రి వరకు.',
            })}
          </p>
          <Ornament />
        </div>
      </section>

      <section className="section section--stories">
        <div className="story-grid">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </section>
    </div>
  );
}
