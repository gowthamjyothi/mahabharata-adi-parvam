import { bi } from '../core/i18n';
import type { StoryInit } from '../core/entities';

/** Adi Parva, sub-parvas 11–19: Panchala, Indraprastha and the Khandava fire. */
export const STORIES_PART_2: readonly StoryInit[] = [
  {
    id: 'chaitraratha',
    index: 11,
    title: bi('Chaitraratha Parva — Wandering and Waiting', 'చైత్రరథ పర్వం — సంచారం, నిరీక్షణ'),
    sanskrit: 'चैत्ररथ पर्व',
    summary: bi(
      "The Pandavas' long pilgrimage through the holy places, with Vyasa's counsel and Dhaumya's rites.",
      "వ్యాసుని ఉపదేశంతో, ధౌమ్యుని ఆచారాలతో పాండవుల పుణ్యక్షేత్ర యాత్ర.",
    ),
    chapters: [
      {
        heading: bi('The Sage’s Advice', 'ముని సలహా'),
        body: [
          bi(
            "Vyasa found the Pandavas in the forest and told them to live as Brahmins for a time, visiting the holy rivers and learning the discipline of patience. He gave them Dhaumya as their priest, and the five brothers walked from shrine to shrine with their mother, carrying nothing but their weapons and each other.",
            "అడవిలో పాండవులను కలిసిన వ్యాసుడు, కొంతకాలం బ్రాహ్మణులుగా జీవిస్తూ పుణ్యనదులు సందర్శించి, ఓర్పు నేర్చుకోమని చెప్పాడు. ధౌమ్యుడిని పురోహితుడిగా ఇచ్చాడు. ఐదుగురు సోదరులు ఆయుధాలు, ఒకరినొకరు తప్ప ఏమీ లేకుండా క్షేత్రాలు తిరిగారు.",
          ),
          bi(
            "Along the way the sages told them the older stories — of Tapati and Samvarana, of Vasishtha and the kings who wronged him, of Parasara and the birth of Vyasa. These tales are not digressions; they teach the Pandavas how curses, boons and dharma have always worked, which is exactly what they will need to survive their own.",
            "దారిలో ఋషులు పూర్వ కథలు చెప్పారు — తపతి-సంవరణులది, వసిష్ఠుని అన్యాయం చేసిన రాజులది, పరాశరుని కథ. ఇవి పక్కకు తిరిగిన కథలు కావు; శాపాలు, వరాలు, ధర్మం ఎలా పనిచేస్తాయో నేర్పే పాఠాలు.",
          ),
        ],
      },
      {
        heading: bi('The Gandharva and the Bow', 'గంధర్వుడు, విల్లు'),
        body: [
          bi(
            "At one resting place Arjuna met the Gandharva Chitraratha, and after a fight blessed him instead of resenting him. The encounter marks the beginning of Arjuna's long education in celestial weapons and celestial politics — a training that will make him, and not Karna, the archer of destiny.",
            "ఒక విశ్రాంతి స్థలంలో అర్జునుడు గంధర్వుడు చిత్రరథుడిని కలిశాడు; పోరాటం తర్వాత గంధర్వుడు అతనిని ఆశీర్వదించాడు. ఇక్కడి నుండే అర్జునుని దివ్యాస్త్ర విద్య మొదలవుతుంది — కర్ణుడు కాదు, అర్జునుడే విధి నిర్ణీత ధనుర్ధరుడు.",
          ),
        ],
      },
    ],
    characters: ['yudhishthira', 'arjuna', 'bhima', 'nakula', 'sahadeva', 'kunti', 'dhaumya', 'veda-vyasa', 'gandharva-chitraratha'],
    art: 'bow',
  },
  {
    id: 'svayamvara',
    index: 12,
    title: bi('Svayamvara Parva — Draupadi Chooses', 'స్వయంవర పర్వం — ద్రౌపది వరణం'),
    sanskrit: 'स्वयंवर पर्व',
    summary: bi(
      'The archery contest at Panchala, Karna’s rejection, and a Brahmin who hits the mark.',
      'పాంచాలంలో విలువిద్య పోటీ, కర్ణుని తిరస్కారం, గురితప్పని బ్రాహ్మణుడు.',
    ),
    chapters: [
      {
        heading: bi('The Fiery Bow', 'అగ్ని విల్లు'),
        body: [
          bi(
            "Drupada set up a contest for Draupadi: a great bow, a revolving target, and a mirror. The archer must string the bow and shoot five arrows through the eye of a fish while looking only at its reflection. Kings and princes failed one after another, and Karna — the finest archer present — strung the bow but was stopped before he could shoot, because Draupadi would not marry a charioteer's son.",
            "ద్రౌపది కోసం ద్రుపదుడు పోటీ ఏర్పాటు చేశాడు: పెద్ద విల్లు, తిరిగే గురి, ఒక అద్దం. చేప కన్ను ప్రతిబింబాన్ని చూస్తూ ఐదు బాణాలు వేయాలి. రాజులందరూ విఫలమయ్యారు; అందరిలో అత్యుత్తమ ధనుర్ధరుడు కర్ణుడు విల్లు ఎక్కుపెట్టినా, సూత పుత్రుడిని ద్రౌపది వరించదని ఆపేశారు.",
          ),
          bi(
            "Then a young Brahmin in simple clothes stepped forward, strung the bow, and shot five arrows through the fish's eye without missing. The court erupted. It was Arjuna, disguised with his brothers; and in the assembly a dark prince from Dvaraka — Krishna — recognised him and smiled at the turning of the age.",
            "అప్పుడు సాధారణ వస్త్రాలతో ఒక యువ బ్రాహ్మణుడు ముందుకు వచ్చి, విల్లు ఎక్కుపెట్టి, ఐదు బాణాలతో చేప కన్ను గుచ్చాడు. ఆ బ్రాహ్మణుడు అర్జునుడే. సభలో ద్వారక నుండి వచ్చిన కృష్ణుడు అతన్ని గుర్తించి యుగ మార్పును చూసి నవ్వాడు.",
          ),
        ],
      },
      {
        heading: bi('The Fight at the Gate', 'ద్వారం దగ్గర పోరాటం'),
        body: [
          bi(
            "The assembled kings, humiliated at being beaten by a Brahmin, attacked. Bhima uprooted a tree and held the gate with Arjuna while the brothers carried Draupadi away. It was the first time the two strongest Pandavas fought side by side in public, and Panchala learned what kind of guests had entered its assembly.",
            "బ్రాహ్మణుడి చేతిలో ఓడిన రాజులు దాడి చేశారు. భీముడు చెట్టు పెకలించి, అర్జునుడితో కలిసి ద్వారం కాపాడగా, మిగిలిన సోదరులు ద్రౌపదిని తీసుకెళ్లారు. ఇద్దరు బలమైన పాండవులు బహిరంగంగా కలిసి పోరాడిన తొలి సందర్భం అదే.",
          ),
          bi(
            "Krishna followed them home and revealed who he was. From that evening the Pandavas had a friend in the Yadava prince whose counsel would decide the fate of the Kuru house.",
            "కృష్ణుడు వారి నివాసం వరకు వెళ్లి తనను తాను పరిచయం చేసుకున్నాడు. ఆ సాయంత్రం నుండి కురు వంశ భవిష్యత్తును నిర్ణయించే మిత్రుడు పాండవులకు లభించాడు.",
          ),
        ],
      },
    ],
    characters: ['draupadi', 'arjuna', 'dhrishtadyumna', 'drupada', 'krishna', 'karna', 'bhima', 'yudhishthira', 'shalya', 'kunti'],
    art: 'bow',
  },
  {
    id: 'vaivahika',
    index: 13,
    title: bi('Vaivahika Parva — The Marriage of Five', 'వైవాహిక పర్వం — పంచ పాండవ వివాహం'),
    sanskrit: 'वैवाहिक पर्व',
    summary: bi(
      'A mother’s word makes Draupadi the wife of all five brothers, and Vyasa explains why.',
      'తల్లి మాటతో ద్రౌపది ఐదుగురు పాండవుల భార్య అవుతుంది; వ్యాసుడు కారణం వివరిస్తాడు.',
    ),
    chapters: [
      {
        heading: bi('“Share What You Have Brought”', '“తెచ్చినది పంచుకోండి”'),
        body: [
          bi(
            "The brothers came home and called out that they had brought alms. Their mother Kunti, without looking up, said the familiar words: share it equally among you. Then she saw Draupadi, and the words could not be taken back. Kunti's command, spoken in ignorance, became a marriage that scandalised the world.",
            "సోదరులు ఇంటికి వచ్చి, భిక్ష తెచ్చామని చెప్పారు. తల్లి కుంతి చూడకుండానే అలవాటుగా అంది: తెచ్చినది సమానంగా పంచుకోండి. తర్వాత ద్రౌపదిని చూసి ఆ మాటను వెనక్కి తీసుకోలేకపోయింది. అజ్ఞానంతో చెప్పిన ఆ ఆజ్ఞే లోకాన్ని ఆశ్చర్యపరిచిన వివాహమైంది.",
          ),
          bi(
            "Yudhishthira insisted that Draupadi herself be asked. She consented, and the wedding rites were performed in order of age. Drupada was furious, then resigned; Krishna, present throughout, said nothing to stop it.",
            "ద్రౌపదిని స్వయంగా అడగాలని యుధిష్ఠిరుడు పట్టుబట్టాడు. ఆమె అంగీకరించింది; వయసు క్రమంలో వివాహం జరిగింది. ద్రుపదుడు మొదట కోపించి తర్వాత ఒప్పుకున్నాడు; అంతా చూస్తున్న కృష్ణుడు ఆపలేదు.",
          ),
        ],
      },
      {
        heading: bi('Vyasa’s Explanation', 'వ్యాసుని వివరణ'),
        body: [
          bi(
            "When the sages objected, Vyasa told them about Draupadi's former life: as a woman who prayed five times for a husband, she was granted five. He also revealed the divine design behind the Pandavas' births, and the assembly fell silent. The epic rarely explains its strangest events; here it does, and the explanation is an older story about desire and its exact fulfilment.",
            "ఋషులు ఆక్షేపించగా, వ్యాసుడు ద్రౌపది పూర్వ జన్మ కథ చెప్పాడు: ఐదుసార్లు భర్త కోరిన ఆమెకు ఐదుగురు భర్తలు లభించారు. పాండవుల జనన వెనుక దైవ సంకల్పాన్ని కూడా వివరించాడు. కథ విచిత్రమైన సంఘటనను వివరించిన అరుదైన సందర్భం ఇది.",
          ),
        ],
      },
    ],
    characters: ['draupadi', 'yudhishthira', 'bhima', 'arjuna', 'nakula', 'sahadeva', 'kunti', 'veda-vyasa', 'drupada', 'krishna', 'dhaumya', 'upapandavas', 'dhrishtadyumna'],
    art: 'flame',
  },
  {
    id: 'vidura-agamana',
    index: 14,
    title: bi('Vidura-agamana Parva — The Return to Hastinapura', 'విదురాగమన పర్వం — హస్తినాపురానికి తిరుగు ప్రయాణం'),
    sanskrit: 'विदुरागमन पर्व',
    summary: bi(
      'Vidura invites the Pandavas home, Bhishma and Drona support the division, and the rivalry resumes.',
      'విదురుడు పాండవులను పిలిచి తీసుకొస్తాడు; భీష్మ, ద్రోణుల మద్దతుతో రాజ్య విభజన జరుగుతుంది.',
    ),
    chapters: [
      {
        heading: bi('The Envoy', 'రాయబారి'),
        body: [
          bi(
            "Once the Pandavas' survival became known, Dhritarashtra's court had to respond. Bhishma and Drona urged reconciliation; Duryodhana urged war. Vidura was sent, and he found the brothers living quietly with Draupadi and their mother, and told them that the kingdom awaited them.",
            "పాండవులు బతికి ఉన్నారని తెలిసాక ధృతరాష్ట్రుని సభ స్పందించాల్సి వచ్చింది. భీష్ముడు, ద్రోణుడు సమాధానం కోరారు; దుర్యోధనుడు యుద్ధం కోరాడు. విదురుడు రాయబారిగా వెళ్లి, రాజ్యం వారి కోసం ఎదురుచూస్తోందని చెప్పాడు.",
          ),
          bi(
            "They returned to Hastinapura and were welcomed with ceremony. But Yudhishthira refused to live as a dependent in another man's house, and the elders agreed to divide the kingdom: the fertile heartland for the Kauravas, and the wild, forested Khandava region for the Pandavas.",
            "హస్తినాపురానికి తిరిగి వచ్చిన పాండవులను ఘనంగా ఆహ్వానించారు. కానీ పరుల ఇంట ఆధారపడి జీవించేది లేదని యుధిష్ఠిరుడు చెప్పాడు. రాజ్యం పంచబడింది: సారవంతమైన మధ్య భూమి కౌరవులకు, అడవులతో నిండిన ఖాండవ ప్రాంతం పాండవులకు.",
          ),
        ],
      },
      {
        heading: bi('A Kingdom of Ash', 'బూడిద రాజ్యం'),
        body: [
          bi(
            "Duryodhana meant the division as a humiliation — Khandavaprastha was a wasteland of dry forest and thorn. But the Pandavas walked into it with their allies and their architects, cleared it, and began to build. What Duryodhana intended as an insult became the foundation of Indraprastha.",
            "ఖాండవప్రస్థను ఎండిన అడవి, ముళ్ల పొదల భూమిగా ఇచ్చి అవమానించాలని దుర్యోధనుడు అనుకున్నాడు. కానీ పాండవులు మిత్రులతో, శిల్పులతో ఆ భూమిని శుభ్రం చేసి నిర్మాణం మొదలుపెట్టారు. అవమానంగా ఇచ్చిన భూమి ఇంద్రప్రస్థానికి పునాది అయింది.",
          ),
        ],
      },
    ],
    characters: ['vidura', 'dhritarashtra', 'duryodhana', 'bhishma', 'dronacharya', 'yudhishthira', 'kunti', 'draupadi', 'krishna', 'gandhari'],
    art: 'crown',
  },
  {
    id: 'rajya-lambha',
    index: 15,
    title: bi('Rajya-lambha Parva — Indraprastha and the Maya Sabha', 'రాజ్యలంభ పర్వం — ఇంద్రప్రస్థ, మయసభ'),
    sanskrit: 'राज्यलम्भ पर्व',
    summary: bi(
      'The Pandavas build a shining capital, and Maya builds them a palace of illusion.',
      'పాండవులు తేజోమయ రాజధాని నిర్మించుకోవడం; మయుడు మాయా సభను కట్టడం.',
    ),
    chapters: [
      {
        heading: bi('A City for a New Age', 'కొత్త యుగానికి నగరం'),
        body: [
          bi(
            "Indraprastha rose on the banks of the Yamuna with gates, gardens, canals and a council hall, and the Pandavas ruled it with the counsel of Krishna and Dhaumya. Yudhishthira performed the Rajasuya, and the kings of the earth acknowledged him. For a few years the family quarrel looked like it might stay buried.",
            "గోపురాలు, ఉద్యానాలు, కాలువలు, సభామందిరంతో ఇంద్రప్రస్థ యమునా తీరాన నిలిచింది. కృష్ణ, ధౌమ్యుల సలహాతో పాండవులు పరిపాలించారు. యుధిష్ఠిరుడు రాజసూయం చేసి భూమి రాజుల అంగీకారం పొందాడు. కొన్నేళ్ల పాటు కుటుంబ కలహం సమాధి అయినట్లే కనిపించింది.",
          ),
        ],
      },
      {
        heading: bi('The Palace of Illusion', 'మాయా సభ'),
        body: [
          bi(
            "Maya, the Asura architect saved from the Khandava fire, asked how he could repay Arjuna. Krishna told him to build the Pandavas a hall unlike any other. The Maya Sabha was finished in months: walls of crystal, floors that looked like water, pools that looked like stone, and figures so lifelike that visitors mistook them for people.",
            "ఖాండవ దహనం నుండి అర్జునుడు రక్షించిన మయుడు, ఏమి చేసి కృతజ్ఞత చెప్పాలని అడిగాడు. పాండవులకు అద్వితీయ సభ కట్టమని కృష్ణుడు చెప్పాడు. స్ఫటిక గోడలు, నీళ్లలా కనిపించే నేల, రాతిలా కనిపించే నీళ్లు, మనుషుల్లా కనిపించే బొమ్మలు — మయసభ కొన్ని నెలల్లో పూర్తయింది.",
          ),
          bi(
            "It was in this hall that Duryodhana would later stumble into a pool and be laughed at by Draupadi — a small, cruel moment that the epic treats as the beginning of an unhealable wound. A palace built by an enemy of the gods becomes the stage for the quarrel's worst turn.",
            "తర్వాత ఈ సభలోనే దుర్యోధనుడు నీటిలో పడిపోయి, ద్రౌపది నవ్వుకుంది — ఇతిహాసం మానని గాయంగా భావించే చిన్న క్రూర క్షణం అది. దేవతల శత్రువు కట్టిన భవనమే కలహానికి అత్యంత హానికర మలుపుకు వేదిక అయింది.",
          ),
        ],
      },
    ],
    characters: ['yudhishthira', 'arjuna', 'bhima', 'nakula', 'sahadeva', 'draupadi', 'krishna', 'maya', 'dhaumya', 'duryodhana', 'dhritarashtra'],
    art: 'crown',
  },
  {
    id: 'arjuna-vanavasa',
    index: 16,
    title: bi('Arjuna-vanavasa Parva — Arjuna’s Exile', 'అర్జున వనవాస పర్వం — అర్జునుని వనవాసం'),
    sanskrit: 'अर्जुनवनवास पर्व',
    summary: bi(
      'Arjuna leaves on a twelve-year vow and marries Ulupi and Chitrangada in his travels.',
      'అర్జునుడు పన్నెండేళ్ల వ్రతంతో బయలుదేరి, ఉలూపి, చిత్రాంగదలను పెళ్లాడటం.',
    ),
    chapters: [
      {
        heading: bi('A Vow of Twelve Years', 'పన్నెండేళ్ల వ్రతం'),
        body: [
          bi(
            "The brothers had agreed on a rule: whenever one of them entered the chamber where Draupadi sat with another, the intruder would live in exile for twelve years. One day Yudhishthira's weapons were stolen while Arjuna was needed to protect a Brahmin's cattle; he entered the chamber, then left for the forest without arguing.",
            "ఒక నియమం పెట్టుకున్నారు: ద్రౌపది మరొకరితో ఉన్న గదిలోకి ఎవరు ప్రవేశిస్తే, అతను పన్నెండేళ్లు వనవాసం చేయాలి. ఒక రోజు బ్రాహ్మణుడి గోవులను కాపాడడానికి ఆయుధాలు కావాల్సి వచ్చింది; గదిలోకి ప్రవేశించిన అర్జునుడు తర్కించకుండా అడవికి బయలుదేరాడు.",
          ),
        ],
      },
      {
        heading: bi('Two Queens and Two Sons', 'ఇద్దరు రాణులు, ఇద్దరు కుమారులు'),
        body: [
          bi(
            "On his travels Arjuna bathed in the Ganga and was drawn into the Naga world by Ulupi, whom he married; their son Iravan would later fight and die in the great war. In Manipura he met Chitrangada, the warrior princess and sole heir, and married her on the condition that their son belong to her kingdom. Babhruvahana was born there and grew up a king.",
            "ప్రయాణంలో గంగలో స్నానం చేసిన అర్జునుడిని ఉలూపి నాగలోకానికి తీసుకెళ్లి పెళ్లాడింది; వారి కుమారుడు ఇరావణుడు. మణిపురలో యోధ రాజకుమారి చిత్రాంగదను పెళ్లాడాడు — కుమారుడు ఆమె రాజ్యానికే చెందాలన్న షరతుతో. అక్కడ పుట్టిన బభ్రువాహనుడు రాజయ్యాడు.",
          ),
          bi(
            "The parva is a travelogue of marriages, but its real subject is duty: each wife and each son is left behind, and each reunion will come back at Arjuna years later as grief or as war.",
            "ఈ పర్వం వివాహాల ప్రయాణ కథ; కానీ దాని అసలు విషయం కర్తవ్యం. ప్రతి భార్య, ప్రతి కుమారుడు వెనుక మిగిలిపోతారు; ఆ కలయికలు తర్వాత అర్జునునికి దుఃఖంగానో, యుద్ధంగానో తిరిగి వస్తాయి.",
          ),
        ],
      },
    ],
    characters: ['arjuna', 'ulupi', 'chitrangada-manipura', 'iravan', 'babhruvahana', 'yudhishthira', 'draupadi', 'krishna'],
    art: 'bow',
  },
  {
    id: 'subhadra-harana',
    index: 17,
    title: bi('Subhadra-harana Parva — Arjuna and Subhadra', 'సుభద్రా హరణ పర్వం — అర్జునుడు, సుభద్ర'),
    sanskrit: 'सुभद्राहरण पर्व',
    summary: bi(
      'Krishna’s sister chooses Arjuna, and the Yadavas must decide whether to bless or fight.',
      'కృష్ణుని సోదరి అర్జునుని వరించడం; యాదవులు ఆశీర్వదించాలా, పోరాడాలా అని నిర్ణయించుకోవడం.',
    ),
    chapters: [
      {
        heading: bi('The Chariot at Dusk', 'సాయంత్రపు రథం'),
        body: [
          bi(
            "Arjuna spent the last years of his exile in Dvaraka as Krishna's guest, and Subhadra, Krishna's sister, fell in love with him. A formal proposal would have to pass the Vrishni council, where Balarama's word was law and where some princes resented the Pandavas. Krishna's advice was characteristically practical: take her chariot and go.",
            "వనవాసపు చివరి సంవత్సరాలు కృష్ణుని అతిథిగా ద్వారకలో గడిపిన అర్జునుడిని కృష్ణుని సోదరి సుభద్ర ప్రేమించింది. కులసభ ఆమోదం అవసరం; అక్కడ బలరాముని మాటే శాసనం. కృష్ణుని సలహా ఆయనకు తగినట్లే ఉంది: రథం ఎక్కించుకుని వెళ్లిపో.",
          ),
        ],
      },
      {
        heading: bi('Balarama’s Anger', 'బలరాముని కోపం'),
        body: [
          bi(
            "When the Yadavas learned of it, Balarama was furious and wanted war. Krishna and the elders calmed him by pointing out that Subhadra had chosen freely and that Arjuna was no enemy. A messenger was sent, gifts were exchanged, and the marriage was ratified at Indraprastha with full rites — a scandal converted into an alliance.",
            "విషయం తెలిసి బలరాముడు కోపించి యుద్ధం చేయాలనుకున్నాడు. సుభద్ర స్వేచ్ఛగా వరించిందని, అర్జునుడు శత్రువు కాదని చెప్పి కృష్ణుడు, పెద్దలు అతన్ని శాంతపరిచారు. రాయబారి, బహుమానాలు, ఇంద్రప్రస్థలో పూర్తి విధులతో వివాహం — అపవాదం కూటమిగా మారింది.",
          ),
          bi(
            "Their son Abhimanyu is born in the next generation, trained by Krishna and Arjuna, and dies in the chakravyuha. Subhadra's choice gives the Pandavas their heir — and the epic one of its most beloved young heroes.",
            "వారి కుమారుడు అభిమన్యుడు కృష్ణ, అర్జునుల శిక్షణ పొంది చక్రవ్యూహంలో మరణిస్తాడు. సుభద్ర ఎంపిక పాండవులకు వారసుడిని, ఇతిహాసానికి ప్రియమైన యువ వీరుడిని ఇచ్చింది.",
          ),
        ],
      },
    ],
    characters: ['arjuna', 'subhadra', 'krishna', 'balarama', 'yudhishthira', 'draupadi', 'vasudeva', 'rohini', 'revati', 'rukmini', 'nanda-yashoda', 'devaki', 'abhimanyu'],
    art: 'flag',
  },
  {
    id: 'harana-harana',
    index: 18,
    title: bi('Haranaharana Parva — The Abduction and Its Answer', 'హరణాహరణ పర్వం — హరణ, దానికి సమాధానం'),
    sanskrit: 'हरणाहरण पर्व',
    summary: bi(
      'The Yadavas debate the elopement, and the marriage of Arjuna and Subhadra is sealed with honour.',
      'యాదవుల సభలో చర్చ; అర్జున-సుభద్రల వివాహం గౌరవంతో పూర్తి.',
    ),
    chapters: [
      {
        heading: bi('Two Kinds of Taking', 'రెండు రకాల హరణలు'),
        body: [
          bi(
            "The title of this small parva is a pun: one taking and the counter-taking. The Vrishnis first consider recovering Subhadra by force, which would be an abduction in the ordinary sense; Krishna argues instead that a woman's consent is not a theft, and that the family's honour is better served by a wedding than a war.",
            "ఈ చిన్న పర్వం పేరులోనే ఒక శ్లేష ఉంది: ఒక హరణ, దానికి ఎదురు హరణ. మొదట సుభద్రను బలంగా తిరిగి తీసుకురావాలని యాదవులు ఆలోచిస్తారు — అది నిజమైన అపహరణ అవుతుంది. ఆమె అంగీకారం దొంగతనం కాదని, యుద్ధం కంటే వివాహమే కుటుంబ గౌరవానికి మేలని కృష్ణుడు వాదిస్తాడు.",
          ),
        ],
      },
      {
        heading: bi('The Wedding at Indraprastha', 'ఇంద్రప్రస్థ వివాహం'),
        body: [
          bi(
            "Messengers carried the Yadavas' consent, Balarama's blessing followed, and Subhadra was received at Indraprastha with the honours of a queen. The episode closes Adi Parva's long argument about marriage — swayamvara, bride-price, niyoga, polyandry and elopement all appear in one book — and shows the epic weighing each against dharma rather than custom alone.",
            "యాదవుల అంగీకారం రాయబారుల ద్వారా వచ్చింది, బలరాముని ఆశీర్వాదం తర్వాత; ఇంద్రప్రస్థలో సుభద్రను రాణి గౌరవంతో స్వాగతించారు. స్వయంవరం, కన్యాశుల్కం, నియోగం, బహుభర్తృత్వం, హరణ — వివాహ రూపాలన్నీ ఒకే పర్వంలో కనిపించి, ధర్మం మాత్రమే ప్రమాణమవుతుంది.",
          ),
        ],
      },
    ],
    characters: ['arjuna', 'subhadra', 'krishna', 'balarama', 'yudhishthira', 'draupadi', 'vasudeva'],
    art: 'lotus',
  },
  {
    id: 'khandava-daha',
    index: 19,
    title: bi('Khandava-daha Parva — The Burning of the Forest', 'ఖాండవ దహన పర్వం — వన దహనం'),
    sanskrit: 'खाण्डवदहन पर्व',
    summary: bi(
      'Agni’s hunger, the six-day fire, Maya’s salvation and the last gift of the Adi Parva.',
      'అగ్ని ఆకలి, ఆరు రోజుల దహనం, మయుని రక్షణ, ఆది పర్వ చివరి వరం.',
    ),
    chapters: [
      {
        heading: bi('A Fire That Could Not Burn', 'మండలేని అగ్ని'),
        body: [
          bi(
            "Agni came to Krishna and Arjuna with a complaint: he had swallowed too many sacrificial offerings and could not digest them. Only the Khandava forest, with its herbs and its damp, dense life, could cure him — but every attempt to burn it was drowned by Indra's rain, sent to protect Takshaka's family.",
            "అగ్నిదేవుడు కృష్ణ, అర్జునుల వద్దకు వచ్చి మొరపెట్టుకున్నాడు: యజ్ఞ ఆహుతులు మించిపోయి జీర్ణం కావడం లేదని. ఖాండవ వనాన్ని దహించడమే పరిష్కారం; కానీ తక్షకుని కుటుంబాన్ని కాపాడేందుకు ఇంద్రుడు కురిపించే వర్షం ప్రతి ప్రయత్నాన్ని ఆపేస్తోంది.",
          ),
          bi(
            "Arjuna agreed to hold off the rain with his arrows and Krishna to guard him, and they asked Agni for weapons in return. Agni gave Arjuna the Gandiva bow, two inexhaustible quivers and a celestial chariot, and gave Krishna a discus of fire.",
            "వర్షాన్ని బాణాలతో ఆపుతానని అర్జునుడు, కాపలా ఉంటానని కృష్ణుడు మాట ఇచ్చారు. ప్రతిఫలంగా గాండీవ ధనుస్సు, అక్షయ తూణీరాలు, దివ్య రథాన్ని అగ్ని అర్జునునికి ఇచ్చాడు; కృష్ణునికి అగ్ని చక్రాయుధం.",
          ),
        ],
      },
      {
        heading: bi('Six Days of Flame', 'ఆరు రోజుల మంటలు'),
        body: [
          bi(
            "For six days the forest burned while Arjuna's arrows roofed the sky and Krishna's disc guarded the edges. Creatures fled, and those the fire could not reach, the bow stopped. Only one asura, Maya, was spared because he grasped Arjuna's feet and begged; and one snake escaped because his mother swallowed him and flew.",
            "ఆరు రోజులు అడవి మండింది. అర్జునుని బాణాలు ఆకాశాన్ని కప్పాయి, కృష్ణుని చక్రం సరిహద్దులు కాపాడింది. ప్రాణులు పారిపోయాయి; మంటలు చేరని వాటిని బాణం ఆపింది. అర్జునుని పాదాలు పట్టుకుని ప్రార్థించిన మయుడు మాత్రం బతికాడు; తల్లి మింగి ఎగిరిన పాము తప్పించుకుంది.",
          ),
          bi(
            "The parva closes with the strange tale of Mandapala, the sage who became a bird to have children, and whose four chicks argued about dharma inside the burning forest and were saved. Adi Parva ends as it began: with a story about telling stories, and with mercy extended in the middle of destruction.",
            "పక్షి రూపం ధరించి సంతానం కోరిన మండపాలుడి కథతో ఈ పర్వం ముగుస్తుంది. మండుతున్న అడవిలో ధర్మం గురించి మాట్లాడి రక్షింపబడిన నాలుగు పిల్లలు. ఆది పర్వం మొదలైనట్లే ముగుస్తుంది: కథ చెప్పే కథతో, సంహారం మధ్యలో చూపిన దయతో.",
          ),
        ],
      },
    ],
    characters: ['agni', 'arjuna', 'krishna', 'maya', 'takshaka', 'ashvasena', 'mandapala', 'indra', 'yudhishthira', 'bhima', 'nakula', 'sahadeva', 'draupadi'],
    art: 'flame',
  },
];
