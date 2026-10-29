import { bi } from '../../core/i18n';
import { record, type CharacterRecord } from './helpers';

/**
 * Distant links in the genealogical chain. They keep parent/child relations
 * complete for the early chapters without cluttering the main cast lists.
 */
export const deepRootCharacters: readonly CharacterRecord[] = [
  record('sage', {
    id: 'pramati',
    name: bi('Pramati', 'ప్రమతి'),
    aliases: ['Pramati', 'Pramati Bhrigu'],
    epithets: [bi('Son of Chyavana', 'చ్యవనుని కుమారుడు')],
    lineage: bi('A Bhargava sage, father of Ruru.', 'భార్గవ ఋషి; రురువు తండ్రి.'),
    summary: bi('The Bhargava sage who hands the family’s lore to his son Ruru.', 'రురువుకు వంశజ్ఞానం అందించిన భార్గవ ముని.'),
    description: bi(
      'Pramati is a quiet link in the chain of Bhrigu’s descendants. He inherits Chyavana’s austerity, raises Ruru, and appears in the Pauloma Parva as the father who warns his son about the serpent curse that hangs over their house.',
      'భృగు వంశంలోని ప్రమతి చ్యవనుని కుమారుడు, రురువు తండ్రి. పౌలోమ పర్వంలో తమ కుటుంబాన్ని పొంచి ఉన్న సర్ప శాపం గురించి కుమారుడిని హెచ్చరిస్తాడు.',
    ),
    relations: { father: ['chyavana'], sons: ['ruru'] },
    stories: ['pauloma'],
    art: 'pot',
  }),
  record('royal', {
    id: 'ila',
    name: bi('Ila', 'ఇల'),
    aliases: ['Ila', 'Ida', 'Ilā'],
    epithets: [bi('Ancestress of the lunar kings', 'చంద్రవంశ రాజుల మూలమాత')],
    lineage: bi('Daughter of Manu, consort of Budha, mother of Pururavas.', 'మనువు కుమార్తె; బుధుని భార్య, పురూరవుని తల్లి.'),
    summary: bi('The first queen of the lunar dynasty.', 'చంద్రవంశ ప్రథమ మహారాణి.'),
    description: bi(
      'Ila is the daughter of Manu who, after a transformation caused by a curse, becomes the consort of Budha and the mother of Pururavas. Through her, the solar and lunar genealogies touch, and every Kuru king after her claims both lines.',
      'మనువు కుమార్తె ఇల, బుధుని భార్య, పురూరవుని తల్లి. ఆమె ద్వారానే సూర్య, చంద్ర వంశాలు కలుస్తాయి.',
    ),
    relations: { father: ['manu'], spouses: ['budha'], sons: ['pururavas'] },
    stories: ['sambhava'],
    art: 'lotus',
  }),
  record('celestial', {
    id: 'urvashi',
    name: bi('Urvashi', 'ఊర్వశి'),
    aliases: ['Urvashi', 'Urvasi', 'Apsara Urvashi'],
    epithets: [bi('The foremost apsara', 'అప్సరసలలో అగ్రగామి')],
    lineage: bi('A celestial nymph of Indra’s court.', 'ఇంద్ర సభకు చెందిన అప్సరస.'),
    summary: bi('The nymph whose love story starts the lunar dynasty’s royal line.', 'చంద్రవంశ రాజులకు ఆది ప్రేమకథను అందించిన అప్సరస.'),
    description: bi(
      'Urvashi loved Pururavas, lived with him, and left him when the terms of their union were broken. Their parting is one of the oldest poems of longing in Indian literature, and the epic places it at the root of the lunar dynasty.',
      'పురూరవుని ప్రేమించి, షరతు తప్పినప్పుడు వెళ్లిపోయిన ఊర్వశి కథ, చంద్రవంశ వంశావళికి ఆది ప్రేమకథ.',
    ),
    relations: { spouses: ['pururavas'] },
    stories: ['sambhava'],
    art: 'lotus',
  }),
  record('royal', {
    id: 'ayu',
    name: bi('King Ayu', 'ఆయువు'),
    aliases: ['Ayu', 'Ayu Pururavas'],
    epithets: [bi('Lunar king', 'చంద్రవంశ రాజు')],
    lineage: bi('Son of Pururavas, father of Nahusha.', 'పురూరవుని కుమారుడు, నహుషుని తండ్రి.'),
    summary: bi('The lunar king between Pururavas and Nahusha.', 'పురూరవ, నహుషుల మధ్య చంద్రవంశ రాజు.'),
    description: bi(
      'Ayu rules the lunar kingdom between his father Pururavas and his son Nahusha. The genealogies of the Adi Parva pass through him quickly, but he is the anchor that makes the kings of Hastinapura ancestors of the moon itself.',
      'పురూరవునికి, నహుషునికి మధ్య పాలించిన ఆయువు గురించి కథలు తక్కువ అయినా, హస్తినాపుర రాజుల వంశం చంద్రుని వరకు వెళ్లడానికి అతడే వంతెన.',
    ),
    relations: { father: ['pururavas'], sons: ['nahusha'] },
    stories: ['sambhava'],
    art: 'crown',
  }),
  record('demon', {
    id: 'vrishaparva',
    name: bi('Vrishaparva', 'వృషపర్వుడు'),
    aliases: ['Vrishaparva', 'Vrishaparvan', 'Asura King Vrishaparva'],
    epithets: [bi('An Asura king', 'అసుర రాజు')],
    lineage: bi('An Asura monarch, father of Sharmistha.', 'అసుర రాజు; శర్మిష్ఠ తండ్రి.'),
    summary: bi('The Asura king who sends his daughter to serve Devayani.', 'తన కుమార్తెను దేవయాని సేవకురాలిగా పంపిన అసుర రాజు.'),
    description: bi(
      'To avert the wrath of Shukracharya, Vrishaparva agrees that his daughter Sharmistha will serve Devayani. That single act of royal diplomacy places an Asura princess in Yayati’s court and makes her the mother of Puru, the ancestor of the Kurus.',
      'శుక్రాచార్యుని కోపాన్ని తప్పించుకోడానికి, తన కుమార్తె శర్మిష్ఠను దేవయానికి సేవకురాలిగా ఇచ్చాడు. ఆ నిర్ణయమే శర్మిష్ఠను యయాతి సభకు, పురువు తల్లి స్థానానికి చేర్చింది.',
    ),
    relations: { daughters: ['sharmistha'] },
    stories: ['sambhava'],
    art: 'crown',
  }),
  record('royal', {
    id: 'manu',
    name: bi('Manu', 'మనువు'),
    aliases: ['Manu', 'Vaivasvata Manu', 'Sraddhadeva Manu'],
    epithets: [bi('Progenitor of humanity', 'మానవజాతి ఆదిపురుషుడు')],
    lineage: bi('Son of Vivasvan, the first lawgiver and king.', 'వివస్వంతుని కుమారుడు; ప్రథమ ధర్మకర్త.'),
    summary: bi('The first king and lawgiver, father of Ila and the solar line.', 'మానవుల ప్రథమ రాజు; ఇల తండ్రి.'),
    description: bi(
      'Manu survives the great deluge, receives the law that bears his name, and fathers the lines from which the epic’s kings descend. Both the solar dynasty of Rama and, through Ila, the lunar dynasty of the Kurus look back to him.',
      'మహాప్రళయం నుండి తప్పించుకుని, మనుస్మృతిని పొందిన మనువు నుండే రఘు, కురు వంశాలు వస్తాయి. ఇల ద్వారా చంద్రవంశం కూడా అతని సంతానమే.',
    ),
    relations: { father: ['vivasvan'], daughters: ['ila'] },
    stories: ['sambhava'],
    art: 'scroll',
  }),
  record('divine', {
    id: 'vivasvan',
    name: bi('Vivasvan', 'వివస్వంతుడు'),
    aliases: ['Vivasvan', 'Vivasvat', 'Surya Vivasvan'],
    epithets: [bi('The shining sun', 'ప్రకాశమాన సూర్యుడు')],
    lineage: bi('The sun as first ancestor of the solar kings.', 'సూర్యవంశ ప్రథమ పూర్వీకుడు.'),
    summary: bi('The sun-father of Manu and Yama.', 'మనువు, యముల తండ్రి.'),
    description: bi(
      'Vivasvan is the sun in his role as father of Manu, Yama and the Ashvins — the point at which the solar theology of the Vedas becomes the family tree of the epic. Every oath sworn at sunrise in the Mahabharata is sworn in his sight.',
      'వేదాల సూర్య దేవత ఇక్కడ మనువు, యముడు, అశ్వినుల తండ్రిగా మారి, ఇతిహాస వంశావళిలో కలుస్తాడు.',
    ),
    relations: { sons: ['manu', 'yama', 'ashwini-kumaras'] },
    stories: ['sambhava'],
    art: 'chariot',
  }),
  record('sage', {
    id: 'vasishtha',
    name: bi('Sage Vasishtha', 'వసిష్ఠ మహర్షి'),
    aliases: ['Vasishtha', 'Vashistha', 'Vasistha'],
    epithets: [bi('The royal preceptor', 'రాజగురువు')],
    lineage: bi('One of the great Vedic seers, preceptor of the solar kings.', 'సప్తర్షులలో ఒకడు; సూర్యవంశ రాజగురువు.'),
    summary: bi('The sage whose rivalry with Vishwamitra turns a king into a Brahmarishi.', 'విశ్వామిత్రుని తపస్సుకు కారణమైన మహర్షి.'),
    description: bi(
      "Vasishtha's calm, self-possessed austerity is the standard against which Vishwamitra measures himself. Their long duel of ascetic power — Vasishtha defending his hermitage, Vishwamitra losing and rebuilding his self-control — is the story behind Shakuntala's father becoming a sage.",
      'శాంతమైన తపస్సుతో విశ్వామిత్రుని ఓడించిన వసిష్ఠుడు, అతని మనస్సును మార్చిన గురువు. ఆ పోరాటమే విశ్వామిత్రుని బ్రహ్మర్షి చేసింది.',
    ),
    relations: { teachers: ['brahma'] },
    stories: ['sambhava'],
    art: 'pot',
  }),
];
