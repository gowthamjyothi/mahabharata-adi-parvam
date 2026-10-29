import { Link } from 'react-router-dom';
import { db } from '../core/repository';
import { useLang } from '../i18n/LanguageContext';
import { Ornament } from './art/Art';

export function Footer() {
  const { t } = useLang();
  const stats = db().stats;

  return (
    <footer className="site-footer">
      <Ornament className="footer-ornament" />
      <p className="footer-shloka">धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः ।</p>
      <p className="footer-shloka-te">ధర్మక్షేత్రే కురుక్షేత్రే సమవేతా యుయుత్సవః ।</p>
      <p className="footer-shloka-meaning">
        {t({
          en: 'On the field of dharma, the field of the Kurus, gathered together and eager to fight…',
          te: 'ధర్మభూమియైన కురుక్షేత్రంలో, పోరాడాలని తహతహలాడుతూ సమావేశమైనవారు…',
        })}
      </p>

      <nav className="footer-nav" aria-label={t({ en: 'Footer', te: 'తలక్రింది మెనూ' })}>
        <Link to="/characters">{t({ en: 'Character archive', te: 'పాత్రల సంపుటి' })}</Link>
        <span aria-hidden="true">·</span>
        <Link to="/stories">{t({ en: 'Stories of Adi Parva', te: 'ఆది పర్వ కథలు' })}</Link>
        <span aria-hidden="true">·</span>
        <Link to="/about">{t({ en: 'About this archive', te: 'ఈ సంపుటి గురించి' })}</Link>
      </nav>

      <p className="footer-note">
        {t({
          en: `${stats.characters} characters · ${stats.stories} stories · ${stats.relations} kinship links · ${stats.sections} narrated sections.`,
          te: `${stats.characters} పాత్రలు · ${stats.stories} కథలు · ${stats.relations} బంధుత్వ లంకెలు · ${stats.sections} విభాగాలు.`,
        })}
      </p>
      <p className="footer-fineprint">
        {t({
          en: 'An independent study archive of the Adi Parva, drawn from the Sanskrit epic and its traditional retellings. Offered with reverence — ॐ ।',
          te: 'సంస్కృత ఇతిహాసం, దాని సాంప్రదాయక కథనాల ఆధారంగా రూపొందిన స్వతంత్ర అధ్యయన సంపుటి. భక్తితో సమర్పించబడింది — ॐ ।',
        })}
      </p>
    </footer>
  );
}
