import { bi } from '../../core/i18n';
import { record, type CharacterRecord } from './helpers';

/** The exile, the house of lac and the demons of the forest. */
export const wildernessCharacters: readonly CharacterRecord[] = [
  record('royal', {
    id: 'purochana',
    name: bi('Purochana', 'పురోచనుడు'),
    aliases: ['Purochana', 'Purocana', 'Builder of the house of lac'],
    epithets: [bi('Duryodhana’s minister', 'దుర్యోధనుని మంత్రి')],
    lineage: bi('A minister and architect of the Kaurava court.', 'కౌరవ సభకు చెందిన మంత్రి, వాస్తుశిల్పి.'),
    summary: bi(
      'The minister who builds the flammable house at Varanavata and dies in it himself.',
      'వారణావతంలో లాక్షాగృహం కట్టించి, తానే ఆ అగ్నిలో మరణించిన మంత్రి.',
    ),
    description: bi(
      "Duryodhana sent Purochana ahead to Varanavata to build a palace of lac, hemp and ghee, and to burn the Pandavas and their mother alive. Vidura learned of it and warned Yudhishthira in a coded message, so the Pandavas dug an escape tunnel and left the house empty. When the fire was lit, Purochana died in his own trap, and a Nishada woman and her five sons who had fallen asleep inside burned with him — the bodies that convinced Hastinapura the Pandavas were dead.",
      "దుర్యోధనుని ఆజ్ఞతో వారణావతంలో లక్క, జనుము, నెయ్యితో కూడిన భవనం కట్టించాడు పురోచనుడు. విదురుడు సంకేత సందేశంతో హెచ్చరించడంతో పాండవులు సొరంగం తవ్వి తప్పించుకున్నారు. అగ్ని అంటించగా పురోచనుడే ఆ మంటల్లో మరణించాడు.",
    ),
    relations: {},
    stories: ['jatugriha'],
    art: 'flame',
  }),
  record('warrior', {
    id: 'vidura-miner',
    name: bi('Vidura’s Miner', 'విదురుని సొరంగ తవ్వకందారుడు'),
    aliases: ['Vidura’s miner', 'The tunnel digger', 'The unnamed miner'],
    epithets: [bi('The nameless saviour', 'పేరు లేని రక్షకుడు')],
    lineage: bi('A trusted agent of Vidura, never named in the epic.', 'విదురుని విశ్వాసపాత్రుడు; పేరు చెప్పబడని వాడు.'),
    summary: bi(
      'The unnamed man who dug the escape tunnel under the house of lac.',
      'లాక్షాగృహం కింద సొరంగం తవ్విన, పేరు తెలియని వ్యక్తి.',
    ),
    description: bi(
      "Vidura sent a miner to Varanavata before the Pandavas arrived, with orders to dig a hidden passage from the centre of the lac house to the forest. The man worked in secret, finished the tunnel, and disappeared from the story. He is the epic's reminder that its plot turns on small, unremembered acts of loyalty as much as on vows and curses.",
      "పాండవులు రాకముందే విదురుడు ఒక గని తవ్వకగాడిని వారణావతకు పంపి, లాక్షాగృహం మధ్య నుండి అడవి వరకు రహస్య సొరంగం తవ్వించాడు. ఆ పని పూర్తయ్యాక అతను కథలో మాయమవుతాడు — పెద్ద ప్రతిజ్ఞలతో పాటు చిన్న విశ్వాసమే ఇతిహాసాన్ని నడిపిస్తుందని గుర్తు.",
    ),
    relations: {},
    stories: ['jatugriha'],
    art: 'mountain',
  }),
  record('royal', {
    id: 'nishadha-woman',
    name: bi('The Nishadha Woman and Her Five Sons', 'నిషాద స్త్రీ మరియు ఆమె ఐదుగురు కుమారులు'),
    aliases: ['Nishadha woman', 'Nishada woman and sons', 'The family in the lac house'],
    epithets: [bi('The innocent dead', 'అమాయకంగా మరణించినవారు')],
    lineage: bi('A tribal family who sheltered in the palace at Varanavata.', 'వారణావత భవనంలో ఆశ్రయం పొందిన నిషాద కుటుంబం.'),
    summary: bi(
      'The sleeping tribal family whose bodies made the world believe the Pandavas had died.',
      'పాండవులు మరణించారని ప్రపంచాన్ని నమ్మించిన, నిద్రిస్తున్న నిషాద కుటుంబం.',
    ),
    description: bi(
      'A Nishada woman came to the palace with her five sons, drank too much, and fell asleep in the hall. When Purochana burned the house, they died in the Pandavas’ place. Bhima set the fire at the tunnel mouth and left them there, and Hastinapura mourned five princes who were still alive. Their nameless deaths are among the epic’s first casualties of politics — and a debt the Pandavas never truly repay.',
      "తాగి భవనంలో నిద్రపోయిన నిషాద స్త్రీ, ఆమె ఐదుగురు కుమారులు పురోచనుని అగ్నిలో మరణించారు. వారి మృతదేహాలే పాండవులవి అని హస్తినాపురం విషాదం చెందింది. రాజకీయాలకు బలైన మొదటి అమాయకులు వారే.",
    ),
    relations: {},
    stories: ['jatugriha'],
    art: 'flame',
  }),
  record('demon', {
    id: 'hidimba',
    name: bi('Hidimba', 'హిడింబుడు'),
    aliases: ['Hidimba', 'Hidimbasura', 'Rakshasa Hidimba'],
    epithets: [bi('The cannibal of the forest', 'అడవిలో మానవాశనుడు')],
    lineage: bi('A Rakshasa chief of the forest where the Pandavas fled.', 'పాండవులు తప్పించుకున్న అడవికి రాక్షస ప్రభువు.'),
    summary: bi(
      'The rakshasa who hunted the sleeping Pandavas and was killed by Bhima.',
      'నిద్రిస్తున్న పాండవులను వేటాడి భీముని చేత చంపబడిన రాక్షసుడు.',
    ),
    description: bi(
      "Hidimba smelled human flesh in the forest and sent his sister Hidimbi to fetch the travellers, planning to eat them himself. When she instead fell in love with Bhima and warned him, Hidimba attacked — and Bhima tore him apart in a fight that lasted until dawn. His death is the first of Bhima's great victories and the beginning of the Pandavas' alliance with the forest rakshasas.",
      "మానవ మాంసం వాసన పట్టి, సోదరి హిడింబిని పంపించాడు హిడింబుడు. ఆమె భీముని ప్రేమించి హెచ్చరించగా, తెల్లవారుజాము వరకు పోరాడి భీముని చేతిలో మరణించాడు. అది భీముని మొదటి మహా విజయం.",
    ),
    relations: { siblings: ['hidimbi'] },
    stories: ['hidimba-vadha'],
    art: 'flame',
  }),
  record('demon', {
    id: 'hidimbi',
    name: bi('Hidimbi', 'హిడింబి'),
    aliases: ['Hidimbi', 'Hidimba’s sister', 'Rakshasi Hidimbi'],
    epithets: [bi('Bhima’s rakshasi wife', 'భీముని రాక్షసి భార్య'), bi('Mother of Ghatotkacha', 'ఘటోత్కచుని తల్లి')],
    lineage: bi('Sister of Hidimba, a rakshasi of the forest.', 'హిడింబుని సోదరి, అడవి రాక్షసి.'),
    summary: bi(
      'The rakshasi who chose love over clan, married Bhima, and mothered Ghatotkacha.',
      'తన జాతిని వదిలి భీముని ప్రేమించి, ఘటోత్కచునికి తల్లి అయిన రాక్షసి.',
    ),
    description: bi(
      "Sent by her brother to fetch prey, Hidimbi saw Bhima and was struck by love. She warned the Pandavas, and after Bhima killed Hidimba she asked Kunti for the right to marry him. Kunti agreed on condition that the marriage last only while the Pandavas remained in that forest; their son Ghatotkacha grows up among the rakshasas and later gives his life for the Pandavas. Hidimbi is one of the epic's many women whose choices quietly redirect its plot.",
      "అన్న పంపగా వచ్చిన హిడింబి భీముని చూసి ప్రేమించింది. హిడింబుడు మరణించాక, భీముని పెళ్లాడే అనుమతి కుంతిని అడిగింది; అడవిలో ఉన్నంత కాలమే ఆ వివాహం అని కుంతి షరతు పెట్టింది. వారి కుమారుడు ఘటోత్కచుడు తర్వాత పాండవుల కోసం ప్రాణం ఇచ్చాడు.",
    ),
    relations: { siblings: ['hidimba'], spouses: ['bhima'], sons: ['ghatotkacha'] },
    stories: ['hidimba-vadha'],
    art: 'serpent',
  }),
  record('demon', {
    id: 'ghatotkacha',
    name: bi('Ghatotkacha', 'ఘటోత్కచుడు'),
    aliases: ['Ghatotkacha', 'Ghatotkaca', 'Bhima’s rakshasa son'],
    epithets: [bi('The half-rakshasa giant', 'అర్ధ రాక్షస మహాకాయుడు'), bi('Sky-farer', 'ఆకాశ సంచారి')],
    lineage: bi('Son of Bhima and Hidimbi, a rakshasa prince.', 'భీముడు, హిడింబిల కుమారుడు; రాక్షస యువరాజు.'),
    summary: bi(
      'Bhima’s demon son, who grows to giant size and dies stopping Karna’s weapon.',
      'భీముని రాక్షస కుమారుడు; కర్ణుని ఆయుధాన్ని తనపై వెచ్చించి మరణించాడు.',
    ),
    description: bi(
      "Ghatotkacha is born within days of his parents' brief marriage, and grows so fast that he is a warrior before his father next sees him. He can fly, change size and summon rakshasa armies, and he answers Bhima's call during the exile and the war. On the fourteenth night of the war he fights Karna, forcing him to spend the one divine spear meant for Arjuna — and dies doing it. His sacrifice is one of the war's purest acts of love.",
      "తల్లిదండ్రుల సంక్షిప్త వివాహం తర్వాత పుట్టిన ఘటోత్కచుడు వేగంగా పెరిగి యోధుడయ్యాడు. ఆకాశంలో ఎగరగలడు, రూపం మార్చుకోగలడు. యుద్ధంలో కర్ణునితో పోరాడి, అర్జునుని కోసం ఉన్న ఏకైక దివ్యాస్త్రాన్ని తన మీద వెచ్చించేలా చేసి ప్రాణాలు వదిలాడు.",
    ),
    relations: { father: ['bhima'], mother: ['hidimbi'] },
    stories: ['hidimba-vadha'],
    art: 'mace',
  }),
  record('demon', {
    id: 'bakasura',
    name: bi('Bakasura', 'బకాసురుడు'),
    aliases: ['Bakasura', 'Baka', 'Demon of Ekachakra'],
    epithets: [bi('The glutton of Ekachakra', 'ఏకచక్ర ఆకలి రాక్షసుడు')],
    lineage: bi('A rakshasa who terrorised the village of Ekachakra.', 'ఏకచక్ర గ్రామాన్ని భయపెట్టిన రాక్షసుడు.'),
    summary: bi(
      'The man-eating demon who demanded a human cartload from Ekachakra every week.',
      'వారానికి ఒక బండి మనుషులను ఆహారంగా కోరిన మానవాశనుడు.',
    ),
    description: bi(
      "Bakasura had made Ekachakra his granary: each week a family had to send a cartload of food and a person to his cave, and the villagers drew lots. When the lot fell on the Brahmin household sheltering the disguised Pandavas, Kunti sent Bhima instead. Bhima ate the demon's food, taunted him, and killed him in single combat, freeing the village.",
      "ప్రతి వారం ఒక కుటుంబం ఆహారం, ఒక మనిషిని అతని గుహకు పంపాలి. అ పేరు వచ్చిన బ్రాహ్మణ కుటుంబానికి బదులు భీముని పంపింది కుంతి. భీముడు అతని ఆహారాన్ని తిని, ఎద్దేవ చేసి, ఒంటరి పోరాటంలో చంపి గ్రామాన్ని విడిపించాడు.",
    ),
    relations: {},
    stories: ['baka-vadha'],
    art: 'mace',
  }),
  record('royal', {
    id: 'vaka',
    name: bi('The Brahmin Host of Ekachakra', 'ఏకచక్ర బ్రాహ్మణ అతిథ్యదాత'),
    aliases: ['Vaka', 'Brahmin of Ekachakra', 'The host family'],
    epithets: [bi('The household that sheltered the Pandavas', 'పాండవులకు ఆశ్రయమిచ్చిన కుటుంబం')],
    lineage: bi('A poor Brahmin household of Ekachakra village.', 'ఏకచక్ర గ్రామానికి చెందిన పేద బ్రాహ్మణ కుటుంబం.'),
    summary: bi(
      'The poor family who housed the disguised Pandavas and were saved by Bhima.',
      'వేషధారి పాండవులకు ఆశ్రయమిచ్చి, భీముని వల్ల రక్షింపబడిన కుటుంబం.',
    ),
    description: bi(
      "The Brahmin and his family took in five brothers and their mother who claimed to be wandering ascetics. When Bakasura's lot fell on them, they prepared to die quietly, and Bhima went in their place. Their gratitude — and their fear that the stranger would be killed — show the ordinary people on whom the epic's heroic gestures land.",
      "తమను సన్యాసులని చెప్పుకున్న ఐదుగురు సోదరులకు, వారి తల్లికి ఆశ్రయమిచ్చారు. బకాసురుని వంతు తమకు వచ్చినప్పుడు మౌనంగా మరణానికి సిద్ధమయ్యారు; భీముడు వారి తరఫున వెళ్లాడు. సామాన్యుల భయం, కృతజ్ఞత — ఇతిహాసం నిజంగా తట్టే ప్రదేశం ఇక్కడే.",
    ),
    relations: {},
    stories: ['baka-vadha'],
    art: 'pot',
  }),
];
