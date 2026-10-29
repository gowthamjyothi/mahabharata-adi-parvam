import { bi } from '../../core/i18n';
import { record, type CharacterRecord } from './helpers';

/** The birth of the Bharata dynasty — the story that gives India its name. */
export const bharataCharacters: readonly CharacterRecord[] = [
  record('royal', {
    id: 'dushyanta',
    name: bi('King Dushyanta', 'దుష్యంతుడు'),
    aliases: ['Dushyanta', 'Dusyanta', 'Duhshanta'],
    epithets: [bi('Lord of the Puru line', 'పురు వంశాధిపతి')],
    lineage: bi('A descendant of Puru, king of the central realm.', 'పురు వంశానికి చెందిన రాజు.'),
    summary: bi(
      'The king who marries Shakuntala in the forest and later fails to recognise her.',
      'అడవిలో శకుంతలను పెళ్లాడి, తర్వాత ఆమెను గుర్తించలేని రాజు.',
    ),
    description: bi(
      "Dushyanta, hunting in the forest of Kanva's hermitage, met Shakuntala and married her in the gandharva rite, promising to send for her. A ring given as token was lost in a stream, and when Shakuntala arrived at court heavy with child, the king — his memory clouded by the sage Durvasa's curse — did not know her. The ring's recovery restored his memory, and he acknowledged Bharata as his son. The episode is the epic's first great test of memory against love.",
      "కణ్వాశ్రమ అడవిలో వేటాడుతూ శకుంతలను గాంధర్వ వివాహం చేసుకున్న దుష్యంతుడు, ఆమెను తీసుకొస్తానని మాట ఇచ్చాడు. గుర్తుగా ఇచ్చిన ఉంగరం నదిలో పోయింది; దుర్వాసుని శాపంతో స్మృతి కోల్పోయిన రాజు శకుంతలను గుర్తించలేదు. ఉంగరం దొరికిన తర్వాత స్మృతి తిరిగి వచ్చి, భరతుని కుమారుడిగా అంగీకరించాడు.",
    ),
    relations: { spouses: ['shakuntala'], sons: ['bharata'] },
    stories: ['sambhava'],
    art: 'crown',
  }),
  record('royal', {
    id: 'shakuntala',
    name: bi('Shakuntala', 'శకుంతల'),
    aliases: ['Shakuntala', 'Sakuntala', 'Shakuntala Devi'],
    epithets: [bi('Daughter of a nymph and a sage', 'అప్సర, ఋషి పుత్రిక')],
    lineage: bi('Daughter of Vishwamitra and Menaka, raised by Sage Kanva.', 'విశ్వామిత్రుడు, మేనకల కుమార్తె; కణ్వుని పెంపకం.'),
    summary: bi(
      'The forest-raised princess whose son Emperor Bharata gives India its name.',
      'తన కుమారుడు భరతుని ద్వారా భారతవర్షానికి నామకారణం చేసిన వనవాసి రాజకుమారి.',
    ),
    description: bi(
      "Shakuntala was born to the sage Vishwamitra and the nymph Menaka and left in the forest, where the hermit Kanva found her and raised her as his own. She met King Dushyanta in the hermitage, married him, and after a painful rejection at court was vindicated by the ring and by a voice from the sky. Her son Sarvadamana, who tamed lions as a child, became the emperor Bharata — and his descendants the Kauravas and Pandavas.",
      "విశ్వామిత్రుడు, మేనకల కుమార్తె శకుంతలను అడవిలో కణ్వుడు కని పెంచుకున్నాడు. దుష్యంతుని పెళ్లాడిన ఆమె రాజసభలో తిరస్కారం పొందినా, ఉంగరం, ఆకాశవాణి ద్వారా న్యాయం పొందింది. సింహాలను మచ్చిక చేసుకున్న ఆమె కుమారుడే సర్వదమనుడు, చక్రవర్తి భరతుడు.",
    ),
    relations: { father: ['vishwamitra'], mother: ['menaka'], adoptedParents: ['kanva'], spouses: ['dushyanta'], sons: ['bharata'] },
    stories: ['sambhava'],
    art: 'lotus',
  }),
  record('royal', {
    id: 'bharata',
    name: bi('Emperor Bharata (Sarvadamana)', 'చక్రవర్తి భరతుడు (సర్వదమనుడు)'),
    aliases: ['Bharata', 'Sarvadamana', 'Emperor Bharata', 'Bharata Chakravarti'],
    epithets: [bi('The lion-taming child', 'సింహాలను మచ్చిక చేసుకున్న బాలుడు'), bi('Namer of Bharatavarsha', 'భారతవర్షానికి పేరు పెట్టినవాడు')],
    lineage: bi('Son of Dushyanta and Shakuntala; the ancestor of the Kurus.', 'దుష్యంతుడు, శకుంతలల కుమారుడు; కురు వంశ మూలపురుషుడు.'),
    summary: bi(
      'The great emperor whose name the land bears, and whose line leads to the Kurus.',
      'దేశానికి తన పేరు పెట్టిన మహాచక్రవర్తి; కురు వంశ పూర్వీకుడు.',
    ),
    description: bi(
      "Sarvadamana earned his name as a boy by opening lions' jaws and counting their teeth for play. Recognised by Dushyanta, he was crowned Bharata and performed a hundred horse sacrifices, ruling the whole of Bhāratavarṣa — the land named for him. Because his own sons were unworthy, he adopted Bharadvaja, and the epic's royal houses trace their authority to his throne.",
      "బాలుడుగా సింహాల నోళ్లు తెరిపించి పళ్లు లెక్కించిన సర్వదమనుడు తండ్రి చేత గుర్తింపబడి, భరతుడిగా పట్టాభిషిక్తుడయ్యాడు. వంద అశ్వమేధాలు చేసి భారతవర్షాన్ని పాలించాడు. అతని కుమారులు అర్హులు కాకపోవడంతో భరద్వాజుని దత్తత తీసుకున్నాడు.",
    ),
    relations: { father: ['dushyanta'], mother: ['shakuntala'] },
    stories: ['sambhava'],
    art: 'crown',
  }),
  record('sage', {
    id: 'kanva',
    name: bi('Sage Kanva', 'కణ్వ మహర్షి'),
    aliases: ['Kanva', 'Kanva Rishi', 'Kanya'],
    epithets: [bi('Foster father of Shakuntala', 'శకుంతల పెంపుడు తండ్రి')],
    lineage: bi('A forest hermit of the line of Kashyapa.', 'కశ్యప వంశానికి చెందిన ఆశ్రమవాసి.'),
    summary: bi(
      'The gentle hermit who found an abandoned baby and raised her among deer and birds.',
      'అడవిలో దొరికిన శిశువును జింకల మధ్య పెంచిన దయామయ ముని.',
    ),
    description: bi(
      "Kanva's hermitage on the Malini river is the epic's picture of peace: deer that eat from the hand, students chanting at dawn, and a foster daughter named for the shakunta birds that raised her. He gives Shakuntala to Dushyanta with blessings and no greed, proving that true fatherhood is care rather than blood.",
      "మాలిని నది ఒడ్డున కణ్వాశ్రమం శాంతికి ప్రతీక. పక్షుల పెంపకంలో దొరికిన శకుంతలకు అతను తండ్రి అయ్యాడు. ఆమెను దుష్యంతునికి ఇచ్చినప్పుడు ఆశ లేకుండా ఆశీర్వదించాడు.",
    ),
    relations: { daughters: ['shakuntala'], teachers: ['kashyapa'] },
    stories: ['sambhava'],
    art: 'pot',
  }),
  record('sage', {
    id: 'vishwamitra',
    name: bi('Sage Vishwamitra', 'విశ్వామిత్ర మహర్షి'),
    aliases: ['Vishwamitra', 'Visvamitra', 'Kaushika', 'Brahmarishi Vishwamitra'],
    epithets: [bi('The warrior who became a sage', 'క్షత్రియుడు ఋషి అయినవాడు'), bi('Composer of the Gayatri', 'గాయత్రీ మంత్ర ద్రష్ట')],
    lineage: bi('Born a Kshatriya king of the Kaushika line; became a Brahmarishi.', 'కౌశిక వంశ క్షత్రియుడు; తర్వాత బ్రహ్మర్షి.'),
    summary: bi(
      'The king who traded his throne for ascetic power, father of Shakuntala.',
      'రాజ్యాన్ని వదిలి తపస్సు పొందిన మహర్షి; శకుంతల తండ్రి.',
    ),
    description: bi(
      "Vishwamitra was a king whose armies were destroyed by the sage Vasishtha's single word. Humbled, he abandoned his kingdom and performed thousands of years of penance to become a Brahmarishi. Indra, fearing his power, sent Menaka to distract him; their daughter was Shakuntala, left in the forest. His struggle between royal pride and spiritual hunger embodies the epic's argument about which is the harder conquest — the world or the self.",
      "వసిష్ఠుని ఒక్క మాటతో తన సేనలు నశించడం చూసి, రాజ్యాన్ని వదిలి వేల సంవత్సరాల తపస్సు చేసి బ్రహ్మర్షి అయ్యాడు. ఇంద్రుడు పంపిన మేనకతో కలిసి శకుంతలకు జన్మనిచ్చాడు. రాజగర్వం, తపోదాహం మధ్య పోరాటమే అతని కథ.",
    ),
    relations: { teachers: ['vasishtha'], spouses: ['menaka'], daughters: ['shakuntala'] },
    stories: ['sambhava'],
    art: 'flame',
  }),
  record('celestial', {
    id: 'menaka',
    name: bi('Menaka', 'మేనక'),
    aliases: ['Menaka', 'Menaka Apsara'],
    epithets: [bi('The nymph who broke a sage’s penance', 'ఋషి తపస్సు భంగం చేసిన అప్సరస')],
    lineage: bi('A celestial nymph of Indra’s court; mother of Shakuntala.', 'ఇంద్ర సభ అప్సరస; శకుంతల తల్లి.'),
    summary: bi(
      'The apsara sent to topple Vishwamitra’s tapas, who stayed to love him.',
      'విశ్వామిత్రుని తపస్సు భంగం చేయడానికి పంపబడిన అప్సరస.',
    ),
    description: bi(
      'Menaka descended to the forest with a mission from Indra and stayed for love. When Vishwamitra woke to his purpose again, she left their infant daughter by the river, where Kanva found her. In the epic’s moral world she is neither villain nor victim but the reminder that ascetic power and desire can never quite annihilate each other.',
      'ఇంద్రుని ఆజ్ఞతో వచ్చిన మేనక విశ్వామిత్రుని ప్రేమించి కూడా ఉండిపోయింది. అతను తిరిగి తపస్సుకు మరలగా, పసిపాపను నది ఒడ్డున వదిలి వెళ్లిపోయింది; ఆ బిడ్డను కణ్వుడు పెంచాడు.',
    ),
    relations: { spouses: ['vishwamitra'], daughters: ['shakuntala'] },
    stories: ['sambhava'],
    art: 'lotus',
  }),
];
