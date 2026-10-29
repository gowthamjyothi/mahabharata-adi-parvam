import { bi } from '../../core/i18n';
import { record, type CharacterRecord } from './helpers';

/** The burning of the Khandava forest — the Adi Parva's blazing finale. */
export const khandavaCharacters: readonly CharacterRecord[] = [
  record('divine', {
    id: 'agni',
    name: bi('Agni', 'అగ్నిదేవుడు'),
    aliases: ['Agni', 'Agni Deva', 'Hutashana', 'Pavaka', 'Anala'],
    epithets: [bi('God of fire', 'అగ్నిదేవుడు'), bi('Bearer of offerings', 'హవిర్భాగ స్వీకర్త')],
    lineage: bi('One of the chief Vedic gods, the sacred flame itself.', 'వేద దేవతలలో ప్రధానుడు; పవిత్ర అగ్ని స్వరూపం.'),
    summary: bi(
      'The fire god who could not digest his offerings until the Khandava forest was burned.',
      'ఖాండవ దహనం జరిగే వరకు తన ఆహుతులను జీర్ణించుకోలేని అగ్నిదేవుడు.',
    ),
    description: bi(
      "Agni, god of fire and carrier of every sacrifice, fell ill with an indigestion that only the Khandava forest could cure — but Takshaka's presence in it was protected by Indra's rain. He approached Arjuna and Krishna, who agreed to guard him while he fed; Arjuna supplied weapons, Krishna the disc and the strength to hold up the sky. The fire consumed the forest, its creatures, and a chapter of the world's old order, and Agni was well again. He gave Arjuna the Gandiva bow and the divine quivers as payment.",
      "ఖాండవ వనాన్ని దహించడం తప్ప మరో మార్గం లేని అజీర్ణంతో బాధపడ్డాడు అగ్నిదేవుడు. అర్జునుడు, కృష్ణుల సహాయంతో దహనం పూర్తిచేసుకున్నాడు. ప్రతిఫలంగా అర్జునునికి గాండీవ ధనుస్సు, దివ్య అక్షయ తూణీరాలు ఇచ్చాడు.",
    ),
    relations: {},
    stories: ['khandava-daha', 'pauloma'],
    art: 'flame',
  }),
  record('demon', {
    id: 'maya',
    name: bi('Maya Asura', 'మయాసురుడు'),
    aliases: ['Maya', 'Mayasura', 'Maya Danava', 'Architect of the Asuras'],
    epithets: [bi('The divine architect', 'దివ్య వాస్తుశిల్పి'), bi('Lord of illusion', 'మాయా విద్యా ప్రభువు')],
    lineage: bi('An Asura architect and sorcerer of great fame.', 'ప్రఖ్యాత అసుర వాస్తుశిల్పి, మాయా విద్యా నిపుణుడు.'),
    summary: bi(
      'The Asura architect saved from the Khandava fire, who builds the Pandavas’ Maya Sabha.',
      'ఖాండవ దహనం నుండి తప్పించుకుని, పాండవుల మయసభను నిర్మించిన శిల్పి.',
    ),
    description: bi(
      "Maya was trapped in the burning forest because Krishna had sworn to kill him, but Arjuna granted him refuge after Maya pleaded for mercy. Grateful, the Asura built the Pandavas a palace of illusion at Indraprastha — the Maya Sabha — whose floor looked like water and whose water looked like floor. He also forged their divine weapons and armour. His story turns a battlefield into a workshop: mercy shown to an enemy of the gods becomes the Pandavas' most beautiful palace.",
      "కృష్ణుడు తనను చంపాలని ప్రతిజ్ఞ చేసినందున మయాసురుడు అడవిలో చిక్కుకున్నాడు; అర్జునుని రక్షణ పొందాడు. కృతజ్ఞతతో మయసభ నిర్మించాడు — నీళ్లలా కనిపించే నేల, నేలలా కనిపించే నీళ్లు. పాండవుల దివ్యాయుధాలను కూడా అతనే తయారు చేశాడు.",
    ),
    relations: {},
    stories: ['khandava-daha'],
    art: 'scroll',
  }),
  record('serpent', {
    id: 'ashvasena',
    name: bi('Ashvasena', 'అశ్వసేనుడు'),
    aliases: ['Ashvasena', 'Asvasena', 'Takshaka’s son'],
    epithets: [bi('The snake who escaped the fire', 'అగ్ని నుండి తప్పించుకున్న పాము')],
    lineage: bi('Son of Takshaka, a Naga of the Khandava forest.', 'తక్షకుని కుమారుడు; ఖాండవ వన నాగుడు.'),
    summary: bi(
      'Takshaka’s son, who fled the burning forest and later fought Arjuna at Karna’s side.',
      'మండుతున్న అడవి నుండి పారిపోయి, తర్వాత కర్ణుని పక్షాన అర్జునుడితో పోరాడిన తక్షక పుత్రుడు.',
    ),
    description: bi(
      "Ashvasena was in Khandava with his mother while his father Takshaka was away. As Agni burned, his mother swallowed him and flew out of the flames, and the fire's reach did not catch them. Years later, during the war, he tried to strike Arjuna with the Nagastra while Karna held the bow — a small, deliberate return of an old grievance.",
      "తండ్రి తక్షకుడు బయట ఉండగా, తల్లి అశ్వసేనుని మింగి అగ్ని మధ్య నుండి ఆకాశానికి ఎగిరింది. అందుకే అతను బతికాడు. యుద్ధంలో కర్ణుని పక్షాన నాగాస్త్రంతో అర్జునుడిని ఎదిరించాడు.",
    ),
    relations: { father: ['takshaka'] },
    stories: ['khandava-daha'],
    art: 'serpent',
  }),
  record('sage', {
    id: 'mandapala',
    name: bi('Mandapala', 'మండపాలుడు'),
    aliases: ['Mandapala', 'Mandapala the bird', 'Sarngika'],
    epithets: [bi('The sage who became a bird', 'పక్షి రూపం ధరించిన ముని')],
    lineage: bi('A sage of great austerity who took the form of a bird.', 'పక్షి రూపం దాల్చిన కఠోర తపస్వి.'),
    summary: bi(
      'The ascetic who became a bird to father children before the forest burned.',
      'అడవి కాలకముందే సంతానం పొందడానికి పక్షి రూపం దాల్చిన ముని.',
    ),
    description: bi(
      "Mandapala knew that a forest fire was coming and that the gift of children was the only way through to heaven, so he took the form of a bird and married a she-bird. Their four sons — Jaritari and his brothers — stayed in the nest while their parents fled, and by speaking of dharma and of the fire itself they were saved. The story of Mandapala closes the Adi Parva with an argument about duty: parents who abandon their young, children who reason their way out of death.",
      "రాబోయే అగ్ని గురించి తెలిసిన మండపాలుడు, సంతానమే స్వర్గమార్గమని భావించి పక్షి రూపం ధరించి ఆడపక్షితో వివాహం చేసుకున్నాడు. గూటిలో మిగిలిన నలుగురు కుమారులు ధర్మం గురించి, అగ్ని గురించి మాట్లాడి తప్పించుకున్నారు. ఆది పర్వం ఈ కథతోనే ముగుస్తుంది.",
    ),
    relations: {},
    stories: ['khandava-daha'],
    art: 'pot',
  }),
];
