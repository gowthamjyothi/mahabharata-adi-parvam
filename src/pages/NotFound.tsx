import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import { Mandala, Ornament } from '../components/art/Art';

export function NotFound() {
  const { t } = useLang();
  return (
    <div className="page page--notfound">
      <Mandala className="notfound-mandala" />
      <p className="notfound-kicker">404</p>
      <h1 className="page-title">
        {t({ en: 'This page is not in the archive', te: 'ఈ పుట సంపుటిలో లేదు' })}
      </h1>
      <Ornament />
      <p className="page-subtitle">
        {t({
          en: 'The character or story you asked for is not recorded here. The search box above can take you anywhere in the Adi Parva.',
          te: 'మీరు అడిగిన పాత్ర లేదా కథ ఇక్కడ నమోదు కాలేదు. పైనున్న శోధన పెట్టె మిమ్మల్ని ఆది పర్వంలో ఎక్కడికైనా తీసుకెళ్తుంది.',
        })}
      </p>
      <div className="notfound-actions">
        <Link to="/" className="btn btn--solid">
          {t({ en: 'Return home', te: 'ముఖ్య పుటకు' })}
        </Link>
        <Link to="/characters" className="btn btn--outline">
          {t({ en: 'Browse characters', te: 'పాత్రలను చూడండి' })}
        </Link>
      </div>
    </div>
  );
}
