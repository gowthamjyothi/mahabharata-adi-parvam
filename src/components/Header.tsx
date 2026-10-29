import { NavLink } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import { Sigil } from './art/Art';

const LINKS = [
  { to: '/', en: 'Home', te: 'ముఖ్య పుట' },
  { to: '/characters', en: 'Characters', te: 'పాత్రలు' },
  { to: '/stories', en: 'Stories', te: 'కథలు' },
  { to: '/about', en: 'About', te: 'గురించి' },
];

export function Header() {
  const { lang, setLang, t } = useLang();

  return (
    <header className="site-header">
      <div className="header-flags" aria-hidden="true">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="header-flag" style={{ animationDelay: `${i * 120}ms` }} />
        ))}
      </div>
      <div className="header-inner">
        <NavLink to="/" className="brand" aria-label={t({ en: 'Adi Parva home', te: 'ఆది పర్వం ముఖ్య పుట' })}>
          <span className="brand-mark">
            <Sigil art="lotus" />
          </span>
          <span className="brand-text">
            <span className="brand-title-te">ఆది పర్వం</span>
            <span className="brand-title-en">The Mahabharata · Book One</span>
          </span>
        </NavLink>

        <nav className="site-nav" aria-label={t({ en: 'Primary', te: 'ప్రధాన మెనూ' })}>
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
            >
              {t({ en: link.en, te: link.te })}
            </NavLink>
          ))}
        </nav>

        <div className="lang-switch" role="group" aria-label={t({ en: 'Choose language', te: 'భాషను ఎంచుకోండి' })}>
          <button
            type="button"
            className={lang === 'en' ? 'lang-btn is-active' : 'lang-btn'}
            aria-pressed={lang === 'en'}
            onClick={() => setLang('en')}
          >
            English
          </button>
          <button
            type="button"
            className={lang === 'te' ? 'lang-btn is-active' : 'lang-btn'}
            aria-pressed={lang === 'te'}
            onClick={() => setLang('te')}
          >
            తెలుగు
          </button>
        </div>
      </div>
    </header>
  );
}
