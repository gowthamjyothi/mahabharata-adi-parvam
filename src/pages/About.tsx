import { Link } from 'react-router-dom';
import { db } from '../core/repository';
import { RELATION_LABELS } from '../core/repository';
import { useLang } from '../i18n/LanguageContext';
import { Mandala, Ornament } from '../components/art/Art';

const CLASS_TREE: { name: string; note: { en: string; te: string } }[] = [
  {
    name: 'MythicPerson (abstract)',
    note: {
      en: 'Holds every shared field: id, bilingual name, epithets, lineage, summary, description, relations, stories and sigil art.',
      te: 'పంచుకునే అన్ని ఫీల్డ్లు: id, ద్విభాషా పేరు, బిరుదులు, వంశం, సారాంశం, వివరణ, బంధాలు, కథలు, చిహ్నం.',
    },
  },
  {
    name: 'Royal · Sage · Deity · Warrior · Serpent · Demon · Celestial · Bard',
    note: {
      en: 'Concrete subclasses. Each supplies its own category label and accent colour, so cards, badges and banners tint themselves polymorphically.',
      te: 'ప్రత్యక్ష ఉపతరగతులు. ఒక్కొక్కటి తన జాతి పేరును, రంగును ఇస్తుంది; కార్డులు, బ్యాడ్జీలు వాటినే అనుసరిస్తాయి.',
    },
  },
  {
    name: 'Factory: createPerson(kind, init)',
    note: {
      en: 'The data files declare a kind; the factory instantiates the right subclass, so seed data stays declarative.',
      te: 'డేటా ఫైళ్లు జాతిని మాత్రమే చెబుతాయి; ఫ్యాక్టరీ సరైన ఉపతరగతిని సృష్టిస్తుంది.',
    },
  },
  {
    name: 'ParvaStory',
    note: {
      en: 'A story entity with ordered chapters, cast ids and computed word / section counts.',
      te: 'క్రమబద్ధ అధ్యాయాలు, పాత్రల idలు, లెక్కించిన పద/విభాగ సంఖ్యలతో కథా వస్తువు.',
    },
  },
  {
    name: 'Repository<T>',
    note: {
      en: 'Generic in-memory collection that enforces unique ids and offers all / byId / where queries.',
      te: 'విశిష్ట idలు నిర్ధారించే, all / byId / where ప్రశ్నలిచ్చే సాధారణ సేకరణ.',
    },
  },
  {
    name: 'PersonRepository + PrefixIndex',
    note: {
      en: 'A prefix trie indexes every name, alias and epithet in both scripts, so typing “k” returns Karna, Kunti, Krishna, Kripa, Kashi… instantly.',
      te: 'ప్రతి పేరు, మారుపేరు, బిరుదును రెండు లిపుల్లోనూ సూచిక చేసే ట్రై; “క” అని టైప్ చేస్తే కర్ణుడు, కుంతి, కృష్ణుడు, కృపుడు వెంటనే వస్తారు.',
    },
  },
  {
    name: 'ScriptureDatabase (singleton)',
    note: {
      en: 'Seeds the three collections once, then serves relations, casts, neighbours and statistics to every page.',
      te: 'మూడు సేకరణలను ఒకసారి నింపి, బంధాలు, పాత్రలు, గణాంకాలు అన్ని పుటలకూ అందిస్తుంది.',
    },
  },
  {
    name: 'PreferenceStore · LanguageProvider',
    note: {
      en: 'An encapsulated localStorage wrapper and React context keep the chosen language alive across visits.',
      te: 'localStorage చుట్టూ ఎన్‌క్యాప్సులేషన్, React కాంటెక్స్ట్ — ఎంచుకున్న భాష సందర్శనల మధ్య నిలిచి ఉంటుంది.',
    },
  },
];

export function About() {
  const { t } = useLang();
  const stats = db().stats;

  const relationKeys = Object.keys(RELATION_LABELS);

  return (
    <div className="page page--about">
      <section className="page-hero page-hero--compact">
        <Mandala className="page-hero-mandala" />
        <div className="page-hero-inner">
          <p className="section-kicker">{t({ en: 'Grantha Śālā · the reading room', te: 'గ్రంథశాల · పఠన మందిరం' })}</p>
          <h1 className="page-title">{t({ en: 'About this archive', te: 'ఈ సంపుటి గురించి' })}</h1>
          <p className="page-subtitle">
            {t({
              en: 'A bilingual study of the Adi Parva: how it was told, who it remembers, and how the data behind it is modelled.',
              te: 'ఆది పర్వ ద్విభాషా అధ్యయనం: అది ఎలా చెప్పబడింది, ఎవరిని గుర్తుంచుకుంది, దాని వెనుక డేటా ఎలా నిర్మితమైంది.',
            })}
          </p>
          <Ornament />
        </div>
      </section>

      <section className="section section--about">
        <div className="about-grid">
          <article className="about-card">
            <h2>{t({ en: 'What the Adi Parva is', te: 'ఆది పర్వం అంటే ఏమిటి' })}</h2>
            <p>
              {t({
                en: 'The first of the eighteen books of the Mahabharata. It holds the frame story — the snake sacrifice where the epic is recited — and then reaches back through the lunar dynasty, the birth of Bharata’s empire, the Kuru kings, the frustrated succession at Hastinapura, the miraculous births of the Pandavas and Kauravas, the house of lac, the first exile, Draupadi’s swayamvara, the founding of Indraprastha and the burning of the Khandava forest.',
                te: 'మహాభారత పద్దెనిమిది పర్వాలలో మొదటిది. ఇతిహాసం చెప్పబడే సర్పయాగ కథ ఇక్కడే ఉంది; తర్వాత చంద్రవంశం, భరత చక్రవర్తి, కురు రాజులు, హస్తినాపుర వారసత్వ సమస్య, పాండవ-కౌరవ జననాలు, లాక్షాగృహం, మొదటి వనవాసం, ద్రౌపది స్వయంవరం, ఇంద్రప్రస్థ స్థాపన, ఖాండవ దహనం — అన్నీ ఇందులో ఉన్నాయి.',
              })}
            </p>
          </article>

          <article className="about-card">
            <h2>{t({ en: 'How to read it here', te: 'ఇక్కడ ఎలా చదవాలి' })}</h2>
            <ul className="about-list">
              <li>
                {t({
                  en: 'Every page carries an English / తెలుగు switch in the header — the whole archive, including prose and kinship labels, is written twice.',
                  te: 'ప్రతి పుటలో పైభాగంలో English / తెలుగు బటన్ ఉంది — వ్యాసాలు, బంధుత్వ పేర్లు సహా మొత్తం సంపుటి రెండు భాషల్లో రాయబడింది.',
                })}
              </li>
              <li>
                {t({
                  en: 'The search box matches the beginning of any name, alias or epithet, in either script. Type two letters to narrow, one to browse.',
                  te: 'శోధన పెట్టె ఏ పేరు, మారుపేరు, బిరుదు ఆది అక్షరాలనైనా రెండు లిపుల్లోనూ పోలుస్తుంది. ఒక అక్షరం టైప్ చేస్తే జాబితా, రెండు టైప్ చేస్తే కచ్చితత్వం.',
                })}
              </li>
              <li>
                {t({
                  en: 'Story cards on the home page open the full retelling; character pages open father, mother, teachers, adopted parents, spouse, sons, daughters and siblings as clickable links.',
                  te: 'ముఖ్య పుటలోని కథా కార్డులు పూర్తి కథను తెరుస్తాయి; పాత్రల పుటల్లో తండ్రి, తల్లి, గురువులు, పెంపుడు తల్లిదండ్రులు, భార్య/భర్త, కుమారులు, కుమార్తెలు, సోదరులు — అన్నీ లంకెలుగా ఉంటాయి.',
                })}
              </li>
            </ul>
          </article>
        </div>

        <div className="section-head">
          <p className="section-kicker">{t({ en: 'Under the hood', te: 'లోపలి నిర్మాణం' })}</p>
          <h2 className="section-title">{t({ en: 'Objects, repositories and a prefix index', te: 'వస్తువులు, సేకరణలు, ఆద్యక్షర సూచిక' })}</h2>
          <p className="section-lede">
            {t({
              en: 'The archive is a small application built on object-oriented principles: one abstract base type, eight concrete subclasses, a generic repository, a trie-backed search index and a single seeded database.',
              te: 'ఈ సంపుటి వస్తు ఆధారిత సూత్రాలపై నిర్మితమైన చిన్న అనువర్తనం: ఒక అమూర్త మూల తరగతి, ఎనిమిది ప్రత్యక్ష ఉపతరగతులు, సాధారణ సేకరణ, ట్రై ఆధారిత శోధన సూచిక, ఒకే నింపబడిన డేటాబేస్.',
            })}
          </p>
          <Ornament />
        </div>

        <div className="class-tree">
          {CLASS_TREE.map((node) => (
            <div className="class-node" key={node.name}>
              <code className="class-name">{node.name}</code>
              <p>{t(node.note)}</p>
            </div>
          ))}
        </div>

        <div className="about-stats">
          <div className="about-stat">
            <strong>{stats.characters}</strong>
            <span>{t({ en: 'character records', te: 'పాత్రల నమోదులు' })}</span>
          </div>
          <div className="about-stat">
            <strong>{stats.stories}</strong>
            <span>{t({ en: 'narrated stories', te: 'కథనాలు' })}</span>
          </div>
          <div className="about-stat">
            <strong>{stats.sections}</strong>
            <span>{t({ en: 'chapter sections', te: 'అధ్యాయ విభాగాలు' })}</span>
          </div>
          <div className="about-stat">
            <strong>{stats.relations}</strong>
            <span>{t({ en: 'kinship links', te: 'బంధుత్వ లంకెలు' })}</span>
          </div>
          <div className="about-stat">
            <strong>{relationKeys.length}</strong>
            <span>{t({ en: 'relation kinds', te: 'బంధ రకాలు' })}</span>
          </div>
        </div>

        <div className="about-grid">
          <article className="about-card">
            <h2>{t({ en: 'Data sources & honesty', te: 'మూలాలు, నిజాయితీ' })}</h2>
            <p>
              {t({
                en: 'Content follows the commonly recited Sanskrit narrative of the Adi Parva, with the traditional framing of the snake sacrifice and the Kuru genealogy. Regional retellings, folk versions and later interpolations differ; where traditions disagree, this archive prefers the mainstream Sanskrit telling and says so plainly.',
                te: 'ఆది పర్వంలో సాధారణంగా చెప్పబడే సంస్కృత కథనాన్ని, సర్పయాగ కథా చట్రాన్ని, కురు వంశావళిని అనుసరించాం. ప్రాంతీయ కథనాలు, జానపద రూపాలు భిన్నంగా ఉంటాయి; భేదాలున్న చోట ప్రధాన సంస్కృత కథనాన్నే తీసుకున్నాం.',
              })}
            </p>
          </article>
          <article className="about-card">
            <h2>{t({ en: 'Start somewhere', te: 'ఎక్కడో ఒకచోట మొదలుపెట్టండి' })}</h2>
            <p>
              {t({
                en: 'New to the Parva? Begin with the snake sacrifice, then the births (Sambhava), then Draupadi’s swayamvara.',
                te: 'పర్వం తెలియకపోతే సర్పయాగంతో మొదలుపెట్టండి; తర్వాత సంభవ పర్వం, తర్వాత ద్రౌపది స్వయంవరం.',
              })}
            </p>
            <div className="pill-row">
              <Link to="/stories/astika" className="pill pill--story">
                <span className="pill-index">05</span>
                <span>{t({ en: 'The Snake Sacrifice', te: 'సర్పయాగం' })}</span>
              </Link>
              <Link to="/stories/sambhava" className="pill pill--story">
                <span className="pill-index">07</span>
                <span>{t({ en: 'The Births', te: 'జననాలు' })}</span>
              </Link>
              <Link to="/stories/svayamvara" className="pill pill--story">
                <span className="pill-index">12</span>
                <span>{t({ en: 'Draupadi Chooses', te: 'ద్రౌపది వరణం' })}</span>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
