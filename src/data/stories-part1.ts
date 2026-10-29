import { bi } from '../core/i18n';
import type { StoryInit } from '../core/entities';

/** Adi Parva, sub-parvas 1–10: the frame, the ancestors and the exile begins. */
export const STORIES_PART_1: readonly StoryInit[] = [
  {
    id: 'anukramanika',
    index: 1,
    title: bi('Anukramanika Parva — The Index', 'అనుక్రమణిక పర్వం — సూచిక'),
    sanskrit: 'अनुक्रमणिका पर्व',
    summary: bi(
      'The sages of Naimisha ask Sauti for the story; Vyasa asks Ganesha to write it down.',
      'నైమిశ ఋషులు సౌతిని కథ అడుగుతారు; వ్యాసుడు గణేశుడిని వ్రాయమని కోరతాడు.',
    ),
    chapters: [
      {
        heading: bi('The Question in the Forest', 'అడవిలో ప్రశ్న'),
        body: [
          bi(
            'In the Naimisha forest a twelve-year sacrifice is under way, and Shaunaka Kulapati sits at its head with thousands of sages. When the bard Ugrasrava Sauti arrives, tired from the road, the hermits welcome him and ask the one question the whole epic exists to answer: we have heard that the sons of Pandu and the sons of Dhritarashtra fought a great war — tell us everything, exactly as it happened.',
            'నైమిశారణ్యంలో పన్నెండేళ్ల యాగం జరుగుతోంది. శౌనక కులపతి అధిపతిగా వేలాది ఋషులు కూర్చున్నారు. అలసటతో వచ్చిన కథకుడు సౌతికి ఋషులు స్వాగతం చెప్పి, ఇతిహాసానికి మూలమైన ప్రశ్న అడుగుతారు: పాండవులు, కౌరవుల మహాయుద్ధం జరిగినట్లు విన్నాము — జరిగినది జరిగినట్లు చెప్పు.',
          ),
          bi(
            'Sauti answers that he has heard it from Vaishampayana, who recited it at King Janamejaya’s snake sacrifice, exactly as Vyasa composed it. So the reader sits at three removes from the events: Vyasa saw them, Vaishampayana told them, Sauti repeats them, and we listen at the fourth seat.',
            'వైశంపాయనుడు జనమేజయుని సర్పయాగంలో చెప్పిన కథ, వ్యాసుడు రచించినట్లే తాను విన్నానని సౌతి చెబుతాడు. అంటే వ్యాసుడు చూశాడు, వైశంపాయనుడు చెప్పాడు, సౌతి పునరావృతం చేస్తాడు, మనం నాలుగో ఆసనంలో కూర్చుని వింటున్నాం.',
          ),
        ],
      },
      {
        heading: bi('Ganesha Takes the Pen', 'గణేశుడు కలం పడతాడు'),
        body: [
          bi(
            'Vyasa, having composed the Bharata in his mind, needed a scribe. Brahma named Ganesha, the remover of obstacles. The god agreed to write, but on one condition: the dictation must never pause. Vyasa countered with his own condition — that Ganesha must understand every verse before writing it.',
            'మనస్సులో భారతాన్ని రచించిన వ్యాసుడికి లేఖకుడు కావాలి. బ్రహ్మ గణేశుడిని సూచించాడు. వ్రాస్తానని గణేశుడు అంగీకరించాడు, కానీ ఒక షరతుతో: చెప్పడం ఎప్పుడూ ఆగకూడదు. అందుకు వ్యాసుడు తన షరతు జోడించాడు — ప్రతి శ్లోకాన్ని అర్థం చేసుకుని వ్రాయాలి.',
          ),
          bi(
            'So the poem was dictated in tangled, many-meaning verses that forced Ganesha to think, and Vyasa bought himself time. When the pen broke, the god snapped off his own tusk and wrote on. The epic is therefore born from a bargain: the writer’s tirelessness and the author’s depth. That is also why Vyasa, in the verses that follow, promises that whoever hears this story with faith will be freed from sin.',
            'అందుకే శ్లోకాలు క్లిష్టంగా, బహుళార్థంగా చెప్పబడ్డాయి; గణేశుడు ఆలోచించేలోపు వ్యాసుడు సమయం గడుపుకున్నాడు. కలం విరిగినప్పుడు గణేశుడు తన దంతాన్ని విరిచి వ్రాసుకుంటూ పోయాడు. శ్రద్ధతో ఈ కథ విన్నవారు పాపవిముక్తులవుతారని వ్యాసుడు వాగ్దానం చేస్తాడు.',
          ),
        ],
      },
    ],
    characters: ['sauti', 'shaunaka', 'vaishampayana', 'veda-vyasa', 'ganesha', 'brahma', 'shuka', 'lomaharshana'],
    art: 'scroll',
  },
  {
    id: 'parvasangrahana',
    index: 2,
    title: bi('Parvasangrahana Parva — The Eighteen Books', 'పర్వసంగ్రహణ పర్వం — పద్దెనిమిది పర్వాలు'),
    sanskrit: 'पर्वसंग्रहण पर्व',
    summary: bi(
      'The table of contents of the Mahabharata, recited as a list of eighteen books.',
      'మహాభారతానికి విషయసూచిక — పద్దెనిమిది పర్వాల జాబితా.',
    ),
    chapters: [
      {
        heading: bi('The Hundred Thousand Verses', 'లక్ష శ్లోకాలు'),
        body: [
          bi(
            'Sauti gives the sages the shape of the whole: a hundred thousand verses in eighteen books, with the Harivamsha as an appendix. Each parva is named and its contents summarised in a line — the Book of the Beginning, the Book of the Assembly Hall, the Book of the Forest, the Book of Virata, the Book of Effort, the Book of Bhishma, the Book of Drona, the Book of Karna, the Book of Shalya, the Book of the Club, the Book of the Women, the Book of Peace, the Book of Instruction, the Book of the Horse Sacrifice, the Book of the Hermitage, the Book of the Clubs, the Book of the Great Journey, and the Book of the Ascent to Heaven.',
            'మొత్తం రూపాన్ని సౌతి వివరిస్తాడు: పద్దెనిమిది పర్వాలలో లక్ష శ్లోకాలు, హరివంశం అనుబంధం. ఆది పర్వం, సభా పర్వం, వన పర్వం, విరాట పర్వం, ఉద్యోగ పర్వం, భీష్మ పర్వం, ద్రోణ పర్వం, కర్ణ పర్వం, శల్య పర్వం, గదా పర్వం, స్త్రీ పర్వం, శాంతి పర్వం, అనుశాసన పర్వం, అశ్వమేధిక పర్వం, ఆశ్రమవాసిక పర్వం, మౌసల పర్వం, మహాప్రస్థానిక పర్వం, స్వర్గారోహణ పర్వం.',
          ),
        ],
      },
      {
        heading: bi('Why the List Matters', 'జాబితా ఎందుకు ముఖ్యం'),
        body: [
          bi(
            'This catalogue is not bookkeeping; it is a promise. Ancient reciters began by showing the audience the size of the water before they walked into it. Adi Parva, the Book of the Beginning, holds the roots: creation, the ancestors, the births, and the first exile. Everything the later books harvest is planted here.',
            'ఈ జాబితా లెక్క కాదు, వాగ్దానం. ప్రాచీన కథకులు నీటిలోకి దిగే ముందు దాని పరిమాణం చూపించేవారు. ఆది పర్వం — “ప్రారంభ పర్వం” — సృష్టి, పూర్వీకులు, జననాలు, మొదటి వనవాసం అన్నీ ఇక్కడే నాటబడతాయి.',
          ),
        ],
      },
    ],
    characters: ['sauti', 'shaunaka', 'veda-vyasa'],
    art: 'scroll',
  },
  {
    id: 'paushya',
    index: 3,
    title: bi('Paushya Parva — Utanka’s Errand', 'పౌష్య పర్వం — ఉతంకుని కార్యం'),
    sanskrit: 'पौष्य पर्व',
    summary: bi(
      'Utanka serves his guru, wins the earrings, and is robbed by a serpent — the first thread of the snake story.',
      'ఉతంకుడు గురుసేవ చేసి కర్ణాభరణాలు సంపాదించి, పాము చేత దొంగిలింపబడతాడు.',
    ),
    chapters: [
      {
        heading: bi('The Guru’s Fee', 'గురుదక్షిణ'),
        body: [
          bi(
            'Utanka served the sage Ayoda-Dhaumya for years, tending his field and guarding his house. When his training ended he asked what fee he should pay, and the guru’s wife asked for the earrings of King Paushya’s queen — jewels so fine that no one else possessed them.',
            'ఉతంకుడు ఆయోద-ధౌమ్యుని శిష్యుడై సంవత్సరాల తరబడి పొలం కాపాడి, ఇల్లు చూసుకున్నాడు. విద్య పూర్తయ్యాక గురుదక్షిణ అడిగాడు; గురుపత్ని పౌష్య రాజు భార్య కర్ణాభరణాలు కావాలని కోరింది.',
          ),
          bi(
            'Utanka went to the king, endured his suspicions, and won the earrings by wit and courage. He also refused the king’s offer of wealth, insisting that a Brahmin should take only what was promised. On the road back a Naga disguised as a beggar stole the jewels, and Utanka chased him into the world below the earth.',
            'రాజు అనుమానాలను ఎదుర్కొని, తెలివితో ఆ భరణాలు సంపాదించాడు. తిరిగి వచ్చే మార్గంలో భిక్షువు వేషంలో ఉన్న నాగుడు వాటిని దొంగిలించాడు; ఉతంకుడు అతన్ని భూమి కింద లోకం వరకు వెంబడించాడు.',
          ),
        ],
      },
      {
        heading: bi('The Serpent World', 'నాగలోకం'),
        body: [
          bi(
            'In the Naga city Utanka saw wonders and met the horse-headed fire, who told him that the serpents were once gods and that their theft had a cause. He recovered the earrings, returned them to his guru’s wife, and went on his way with a warning in his ears: the Nagas had wronged him, and the Nagas would pay.',
            'నాగ నగరంలో అద్భుతాలు చూసి, అశ్వముఖ అగ్నిని కలుసుకున్నాడు. అది నాగులు ఒకప్పుడు దేవతలని, వారి దొంగతనానికి కారణం ఉందని చెప్పింది. భరణాలను తిరిగి తెచ్చి గురుపత్నికి ఇచ్చాడు; నాగులు తనకు అన్యాయం చేశారన్న భావన అతనిలో నిలిచిపోయింది.',
          ),
          bi(
            'That resentment is the seed of the next parva. When Utanka later learns that Takshaka killed King Parikshit, he does not grieve quietly — he goes to Janamejaya and demands the destruction of every snake on earth.',
            'ఆ కోపమే తర్వాతి పర్వానికి విత్తనం. తక్షకుడు పరీక్షిత్తును చంపాడని తెలిసిన ఉతంకుడు మౌనంగా దుఃఖించలేదు — జనమేజయుని వద్దకు వెళ్లి భూమి మీద ప్రతి పామును నాశనం చేయమని కోరాడు.',
          ),
        ],
      },
    ],
    characters: ['utanka', 'ayoda-dhaumya', 'janamejaya', 'vaishampayana'],
    art: 'serpent',
  },
  {
    id: 'pauloma',
    index: 4,
    title: bi('Pauloma Parva — Bhrigu’s Lineage', 'పౌలోమ పర్వం — భృగు వంశం'),
    sanskrit: 'पौलोम पर्व',
    summary: bi(
      'The stories of Bhrigu, Puloma, Chyavana, and Ruru’s love for Pramadvara.',
      'భృగుడు, పులోమ, చ్యవనుడు, రురు-ప్రమద్వరల కథలు.',
    ),
    chapters: [
      {
        heading: bi('The Fire That Would Not Protect', 'కాపాడని అగ్ని'),
        body: [
          bi(
            'The sage Bhrigu left his pregnant wife at home while he went out to the fire ritual, and the demoness Puloma took the shape of a trusted woman to carry her off. The unborn child fell from the womb in terror and was named Chyavana. Bhrigu, returning to an empty house, cursed Agni to devour everything without discrimination — and to this day fire burns the pure and the impure alike.',
            'భృగుడు అగ్నిహోత్రానికి వెళ్లినప్పుడు, పులోమ నమ్మకమైన స్త్రీ రూపంలో వచ్చి అతని గర్భిణీ భార్యను ఎత్తుకెళ్లింది. భయంతో శిశువు కింద పడగా అతను చ్యవనుడు అయ్యాడు. ఇల్లు ఖాళీగా చూసిన భృగుడు, శుభాశుభ వివక్ష లేకుండా అన్నిటినీ దహించమని అగ్నిని శపించాడు.',
          ),
          bi(
            'This is the epic’s first lesson about curses: they are not punishments but permanent alterations of the world. Every later curse in the Mahabharata — Pandu’s, Gandhari’s, Karna’s — works the same way, turning a private grief into a public law.',
            'శాపాలు శిక్షలు కావు, ప్రపంచాన్ని శాశ్వతంగా మార్చే మాటలు అని ఇదే ఇతిహాసం మొదటి పాఠం. పాండు, గాంధారి, కర్ణుల శాపాలన్నీ ఇలాగే వ్యక్తిగత దుఃఖాన్ని సార్వత్రిక నియమంగా మారుస్తాయి.',
          ),
        ],
      },
      {
        heading: bi('Ruru and Pramadvara', 'రురువు, ప్రమద్వర'),
        body: [
          bi(
            'Generations later, the Bhargava sage Ruru fell in love with Pramadvara, raised by the Naga king, and their wedding was arranged. On the day of the marriage a snake bit her and she died. Ruru’s grief was so loud that the gods offered a bargain: half of his own remaining lifespan in exchange for her return.',
            'తరతరాల తర్వాత భార్గవ ఋషి రురువు ప్రమద్వరను ప్రేమించి పెళ్లి నిశ్చయించుకున్నారు. పెళ్లి రోజున పాము కాటుకు ఆమె మరణించింది. దేవతలు ఒక షరతు పెట్టారు — తన ఆయుష్షులో సగం ఇస్తే ఆమె తిరిగి బ్రతుకుతుందని.',
          ),
          bi(
            'He gave it without hesitation, and Pramadvara lived. But Ruru now hated serpents and killed every one he met, until a wise old serpent reminded him that the Nagas were his kin through his mother. The story warns that grief becomes cruelty if it is not examined — and it prepares the reader for the sacrifice that will dominate the next parva.',
            'ఏమాత్రం ఆలోచించకుండా ఇచ్చాడు; ప్రమద్వర తిరిగి బ్రతికింది. అప్పటి నుండి రురువు ప్రతి పామును చంపసాగాడు. చివరకు ఒక వృద్ధ నాగుడు, నాగులు తన బంధువులని గుర్తు చేశాడు. దుఃఖం విచారించకపోతే క్రూరత్వంగా మారుతుందన్న హెచ్చరిక ఇది.',
          ),
        ],
      },
    ],
    characters: ['bhrigu', 'puloma', 'chyavana', 'agni', 'ruru', 'pramadvara', 'pramati'],
    art: 'flame',
  },
  {
    id: 'astika',
    index: 5,
    title: bi('Astika Parva — The Snake Sacrifice', 'ఆస్తిక పర్వం — సర్పయాగం'),
    sanskrit: 'आस्तिक पर्व',
    summary: bi(
      'Parikshit’s death, Janamejaya’s sacrifice, and the boy who stopped it.',
      'పరీక్షిత్తు మరణం, జనమేజయుని యాగం, దాన్ని ఆపిన బాలుడు.',
    ),
    chapters: [
      {
        heading: bi('The Dead Snake on a Shoulder', 'భుజంపై చచ్చిన పాము'),
        body: [
          bi(
            'King Parikshit, hunting and thirsty, came to the hermitage of Shamika. The sage was under a vow of silence and did not rise or offer water. The king, insulted, laid a dead snake on his shoulder with the tip of his bow and rode away. Shringi, the sage’s son, returned, saw it, and cursed him to die within seven days of Takshaka’s bite.',
            'వేటలో దాహం తీర్చుకోడానికి శమీక ముని ఆశ్రమానికి వచ్చిన పరీక్షిత్తుకు, మౌనవ్రతంలో ఉన్న ముని లేవలేదు. రాజు కోపించి, విల్లు కొనతో చచ్చిన పామును అతని భుజంపై పెట్టి వెళ్లిపోయాడు. తిరిగి వచ్చిన కుమారుడు శృంగి, ఏడు రోజుల్లో తక్షకుని కాటుతో మరణిస్తావని శపించాడు.',
          ),
          bi(
            'Parikshit built a tower on pillars and surrounded himself with physicians, but Takshaka’s agents arrived in the guise of ascetics carrying fruit. Inside the fruit the Naga king lay hidden, and when it was cut open he struck. So the curse of a boy, and the pride of a king, ended the line of the Pandavas once and for all.',
            'స్తంభాలపై మేడ కట్టించి వైద్యులతో చుట్టుముట్టినా, తక్షకుడు సన్యాసుల వేషంలో పండ్లు తీసుకొచ్చిన వారితో చేరాడు. పండు కోసిన క్షణమే కాటు వేశాడు. ఒక బాలుడి శాపం, ఒక రాజు గర్వం — పాండవ వంశాన్ని ముగించాయి.',
          ),
        ],
      },
      {
        heading: bi('Sarpasatra', 'సర్పసత్రం'),
        body: [
          bi(
            'Urged by Utanka, Parikshit’s son Janamejaya began a sacrifice whose fire was fed by mantras. Snakes came from every direction — from rivers, forests, villages and the sky — and fell into the flames. The priests chanted Takshaka’s name, and the Naga king fled to Indra and coiled himself on the god’s bed.',
            'ఉతంకుని ప్రేరణతో పరీక్షిత్తు కుమారుడు జనమేజయుడు మంత్రశక్తితో అగ్ని ప్రజ్వలింపజేసే యాగం ప్రారంభించాడు. నదులు, అడవులు, గ్రామాలు, ఆకాశం — అన్ని దిక్కుల నుండి పాములు వచ్చి మంటల్లో పడ్డాయి. తక్షకుడు ఇంద్రుని పరుపు మీద దాక్కున్నాడు.',
          ),
          bi(
            'The priests, undeterred, dragged Indra’s bed itself toward the fire. And at that moment a young sage named Astika, born of the ascetic Jaratkaru and Takshaka’s sister, stepped before the king, praised the greatness of the sacrifice, and asked for a single boon: that the slaughter of the serpents end. Janamejaya, pleased, granted it — and the snakes were saved, exactly as the Nagas had planned when they arranged that marriage.',
            'గురువులు ఇంద్రుని పరుపుతో సహా అగ్ని వైపు లాగసాగారు. అప్పుడే జరత్కారు ముని, తక్షకుని సోదరిల కుమారుడు ఆస్తికుడు రాజు ముందు నిలిచి, యాగాన్ని ప్రశంసించి, ఒక్క వరం కోరాడు: సర్ప సంహారం ఆపమని. జనమేజయుడు అంగీకరించాడు; నాగులు ఆ వివాహం ద్వారా ఆశించిన రక్షణ లభించింది.',
          ),
        ],
      },
      {
        heading: bi('The Epic Is Recited', 'ఇతిహాస పఠనం'),
        body: [
          bi(
            'During the long months of the sacrifice, Janamejaya wanted to hear who his ancestors were and why the great war had happened. Vaishampayana, Vyasa’s disciple, recited the Bharata to him there — the first telling of the poem that Sauti now repeats to the sages of Naimisha.',
            'యాగం జరిగిన నెలల్లో జనమేజయుడు తన పూర్వీకులు ఎవరు, మహాయుద్ధం ఎందుకు జరిగిందో వినాలనుకున్నాడు. వ్యాసుని శిష్యుడు వైశంపాయనుడు అక్కడే భారతాన్ని చదివి వినిపించాడు — నైమిశారణ్య ఋషులకు సౌతి ఇప్పుడు చెప్పే కథ అదే.',
          ),
        ],
      },
    ],
    characters: [
      'janamejaya',
      'parikshit',
      'shamika',
      'shringi',
      'takshaka',
      'utanka',
      'astika',
      'jaratkaru-ascetic',
      'jaratkaru-naga',
      'vaishampayana',
      'madravati',
    ],
    art: 'serpent',
  },
  {
    id: 'adivamshavatarana',
    index: 6,
    title: bi('Adivamshavatarana Parva — The Descent of the Lineages', 'ఆదివంశావతరణ పర్వం — వంశాల అవతరణ'),
    sanskrit: 'आदिवंशावतरण पर्व',
    summary: bi(
      'Why gods and celestials took birth among men, and how the Vasus became Bhishma.',
      'దేవతలు మనుషులుగా ఎందుకు పుట్టారు, వసువులు భీష్ముడు ఎలా అయ్యారు.',
    ),
    chapters: [
      {
        heading: bi('The Earth’s Complaint', 'భూమి మొర'),
        body: [
          bi(
            'The earth, burdened beyond bearing by the armies of kings, went to the gods in the form of a cow. Brahma heard her, and decided that the gods themselves must take human bodies to end the age of tyranny. One by one the celestials were assigned their births, so that the war on Kurukshetra would be a settling of accounts older than the Kuru family.',
            'రాజుల సేనల భారంతో నలిగిన భూమి, ఆవు రూపంలో దేవతల వద్దకు వెళ్లి మొరపెట్టుకుంది. బ్రహ్మ దాన్ని విని, ఈ యుగపు దౌర్జన్యాన్ని ముగించడానికి దేవతలే మానవులుగా పుట్టాలని నిర్ణయించాడు. అందుకే కురుక్షేత్ర యుద్ధం, కురు కుటుంబం కంటే పాత లెక్కల చెల్లింపు.',
          ),
        ],
      },
      {
        heading: bi('The Vasus and Ganga', 'వసువులు మరియు గంగ'),
        body: [
          bi(
            'Eight Vasus, attendants of Indra, once stole the sage Vasishtha’s wish-granting cow and were cursed to be born as men. They begged for a quick release and were told that Ganga would bear them, and that they would die at birth. The eighth, though, had taken part in the theft for the sake of his wife, and had to live a long life — that eighth was Devavrata, Bhishma.',
            'ఇంద్రుని అనుచరులైన ఎనిమిది మంది వసువులు వసిష్ఠుని కామధేనువును దొంగిలించి, మనుషులుగా పుట్టాలన్న శాపం పొందారు. త్వరగా విముక్తి కావాలని అడిగితే, గంగ వారిని కంటుందని, పుట్టగానే మరణిస్తారని చెప్పబడింది. ఎనిమిదోవాడు భార్య కోసం ఆ దొంగతనంలో పాల్గొన్నందున దీర్ఘాయుష్షు పొందాడు — అతనే దేవవ్రతుడు, భీష్ముడు.',
          ),
          bi(
            'And so Shantanu, king of Hastinapura, met a woman of astonishing beauty by the Ganga and married her on her single condition that he never question what she did. Seven sons he watched her drown, held back only by his word. At the eighth his silence broke, and she told him the truth before leaving with the child.',
            'అలా గంగా తీరంలో శంతనుడు అపూర్వ సౌందర్యవతిని కలిసి, ఆమె ఏం చేసినా ప్రశ్నించకూడదన్న షరతుతో పెళ్లాడాడు. ఏడుగురు కుమారులను ఆమె ముంచినా మౌనం వహించాడు; ఎనిమిదోవానికి ఆగలేకపోయాడు. ఆమె నిజం చెప్పి బిడ్డతో వెళ్లిపోయింది.',
          ),
        ],
      },
      {
        heading: bi('The Vow That Named Him', 'పేరు పెట్టిన ప్రతిజ్ఞ'),
        body: [
          bi(
            'Years later, Shantanu fell in love with Satyavati, whose father demanded that her children inherit the throne. Devavrata, to make his father’s happiness possible, renounced the crown and the very possibility of marriage, swearing lifelong celibacy. The gods and sages in the sky cried out “Bhishma!” — the terrible — and the name stuck. His blessings included the boon of death at will, which the epic will use, devastatingly, much later.',
            'తర్వాత శంతనుడు సత్యవతిని ప్రేమించగా, ఆమె తండ్రి తన కుమారులే రాజ్యం పాలించాలని షరతు పెట్టాడు. తండ్రి సుఖం కోసం దేవవ్రతుడు రాజ్యమూ, వివాహమూ రెండూ వదులుకుని బ్రహ్మచర్య ప్రతిజ్ఞ చేశాడు. ఆకాశంలో దేవతలు “భీష్మా!” అని ఆక్రోశించారు. ఇచ్ఛామరణ వరం కూడా అతనికి లభించింది.',
          ),
        ],
      },
    ],
    characters: ['bhishma', 'ganga', 'shantanu', 'satyavati', 'veda-vyasa', 'brahma', 'vasishtha', 'parashurama', 'pratipa'],
    art: 'flag',
  },
  {
    id: 'sambhava',
    index: 7,
    title: bi('Sambhava Parva — The Births', 'సంభవ పర్వం — జననాలు'),
    sanskrit: 'सम्भव पर्व',
    summary: bi(
      'The largest sub-parva: Yayati’s line, Shakuntala and Bharata, the births of the Pandavas and Kauravas, and the making of the heroes.',
      'అతిపెద్ద ఉపపర్వం: యయాతి వంశం, శకుంతల-భరతులు, పాండవ-కౌరవ జననాలు, వీరుల తీర్చిదిద్దుడు.',
    ),
    chapters: [
      {
        heading: bi('From the Moon to the Kurus', 'చంద్రుని నుండి కురువుల వరకు'),
        body: [
          bi(
            'The genealogy begins in the sky and walks down to the earth: Chandra’s son Budha, Pururavas and Urvashi, Ayu, Nahusha, and Yayati, who married Shukracharya’s daughter Devayani and then her companion Sharmistha. Cursed with sudden old age, Yayati borrowed his youngest son Puru’s youth and ruled for a thousand years of pleasure before returning it and dividing his kingdom.',
            'వంశావళి ఆకాశంలో మొదలై భూమికి దిగుతుంది: చంద్రుని కుమారుడు బుధుడు, పురూరవుడు-ఊర్వశి, ఆయువు, నహుషుడు, తర్వాత యయాతి. యయాతి దేవయానిని, తర్వాత శర్మిష్ఠను పెళ్లాడాడు; ముసలితనం శాపంగా వచ్చినప్పుడు చిన్న కుమారుడు పురువు యౌవనాన్ని తీసుకుని వేయి సంవత్సరాలు పాలించాడు.',
          ),
          bi(
            'From Puru’s line comes Dushyanta, who met Shakuntala in Kanva’s forest, married her in the gandharva rite, and later failed to recognise her at court. The ring she lost in a stream was recovered, her honour was restored by a voice from the sky, and their son Sarvadamana — who opened lions’ jaws for play — was crowned Bharata, giving the land its name.',
            'పురు వంశంలోనే దుష్యంతుడు; కణ్వాశ్రమంలో శకుంతలను గాంధర్వ వివాహం చేసుకున్నాడు. రాజసభలో ఆమెను గుర్తించలేదు; ఉంగరం దొరికి, ఆకాశవాణి ఆమెను నిలబెట్టింది. సింహాల నోళ్లు తెరిపించిన వారి కుమారుడు సర్వదమనుడు భరతుడిగా పట్టాభిషిక్తుడై దేశానికి పేరు పెట్టాడు.',
          ),
        ],
      },
      {
        heading: bi('Niyoga: The Heirs of Hastinapura', 'నియోగం: హస్తినాపుర వారసులు'),
        body: [
          bi(
            'Shantanu and Satyavati’s sons died young — Chitrangada in a duel with a Gandharva, Vichitravirya of consumption, childless. Satyavati then called her first-born, Vyasa, and asked him to father heirs by the widowed princesses Ambika and Ambalika. Ambika closed her eyes in fear and bore the blind Dhritarashtra; Ambalika turned pale and bore the pale Pandu; and a palace maid who received the sage calmly bore Vidura, an incarnation of Dharma.',
            'శంతనుడు, సత్యవతిల కుమారులు చిన్న వయసులోనే మరణించారు — చిత్రంగదుడు గంధర్వునితో ద్వంద్వ యుద్ధంలో, విచిత్రవీర్యుడు క్షయతో, సంతానం లేకుండా. అప్పుడు సత్యవతి తన జ్యేష్ఠ కుమారుడు వ్యాసుని పిలిచి, వితంతువులైన అంబిక, అంబాలికల ద్వారా నియోగం చేయించింది. భయంతో కళ్లు మూసిన అంబికకు గ్రుడ్డి ధృతరాష్ట్రుడు, వెలవెలబోయిన అంబాలికకు పాండుడు, ప్రశాంతంగా స్వీకరించిన సేవకికి ధర్మాంశ విదురుడు జన్మించారు.',
          ),
          bi(
            'So the rival houses were cousins by blood and brothers by scandal, and the whisper that they were not Pandu’s sons followed the Pandavas all their lives.',
            'అలా ప్రత్యర్థి కుటుంబాలు రక్త సంబంధులూ, అపవాదానికి పుట్టినవారూ అయ్యాయి; పాండవులు పాండు కుమారులు కాదన్న గుసగుస వారి జీవితాంతం వెంటాడింది.',
          ),
        ],
      },
      {
        heading: bi('The Five and the Hundred', 'ఐదుగురు, నూరుగురు'),
        body: [
          bi(
            'Pandu, cursed by the sage Kindama to die if he ever embraced a woman with desire, gave up his throne and lived in the forest. There Kunti used the mantra given by Durvasa to summon Dharma, Vayu and Indra, and bore Yudhishthira, Bhima and Arjuna; Madri summoned the Ashwins and bore Nakula and Sahadeva. Kunti’s first use of the mantra, in girlhood with Surya, had produced Karna, who was set adrift on the Ganga in a basket.',
            'కిందమ ముని శాపంతో కామంతో స్త్రీని కలిస్తే మరణమని తెలిసిన పాండురాజు రాజ్యం వదిలి అడవికి వెళ్లాడు. అక్కడ కుంతి దుర్వాసుని మంత్రంతో ధర్మ, వాయు, ఇంద్రులను పిలిచి యుధిష్ఠిర, భీమ, అర్జునులను కన్నది; మాద్రి అశ్వినులను పిలిచి నకుల, సహదేవులను కన్నది. బాల్యంలో సూర్యుని పిలిచి కన్న కర్ణుడు బుట్టలో గంగలో వదలబడ్డాడు.',
          ),
          bi(
            'In Hastinapura, Gandhari bore a hundred sons after a long pregnancy — Duryodhana first, born to a mother who never looked at the world, fathered by a blind king. And the sons of a palace maid, Yuyutsu, was born too, the one Kaurava who would later choose dharma.',
            'హస్తినాపురంలో గాంధారి దీర్ఘ గర్భానంతరం నూరుగురు కుమారులను కన్నది; మొదటివాడు దుర్యోధనుడు. గ్రుడ్డి తండ్రికి, ప్రపంచాన్ని చూడని తల్లికి పుట్టినవాడు. ఆ సంవత్సరాల్లోనే వైశ్య సేవకి కుమారుడు యుయుత్సుడు కూడా జన్మించాడు.',
          ),
        ],
      },
      {
        heading: bi('The Making of the Heroes', 'వీరుల తీర్చిదిద్దుడు'),
        body: [
          bi(
            'The Kuru princes grew up under Bhishma, then under Kripa, and finally under Drona, who had come from the forest with his wife Kripi and son Ashwatthama. Drona’s school produced Arjuna above all, the favourite, and the drill at the end of training was the first public display of the rivalry between the two sets of cousins. Before that, Ekalavya — refused instruction because of his birth — learned archery from a clay image of Drona and cut off his own thumb as the guru’s fee.',
            'కురు రాజకుమారులు భీష్ముని వద్ద, తర్వాత కృపుని వద్ద, చివరకు ద్రోణుని వద్ద శిక్షణ పొందారు. ద్రోణుని పాఠశాలలో అత్యంత ప్రియుడు అర్జునుడే; శిక్షణ ముగిసినప్పుడు జరిగిన ప్రదర్శనలోనే బంధువుల మధ్య పోటీ బహిరంగమైంది. అంతకుముందు, పుట్టుక కారణంగా విద్య నిరాకరించబడిన ఏకలవ్యుడు, ద్రోణుని మట్టి విగ్రహం ముందు విలువిద్య నేర్చి, బొటనవేలును గురుదక్షిణగా ఇచ్చాడు.',
          ),
          bi(
            'At the tournament Karna appeared, unmatched by any except Arjuna, and was humiliated for his charioteer’s birth until Duryodhana crowned him king of Anga. That single act bought Duryodhana a lifelong friend — and gave the epic its most tragic figure. In Drupada’s kingdom the sacrificial fire produced a son, Dhrishtadyumna, born to kill Drona, and a daughter, Draupadi, born to change everything.',
            'ప్రదర్శనలో కనిపించిన కర్ణుడు అర్జునునితో సమానంగా నిలిచాడు; సూత పుత్రుడన్న కారణంగా అవమానించబడ్డాడు. దుర్యోధనుడు అతనికి అంగ రాజ్యమిచ్చాడు — అదే ఇతిహాసంలో అత్యంత విషాదకర పాత్రకు మిత్రత్వాన్ని ఇచ్చింది. పాంచాలంలో యాగాగ్ని నుండి ద్రోణుని చంపడానికి ధృష్టద్యుమ్నుడు, అన్నిటినీ మార్చడానికి ద్రౌపది జన్మించారు.',
          ),
        ],
      },
    ],
    characters: [
      'yayati',
      'devayani',
      'sharmistha',
      'puru',
      'yadu',
      'dushyanta',
      'shakuntala',
      'bharata',
      'kanva',
      'vishwamitra',
      'menaka',
      'shantanu',
      'satyavati',
      'veda-vyasa',
      'dhritarashtra',
      'pandu',
      'vidura',
      'kunti',
      'madri',
      'kindama',
      'gandhari',
      'duryodhana',
      'yuyutsu',
      'yudhishthira',
      'bhima',
      'arjuna',
      'nakula',
      'sahadeva',
      'karna',
      'dronacharya',
      'ekalavya',
      'ashwatthama',
      'kripacharya',
      'drupada',
      'dhrishtadyumna',
      'draupadi',
      'sikhandin',
      'amba',
      'shakuni',
      'adhiratha',
      'radha',
      'surya',
      'vayu',
      'indra',
      'yama',
      'ashwini-kumaras',
      'chandra',
      'budha',
      'pururavas',
      'urvashi',
      'ila',
      'manu',
      'nahusha',
      'shukracharya',
      'vrishaparva',
      'bhrigu',
      'jamadagni',
      'renuka',
      'parashurama',
      'kashi-king',
      'ambika',
      'ambalika',
      'kripi',
      'bharadvaja',
      'sharadvat',
    ],
    art: 'scroll',
  },
  {
    id: 'jatugriha',
    index: 8,
    title: bi('Jatugriha Parva — The House of Lac', 'జతుగృహ పర్వం — లాక్షాగృహం'),
    sanskrit: 'जतुगृह पर्व',
    summary: bi(
      'Duryodhana’s plot at Varanavata, Vidura’s coded warning, and the escape through a tunnel.',
      'వారణావతంలో దుర్యోధనుని కుట్ర, విదురుని సంకేత హెచ్చరిక, సొరంగం ద్వారా తప్పించుకోవడం.',
    ),
    chapters: [
      {
        heading: bi('A Palace Made of Ghee', 'నెయ్యితో కట్టిన భవనం'),
        body: [
          bi(
            'After the tournament, Duryodhana’s fear of his cousins hardened into a plan. He persuaded his father to send the Pandavas to Varanavata for a festival, and sent his minister Purochana ahead to build them a palace of lac, hemp, resin and ghee — a house designed to burn with everyone inside it.',
            'ప్రదర్శన తర్వాత దుర్యోధనుని భయం కుట్రగా మారింది. పండవులను వారణావత ఉత్సవానికి పంపమని తండ్రిని ఒప్పించి, లక్క, జనుము, జిగురు, నెయ్యితో భవనం కట్టించడానికి పురోచనుడిని ముందుగా పంపాడు.',
          ),
          bi(
            'Vidura could not speak openly, so he warned Yudhishthira in a sentence with a hidden meaning: the weapon that is not a weapon, the fire that cannot be seen, comes from within. He also sent his own trusted miner to dig a tunnel from the centre of the house to the forest outside.',
            'విదురుడు బహిరంగంగా మాట్లాడలేక, దాగిన అర్థంతో హెచ్చరించాడు: ఆయుధం కాని ఆయుధం, కనిపించని అగ్ని, లోపల నుండే వస్తుందని. అదే సమయంలో తన విశ్వాసపాత్రుడైన తవ్వకందారుడిని భవనం మధ్య నుండి అడవి వరకు సొరంగం తవ్వడానికి పంపాడు.',
          ),
        ],
      },
      {
        heading: bi('The Fire and the Dead', 'అగ్ని, శవాలు'),
        body: [
          bi(
            'The Pandavas lived in the house for a year, keeping a watch and a dug tunnel secret. On the night Purochana set the fire, Bhima carried his mother and brothers out through the passage, and the flames took the house, Purochana, and a Nishada woman with her five sons who had fallen asleep inside.',
            'పండవలు సంవత్సరం ఆ భవనంలో ఉన్నారు; సొరంగం రహస్యంగా ఉంచారు. పురోచనుడు అగ్ని అంటించిన రాత్రి భీముడు తల్లినీ, సోదరులనీ సొరంగం ద్వారా బయటకు తీసుకెళ్లాడు. మంటలు భవనాన్ని, పురోచనుని, లోపల నిద్రపోయిన నిషాద స్త్రీని ఆమె ఐదుగురు కుమారులనూ కాల్చేశాయి.',
          ),
          bi(
            'Hastinapura mourned the death of the Pandavas and their mother, and Duryodhana celebrated in private. Only Vidura knew the truth, and the innocent family who died in their place is the epic’s first clear statement that politics has a body count apart from great warriors.',
            'పాండవులు, వారి తల్లి మరణించారని హస్తినాపురం దుఃఖించింది; దుర్యోధనుడు లోపల సంతోషించాడు. నిజం తెలిసినవాడు విదురుడొక్కడే. రాజకీయాలకు ఉన్న బలి మహావీరులే కాదు అన్నది ఇతిహాసం చెప్పిన మొదటి స్పష్ట సత్యం.',
          ),
        ],
      },
    ],
    characters: ['purochana', 'vidura', 'vidura-miner', 'nishadha-woman', 'yudhishthira', 'bhima', 'kunti', 'duryodhana', 'dhritarashtra', 'arjuna', 'nakula', 'sahadeva'],
    art: 'flame',
  },
  {
    id: 'hidimba-vadha',
    index: 9,
    title: bi('Hidimba-vadha Parva — Bhima and the Rakshasas', 'హిడింబ వధ పర్వం — భీముడు, రాక్షసులు'),
    sanskrit: 'हिडिम्बवध पर्व',
    summary: bi(
      'The Pandavas enter the deep forest, and Bhima kills the rakshasa Hidimba and marries Hidimbi.',
      'పాండవులు లోతైన అడవిలోకి ప్రవేశించి, భీముడు హిడింబుని చంపి హిడింబిని పెళ్లాడటం.',
    ),
    chapters: [
      {
        heading: bi('The Night in the Forest', 'అడవిలో రాత్రి'),
        body: [
          bi(
            'Exhausted and homeless, the five brothers and their mother walked deeper into the forest until they could go no further. Bhima kept watch while the others slept. In the dark the rakshasa Hidimba, whose hunting ground this was, smelled human flesh and sent his sister Hidimbi to bring the travellers to him.',
            'అలసిన పాండవులు తల్లితో కలిసి లోతైన అడవిలోకి నడిచారు. తమ్ముళ్లు, తల్లి నిద్రపోగా భీముడు కాపలా ఉన్నాడు. ఆ అడవి యజమాని హిడింబుడు మానవ మాంసం వాసన పట్టి, సోదరి హిడింబిని పంపించాడు.',
          ),
          bi(
            'Hidimbi came, saw Bhima, and fell in love at once. Instead of attacking, she warned him who her brother was and offered to carry the family away on her shoulders. Bhima refused to run.',
            'హిడింబి వచ్చి భీముని చూసి ప్రేమించింది. దాడి చేయకుండా అన్న ఎవరో చెప్పి, కుటుంబాన్ని తన భుజాలపై తీసుకెళ్తానని కూడా అందించింది. పారిపోవడానికి భీముడు అంగీకరించలేదు.',
          ),
        ],
      },
      {
        heading: bi('A Fight Until Sunrise', 'సూర్యోదయం వరకు పోరాటం'),
        body: [
          bi(
            'Hidimba attacked in fury, and the two wrestled through the night, uprooting trees and splitting rocks. Bhima broke the rakshasa’s back at dawn and killed him. The Pandavas were safe — and Hidimbi, having betrayed her brother for love, asked Kunti for the right to marry Bhima.',
            'హిడింబుడు ఆగ్రహంతో దాడి చేశాడు; ఇద్దరూ రాత్రంతా కొట్లాడుతూ చెట్లను పెకలించి, బండలను పగలగొట్టారు. తెల్లవారుజామున భీముడు అతని వెన్నెముక విరిచి చంపాడు. ప్రేమ కోసం అన్నను వదిలిన హిడింబి, భీముని పెళ్లాడే అనుమతి కుంతిని అడిగింది.',
          ),
          bi(
            'Kunti agreed with a condition: the marriage would last only as long as the Pandavas stayed in that forest. Their son Ghatotkacha grew up among rakshasas, and years later he would die on the Kaurava side of the sky, buying his father’s brothers one more day of life.',
            'కుంతి షరతుతో అంగీకరించింది: పాండవులు ఆ అడవిలో ఉన్నంత కాలమే ఈ వివాహం. వారి కుమారుడు ఘటోత్కచుడు రాక్షసుల మధ్య పెరిగి, తర్వాత తండ్రి సోదరుల కోసం ప్రాణాలు ఇచ్చాడు.',
          ),
        ],
      },
    ],
    characters: ['hidimba', 'hidimbi', 'bhima', 'ghatotkacha', 'kunti', 'yudhishthira', 'arjuna'],
    art: 'mace',
  },
  {
    id: 'baka-vadha',
    index: 10,
    title: bi('Baka-vadha Parva — The Demon of Ekachakra', 'బక వధ పర్వం — ఏకచక్ర రాక్షసుడు'),
    sanskrit: 'बकवध पर्व',
    summary: bi(
      'Disguised as Brahmins, the Pandavas shelter in Ekachakra and Bhima kills the demon Bakasura.',
      'బ్రాహ్మణ వేషంలో ఏకచక్రలో ఆశ్రయం పొంది, భీముడు బకాసురుని చంపటం.',
    ),
    chapters: [
      {
        heading: bi('The Lot Falls', 'వంతు వచ్చింది'),
        body: [
          bi(
            'The Pandavas arrived at Ekachakra in the dress of wandering mendicants seeking alms and shelter, and a poor Brahmin family took them in. That week Bakasura sent word for his usual tribute: a cartload of food and one human being, or he would eat the whole village.',
            'ఏకచక్ర చేరిన పాండవులు భిక్షుక బ్రాహ్మణ వేషంలో ఒక పేద బ్రాహ్మణ కుటుంబం ఇంట ఆశ్రయం పొందారు. ఆ వారం బకాసురుడు తన వంతు కోరాడు — ఆహారంతో ఒక మనిషి, లేకపోతే ఊరంతా తినేస్తానని.',
          ),
          bi(
            'The lot fell on their hosts. The Brahmin, his wife and their children argued over who should go, each offering to sacrifice themselves for the others. Kunti, listening, made a decision that defines her: let my son Bhima go.',
            'వంతు తమ ఇంటికే వచ్చింది. బ్రాహ్మణుడు, అతని భార్య, పిల్లలు — ఎవరు వెళ్లాలని ప్రతి ఒక్కరూ తమను పంపమని వాదించారు. వింటున్న కుంతి నిర్ణయించుకుంది: నా కుమారుడు భీముడు వెళ్తాడు.',
          ),
        ],
      },
      {
        heading: bi('Bhima Eats First', 'ముందు భీముడు తిన్నాడు'),
        body: [
          bi(
            'Bhima went to the demon’s cave with the cart of food, sat down, and ate all of it himself while Bakasura watched in disbelief. Enraged, the rakshasa attacked, and Bhima fought him alone and killed him, then dragged the body to the village gate so that everyone would see the tribute was finished.',
            'ఆహారంతో బండి తీసుకుని గుహకు వచ్చిన భీముడు కూర్చుని, బకాసురుడు చూస్తుండగానే అంతా తినేశాడు. కోపోద్రిక్తుడైన రాక్షసుడు దాడి చేశాడు; భీముడు ఒంటరిగానే పోరాడి చంపి, శవాన్ని గ్రామ ద్వారం దగ్గరకు లాగి వచ్చాడు.',
          ),
          bi(
            'The villagers, who had never seen the demon’s face and lived, understood what kind of guest they had sheltered. The family that had taken in five wandering ascetics became the first people outside the Kuru family to be saved by the Pandavas.',
            'రాక్షసుని ముఖం చూసి బతికిన ఊరు, తాము ఎవరిని ఆశ్రయించారో గ్రహించింది. ఐదుగురు భిక్షుకులను చేరదీసిన ఆ కుటుంబమే కురు కుటుంబం బయట పాండవుల చేత రక్షింపబడిన మొదటి వారు.',
          ),
        ],
      },
    ],
    characters: ['bakasura', 'bhima', 'vaka', 'kunti', 'yudhishthira', 'arjuna', 'dhaumya'],
    art: 'mace',
  },
];
