import { bi } from '../../core/i18n';
import { record, type CharacterRecord } from './helpers';

/** Arjuna's forest marriages and the families they create. */
export const allyCharacters: readonly CharacterRecord[] = [
  record('serpent', {
    id: 'ulupi',
    name: bi('Ulupi', 'ఉలూపి'),
    aliases: ['Ulupi', 'Uloopi', 'Naga princess Ulupi'],
    epithets: [bi('The Naga princess', 'నాగ రాజకుమారి'), bi('Mother of Iravan', 'ఇరావణుని తల్లి')],
    lineage: bi('Daughter of Kauravya, a Naga king of the underwater world.', 'నాగరాజు కౌరవ్యుని కుమార్తె.'),
    summary: bi(
      'The Naga princess who drew Arjuna into her world and bore him a son.',
      'అర్జునుని తన లోకానికి తీసుకెళ్లి, కుమారుడిని కన్న నాగ రాజకుమారి.',
    ),
    description: bi(
      "During Arjuna's exile the Naga princess Ulupi saw him bathing in the Ganga and carried him to the underwater city of the Nagas. There they were married, and their son Iravan was born. In the epic she also restores Arjuna's life when he is killed by the Vasus' curse, using the Sanjivani gem. Her marriage is one of the quiet threads that tie the Naga world to the Pandava cause.",
      "అర్జునుడు వనవాసంలో గంగలో స్నానం చేస్తుండగా ఉలూపి అతన్ని నాగలోకానికి తీసుకెళ్లి పెళ్లాడింది. వారి కుమారుడే ఇరావణుడు. తర్వాత అర్జునుడు శాపంతో మరణించినప్పుడు సంజీవని రత్నంతో అతనికి ప్రాణం పోసింది.",
    ),
    relations: { spouses: ['arjuna'], sons: ['iravan'] },
    stories: ['arjuna-vanavasa'],
    art: 'serpent',
  }),
  record('royal', {
    id: 'chitrangada-manipura',
    name: bi('Chitrangada of Manipura', 'మణిపురి చిత్రాంగద'),
    aliases: ['Chitrangada', 'Chitrangada of Manipur', 'Manipura’s warrior princess'],
    epithets: [bi('The warrior princess of Manipura', 'మణిపుర యోధ రాజకుమారి')],
    lineage: bi('Daughter of King Chitravahana of Manipura, raised as heir.', 'మణిపుర రాజు చిత్రవాహనుని కుమార్తె; వారసురాలిగా పెరిగింది.'),
    summary: bi(
      'The Manipura princess who weds Arjuna on the condition that their son inherit her throne.',
      'తన కుమారుడే తన రాజ్యానికి వారసుడన్న షరతుతో అర్జునుని పెళ్లాడిన రాజకుమారి.',
    ),
    description: bi(
      "Chitrangada was her father's only child, raised as a warrior and heir to Manipura. When Arjuna came to her kingdom during his travels, they married on the understanding that any son would belong to Manipura, not to Hastinapura. Their son Babhruvahana grows up as a king, and later unknowingly kills his own father in battle — one of the epic's most painful reunions.",
      "తండ్రికి ఏకైక సంతానమైన చిత్రాంగద యోధురాలిగా, మణిపుర వారసురాలిగా పెరిగింది. అర్జునుడు ఆ రాజ్యానికి వచ్చినప్పుడు, కుమారుడు మణిపురకే చెందాలన్న షరతుతో వివాహం జరిగింది. వారి కుమారుడు బభ్రువాహనుడు తర్వాత తెలియకుండా తండ్రితోనే పోరాడతాడు.",
    ),
    relations: { spouses: ['arjuna'], sons: ['babhruvahana'] },
    stories: ['arjuna-vanavasa'],
    art: 'sword',
  }),
  record('royal', {
    id: 'subhadra',
    name: bi('Subhadra', 'సుభద్ర'),
    aliases: ['Subhadra', 'Subhadra Devi', 'Krishna’s sister'],
    epithets: [bi('Sister of Krishna and Balarama', 'కృష్ణ, బలరాముల సోదరి'), bi('Mother of Abhimanyu', 'అభిమన్యుని తల్లి')],
    lineage: bi('Daughter of Vasudeva and Rohini; wife of Arjuna.', 'వసుదేవుడు, రోహిణిల కుమార్తె; అర్జునుని భార్య.'),
    summary: bi(
      'Krishna’s sister, who chose Arjuna and became the mother of Abhimanyu.',
      'అర్జునుని వరించి, అభిమన్యునికి తల్లి అయిన కృష్ణ సోదరి.',
    ),
    description: bi(
      "Subhadra grew up in Dvaraka and fell in love with Arjuna during his exile. Krishna, knowing that a formal proposal would be refused by her brothers' clan council, arranged for Arjuna to carry her away in his chariot — the 'subhadra harana' that is a marriage by consent dressed as an abduction. Balarama's anger cooled when he learned it was Arjuna, and their son Abhimanyu becomes the Pandavas' beloved heir.",
      "ద్వారకలో పెరిగిన సుభద్ర అర్జునుని ప్రేమించింది. కులసభ అంగీకరించదని తెలిసిన కృష్ణుడు, అర్జునుడు ఆమెను రథంలో తీసుకెళ్లేలా ఏర్పాటు చేశాడు — దాన్ని 'సుభద్రా హరణ' అంటారు. వారి కుమారుడే అభిమన్యుడు.",
    ),
    relations: {
      father: ['vasudeva'],
      mother: ['rohini'],
      siblings: ['krishna', 'balarama'],
      spouses: ['arjuna'],
      sons: ['abhimanyu'],
    },
    stories: ['subhadra-harana'],
    art: 'lotus',
  }),
  record('warrior', {
    id: 'iravan',
    name: bi('Iravan', 'ఇరావణుడు'),
    aliases: ['Iravan', 'Iravan of the Nagas', 'Aravan'],
    epithets: [bi('Arjuna’s Naga son', 'అర్జునుని నాగ పుత్రుడు')],
    lineage: bi('Son of Arjuna and Ulupi.', 'అర్జునుడు, ఉలూపిల కుమారుడు.'),
    summary: bi(
      'The Naga prince, child of Arjuna and Ulupi, who dies in the war.',
      'అర్జునుడు, ఉలూపిల కుమారుడు; యుద್ಧంలో మరణించిన నాగ యువరాజు.',
    ),
    description: bi(
      "Iravan grew up in the Naga world and came to the Pandava camp as a young warrior. In the war he fights valiantly and falls; in later tradition he is remembered as the deity of the Hijra community, honoured before the battle. His brief appearance connects Arjuna's forest marriages to the war's cost.",
      "నాగలోకంలో పెరిగి పాండవ శిబిరానికి వచ్చిన ఇరావణుడు యుద్ధంలో వీరమరణం పొందాడు. ఆధునిక సంప్రదాయంలో అతను తిరునంగ జనావళి ఆరాధ్య దైవం.",
    ),
    relations: { father: ['arjuna'], mother: ['ulupi'] },
    stories: ['arjuna-vanavasa'],
    art: 'bow',
  }),
  record('royal', {
    id: 'babhruvahana',
    name: bi('Babhruvahana', 'బభ్రువాహనుడు'),
    aliases: ['Babhruvahana', 'Babruvahana', 'Prince of Manipura'],
    epithets: [bi('King of Manipura', 'మణిపుర రాజు'), bi('He who fought his father', 'తండ్రితోనే పోరాడినవాడు')],
    lineage: bi('Son of Arjuna and Chitrangada, king of Manipura.', 'అర్జునుడు, చిత్రాంగదల కుమారుడు; మణిపుర రాజు.'),
    summary: bi(
      'Arjuna’s Manipura-born son, who kills his own father without knowing him.',
      'తెలియకుండా తండ్రిని చంపిన అర్జునుని మణిపుర కుమారుడు.',
    ),
    description: bi(
      "Babhruvahana inherited Manipura from his mother and grew up without his father. During the horse sacrifice after the war, Arjuna came to Manipura, fought the young king, and was killed by him; Ulupi restored Arjuna to life with the Sanjivani gem, and father and son were finally united. The episode is the epic's meditation on inheritance: the son becomes what the father was, and must then forgive him.",
      "తల్లి నుండి మణిపుర రాజ్యాన్ని పొందిన బభ్రువాహనుడు తండ్రి లేకుండా పెరిగాడు. అశ్వమేధ సమయంలో అర్జునుడు మణిపురకు వచ్చి అతనితో పోరాడి మరణించాడు; ఉలూపి సంజీవనితో అర్జునుడిని బ్రతికించింది. తర్వాత తండ్రీకొడుకులు కలుసుకున్నారు.",
    ),
    relations: { father: ['arjuna'], mother: ['chitrangada-manipura'] },
    stories: ['arjuna-vanavasa'],
    art: 'bow',
  }),
];
