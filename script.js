const ADMIN_PASSWORD = "admin123";
const CONFIG = {
  "defaultMarking": {
    "correct": 1,
    "wrong": -1,
    "empty": 0
  },
  "subjects": [
    {
      "id": "cardiologie-l3-ahoussi-fidel-60",
      "title": "Agboville 2026 — Cardiologie · Compo sur table",
      "matter": "Cardiologie — Compo sur table",
      "description": "Agboville 2026 — L3 IDE — 60 questions corrigées.",
      "instructions": "QCD : choisir Vrai ou Faux. QCM : suivre le nombre de réponses indiqué. Version pédagogique reformulée du document fourni ; ne constitue pas un barème officiel. Bonne réponse : +1 ; mauvaise réponse QCD : −1 ; mauvaise réponse QCM ou absence de réponse : 0.",
      "duration": 90,
      "programmed": true,
      "openDate": "2026-01-01",
      "openTime": "00:00",
      "closeDate": "2030-12-31",
      "closeTime": "23:59",
      "marking": {
        "correct": 1,
        "wrong": -1,
        "empty": 0
      },
      "questions": [
        {
          "originalNumber": 1,
          "type": "qcd",
          "text": "Question 1 — La numération plaquettaire normale est comprise entre 200 000 et 400 000/mm³ et sa surveillance doit toujours être réalisée deux fois par semaine chez toute personne ayant une embolie pulmonaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "L’affirmation est trop générale. Le repère usuel est 150 000 à 400 000/mm³, selon le laboratoire. Le cours demande une surveillance des plaquettes sous héparine pour dépister une thrombopénie ; sa fréquence dépend du traitement et du contexte, et non du seul diagnostic d’embolie pulmonaire.\n\nNote sur le sujet initial : La borne basse et le caractère systématique du rythme de surveillance rendent la proposition incorrecte. Le texte original « 200 à 400.000 » a été clarifié en 200 000 à 400 000.",
          "source": "C, p. 16 (PDF 10) ; R1.\nR1 — Assurance Maladie, Lire les résultats d’une prise de sang, rubrique Plaquettes.\nhttps://www.ameli.fr/assure/sante/examen/analyse/lire-resultats-prise-sang",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 2,
          "type": "qcm",
          "text": "Question 2 — Quelles situations d’immobilisation peuvent favoriser une thrombose veineuse ? Choisir trois réponses.",
          "options": [
            "Chirurgie majeure suivie d’une immobilisation prolongée",
            "Post-partum compliqué nécessitant un alitement prolongé",
            "Insuffisance cardiaque avec immobilisation",
            "Marche régulière",
            "Mobilisation précoce adaptée"
          ],
          "explanation": "La stase veineuse est favorisée par l’immobilisation. Le cours cite les circonstances chirurgicales, obstétricales et médicales, dont l’insuffisance cardiaque. Marcher et mobiliser les membres participent au contraire à la prévention lorsque l’état clinique le permet.\n\nNote sur le sujet initial : Question reformulée : un type d’anesthésie ou un post-partum normal n’impose pas, à lui seul, un alitement prolongé. Toutes les coagulopathies ne sont pas des thrombophilies.",
          "source": "C, p. 9-13 (PDF 6-8).\n",
          "answers": [
            "Chirurgie majeure suivie d’une immobilisation prolongée",
            "Post-partum compliqué nécessitant un alitement prolongé",
            "Insuffisance cardiaque avec immobilisation"
          ],
          "correct": [
            "Chirurgie majeure suivie d’une immobilisation prolongée",
            "Post-partum compliqué nécessitant un alitement prolongé",
            "Insuffisance cardiaque avec immobilisation"
          ]
        },
        {
          "originalNumber": 3,
          "type": "qcd",
          "text": "Question 3 — L’INR évalue l’effet des AVK dans l’embolie pulmonaire et doit habituellement être compris entre 3 et 4,5.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le rôle de l’INR est exact, mais la cible habituelle sous AVK pour une maladie thromboembolique veineuse est 2 à 3. Un intervalle de 3 à 4,5 expose à un excès d’anticoagulation dans cette indication. Le cours indique un INR supérieur à 2 sans préciser ici tout l’intervalle cible.\n\nNote sur le sujet initial : La cible concerne les AVK ; l’INR n’est pas le test de suivi de tous les anticoagulants.",
          "source": "C, p. 16 (PDF 10) ; R2.\nR2 — NICE NG158, Evidence review D, anticoagulation des TVP/EP : intervalle thérapeutique de l’INR sous AVK.\nhttps://www.nice.org.uk/guidance/ng158/evidence/d-pharmacological-treatment-pdf-8710588337",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 4,
          "type": "qcm",
          "text": "Question 4 — Quels éléments appartiennent à la surveillance locale d’une AOMI ? Cocher toutes les bonnes réponses.",
          "options": [
            "Coloration et température cutanées du membre concerné",
            "Présence ou absence des pouls du membre inférieur",
            "Sensibilité et motricité du membre inférieur"
          ],
          "explanation": "Les trois propositions sont utiles. La peau et les pouls renseignent sur la perfusion ; une altération sensitive ou motrice peut annoncer une ischémie menaçante. Il ne faut pas écarter le contrôle neurologique local pour respecter artificiellement une limite de deux choix.\n\nNote sur le sujet initial : La consigne originale demandait deux réponses alors que les trois éléments sont pertinents. Le nombre imposé a été supprimé.",
          "source": "R3 ; R4.\nR3 — Assurance Maladie, AOMI : définition, causes et facteurs de risque.\nhttps://www.ameli.fr/assure/sante/themes/arteriopathie-obliterante-arterite-des-membres-inferieurs/definition-causes-facteurs-risque\nR4 — ESC 2024, maladies artérielles périphériques et aortiques : examen de l’ischémie des membres ; et Assurance Maladie, suivi de l’AOMI.\nhttps://academic.oup.com/eurheartj/article/45/36/3538/7738955\nComplément : suivi de l’AOMI — Assurance Maladie",
          "answers": [
            "Coloration et température cutanées du membre concerné",
            "Présence ou absence des pouls du membre inférieur",
            "Sensibilité et motricité du membre inférieur"
          ],
          "correct": [
            "Coloration et température cutanées du membre concerné",
            "Présence ou absence des pouls du membre inférieur",
            "Sensibilité et motricité du membre inférieur"
          ]
        },
        {
          "originalNumber": 5,
          "type": "qcd",
          "text": "Question 5 — Dans le cas de Mme Bonzou, l’insuffisance veineuse correspond à une stagnation du sang dans les veines des membres supérieurs.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le cas concerne les membres inférieurs. Les symptômes suggèrent un retour veineux insuffisant dans les jambes, avec lourdeur et gonflement vespéral. Le mot « supérieurs » rend l’affirmation fausse.\n\nNote sur le sujet initial : Le diagnostic est suggéré par le cas ; il ne résulte pas d’une simple dénomination donnée à la patiente.",
          "source": "Cas clinique, épreuve PDF p. 2-3 ; R5.\nR5 — Assurance Maladie, Jambes lourdes : symptômes, causes et facteurs favorisants.\nhttps://www.ameli.fr/assure/sante/themes/jambes-lourdes/symptomes-causes-facteurs-favorisants",
          "answer": "Faux",
          "correct": "Faux",
          "caseContext": "Mme Bonzou\nFemme de 34 ans, 90 kg pour 1,63 m. Antécédent récent de grossesse interrompue, puis prise d’une pilule contraceptive. Expositions répétées au soleil et aux bains chauds. Elle rapporte crampes, démangeaisons, lourdeur des jambes majorée le soir, fourmillements nocturnes et œdèmes des chevilles et mollets après station debout. Elle est anxieuse. Le cas figure aux pages 2 à 9 de l’épreuve."
        },
        {
          "originalNumber": 6,
          "type": "qcm",
          "text": "Question 6 — Quels facteurs favorisants ou aggravants sont explicitement retrouvés dans le cas de Mme Bonzou ? Choisir trois réponses.",
          "options": [
            "Hérédité documentée",
            "Obésité",
            "Antécédent de grossesse et prise de pilule contraceptive",
            "Sédentarité explicitement décrite",
            "Exposition au soleil et bains chauds"
          ],
          "explanation": "Le cas décrit 90 kg pour 1,63 m, soit un IMC d’environ 33,9 kg/m². Il mentionne aussi la grossesse, la contraception et les expositions à la chaleur. Aucun antécédent familial ni véritable sédentarité n’est explicitement rapporté. Le rôle des hormones doit être apprécié selon le contraceptif utilisé.\n\nNote sur le sujet initial : La consigne a été limitée aux éléments du texte : l’hérédité et la sédentarité peuvent compter en général, mais ne sont pas établies chez cette patiente.",
          "source": "Épreuve PDF p. 2-3 ; R5.\nR5 — Assurance Maladie, Jambes lourdes : symptômes, causes et facteurs favorisants.\nhttps://www.ameli.fr/assure/sante/themes/jambes-lourdes/symptomes-causes-facteurs-favorisants",
          "answers": [
            "Obésité",
            "Antécédent de grossesse et prise de pilule contraceptive",
            "Exposition au soleil et bains chauds"
          ],
          "correct": [
            "Obésité",
            "Antécédent de grossesse et prise de pilule contraceptive",
            "Exposition au soleil et bains chauds"
          ],
          "caseContext": "Mme Bonzou\nFemme de 34 ans, 90 kg pour 1,63 m. Antécédent récent de grossesse interrompue, puis prise d’une pilule contraceptive. Expositions répétées au soleil et aux bains chauds. Elle rapporte crampes, démangeaisons, lourdeur des jambes majorée le soir, fourmillements nocturnes et œdèmes des chevilles et mollets après station debout. Elle est anxieuse. Le cas figure aux pages 2 à 9 de l’épreuve."
        },
        {
          "originalNumber": 7,
          "type": "qcm",
          "text": "Question 7 — Quels signes sont explicitement décrits chez Mme Bonzou ? Choisir deux réponses.",
          "options": [
            "Jambes lourdes en fin de journée et fourmillements nocturnes",
            "Démangeaisons généralisées",
            "Œdèmes des chevilles et mollets le soir après station debout",
            "Vertiges et fatigue intense"
          ],
          "explanation": "Ces deux propositions reprennent le cas. Des démangeaisons sont mentionnées, mais leur caractère généralisé ne l’est pas. Les vertiges et la fatigue intense ne figurent pas dans le récit.\n\nNote sur le sujet initial : Le nom « Biche Royale », discordant dans l’épreuve, a été remplacé par Mme Bonzou.",
          "source": "Épreuve PDF p. 2-5.\n",
          "answers": [
            "Jambes lourdes en fin de journée et fourmillements nocturnes",
            "Œdèmes des chevilles et mollets le soir après station debout"
          ],
          "correct": [
            "Jambes lourdes en fin de journée et fourmillements nocturnes",
            "Œdèmes des chevilles et mollets le soir après station debout"
          ],
          "caseContext": "Mme Bonzou\nFemme de 34 ans, 90 kg pour 1,63 m. Antécédent récent de grossesse interrompue, puis prise d’une pilule contraceptive. Expositions répétées au soleil et aux bains chauds. Elle rapporte crampes, démangeaisons, lourdeur des jambes majorée le soir, fourmillements nocturnes et œdèmes des chevilles et mollets après station debout. Elle est anxieuse. Le cas figure aux pages 2 à 9 de l’épreuve."
        },
        {
          "originalNumber": 8,
          "type": "qcm",
          "text": "Question 8 — Quels soins non médicamenteux sont adaptés pour soulager et accompagner Mme Bonzou ? Choisir deux réponses.",
          "options": [
            "Installer confortablement avec les jambes légèrement surélevées au repos",
            "Faire systématiquement un prélèvement sanguin urgent sans indication",
            "Rassurer et expliquer la maladie et les soins"
          ],
          "explanation": "La surélévation au repos peut soulager la stase veineuse ; l’information réduit l’anxiété et favorise l’adhésion. Le prélèvement urgent n’est pas un soin systématique de toute insuffisance veineuse simple. La mobilisation adaptée conserve sa place : soulager au lit ne signifie pas prescrire un alitement prolongé.\n\nNote sur le sujet initial : La formulation précise qu’il s’agit de soins non médicamenteux. Le cas seul ne justifie pas une hospitalisation systématique de trois jours.",
          "source": "C, p. 13-14 (PDF 8-9), mesures physiques ; R6.\nR6 — Assurance Maladie, Jambes lourdes et chevilles qui enflent : gestes quotidiens.\nhttps://www.ameli.fr/assure/sante/themes/jambes-lourdes/bons-reflexes-quotidiens",
          "answers": [
            "Installer confortablement avec les jambes légèrement surélevées au repos",
            "Rassurer et expliquer la maladie et les soins"
          ],
          "correct": [
            "Installer confortablement avec les jambes légèrement surélevées au repos",
            "Rassurer et expliquer la maladie et les soins"
          ],
          "caseContext": "Mme Bonzou\nFemme de 34 ans, 90 kg pour 1,63 m. Antécédent récent de grossesse interrompue, puis prise d’une pilule contraceptive. Expositions répétées au soleil et aux bains chauds. Elle rapporte crampes, démangeaisons, lourdeur des jambes majorée le soir, fourmillements nocturnes et œdèmes des chevilles et mollets après station debout. Elle est anxieuse. Le cas figure aux pages 2 à 9 de l’épreuve."
        },
        {
          "originalNumber": 9,
          "type": "qcm",
          "text": "Question 9 — Quel examen permet d’étudier les veines des jambes et leurs flux en cas d’insuffisance veineuse ? Une réponse.",
          "options": [
            "Dosage systématique des marqueurs d’activation de la coagulation",
            "Écho-Doppler veineux des membres inférieurs",
            "Scanner veineux systématique en première intention"
          ],
          "explanation": "L’écho-Doppler visualise le réseau veineux et étudie le reflux et les flux. Les D-dimères ne confirment pas une insuffisance veineuse chronique simple. Un scanner n’est pas l’examen de routine de première intention dans cette situation.\n\nNote sur le sujet initial : Le sujet demandait deux réponses sans en proposer deux valides pour l’insuffisance veineuse simple. La consigne est ramenée à une réponse.",
          "source": "R7.\nR7 — Assurance Maladie, Écho-Doppler veineux des membres inférieurs : indications et informations recueillies.\nhttps://www.ameli.fr/assure/sante/examen/imagerie-medicale/deroulement-echo-doppler-veineux-membres-inferieurs",
          "answers": [
            "Écho-Doppler veineux des membres inférieurs"
          ],
          "correct": [
            "Écho-Doppler veineux des membres inférieurs"
          ],
          "caseContext": "Mme Bonzou\nFemme de 34 ans, 90 kg pour 1,63 m. Antécédent récent de grossesse interrompue, puis prise d’une pilule contraceptive. Expositions répétées au soleil et aux bains chauds. Elle rapporte crampes, démangeaisons, lourdeur des jambes majorée le soir, fourmillements nocturnes et œdèmes des chevilles et mollets après station debout. Elle est anxieuse. Le cas figure aux pages 2 à 9 de l’épreuve."
        },
        {
          "originalNumber": 10,
          "type": "qcd",
          "text": "Question 10 — Des bas ou collants de compression adaptés peuvent faire partie du traitement physique de l’insuffisance veineuse de Mme Bonzou, après évaluation et selon la prescription.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La compression améliore le retour veineux et réduit certains symptômes. Son choix et sa mise en place nécessitent une évaluation adaptée, notamment si une atteinte artérielle est suspectée. L’infirmier accompagne l’utilisation conformément au cadre de soins.\n\nNote sur le sujet initial : « Vous prescrivez » a été remplacé par une formulation qui distingue l’indication, la prescription et les soins infirmiers.",
          "source": "C, p. 13 (PDF 8) ; R8.\nR8 — Assurance Maladie, Jambes lourdes : consultation et traitement par compression.\nhttps://www.ameli.fr/assure/sante/themes/jambes-lourdes/consultation-medicale-traitement-contention",
          "answer": "Vrai",
          "correct": "Vrai",
          "caseContext": "Mme Bonzou\nFemme de 34 ans, 90 kg pour 1,63 m. Antécédent récent de grossesse interrompue, puis prise d’une pilule contraceptive. Expositions répétées au soleil et aux bains chauds. Elle rapporte crampes, démangeaisons, lourdeur des jambes majorée le soir, fourmillements nocturnes et œdèmes des chevilles et mollets après station debout. Elle est anxieuse. Le cas figure aux pages 2 à 9 de l’épreuve."
        },
        {
          "originalNumber": 11,
          "type": "qcm",
          "text": "Question 11 — Quelles mesures contribuent à préserver le retour veineux ? Cocher toutes les réponses exactes.",
          "options": [
            "Éviter les rapports sexuels pendant une formation",
            "Lutter contre le nomadisme",
            "Pratiquer une activité physique régulière adaptée",
            "Éviter les vêtements trop serrés",
            "Éviter la station assise prolongée",
            "Éviter les expositions répétées à une forte chaleur"
          ],
          "explanation": "L’activité et les mouvements des chevilles favorisent le retour veineux. Éviter l’immobilité, la chaleur excessive et les vêtements qui entravent la circulation complète les conseils. Les deux premières propositions ne sont pas des mesures reconnues de prévention de l’insuffisance veineuse.\n\nNote sur le sujet initial : Quatre propositions sont exactes ; la limite originale de trois choix était erronée.",
          "source": "R6.\nR6 — Assurance Maladie, Jambes lourdes et chevilles qui enflent : gestes quotidiens.\nhttps://www.ameli.fr/assure/sante/themes/jambes-lourdes/bons-reflexes-quotidiens",
          "answers": [
            "Pratiquer une activité physique régulière adaptée",
            "Éviter les vêtements trop serrés",
            "Éviter la station assise prolongée",
            "Éviter les expositions répétées à une forte chaleur"
          ],
          "correct": [
            "Pratiquer une activité physique régulière adaptée",
            "Éviter les vêtements trop serrés",
            "Éviter la station assise prolongée",
            "Éviter les expositions répétées à une forte chaleur"
          ],
          "caseContext": "Mme Bonzou\nFemme de 34 ans, 90 kg pour 1,63 m. Antécédent récent de grossesse interrompue, puis prise d’une pilule contraceptive. Expositions répétées au soleil et aux bains chauds. Elle rapporte crampes, démangeaisons, lourdeur des jambes majorée le soir, fourmillements nocturnes et œdèmes des chevilles et mollets après station debout. Elle est anxieuse. Le cas figure aux pages 2 à 9 de l’épreuve."
        },
        {
          "originalNumber": 12,
          "type": "qcd",
          "text": "Question 12 — La maladie veineuse chronique évoluée peut s’accompagner de thrombose superficielle et d’ulcère de jambe ; une thrombose profonde peut aussi être associée et doit être recherchée si elle est suspectée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Les complications typiques comprennent les troubles cutanés et la thrombose superficielle. Une TVP peut coexister, mais elle ne doit pas être présentée comme une conséquence constante ou automatique de simples varices.\n\nNote sur le sujet initial : L’affirmation originale regroupait ces complications sans nuance. La reformulation distingue les complications habituelles et l’association possible à une TVP.",
          "source": "C, p. 8-10 (PDF 6-7) ; R9.\nR9 — Assurance Maladie, Varices : symptômes, bilan et évolution, complications aiguës et chroniques.\nhttps://www.ameli.fr/assure/sante/themes/varices-jambes/varices-symptomes-bilan-et-evolution",
          "answer": "Vrai",
          "correct": "Vrai",
          "caseContext": "Mme Bonzou\nFemme de 34 ans, 90 kg pour 1,63 m. Antécédent récent de grossesse interrompue, puis prise d’une pilule contraceptive. Expositions répétées au soleil et aux bains chauds. Elle rapporte crampes, démangeaisons, lourdeur des jambes majorée le soir, fourmillements nocturnes et œdèmes des chevilles et mollets après station debout. Elle est anxieuse. Le cas figure aux pages 2 à 9 de l’épreuve."
        },
        {
          "originalNumber": 13,
          "type": "qcm",
          "text": "Question 13 — Quel diagnostic est le plus compatible avec le cas de Mme Bonzou ? Une réponse.",
          "options": [
            "Insuffisance cardiaque",
            "Insuffisance veineuse chronique",
            "Artériopathie oblitérante des membres inférieurs"
          ],
          "explanation": "Lourdeur vespérale, œdèmes après station debout, crampes et aggravation par la chaleur orientent vers une maladie veineuse. Le cas n’apporte pas les éléments habituels d’une claudication artérielle ni d’une insuffisance cardiaque globale.\n\nNote sur le sujet initial : Il s’agit du diagnostic le plus probable parmi les choix, à confirmer par une évaluation clinique.",
          "source": "Épreuve PDF p. 2-9 ; R5.\nR5 — Assurance Maladie, Jambes lourdes : symptômes, causes et facteurs favorisants.\nhttps://www.ameli.fr/assure/sante/themes/jambes-lourdes/symptomes-causes-facteurs-favorisants",
          "answers": [
            "Insuffisance veineuse chronique"
          ],
          "correct": [
            "Insuffisance veineuse chronique"
          ],
          "caseContext": "Mme Bonzou\nFemme de 34 ans, 90 kg pour 1,63 m. Antécédent récent de grossesse interrompue, puis prise d’une pilule contraceptive. Expositions répétées au soleil et aux bains chauds. Elle rapporte crampes, démangeaisons, lourdeur des jambes majorée le soir, fourmillements nocturnes et œdèmes des chevilles et mollets après station debout. Elle est anxieuse. Le cas figure aux pages 2 à 9 de l’épreuve."
        },
        {
          "originalNumber": 14,
          "type": "qcd",
          "text": "Question 14 — Une embolie pulmonaire peut résulter d’une complication d’une thrombose veineuse profonde.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Un fragment du thrombus peut se détacher, gagner le cœur droit puis obstruer une artère pulmonaire. C’est une complication grave de la TVP.\n\nNote sur le sujet initial : « Peut résulter » évite de faire de toute embolie pulmonaire une conséquence obligatoire d’une phlébite diagnostiquée.",
          "source": "C, p. 9-11 et 18 (PDF 6-7 et 11).\n",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 15,
          "type": "qcd",
          "text": "Question 15 — L’AOMI est une maladie des vaisseaux veineux.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "L’AOMI touche les artères des membres inférieurs. Une obstruction ou une sténose réduit leur apport sanguin, ce qui la distingue de la maladie veineuse.\n\nNote sur le sujet initial : Aucune autre correction de la question n’est nécessaire.",
          "source": "R3.\nR3 — Assurance Maladie, AOMI : définition, causes et facteurs de risque.\nhttps://www.ameli.fr/assure/sante/themes/arteriopathie-obliterante-arterite-des-membres-inferieurs/definition-causes-facteurs-risque",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 16,
          "type": "qcd",
          "text": "Question 16 — La dyspnée de l’embolie pulmonaire peut s’accompagner d’une accélération de la fréquence respiratoire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le cours décrit une dyspnée à type de polypnée liée à l’hypoxie. La tachypnée désigne une augmentation de la fréquence respiratoire ; les termes ne doivent pas être confondus avec la seule sensation subjective de dyspnée.\n\nNote sur le sujet initial : La formulation « peut s’accompagner » est plus précise que l’assimilation de toute dyspnée à une tachypnée.",
          "source": "C, p. 18 (PDF 11).\n",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 17,
          "type": "qcm",
          "text": "Question 17 — Quelles propositions décrivent une embolie pulmonaire ? Choisir trois réponses.",
          "options": [
            "Graisse dans une artère coronaire",
            "Caillot sanguin dans une artère pulmonaire",
            "Obstruction du tronc ou d’une branche pulmonaire par un embole circulant",
            "Complication possible d’une thrombose veineuse profonde",
            "Simple présence d’air dans les alvéoles pulmonaires"
          ],
          "explanation": "L’EP thrombotique correspond à un caillot migrant dans le réseau artériel pulmonaire, généralement depuis le réseau veineux profond. Une atteinte coronaire n’est pas une EP. De l’air alvéolaire normal n’est pas une embolie gazeuse intravasculaire.\n\nNote sur le sujet initial : La proposition sur l’air a été précisée pour éviter la confusion entre air dans les alvéoles et air dans un vaisseau.",
          "source": "C, p. 18 (PDF 11).\n",
          "answers": [
            "Caillot sanguin dans une artère pulmonaire",
            "Obstruction du tronc ou d’une branche pulmonaire par un embole circulant",
            "Complication possible d’une thrombose veineuse profonde"
          ],
          "correct": [
            "Caillot sanguin dans une artère pulmonaire",
            "Obstruction du tronc ou d’une branche pulmonaire par un embole circulant",
            "Complication possible d’une thrombose veineuse profonde"
          ]
        },
        {
          "originalNumber": 18,
          "type": "qcm",
          "text": "Question 18 — Quels signes hémorragiques faut-il rechercher chez un patient anticoagulé ? Choisir quatre réponses.",
          "options": [
            "Hématomes",
            "Épistaxis et gingivorragies",
            "Abcès",
            "Hématémèse et hématurie",
            "Ulcération sans saignement",
            "Hémoptysie et méléna"
          ],
          "explanation": "Ces manifestations correspondent à un saignement cutané, muqueux, digestif, urinaire ou respiratoire. Une ulcération ou un abcès ne désignent pas à eux seuls un accident hémorragique.\n\nNote sur le sujet initial : Le terme « sans saignement » précise pourquoi une ulcération isolée n’est pas retenue.",
          "source": "C, p. 16 et 21 (PDF 10 et 12).\n",
          "answers": [
            "Hématomes",
            "Épistaxis et gingivorragies",
            "Hématémèse et hématurie",
            "Hémoptysie et méléna"
          ],
          "correct": [
            "Hématomes",
            "Épistaxis et gingivorragies",
            "Hématémèse et hématurie",
            "Hémoptysie et méléna"
          ]
        },
        {
          "originalNumber": 19,
          "type": "qcm",
          "text": "Question 19 — Quel énoncé décrit correctement la prise en charge initiale d’une EP ? Une réponse.",
          "options": [
            "Évaluer et soutenir les fonctions vitales, traiter l’hypoxémie si présente et commencer rapidement le traitement antithrombotique indiqué",
            "Attendre l’antalgie complète avant toute évaluation respiratoire",
            "Traiter uniquement la douleur et différer l’anticoagulation sans raison"
          ],
          "explanation": "Le cours associe mesures symptomatiques et traitement de la cause. L’oxygène est adapté à la saturation et à la gazométrie. Ces mesures ne constituent pas une chaîne rigide obligeant à retarder un traitement essentiel.\n\nNote sur le sujet initial : Les trois ordres proposés dans l’épreuve étaient artificiels. La question a été remplacée par un principe de prise en charge valable.",
          "source": "C, p. 20-21 (PDF 12).\n",
          "answers": [
            "Évaluer et soutenir les fonctions vitales, traiter l’hypoxémie si présente et commencer rapidement le traitement antithrombotique indiqué"
          ],
          "correct": [
            "Évaluer et soutenir les fonctions vitales, traiter l’hypoxémie si présente et commencer rapidement le traitement antithrombotique indiqué"
          ]
        },
        {
          "originalNumber": 20,
          "type": "qcd",
          "text": "Question 20 — Dans l’AOMI, la palpation recherche une diminution ou une abolition des pouls fémoraux, poplités, tibiaux postérieurs et pédieux.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La comparaison des pouls participe à l’examen artériel. Une anomalie oriente vers une atteinte du débit artériel et se complète par les autres données de l’examen vasculaire.\n\nNote sur le sujet initial : L’examen doit comparer les deux membres ; aucun pouls isolé ne suffit à décrire toute l’atteinte.",
          "source": "R4 ; Assurance Maladie, suivi médical de l’AOMI (lien complémentaire de R4).\nR4 — ESC 2024, maladies artérielles périphériques et aortiques : examen de l’ischémie des membres ; et Assurance Maladie, suivi de l’AOMI.\nhttps://academic.oup.com/eurheartj/article/45/36/3538/7738955\nComplément : suivi de l’AOMI — Assurance Maladie",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 21,
          "type": "qcm",
          "text": "Question 21 — Quelles propositions participent à la définition d’une TVP ? Choisir trois réponses.",
          "options": [
            "Obstruction partielle ou complète d’une veine profonde",
            "Obstruction de l’artère poplitée",
            "Plaque d’athérome dans une veine",
            "Présence d’un thrombus",
            "Coagulation intravasculaire localisée dans le réseau veineux profond"
          ],
          "explanation": "La TVP correspond à la formation d’un thrombus dans une veine profonde. L’atteinte d’une artère n’est pas une TVP et l’athérome est une lésion artérielle, non la définition du thrombus veineux.\n\nNote sur le sujet initial : La dernière proposition a été précisée : le texte original ne mentionnait que « partie de la jambe », sans préciser le réseau veineux.",
          "source": "C, p. 8-9 (PDF 6).\n",
          "answers": [
            "Obstruction partielle ou complète d’une veine profonde",
            "Présence d’un thrombus",
            "Coagulation intravasculaire localisée dans le réseau veineux profond"
          ],
          "correct": [
            "Obstruction partielle ou complète d’une veine profonde",
            "Présence d’un thrombus",
            "Coagulation intravasculaire localisée dans le réseau veineux profond"
          ]
        },
        {
          "originalNumber": 22,
          "type": "qcm",
          "text": "Question 22 — Quels mécanismes ou conséquences peuvent se rencontrer dans une insuffisance cardiaque systolique évoluée ? Choisir quatre réponses.",
          "options": [
            "Dilatation et hypertrophie du muscle cardiaque",
            "Communication interventriculaire obligatoire",
            "Diminution de la contractilité",
            "Stase sanguine favorisant parfois la formation de thrombus",
            "Hypotrophie obligatoire de toutes les cavités",
            "Rétention hydrosodée avec œdèmes et prise de poids"
          ],
          "explanation": "Le remodelage, la baisse de contraction et la congestion peuvent accompagner une IC systolique. Cependant, la définition d’une IC globale est l’association d’une atteinte gauche et droite, et non la présence obligatoire de ces quatre mécanismes chez tous les patients.\n\nNote sur le sujet initial : Le libellé original « on parle d’IC globale lorsqu’il y a » confondait définition, mécanismes et conséquences. Il a été corrigé sans présenter dilatation et hypertrophie comme universelles.",
          "source": "C, p. 23, 28-32 (PDF 13, 16-18).\n",
          "answers": [
            "Dilatation et hypertrophie du muscle cardiaque",
            "Diminution de la contractilité",
            "Stase sanguine favorisant parfois la formation de thrombus",
            "Rétention hydrosodée avec œdèmes et prise de poids"
          ],
          "correct": [
            "Dilatation et hypertrophie du muscle cardiaque",
            "Diminution de la contractilité",
            "Stase sanguine favorisant parfois la formation de thrombus",
            "Rétention hydrosodée avec œdèmes et prise de poids"
          ]
        },
        {
          "originalNumber": 23,
          "type": "qcd",
          "text": "Question 23 — La grossesse au deuxième trimestre, la prise d’une pilule contraceptive et le post-partum sont tous des facteurs strictement obstétricaux d’EP.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La grossesse et le post-partum sont des situations obstétricales à risque. La contraception œstroprogestative est un facteur médicamenteux ou hormonal, et non strictement obstétrical. Le risque de grossesse ne se limite pas au deuxième trimestre.\n\nNote sur le sujet initial : La question distingue ici la réalité du risque de sa classification. Tous les contraceptifs ne présentent pas le même profil thrombotique.",
          "source": "C, p. 10-12 (PDF 7-8).\n",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 24,
          "type": "qcd",
          "text": "Question 24 — L’EP thrombotique est une obstruction d’une artère pulmonaire ou d’une de ses branches par un caillot sanguin.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le thrombus gêne la circulation pulmonaire. Il provient habituellement du réseau veineux profond et migre par le cœur droit.\n\nNote sur le sujet initial : Le terme « thrombotique » précise le type d’embolie décrit.",
          "source": "C, p. 18 (PDF 11).\n",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 25,
          "type": "qcm",
          "text": "Question 25 — Quelles propositions ne sont pas des objectifs du traitement de l’IC gauche ? Choisir deux réponses.",
          "options": [
            "Augmenter la diurèse pour éliminer un excès d’eau et de sel",
            "Améliorer la fonction cardiaque et contrôler les troubles du rythme selon les indications",
            "Réduire la diurèse et augmenter le travail cardiaque",
            "Réduire la charge de travail du cœur",
            "Réduire les résistances vasculaires par une vasodilatation adaptée",
            "Dilater volontairement les cavités cardiaques"
          ],
          "explanation": "Le traitement vise à réduire la congestion et la charge de travail, et à améliorer la fonction et le pronostic. Accroître la rétention et chercher à dilater les cavités ne sont pas des objectifs. Le contrôle du rythme dépend de l’indication et n’implique pas un digitalique pour tous.\n\nNote sur le sujet initial : Les propositions ont été clarifiées sans changer les deux réponses négatives attendues.",
          "source": "C, p. 30-32 (PDF 17-18).\n",
          "answers": [
            "Réduire la diurèse et augmenter le travail cardiaque",
            "Dilater volontairement les cavités cardiaques"
          ],
          "correct": [
            "Réduire la diurèse et augmenter le travail cardiaque",
            "Dilater volontairement les cavités cardiaques"
          ]
        },
        {
          "originalNumber": 26,
          "type": "qcd",
          "text": "Question 26 — L’œdème des membres inférieurs d’origine cardiaque est typiquement unilatéral, indolore et prenant le godet.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "L’œdème cardiaque est habituellement bilatéral, déclive et prenant le godet. Un gonflement unilatéral conduit à rechercher notamment une cause locale. Le cours cite les œdèmes avec prise de poids dans l’IC droite.\n\nNote sur le sujet initial : Le mot incomplet « latérale » du sujet a été remplacé par « unilatéral » pour obtenir une proposition interprétable.",
          "source": "C, p. 29-30 (PDF 16-17) ; R10.\nR10 — Assurance Maladie, Symptômes, diagnostic et évolution de l’insuffisance cardiaque.\nhttps://www.ameli.fr/assure/sante/themes/insuffisance-cardiaque/symptomes-diagnotic-evolution",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 27,
          "type": "qcm",
          "text": "Question 27 — Quelles propositions définissent une insuffisance cardiaque gauche ? Choisir deux réponses.",
          "options": [
            "Incapacité du ventricule gauche à assurer un débit suffisant",
            "Besoins métaboliques et fonctionnels de l’organisme insuffisamment satisfaits",
            "Simple diminution isolée du remplissage de toutes les cavités gauches, suffisante à elle seule au diagnostic"
          ],
          "explanation": "Le cours définit l’IC par l’incapacité à fournir un débit suffisant aux besoins de l’organisme. Il peut exister une anomalie systolique ou de remplissage, mais la troisième proposition ne constitue pas à elle seule une définition correcte.\n\nNote sur le sujet initial : La troisième proposition a été rendue explicite pour éviter de nier l’existence d’IC avec trouble de relaxation ou de remplissage.",
          "source": "C, p. 29 (PDF 16).\n",
          "answers": [
            "Incapacité du ventricule gauche à assurer un débit suffisant",
            "Besoins métaboliques et fonctionnels de l’organisme insuffisamment satisfaits"
          ],
          "correct": [
            "Incapacité du ventricule gauche à assurer un débit suffisant",
            "Besoins métaboliques et fonctionnels de l’organisme insuffisamment satisfaits"
          ]
        },
        {
          "originalNumber": 28,
          "type": "qcm",
          "text": "Question 28 — Chez un patient présentant un OAP avec hypoxémie importante, quelle mesure corrige directement le manque d’oxygène, parmi les suivantes ? Une réponse.",
          "options": [
            "Installation demi-assise si tolérée",
            "Diurétique intraveineux selon prescription",
            "Oxygénothérapie adaptée à la saturation et à l’état respiratoire",
            "Dérivé nitré si indiqué et si la pression artérielle le permet"
          ],
          "explanation": "Le déficit d’oxygénation nécessite une assistance respiratoire adaptée. L’installation, les diurétiques et les vasodilatateurs répondent à d’autres objectifs et peuvent être nécessaires en parallèle. Le traitement ne se résume pas à un débit d’oxygène élevé identique pour tous.\n\nNote sur le sujet initial : « Primordial » était indécidable sans préciser l’état du patient. L’hypoxémie et l’objectif respiratoire sont désormais explicités ; le haut débit systématique a été supprimé.",
          "source": "C, p. 29-32 (PDF 16-18), congestion et thérapeutiques ; R18.\nR18 — ESC 2021, insuffisance cardiaque aiguë et chronique, traitement initial : oxygénation et assistance ventilatoire.\nhttps://doi.org/10.1093/eurheartj/ehab368\nRéférences complémentaires consultées le 28 octobre 2026.",
          "answers": [
            "Oxygénothérapie adaptée à la saturation et à l’état respiratoire"
          ],
          "correct": [
            "Oxygénothérapie adaptée à la saturation et à l’état respiratoire"
          ]
        },
        {
          "originalNumber": 29,
          "type": "qcm",
          "text": "Question 29 — Lors du premier épisode douloureux survenant en bêchant, quel diagnostic est le plus évocateur dans le cas de M. N’Gou Yao ? Une réponse.",
          "options": [
            "Angine de poitrine",
            "Ulcère gastrique",
            "Embolie pulmonaire"
          ],
          "explanation": "Une douleur thoracique provoquée par l’effort chez un patient à risque évoque un angor. Le récit ne rapporte pas assez précisément la durée et la disparition de la première douleur pour prouver à lui seul un angor stable.\n\nNote sur le sujet initial : Il s’agit de l’orientation pédagogique la plus probable, pas d’un diagnostic confirmé sans ECG ni bilan.",
          "source": "Épreuve PDF p. 13-15 ; C, p. 22-24 (PDF 13-14).\n",
          "answers": [
            "Angine de poitrine"
          ],
          "correct": [
            "Angine de poitrine"
          ],
          "caseContext": "M. N’Gou Yao\nHomme de 52 ans, tabagisme et consommation d’alcool importants. Une première douleur thoracique survient pendant qu’il bêche. Le soir, assis, la douleur réapparaît, plus intense et permanente, avec sueurs et angoisse ; elle est oppressante et irradie au bras jusqu’au pouce. Données : 145 kg, 1,78 m, température 37,9 °C, pression artérielle 162/94 mmHg, pouls 98/min, SpO₂ 92 %, glycémie capillaire 2,61 g/L. Le cas est repris aux pages 13 à 35 de l’épreuve.\nUne orientation clinique ne remplace pas la confirmation diagnostique. Une glycémie ou une pression élevée mesurée une seule fois pendant une urgence ne suffit pas à établir à elle seule un diabète ou une HTA chronique."
        },
        {
          "originalNumber": 30,
          "type": "qcd",
          "text": "Question 30 — La douleur survenue pendant l’effort, suivie d’une mise au repos, est un argument orientant vers un angor dans le cas clinique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La relation à l’effort est un élément évocateur d’ischémie myocardique. Le texte indique l’installation au repos, mais ne démontre pas clairement le soulagement ; cet élément ne doit donc pas être inventé.\n\nNote sur le sujet initial : La formulation a été limitée à un argument d’orientation, et non à une preuve suffisante.",
          "source": "Épreuve PDF p. 14 ; C, p. 22-24 (PDF 13-14).\n",
          "answer": "Vrai",
          "correct": "Vrai",
          "caseContext": "M. N’Gou Yao\nHomme de 52 ans, tabagisme et consommation d’alcool importants. Une première douleur thoracique survient pendant qu’il bêche. Le soir, assis, la douleur réapparaît, plus intense et permanente, avec sueurs et angoisse ; elle est oppressante et irradie au bras jusqu’au pouce. Données : 145 kg, 1,78 m, température 37,9 °C, pression artérielle 162/94 mmHg, pouls 98/min, SpO₂ 92 %, glycémie capillaire 2,61 g/L. Le cas est repris aux pages 13 à 35 de l’épreuve.\nUne orientation clinique ne remplace pas la confirmation diagnostique. Une glycémie ou une pression élevée mesurée une seule fois pendant une urgence ne suffit pas à établir à elle seule un diabète ou une HTA chronique."
        },
        {
          "originalNumber": 31,
          "type": "qcm",
          "text": "Question 31 — Parmi ces propositions, quelle est la principale cause habituelle de l’ischémie coronaire décrite ? Une réponse.",
          "options": [
            "Obésité",
            "Traumatisme thoracique",
            "Athérosclérose coronaire"
          ],
          "explanation": "Le cours décrit un thrombus coronaire se formant généralement sur une plaque d’athérome. L’obésité est un facteur favorisant cardiovasculaire ; l’athérosclérose est ici le mécanisme lésionnel principal proposé.\n\nNote sur le sujet initial : Le libellé « facteur majeur » a été remplacé par « cause habituelle », afin de distinguer mécanisme et facteur de risque.",
          "source": "C, p. 22-23 (PDF 13).\n",
          "answers": [
            "Athérosclérose coronaire"
          ],
          "correct": [
            "Athérosclérose coronaire"
          ],
          "caseContext": "M. N’Gou Yao\nHomme de 52 ans, tabagisme et consommation d’alcool importants. Une première douleur thoracique survient pendant qu’il bêche. Le soir, assis, la douleur réapparaît, plus intense et permanente, avec sueurs et angoisse ; elle est oppressante et irradie au bras jusqu’au pouce. Données : 145 kg, 1,78 m, température 37,9 °C, pression artérielle 162/94 mmHg, pouls 98/min, SpO₂ 92 %, glycémie capillaire 2,61 g/L. Le cas est repris aux pages 13 à 35 de l’épreuve.\nUne orientation clinique ne remplace pas la confirmation diagnostique. Une glycémie ou une pression élevée mesurée une seule fois pendant une urgence ne suffit pas à établir à elle seule un diabète ou une HTA chronique."
        },
        {
          "originalNumber": 32,
          "type": "qcd",
          "text": "Question 32 — Selon le texte, la première douleur de M. N’Gou Yao est apparue au repos.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La première douleur survient pendant qu’il bêche une parcelle. C’est le second épisode, plus prolongé et plus intense, qui apparaît alors qu’il est assis.\n\nNote sur le sujet initial : Le terme « première » évite de confondre les deux épisodes du récit.",
          "source": "Épreuve PDF p. 14.\n",
          "answer": "Faux",
          "correct": "Faux",
          "caseContext": "M. N’Gou Yao\nHomme de 52 ans, tabagisme et consommation d’alcool importants. Une première douleur thoracique survient pendant qu’il bêche. Le soir, assis, la douleur réapparaît, plus intense et permanente, avec sueurs et angoisse ; elle est oppressante et irradie au bras jusqu’au pouce. Données : 145 kg, 1,78 m, température 37,9 °C, pression artérielle 162/94 mmHg, pouls 98/min, SpO₂ 92 %, glycémie capillaire 2,61 g/L. Le cas est repris aux pages 13 à 35 de l’épreuve.\nUne orientation clinique ne remplace pas la confirmation diagnostique. Une glycémie ou une pression élevée mesurée une seule fois pendant une urgence ne suffit pas à établir à elle seule un diabète ou une HTA chronique."
        },
        {
          "originalNumber": 33,
          "type": "qcm",
          "text": "Question 33 — Quelles mesures répondent à une crise d’angor connue, dans le cadre prescrit ? Choisir deux réponses.",
          "options": [
            "Arrêter l’effort",
            "Prendre uniquement un antalgique en ignorant une douleur persistante",
            "Utiliser la trinitrine prescrite si elle est indiquée et sans contre-indication"
          ],
          "explanation": "L’arrêt de l’effort et la trinitrine sont les mesures classiques proposées. Une douleur nouvelle, persistante ou différente doit être traitée comme une possible urgence coronaire ; l’antalgie seule ne doit pas retarder l’évaluation.\n\nNote sur le sujet initial : La question précise le cadre prescrit. Elle ne constitue pas une consigne d’automédication devant une douleur thoracique nouvelle.",
          "source": "C, p. 22, 26-27 (PDF 13 et 15).\n",
          "answers": [
            "Arrêter l’effort",
            "Utiliser la trinitrine prescrite si elle est indiquée et sans contre-indication"
          ],
          "correct": [
            "Arrêter l’effort",
            "Utiliser la trinitrine prescrite si elle est indiquée et sans contre-indication"
          ],
          "caseContext": "M. N’Gou Yao\nHomme de 52 ans, tabagisme et consommation d’alcool importants. Une première douleur thoracique survient pendant qu’il bêche. Le soir, assis, la douleur réapparaît, plus intense et permanente, avec sueurs et angoisse ; elle est oppressante et irradie au bras jusqu’au pouce. Données : 145 kg, 1,78 m, température 37,9 °C, pression artérielle 162/94 mmHg, pouls 98/min, SpO₂ 92 %, glycémie capillaire 2,61 g/L. Le cas est repris aux pages 13 à 35 de l’épreuve.\nUne orientation clinique ne remplace pas la confirmation diagnostique. Une glycémie ou une pression élevée mesurée une seule fois pendant une urgence ne suffit pas à établir à elle seule un diabète ou une HTA chronique."
        },
        {
          "originalNumber": 34,
          "type": "qcm",
          "text": "Question 34 — Quelle complication suspecte-t-on devant la douleur plus intense et permanente du soir, avec sueurs et angoisse ? Une réponse.",
          "options": [
            "Mort subite déjà constituée",
            "OAP comme seul diagnostic certain",
            "Infarctus du myocarde"
          ],
          "explanation": "Ce tableau fait suspecter un syndrome coronarien aigu avec possible infarctus. Le patient est vivant et conscient ; le récit ne permet donc pas de conclure à une mort subite. La confirmation repose sur l’ECG et les marqueurs de lésion myocardique.\n\nNote sur le sujet initial : Le mot « suspecte » remplace une certitude diagnostique non documentée.",
          "source": "Épreuve PDF p. 14 ; C, p. 22-25 (PDF 13-14).\n",
          "answers": [
            "Infarctus du myocarde"
          ],
          "correct": [
            "Infarctus du myocarde"
          ],
          "caseContext": "M. N’Gou Yao\nHomme de 52 ans, tabagisme et consommation d’alcool importants. Une première douleur thoracique survient pendant qu’il bêche. Le soir, assis, la douleur réapparaît, plus intense et permanente, avec sueurs et angoisse ; elle est oppressante et irradie au bras jusqu’au pouce. Données : 145 kg, 1,78 m, température 37,9 °C, pression artérielle 162/94 mmHg, pouls 98/min, SpO₂ 92 %, glycémie capillaire 2,61 g/L. Le cas est repris aux pages 13 à 35 de l’épreuve.\nUne orientation clinique ne remplace pas la confirmation diagnostique. Une glycémie ou une pression élevée mesurée une seule fois pendant une urgence ne suffit pas à établir à elle seule un diabète ou une HTA chronique."
        },
        {
          "originalNumber": 35,
          "type": "qcm",
          "text": "Question 35 — Quelle définition correspond à l’infarctus du myocarde ? Une réponse.",
          "options": [
            "Toute douleur thoracique sans lésion myocardique",
            "Nécrose myocardique liée à une ischémie, fréquemment consécutive à une thrombose coronaire",
            "Simple stase du sang dans une veine du mollet"
          ],
          "explanation": "Le critère central est la lésion avec nécrose myocardique dans un contexte ischémique. Le cours décrit le mécanisme fréquent d’occlusion complète d’une coronaire ; une occlusion complète n’est toutefois pas obligatoire dans tous les infarctus.\n\nNote sur le sujet initial : Les propositions originales faisaient de l’obstruction complète une condition universelle. La définition a été corrigée.",
          "source": "C, p. 22-23 (PDF 13) ; R12.\nR12 — ESC 2023, prise en charge des syndromes coronariens aigus, diagnostic, troponines et soins initiaux.\nhttps://academic.oup.com/eurheartj/article/44/38/3720/7243210",
          "answers": [
            "Nécrose myocardique liée à une ischémie, fréquemment consécutive à une thrombose coronaire"
          ],
          "correct": [
            "Nécrose myocardique liée à une ischémie, fréquemment consécutive à une thrombose coronaire"
          ],
          "caseContext": "M. N’Gou Yao\nHomme de 52 ans, tabagisme et consommation d’alcool importants. Une première douleur thoracique survient pendant qu’il bêche. Le soir, assis, la douleur réapparaît, plus intense et permanente, avec sueurs et angoisse ; elle est oppressante et irradie au bras jusqu’au pouce. Données : 145 kg, 1,78 m, température 37,9 °C, pression artérielle 162/94 mmHg, pouls 98/min, SpO₂ 92 %, glycémie capillaire 2,61 g/L. Le cas est repris aux pages 13 à 35 de l’épreuve.\nUne orientation clinique ne remplace pas la confirmation diagnostique. Une glycémie ou une pression élevée mesurée une seule fois pendant une urgence ne suffit pas à établir à elle seule un diabète ou une HTA chronique."
        },
        {
          "originalNumber": 36,
          "type": "qcd",
          "text": "Question 36 — La douleur permanente, plus intense, survenue au repos avec sueurs et angoisse est compatible avec un infarctus suspecté.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Ces éléments décrits sont des signaux d’urgence. Ils justifient une évaluation immédiate mais ne remplacent pas la confirmation par ECG et dosage des troponines.\n\nNote sur le sujet initial : L’énoncé parle désormais de compatibilité clinique, sans prétendre confirmer seul l’infarctus.",
          "source": "Épreuve PDF p. 14 ; C, p. 22-25 (PDF 13-14).\n",
          "answer": "Vrai",
          "correct": "Vrai",
          "caseContext": "M. N’Gou Yao\nHomme de 52 ans, tabagisme et consommation d’alcool importants. Une première douleur thoracique survient pendant qu’il bêche. Le soir, assis, la douleur réapparaît, plus intense et permanente, avec sueurs et angoisse ; elle est oppressante et irradie au bras jusqu’au pouce. Données : 145 kg, 1,78 m, température 37,9 °C, pression artérielle 162/94 mmHg, pouls 98/min, SpO₂ 92 %, glycémie capillaire 2,61 g/L. Le cas est repris aux pages 13 à 35 de l’épreuve.\nUne orientation clinique ne remplace pas la confirmation diagnostique. Une glycémie ou une pression élevée mesurée une seule fois pendant une urgence ne suffit pas à établir à elle seule un diabète ou une HTA chronique."
        },
        {
          "originalNumber": 37,
          "type": "qcm",
          "text": "Question 37 — Parmi les données suivantes, lesquelles ne sont pas en elles-mêmes des facteurs de risque coronarien ? Choisir deux réponses.",
          "options": [
            "Glycémie capillaire de 2,61 g/L, nécessitant une exploration",
            "Poids de 145 kg pour 1,78 m",
            "Pression artérielle de 162/94 mmHg, à contrôler",
            "Pouls de 98/min",
            "Tabagisme et mode de vie à risque décrits",
            "Taille de 1,78 m prise isolément"
          ],
          "explanation": "Le pouls de 98/min et la taille isolée ne sont pas les facteurs de risque attendus. Le poids et la taille donnent un IMC d’environ 45,8 kg/m². La glycémie et la pression artérielle sont anormales, mais une mesure unique en situation aiguë ne confirme pas à elle seule un diabète ou une HTA chronique.\n\nNote sur le sujet initial : La distinction entre facteur établi et anomalie à confirmer a été ajoutée.",
          "source": "Épreuve PDF p. 14 ; C, p. 22 (PDF 13).\n",
          "answers": [
            "Pouls de 98/min",
            "Taille de 1,78 m prise isolément"
          ],
          "correct": [
            "Pouls de 98/min",
            "Taille de 1,78 m prise isolément"
          ],
          "caseContext": "M. N’Gou Yao\nHomme de 52 ans, tabagisme et consommation d’alcool importants. Une première douleur thoracique survient pendant qu’il bêche. Le soir, assis, la douleur réapparaît, plus intense et permanente, avec sueurs et angoisse ; elle est oppressante et irradie au bras jusqu’au pouce. Données : 145 kg, 1,78 m, température 37,9 °C, pression artérielle 162/94 mmHg, pouls 98/min, SpO₂ 92 %, glycémie capillaire 2,61 g/L. Le cas est repris aux pages 13 à 35 de l’épreuve.\nUne orientation clinique ne remplace pas la confirmation diagnostique. Une glycémie ou une pression élevée mesurée une seule fois pendant une urgence ne suffit pas à établir à elle seule un diabète ou une HTA chronique."
        },
        {
          "originalNumber": 38,
          "type": "qcm",
          "text": "Question 38 — Quel marqueur sanguin spécifique de lésion myocardique faut-il privilégier dans une suspicion d’infarctus ? Une réponse.",
          "options": [
            "Troponine cardiaque I ultrasensible",
            "CPK totales",
            "Bilirubine conjuguée"
          ],
          "explanation": "Le cours distingue les troponines des marqueurs non spécifiques tels que les CPK totales. La troponine se lit dans le contexte clinique et selon sa cinétique ; son élévation isolée n’est pas synonyme de tout infarctus. La bilirubine n’est pas un marqueur cardiaque spécifique.\n\nNote sur le sujet initial : Deux réponses étaient demandées alors que seule A est spécifique parmi ces choix. Les CPK peuvent être dosées, mais ne sont pas aussi spécifiques.",
          "source": "C, p. 25 (PDF 14) ; R12.\nR12 — ESC 2023, prise en charge des syndromes coronariens aigus, diagnostic, troponines et soins initiaux.\nhttps://academic.oup.com/eurheartj/article/44/38/3720/7243210",
          "answers": [
            "Troponine cardiaque I ultrasensible"
          ],
          "correct": [
            "Troponine cardiaque I ultrasensible"
          ],
          "caseContext": "M. N’Gou Yao\nHomme de 52 ans, tabagisme et consommation d’alcool importants. Une première douleur thoracique survient pendant qu’il bêche. Le soir, assis, la douleur réapparaît, plus intense et permanente, avec sueurs et angoisse ; elle est oppressante et irradie au bras jusqu’au pouce. Données : 145 kg, 1,78 m, température 37,9 °C, pression artérielle 162/94 mmHg, pouls 98/min, SpO₂ 92 %, glycémie capillaire 2,61 g/L. Le cas est repris aux pages 13 à 35 de l’épreuve.\nUne orientation clinique ne remplace pas la confirmation diagnostique. Une glycémie ou une pression élevée mesurée une seule fois pendant une urgence ne suffit pas à établir à elle seule un diabète ou une HTA chronique."
        },
        {
          "originalNumber": 39,
          "type": "qcd",
          "text": "Question 39 — La troponine I est une enzyme cardiaque qui diminue pendant les quatre premiers jours d’un infarctus.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La troponine est une protéine du complexe contractile, et non une enzyme. Elle s’élève lors d’une lésion myocardique et peut rester élevée plusieurs jours. Le sens de variation indiqué dans l’énoncé est donc faux.\n\nNote sur le sujet initial : Le cours emploie un ancien regroupement sous « diagnostic enzymatique » ; cela ne fait pas de la troponine une enzyme.",
          "source": "C, p. 25 (PDF 14) ; R12.\nR12 — ESC 2023, prise en charge des syndromes coronariens aigus, diagnostic, troponines et soins initiaux.\nhttps://academic.oup.com/eurheartj/article/44/38/3720/7243210",
          "answer": "Faux",
          "correct": "Faux",
          "caseContext": "M. N’Gou Yao\nHomme de 52 ans, tabagisme et consommation d’alcool importants. Une première douleur thoracique survient pendant qu’il bêche. Le soir, assis, la douleur réapparaît, plus intense et permanente, avec sueurs et angoisse ; elle est oppressante et irradie au bras jusqu’au pouce. Données : 145 kg, 1,78 m, température 37,9 °C, pression artérielle 162/94 mmHg, pouls 98/min, SpO₂ 92 %, glycémie capillaire 2,61 g/L. Le cas est repris aux pages 13 à 35 de l’épreuve.\nUne orientation clinique ne remplace pas la confirmation diagnostique. Une glycémie ou une pression élevée mesurée une seule fois pendant une urgence ne suffit pas à établir à elle seule un diabète ou une HTA chronique."
        },
        {
          "originalNumber": 40,
          "type": "qcd",
          "text": "Question 40 — La radiographie thoracique et l’ECG constituent tous deux un bilan radiologique démontrant directement la nécrose myocardique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "L’ECG est un enregistrement électrique, pas une radiographie. Il recherche des anomalies compatibles avec une ischémie ou un infarctus. La radiographie thoracique peut explorer une congestion ou un diagnostic associé, mais ne confirme pas à elle seule une nécrose myocardique.\n\nNote sur le sujet initial : Le libellé original confondait nature des examens et portée diagnostique. Il a été clarifié.",
          "source": "C, p. 22-25 et 27 (PDF 13-15).\n",
          "answer": "Faux",
          "correct": "Faux",
          "caseContext": "M. N’Gou Yao\nHomme de 52 ans, tabagisme et consommation d’alcool importants. Une première douleur thoracique survient pendant qu’il bêche. Le soir, assis, la douleur réapparaît, plus intense et permanente, avec sueurs et angoisse ; elle est oppressante et irradie au bras jusqu’au pouce. Données : 145 kg, 1,78 m, température 37,9 °C, pression artérielle 162/94 mmHg, pouls 98/min, SpO₂ 92 %, glycémie capillaire 2,61 g/L. Le cas est repris aux pages 13 à 35 de l’épreuve.\nUne orientation clinique ne remplace pas la confirmation diagnostique. Une glycémie ou une pression élevée mesurée une seule fois pendant une urgence ne suffit pas à établir à elle seule un diabète ou une HTA chronique."
        },
        {
          "originalNumber": 41,
          "type": "qcd",
          "text": "Question 41 — Le sérum salé isotonique doit être perfusé abondamment et systématiquement à tout patient présentant un infarctus.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le cours autorise une voie veineuse avec soluté salé, ou glucosé comme véhicule de médicaments. Cela ne signifie pas qu’un remplissage abondant est systématique. Les apports dépendent de l’état hémodynamique et de la présence éventuelle de congestion.\n\nNote sur le sujet initial : L’énoncé initial « fortement conseillé » était ambigu. Il faut distinguer la pose d’une voie veineuse du remplissage vasculaire.",
          "source": "C, p. 27 et 29-32 (PDF 15-18).\n",
          "answer": "Faux",
          "correct": "Faux",
          "caseContext": "M. N’Gou Yao\nHomme de 52 ans, tabagisme et consommation d’alcool importants. Une première douleur thoracique survient pendant qu’il bêche. Le soir, assis, la douleur réapparaît, plus intense et permanente, avec sueurs et angoisse ; elle est oppressante et irradie au bras jusqu’au pouce. Données : 145 kg, 1,78 m, température 37,9 °C, pression artérielle 162/94 mmHg, pouls 98/min, SpO₂ 92 %, glycémie capillaire 2,61 g/L. Le cas est repris aux pages 13 à 35 de l’épreuve.\nUne orientation clinique ne remplace pas la confirmation diagnostique. Une glycémie ou une pression élevée mesurée une seule fois pendant une urgence ne suffit pas à établir à elle seule un diabète ou une HTA chronique."
        },
        {
          "originalNumber": 42,
          "type": "qcm",
          "text": "Question 42 — Quelle stratégie initiale est correcte devant un infarctus suspecté ? Une réponse.",
          "options": [
            "Alerter, obtenir rapidement l’ECG, monitorer, poser une voie veineuse, réaliser les soins prescrits et organiser sans retard la prise en charge spécialisée et la reperfusion si indiquée",
            "Administrer des antalgiques intramusculaires puis attendre leur effet avant d’alerter",
            "Attendre tous les résultats biologiques avant tout ECG et transfert"
          ],
          "explanation": "Le cours insiste sur l’ECG précoce, la surveillance et le transfert rapide vers une unité spécialisée. Les traitements sont adaptés à l’état clinique ; l’oxygène n’est pas systématique sans hypoxémie. La reperfusion dépend du diagnostic et de l’organisation disponible.\n\nNote sur le sujet initial : Les séquences initiales proposées étaient incomplètes ou comportaient des gestes discutables. Les options ont été remplacées pour obtenir une réponse utilisable.",
          "source": "C, p. 22, 25-27 (PDF 13-15) ; R12.\nR12 — ESC 2023, prise en charge des syndromes coronariens aigus, diagnostic, troponines et soins initiaux.\nhttps://academic.oup.com/eurheartj/article/44/38/3720/7243210",
          "answers": [
            "Alerter, obtenir rapidement l’ECG, monitorer, poser une voie veineuse, réaliser les soins prescrits et organiser sans retard la prise en charge spécialisée et la reperfusion si indiquée"
          ],
          "correct": [
            "Alerter, obtenir rapidement l’ECG, monitorer, poser une voie veineuse, réaliser les soins prescrits et organiser sans retard la prise en charge spécialisée et la reperfusion si indiquée"
          ],
          "caseContext": "M. N’Gou Yao\nHomme de 52 ans, tabagisme et consommation d’alcool importants. Une première douleur thoracique survient pendant qu’il bêche. Le soir, assis, la douleur réapparaît, plus intense et permanente, avec sueurs et angoisse ; elle est oppressante et irradie au bras jusqu’au pouce. Données : 145 kg, 1,78 m, température 37,9 °C, pression artérielle 162/94 mmHg, pouls 98/min, SpO₂ 92 %, glycémie capillaire 2,61 g/L. Le cas est repris aux pages 13 à 35 de l’épreuve.\nUne orientation clinique ne remplace pas la confirmation diagnostique. Une glycémie ou une pression élevée mesurée une seule fois pendant une urgence ne suffit pas à établir à elle seule un diabète ou une HTA chronique."
        },
        {
          "originalNumber": 43,
          "type": "qcm",
          "text": "Question 43 — Quel contenu d’éducation thérapeutique est le plus complet après un infarctus ? Une réponse.",
          "options": [
            "Informations générales sans aborder l’observance",
            "Maladie, facteurs de risque, effets indésirables, mesures hygiénodiététiques, observance et suivi au long cours",
            "Explication rendant facultatives l’observance et les mesures de prévention"
          ],
          "explanation": "L’éducation porte sur les traitements, les facteurs de risque et le suivi durable. Le patient doit savoir signaler les effets indésirables et ne pas arrêter seul les médicaments. La durée de chaque médicament est individualisée ; « traitement à vie » ne signifie pas que tous les médicaments ont une durée identique.\n\nNote sur le sujet initial : La réponse B originale a été conservée dans son esprit et clarifiée concernant les durées de traitement.",
          "source": "C, p. 26-27 (PDF 15) ; C, p. 33 (PDF 18), principes d’éducation.\n",
          "answers": [
            "Maladie, facteurs de risque, effets indésirables, mesures hygiénodiététiques, observance et suivi au long cours"
          ],
          "correct": [
            "Maladie, facteurs de risque, effets indésirables, mesures hygiénodiététiques, observance et suivi au long cours"
          ],
          "caseContext": "M. N’Gou Yao\nHomme de 52 ans, tabagisme et consommation d’alcool importants. Une première douleur thoracique survient pendant qu’il bêche. Le soir, assis, la douleur réapparaît, plus intense et permanente, avec sueurs et angoisse ; elle est oppressante et irradie au bras jusqu’au pouce. Données : 145 kg, 1,78 m, température 37,9 °C, pression artérielle 162/94 mmHg, pouls 98/min, SpO₂ 92 %, glycémie capillaire 2,61 g/L. Le cas est repris aux pages 13 à 35 de l’épreuve.\nUne orientation clinique ne remplace pas la confirmation diagnostique. Une glycémie ou une pression élevée mesurée une seule fois pendant une urgence ne suffit pas à établir à elle seule un diabète ou une HTA chronique."
        },
        {
          "originalNumber": 44,
          "type": "qcm",
          "text": "Question 44 — Quelles complications peuvent apparaître précocement après un infarctus ? Choisir trois réponses.",
          "options": [
            "Insuffisance cardiaque gauche",
            "Angor d’effort comme définition d’une complication aiguë",
            "Péricardite précoce",
            "Troubles de la conduction",
            "Embolie pulmonaire comme complication directe habituelle des premières heures",
            "Toute récidive d’infarctus obligatoirement avant 48 heures"
          ],
          "explanation": "L’IC et les troubles de conduction font partie des complications décrites dans le cours. Une péricardite précoce peut aussi survenir dans les premiers jours ; elle n’est pas strictement limitée aux 48 premières heures. Une récidive est possible mais n’est pas définie par ce délai.\n\nNote sur le sujet initial : La limite stricte « ≤ 48 h » a été supprimée : elle ne permettait pas de retenir sans ambiguïté trois réponses, notamment pour la péricardite.",
          "source": "C, p. 28 (PDF 16) ; R13.\nR13 — ESC 2023, rubrique 12.2.4, péricardite après syndrome coronarien aigu.\nhttps://academic.oup.com/ehjacc/article/13/1/55/7280662",
          "answers": [
            "Insuffisance cardiaque gauche",
            "Péricardite précoce",
            "Troubles de la conduction"
          ],
          "correct": [
            "Insuffisance cardiaque gauche",
            "Péricardite précoce",
            "Troubles de la conduction"
          ],
          "caseContext": "M. N’Gou Yao\nHomme de 52 ans, tabagisme et consommation d’alcool importants. Une première douleur thoracique survient pendant qu’il bêche. Le soir, assis, la douleur réapparaît, plus intense et permanente, avec sueurs et angoisse ; elle est oppressante et irradie au bras jusqu’au pouce. Données : 145 kg, 1,78 m, température 37,9 °C, pression artérielle 162/94 mmHg, pouls 98/min, SpO₂ 92 %, glycémie capillaire 2,61 g/L. Le cas est repris aux pages 13 à 35 de l’épreuve.\nUne orientation clinique ne remplace pas la confirmation diagnostique. Une glycémie ou une pression élevée mesurée une seule fois pendant une urgence ne suffit pas à établir à elle seule un diabète ou une HTA chronique."
        },
        {
          "originalNumber": 45,
          "type": "qcm",
          "text": "Question 45 — Quels éléments peuvent favoriser une maladie thromboembolique veineuse ? Cocher toutes les réponses exactes.",
          "options": [
            "Traumatisme thoracique isolé sans immobilisation, comme facteur spécifique",
            "Obésité et sédentarité",
            "Chirurgie majeure avec anesthésie générale et immobilisation",
            "Post-partum et post-abortum",
            "Contraception œstroprogestative",
            "Paludisme neurologique considéré comme facteur spécifique indépendant"
          ],
          "explanation": "Le cours cite l’obésité, l’immobilisation, les circonstances chirurgicales et obstétricales, ainsi que les œstroprogestatifs. Le risque d’une maladie grave peut dépendre de l’immobilisation ou d’autres éléments, mais le paludisme neurologique n’est pas un facteur spécifique de la liste. Un traumatisme ne se résume pas non plus à sa localisation thoracique.\n\nNote sur le sujet initial : Quatre propositions sont retenues. Les formulations des distracteurs ont été précisées et la limite de trois choix a été supprimée.",
          "source": "C, p. 10-12 (PDF 7-8).\n",
          "answers": [
            "Obésité et sédentarité",
            "Chirurgie majeure avec anesthésie générale et immobilisation",
            "Post-partum et post-abortum",
            "Contraception œstroprogestative"
          ],
          "correct": [
            "Obésité et sédentarité",
            "Chirurgie majeure avec anesthésie générale et immobilisation",
            "Post-partum et post-abortum",
            "Contraception œstroprogestative"
          ]
        },
        {
          "originalNumber": 46,
          "type": "qcm",
          "text": "Question 46 — Quels éléments relèvent des soins infirmiers initiaux d’une EP chez un patient conscient et dyspnéique ? Choisir deux réponses.",
          "options": [
            "Imposer une position latérale de sécurité à tout patient conscient",
            "Installer dans une position demi-assise si tolérée, rassurer et mettre le matériel utile à portée",
            "Évaluer les constantes, poser une voie veineuse selon le protocole et alerter le médecin"
          ],
          "explanation": "Le cours associe installation, information, oxygénation adaptée, monitorage et abord veineux. La PLS répond à des indications précises et n’est pas la position systématique d’un patient conscient. L’installation doit rester adaptée à la pression artérielle et à la tolérance.\n\nNote sur le sujet initial : Le contexte de conscience et de tolérance est précisé. L’alitement et la reprise de mobilisation sont adaptés à la phase et à la stabilité clinique.",
          "source": "C, p. 20-21 (PDF 12).\n",
          "answers": [
            "Installer dans une position demi-assise si tolérée, rassurer et mettre le matériel utile à portée",
            "Évaluer les constantes, poser une voie veineuse selon le protocole et alerter le médecin"
          ],
          "correct": [
            "Installer dans une position demi-assise si tolérée, rassurer et mettre le matériel utile à portée",
            "Évaluer les constantes, poser une voie veineuse selon le protocole et alerter le médecin"
          ]
        },
        {
          "originalNumber": 47,
          "type": "qcd",
          "text": "Question 47 — La prévention des décompensations d’IC inclut une activité physique adaptée, la gestion du stress et l’observance des mesures hygiénodiététiques.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le cours recommande l’éducation, les mesures alimentaires et une activité régulière après réadaptation. Cette activité s’adapte à l’état du patient : une décompensation aiguë n’appelle pas un effort imposé.\n\nNote sur le sujet initial : « Éviction du stress » a été rendu plus réaliste par « gestion du stress ».",
          "source": "C, p. 30 et 33 (PDF 17-18).\n",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 48,
          "type": "qcd",
          "text": "Question 48 — L’éducation dans l’EP comprend l’explication des soins, la recherche de l’adhésion et l’information sur les risques du traitement.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le cours recommande d’informer sur la maladie, la régularité des prises et les signes hémorragiques. Le patient doit aussi connaître les précautions et l’importance du suivi.\n\nNote sur le sujet initial : L’information ne se limite pas aux risques : elle précise aussi les bénéfices et les modalités de traitement.",
          "source": "C, p. 16-17 et 21 (PDF 10 et 12).\n",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 49,
          "type": "qcm",
          "text": "Question 49 — Parmi ces examens, lequel ne fait pas partie du bilan spécifique ou du retentissement d’une EP ? Une réponse.",
          "options": [
            "Angioscanner thoracique",
            "Hémostase et NFS avant ou pendant certains traitements",
            "Goutte épaisse pour le paludisme",
            "Gaz du sang",
            "Échographie cardiaque selon la situation",
            "Troponine pour l’évaluation pronostique dans certaines EP"
          ],
          "explanation": "La goutte épaisse recherche un paludisme et non une EP. Les autres examens peuvent contribuer au diagnostic, au bilan de départ, à la sécurité thérapeutique ou à l’évaluation du retentissement. Une troponine n’est donc pas à exclure simplement parce qu’elle est également utilisée dans l’infarctus.\n\nNote sur le sujet initial : La limite originale de trois réponses négatives était fausse. Une seule proposition est exclue ici.",
          "source": "C, p. 19-21 (PDF 11-12) ; R14.\nR14 — ESC/ERS 2019, embolie pulmonaire : évaluation pronostique, dysfonction ventriculaire droite et troponines.\nhttps://doi.org/10.1183/13993003.01647-2019",
          "answers": [
            "Goutte épaisse pour le paludisme"
          ],
          "correct": [
            "Goutte épaisse pour le paludisme"
          ]
        },
        {
          "originalNumber": 50,
          "type": "qcm",
          "text": "Question 50 — Quel intervalle de taux de prothrombine est indiqué dans ton cours pour le suivi historique d’un traitement par AVK ? Une réponse.",
          "options": [
            "30 à 35 %",
            "20 à 30 %",
            "20 à 35 %"
          ],
          "explanation": "Le cours indique TP de 20 à 35 % et INR supérieur à 2. Cette réponse est celle du support pédagogique. En pratique, la surveillance des AVK s’appuie sur l’INR et une cible propre à l’indication ; le TP ne remplace pas cette interprétation.\n\nNote sur le sujet initial : Le libellé précise « selon ton cours » pour ne pas transformer ce repère historique en cible universelle actuelle.",
          "source": "C, p. 16 (PDF 10) ; R2.\nR2 — NICE NG158, Evidence review D, anticoagulation des TVP/EP : intervalle thérapeutique de l’INR sous AVK.\nhttps://www.nice.org.uk/guidance/ng158/evidence/d-pharmacological-treatment-pdf-8710588337",
          "answers": [
            "20 à 35 %"
          ],
          "correct": [
            "20 à 35 %"
          ]
        },
        {
          "originalNumber": 51,
          "type": "qcm",
          "text": "Question 51 — Quels signes cliniques, fonctionnels ou physiques, sont compatibles avec une IC gauche ? Choisir deux réponses.",
          "options": [
            "Dyspnée d’effort et toux",
            "Fièvre avec épistaxis comme association typique",
            "Galop gauche et râles crépitants à l’auscultation"
          ],
          "explanation": "La dyspnée et la toux sont fonctionnelles, car ressenties et rapportées. Le galop et les râles sont des signes physiques constatés à l’examen. Leur association peut orienter vers une IC gauche, mais il ne faut pas les classer tous comme signes fonctionnels.\n\nNote sur le sujet initial : Le mot « fonctionnels » seul rendait la consigne de deux réponses incorrecte ; la question inclut désormais les signes physiques.",
          "source": "C, p. 29-30 (PDF 16-17).\n",
          "answers": [
            "Dyspnée d’effort et toux",
            "Galop gauche et râles crépitants à l’auscultation"
          ],
          "correct": [
            "Dyspnée d’effort et toux",
            "Galop gauche et râles crépitants à l’auscultation"
          ]
        },
        {
          "originalNumber": 52,
          "type": "qcm",
          "text": "Question 52 — Quelles propositions ne sont pas des facteurs classiques directs d’athérosclérose responsables d’AOMI ? Choisir deux réponses.",
          "options": [
            "Hypercholestérolémie",
            "Hypertension artérielle",
            "Thrombose veineuse profonde",
            "Obésité",
            "Consommation de sel prise isolément, sans passer par son effet tensionnel"
          ],
          "explanation": "La TVP est une maladie veineuse et non un facteur d’athérosclérose artérielle. L’hypercholestérolémie, l’HTA et l’obésité sont des facteurs cardiovasculaires. Le sel peut augmenter le risque par son effet sur la pression artérielle : il ne doit pas être présenté comme totalement sans risque.\n\nNote sur le sujet initial : L’expression « direct » et la précision sur le sel évitent une interprétation trompeuse du distracteur E.",
          "source": "R3.\nR3 — Assurance Maladie, AOMI : définition, causes et facteurs de risque.\nhttps://www.ameli.fr/assure/sante/themes/arteriopathie-obliterante-arterite-des-membres-inferieurs/definition-causes-facteurs-risque",
          "answers": [
            "Thrombose veineuse profonde",
            "Consommation de sel prise isolément, sans passer par son effet tensionnel"
          ],
          "correct": [
            "Thrombose veineuse profonde",
            "Consommation de sel prise isolément, sans passer par son effet tensionnel"
          ]
        },
        {
          "originalNumber": 53,
          "type": "qcm",
          "text": "Question 53 — Quelles caractéristiques sont évocatrices de la douleur d’EP décrite dans le cours ? Choisir deux réponses.",
          "options": [
            "Douleur thoracique unilatérale d’installation brutale",
            "Irradiation typique le long du bras jusqu’au pouce",
            "Douleur à type de point de côté ou de coup de poignard"
          ],
          "explanation": "Le cours décrit une douleur latérale, brutale, parfois en coup de poignard. Une irradiation au bras est plus évocatrice d’un syndrome coronarien dans ce sujet, sans permettre à elle seule de trancher un diagnostic.\n\nNote sur le sujet initial : La proposition C originale associait « constrictive, en étau » à « coup de poignard » : ce mélange a été supprimé.",
          "source": "C, p. 18 (PDF 11).\n",
          "answers": [
            "Douleur thoracique unilatérale d’installation brutale",
            "Douleur à type de point de côté ou de coup de poignard"
          ],
          "correct": [
            "Douleur thoracique unilatérale d’installation brutale",
            "Douleur à type de point de côté ou de coup de poignard"
          ]
        },
        {
          "originalNumber": 54,
          "type": "qcm",
          "text": "Question 54 — Quelles propositions décrivent correctement un OAP cardiogénique ? Choisir quatre réponses.",
          "options": [
            "Obstruction des alvéoles par un thrombus",
            "Inondation des alvéoles par du liquide",
            "Passage de liquide des capillaires vers l’interstitium puis les alvéoles sous l’effet d’une pression élevée",
            "L’excès de liquide alvéolaire est normalement évacué directement vers le cœur",
            "Altération des échanges gazeux",
            "Défaillance cardiaque pouvant provoquer la congestion pulmonaire"
          ],
          "explanation": "L’OAP cardiogénique résulte d’une congestion avec accumulation de liquide dans le poumon. Le thrombus n’obstrue pas les alvéoles. L’IC gauche peut provoquer un OAP, mais les deux termes ne sont pas synonymes : l’OAP est une manifestation aiguë possible.\n\nNote sur le sujet initial : La proposition sur la fuite liquidienne et la relation entre OAP et IC gauche ont été corrigées.",
          "source": "C, p. 29-32 (PDF 16-18) ; R10.\nR10 — Assurance Maladie, Symptômes, diagnostic et évolution de l’insuffisance cardiaque.\nhttps://www.ameli.fr/assure/sante/themes/insuffisance-cardiaque/symptomes-diagnotic-evolution",
          "answers": [
            "Inondation des alvéoles par du liquide",
            "Passage de liquide des capillaires vers l’interstitium puis les alvéoles sous l’effet d’une pression élevée",
            "Altération des échanges gazeux",
            "Défaillance cardiaque pouvant provoquer la congestion pulmonaire"
          ],
          "correct": [
            "Inondation des alvéoles par du liquide",
            "Passage de liquide des capillaires vers l’interstitium puis les alvéoles sous l’effet d’une pression élevée",
            "Altération des échanges gazeux",
            "Défaillance cardiaque pouvant provoquer la congestion pulmonaire"
          ]
        },
        {
          "originalNumber": 55,
          "type": "qcm",
          "text": "Question 55 — Quelles situations peuvent entraîner ou favoriser une défaillance cardiaque droite ? Cocher toutes les réponses exactes.",
          "options": [
            "Insuffisance ventriculaire gauche évoluée",
            "OAP comme cause indépendante obligatoire",
            "Embolie pulmonaire importante",
            "Maladie pulmonaire chronique avec retentissement vasculaire pulmonaire",
            "Péricardite constrictive",
            "Rétrécissement mitral évolué avec hypertension pulmonaire"
          ],
          "explanation": "Une charge anormale du ventricule droit peut résulter d’une maladie pulmonaire ou d’une EP. Une atteinte gauche ou mitrale peut retentir sur la circulation pulmonaire puis le cœur droit. La péricardite doit être précisée comme constrictive ; toute péricardite aiguë ne provoque pas une IC droite.\n\nNote sur le sujet initial : La liste originale demandait quatre réponses tout en employant « péricardite » de façon trop large. Les conditions ont été précisées et la limite imposée supprimée.",
          "source": "C, p. 19, 29 (PDF 11 et 16) ; R15.\nR15 — ESC, Right ventricular failure, rubrique Causes of right heart failure.\nhttps://www.escardio.org/communities/councils/cardiology-practice/scientific-documents-and-publications/ejournal/volume-14/Right-ventricular-failure/",
          "answers": [
            "Insuffisance ventriculaire gauche évoluée",
            "Embolie pulmonaire importante",
            "Maladie pulmonaire chronique avec retentissement vasculaire pulmonaire",
            "Péricardite constrictive",
            "Rétrécissement mitral évolué avec hypertension pulmonaire"
          ],
          "correct": [
            "Insuffisance ventriculaire gauche évoluée",
            "Embolie pulmonaire importante",
            "Maladie pulmonaire chronique avec retentissement vasculaire pulmonaire",
            "Péricardite constrictive",
            "Rétrécissement mitral évolué avec hypertension pulmonaire"
          ]
        },
        {
          "originalNumber": 56,
          "type": "qcm",
          "text": "Question 56 — Quel élément n’est pas un signe typique de stase veineuse systémique d’IC droite ? Une réponse.",
          "options": [
            "Turgescence jugulaire",
            "Dyspnée à type de polypnée",
            "Œdème des membres inférieurs"
          ],
          "explanation": "La turgescence jugulaire et les œdèmes sont des signes de congestion veineuse systémique. La dyspnée peut coexister, notamment dans une atteinte globale ou pulmonaire, mais elle n’est pas elle-même un signe de stase périphérique.\n\nNote sur le sujet initial : L’exception concerne le mécanisme de stase, pas l’impossibilité absolue d’une dyspnée dans une IC droite.",
          "source": "C, p. 29 (PDF 16).\n",
          "answers": [
            "Dyspnée à type de polypnée"
          ],
          "correct": [
            "Dyspnée à type de polypnée"
          ]
        },
        {
          "originalNumber": 57,
          "type": "qcd",
          "text": "Question 57 — L’AOMI correspond à une obstruction partielle ou totale d’une ou plusieurs artères des membres inférieurs, réduisant l’apport de sang et d’oxygène.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La diminution de perfusion artérielle entraîne une ischémie en aval. Elle est le plus souvent liée à des lésions d’athérosclérose.\n\nNote sur le sujet initial : La définition concerne les artères, contrairement à l’insuffisance veineuse.",
          "source": "R3.\nR3 — Assurance Maladie, AOMI : définition, causes et facteurs de risque.\nhttps://www.ameli.fr/assure/sante/themes/arteriopathie-obliterante-arterite-des-membres-inferieurs/definition-causes-facteurs-risque",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 58,
          "type": "qcd",
          "text": "Question 58 — Une hémoptysie peut survenir au cours d’une EP avec infarctus pulmonaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Une lésion hémorragique ou un infarctus du territoire pulmonaire peut entraîner des crachats sanglants. Cependant, toute EP n’entraîne pas une nécrose et toute hémoptysie n’est pas due à une EP.\n\nNote sur le sujet initial : Le lien obligatoire « à cause de la nécrose » a été remplacé par une association possible.",
          "source": "C, p. 18 (PDF 11) ; R16.\nR16 — ESC/ERS 2019, embolie pulmonaire : physiopathologie de l’infarctus et de l’hémorragie alvéolaires.\nhttps://publications.ersnet.org/content/erj/early/2019/08/29/13993003.01647-2019.full.pdf",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 59,
          "type": "qcm",
          "text": "Question 59 — Quel stade de Leriche et Fontaine correspond à la claudication intermittente ? Une réponse.",
          "options": [
            "Stade II",
            "Stade III",
            "Stade IV"
          ],
          "explanation": "Le stade II correspond à la douleur d’ischémie d’effort. Le stade III correspond à la douleur de repos et le stade IV aux troubles trophiques avec ulcération ou nécrose.\n\nNote sur le sujet initial : La classification historique demandée est conservée.",
          "source": "R17.\nR17 — HAS, Commission de la transparence, rubrique 4.2.1 : classification de Leriche et Fontaine.\nhttps://www.has-sante.fr/upload/docs/application/pdf/ct032827.pdf",
          "answers": [
            "Stade II"
          ],
          "correct": [
            "Stade II"
          ]
        },
        {
          "originalNumber": 60,
          "type": "qcd",
          "text": "Question 60 — Dans un OAP, des troubles de conscience, une cyanose, des sueurs et une chute de pression artérielle sont des signes de gravité.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Ces signes font craindre une défaillance respiratoire et circulatoire et nécessitent une prise en charge urgente. Un pouls faible ou ralenti peut accompagner une décompensation avancée ; le pouls n’est pas obligatoirement lent dans tous les OAP graves.\n\nNote sur le sujet initial : L’énoncé original se terminait après « une pression artérielle et un pouls bas » sans conclusion. Il était non cotable ; une phrase complète a été proposée.",
          "source": "C, p. 30 et 32 (PDF 17-18) ; R11.\nR11 — Assurance Maladie, Essoufflement brutal : signes de décompensation respiratoire et de gravité.\nhttps://www.ameli.fr/assure/sante/themes/essoufflement-recent/je-suis-brutalement-essouffle-et-j-ai-du-mal-respirer-que-faire",
          "answer": "Vrai",
          "correct": "Vrai"
        }
      ],
      "filiere": "IDE",
      "year": "2026"
    },
    {
      "id": "cardiologie-abg-2021",
      "title": "Abengourou 2021 — Cardiologie · Compo sur table",
      "matter": "Cardiologie — Compo sur table",
      "description": "Abengourou 2021 — L3 IDE — 27 questions corrigées.",
      "instructions": "QCD : Vrai ou Faux. QCM : cocher la ou les bonnes réponses selon la consigne. Énoncés abrégés du corrigé ; propositions transcrites du sujet original. Les items signalés ambigus sont exclus de la note. Le corrigé pédagogique ne constitue pas un barème officiel.",
      "duration": 60,
      "programmed": true,
      "openDate": "2026-01-01",
      "openTime": "00:00",
      "closeDate": "2030-12-31",
      "closeTime": "23:59",
      "marking": {
        "correct": 1,
        "wrong": -1,
        "empty": 0
      },
      "questions": [
        {
          "originalNumber": 1,
          "text": "Question 1 — La PA peut être mesurée dix minutes après un repas.",
          "explanation": "Réponse du corrigé : Faux\n\nPour une mesure standardisée, éviter de manger dans les trente minutes précédentes, puis respecter le repos préalable.",
          "source": "S1 ; cours p. 3–4.\nS1 — Assurance Maladie — Mesurer sa tension à domicile\nhttps://www.ameli.fr/assure/sante/bons-gestes/soins/prendre-tension-arterielle-domicile",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 2,
          "text": "Question 2 — La mesure sur le bras porteur d’une perfusion est contre indiquée.",
          "explanation": "Réponse du corrigé : Vrai attendu\n\nUtiliser de préférence l’autre bras : la perfusion et les contraintes locales peuvent gêner la mesure. La conduite en situation exceptionnelle dépend du protocole.",
          "source": "Cours p. 3–4.\n",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 3,
          "text": "Question 3 — Le spasme d’une veine coronaire peut provoquer un infarctus.",
          "explanation": "Réponse du corrigé : Faux\n\nIl s’agit d’une artère coronaire. Le spasme artériel prolongé peut entraîner une ischémie myocardique.",
          "source": "Cours p. 22–23.\n",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 4,
          "text": "Question 4 — Tout saignement par surdosage d’anticoagulant se traite par vitamine K1.",
          "explanation": "Réponse du corrigé : Faux\n\nLa vitamine K concerne les AVK. La protamine neutralise l’héparine non fractionnée. La prise en charge dépend du produit et de la gravité.",
          "source": "Cours p. 14–17 ; S2.\nS2 — Base publique des médicaments — Protamine, neutralisation de l’héparine\nhttps://base-donnees-publique.medicaments.gouv.fr/medicament/60037327/extrait",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 5,
          "text": "Question 5 — Dans la péricardite aiguë, le pouls s’accélère pendant l’inspiration profonde.\n[Item ambigu ou invalide : réponse libre d’entraînement, exclu de la note. Voir le corrigé à la fin.]",
          "explanation": "Réponse du corrigé : Faux attendu ; formulation peu spécifique\n\nL’accélération inspiratoire peut être physiologique et ne caractérise pas la péricardite. La douleur positionnelle et le frottement péricardique sont plus évocateurs.",
          "source": "S3.\nS3 — Société européenne de cardiologie — Diagnostic de la péricardite aiguë\nhttps://www.escardio.org/communities/councils/cardiology-practice/scientific-documents-and-publications/ejournal/volume-15/Diagnosis-of-acute-pericarditis/",
          "ungraded": true,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 6,
          "text": "Question 6 — La douleur de péricardite est exacerbée en position assise ou penchée en avant.",
          "explanation": "Réponse du corrigé : Faux\n\nElle est généralement soulagée en position assise penchée en avant, et aggravée par le décubitus ou l’inspiration.",
          "source": "Cours p. 24 ; S3.\nS3 — Société européenne de cardiologie — Diagnostic de la péricardite aiguë\nhttps://www.escardio.org/communities/councils/cardiology-practice/scientific-documents-and-publications/ejournal/volume-15/Diagnosis-of-acute-pericarditis/",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 7,
          "text": "Question 7 — Le tabac augmente la PA de 5 à 10 mmHg dans les quinze à trente minutes.",
          "explanation": "Réponse du corrigé : Vrai dans l’esprit du cours\n\nLe tabac provoque une élévation transitoire de la PA. L’amplitude et la durée annoncées sont des estimations, variables selon les personnes.",
          "source": "S1 ; cours p. 7.\nS1 — Assurance Maladie — Mesurer sa tension à domicile\nhttps://www.ameli.fr/assure/sante/bons-gestes/soins/prendre-tension-arterielle-domicile",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 8,
          "text": "Question 8 — Une activité physique une fois par semaine peut faire baisser la PA.\n[Item ambigu ou invalide : réponse libre d’entraînement, exclu de la note. Voir le corrigé à la fin.]",
          "explanation": "Réponse du corrigé : Item ambigu\n\nUne séance peut avoir un effet transitoire. Si la question vise le rythme recommandé, une séance hebdomadaire est insuffisante : l’activité doit être régulière. Ne pas transformer « peut » en « suffit ».",
          "source": "S4.\nS4 — OMS — Hypertension et activité physique\nhttps://www.who.int/fr/news-room/fact-sheets/detail/hypertension%E2%81%A3%E2%81%A3",
          "ungraded": true,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 9,
          "text": "Question 9 — Seul le lever précoce prévient la phlébite des membres inférieurs.",
          "explanation": "Réponse du corrigé : Faux\n\nLa prévention associe selon le risque mobilisation, mesures mécaniques et parfois anticoagulation prescrite.",
          "source": "Cours p. 10–13.\n",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 10,
          "text": "Question 10 — Les AVK augmentent la fluidité du sang.\n[Item ambigu ou invalide : réponse libre d’entraînement, exclu de la note. Voir le corrigé à la fin.]",
          "explanation": "Réponse du corrigé : Vrai au sens usuel ; terme imprécis\n\n« Fluidifiant » est une expression courante pour anticoagulant. Les AVK réduisent la coagulation ; ils ne diminuent pas directement la viscosité sanguine. Une correction strictement physiologique doit préciser cette distinction.",
          "source": "Cours p. 16–17.\n",
          "ungraded": true,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 11,
          "text": "Question 11 — Un apport liquidien excessif peut provoquer un OAP.",
          "explanation": "Réponse du corrigé : Vrai\n\nUne surcharge hydrosodée peut favoriser une congestion pulmonaire, notamment lorsque le cœur ou les reins ne peuvent pas l’éliminer.",
          "source": "Cours p. 28–32.\n",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 12,
          "text": "Question 12 — Une bulle d’air dans la circulation est une cause d’OAP.",
          "explanation": "Réponse du corrigé : Faux attendu\n\nLa complication directement décrite est une embolie gazeuse. Elle ne correspond pas au mécanisme habituel de l’OAP cardiogénique ; des atteintes pulmonaires secondaires restent possibles dans les formes graves.",
          "source": "Cours p. 18 et 28–29.\n",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 13,
          "text": "Question 13 — Unité d’une PA notée 18 sur 10.",
          "explanation": "Réponse du corrigé : B — centimètres de mercure\n\n18/10 cmHg correspond à 180/100 mmHg.",
          "source": "Cours p. 2–3.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Millimètre",
            "Centimètre"
          ],
          "answers": [
            "Centimètre"
          ],
          "correct": [
            "Centimètre"
          ]
        },
        {
          "originalNumber": 14,
          "text": "Question 14 — La mobilisation active ou passive prévient quelle pathologie ?",
          "explanation": "Réponse du corrigé : A — thrombophlébite ; C — embolie pulmonaire indirectement\n\nElle réduit la stase veineuse et le risque de TVP. En prévenant la TVP, elle participe aussi à prévenir son embolisation pulmonaire. Si une seule réponse est exigée, A est la plus directe.",
          "source": "Cours p. 10–13.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Thrombophlébite des membres inférieurs",
            "Œdème aigu du poumon",
            "Embolie pulmonaire",
            "Infarctus du myocarde"
          ],
          "answers": [
            "Thrombophlébite des membres inférieurs",
            "Embolie pulmonaire"
          ],
          "correct": [
            "Thrombophlébite des membres inférieurs",
            "Embolie pulmonaire"
          ]
        },
        {
          "originalNumber": 15,
          "text": "Question 15 — Position du patient présentant un OAP.",
          "explanation": "Réponse du corrigé : B — demi assise avec jambes pendantes, si tolérée\n\nLa demi assise facilite la respiration. Les jambes déclives sont une précision possible si la PA et l’état clinique le permettent ; A décrit aussi une position respiratoire acceptable.",
          "source": "Cours p. 6 et 28–32.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "En position demi-assise",
            "En position demi-assise, jambes pendantes",
            "En position assise, jambes surélevées"
          ],
          "answers": [
            "En position demi-assise, jambes pendantes"
          ],
          "correct": [
            "En position demi-assise, jambes pendantes"
          ]
        },
        {
          "originalNumber": 16,
          "text": "Question 16 — Une douleur basithoracique en point de côté évoque quoi ?",
          "explanation": "Réponse du corrigé : C — embolie pulmonaire\n\nL’EP peut provoquer une douleur pleurale brutale, basale ou en coup de poignard. Ce signe seul ne confirme pas le diagnostic.",
          "source": "Cours p. 18–19.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Un angor",
            "Un œdème pulmonaire",
            "Une embolie pulmonaire",
            "Un infarctus du myocarde"
          ],
          "answers": [
            "Une embolie pulmonaire"
          ],
          "correct": [
            "Une embolie pulmonaire"
          ]
        },
        {
          "originalNumber": 17,
          "text": "Question 17 — Signes d’insuffisance cardiaque droite.",
          "explanation": "Réponse du corrigé : A et D — œdèmes bilatéraux des membres inférieurs et reflux hépatojugulaire\n\nIls traduisent une congestion veineuse systémique. La dyspnée d’effort évoque surtout l’atteinte gauche ; la pollakiurie n’est pas un signe distinctif.",
          "source": "Cours p. 28–29.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Œdème bilatéral des membres inférieurs",
            "Dyspnée d’effort",
            "Pollakiurie",
            "Reflux hépatojugulaire"
          ],
          "answers": [
            "Œdème bilatéral des membres inférieurs",
            "Reflux hépatojugulaire"
          ],
          "correct": [
            "Œdème bilatéral des membres inférieurs",
            "Reflux hépatojugulaire"
          ]
        },
        {
          "originalNumber": 18,
          "text": "Question 18 — Quel médicament ne provoque pas d’HTA en cas d’abus ?\n[Item ambigu ou invalide : réponse libre d’entraînement, exclu de la note. Voir le corrigé à la fin.]",
          "explanation": "Réponse du corrigé : Pas de réponse unique fiable ; B probablement attendu en 2021\n\nAINS et corticoïdes peuvent élever la PA. Le paracétamol pris régulièrement à forte dose peut également l’augmenter chez les hypertendus, comme l’a montré PATH BP en 2022. Le tramadol n’est pas dépourvu d’effets tensionnels. Ne retenir aucun produit comme sûr en cas d’abus.",
          "source": "S5 ; S6.\nS5 — MacIntyre et coll — PATH BP, essai randomisé, Circulation 2022\nhttps://pubmed.ncbi.nlm.nih.gov/35130054/\nS6 — Base publique des médicaments — Tramadol, effets indésirables\nhttps://base-donnees-publique.medicaments.gouv.fr/medicament/66886839/extrait",
          "ungraded": true,
          "type": "qcm",
          "options": [
            "Anti-inflammatoire non stéroïdien",
            "Paracétamol",
            "Tramadol",
            "Corticoïde"
          ],
          "answers": [],
          "correct": []
        },
        {
          "originalNumber": 19,
          "text": "Question 19 — Bilan minimal de l’HTA selon l’OMS : urée, glycémie, NFS ou créatinine ; chercher le faux.\n[Item ambigu ou invalide : réponse libre d’entraînement, exclu de la note. Voir le corrigé à la fin.]",
          "explanation": "Réponse du corrigé : C probablement attendu ; question insuffisamment référencée\n\nLe cours cite notamment glycémie, lipides, ionogramme et créatinine. Il ne permet pas de départager à lui seul NFS et urée. La liste OMS 2021 suggère créatinine, électrolytes, glycémie ou HbA1c, lipides, urines et ECG ; elle ne rend pas cette sélection univoque.",
          "source": "Cours p. 5 ; S7.\nS7 — OMS 2021 — Traitement pharmacologique de l’HTA, examens complémentaires\nhttps://www.ncbi.nlm.nih.gov/books/NBK573627/",
          "ungraded": true,
          "type": "qcm",
          "options": [
            "Urée",
            "Glycémie",
            "NFS",
            "Créatininémie"
          ],
          "answers": [],
          "correct": []
        },
        {
          "originalNumber": 20,
          "text": "Question 20 — Examens de confirmation d’un infarctus.",
          "explanation": "Réponse du corrigé : A et C — ECG et marqueurs cardiaques\n\nL’ECG et les troponines, interprétés avec la clinique et leur évolution, sont centraux. La protéinurie et la radiographie pulmonaire ne confirment pas l’infarctus.",
          "source": "Cours p. 22–25.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Un électrocardiogramme",
            "La recherche d’une protéinurie",
            "Le dosage des enzymes cardiaques",
            "La radiographie pulmonaire de face"
          ],
          "answers": [
            "Un électrocardiogramme",
            "Le dosage des enzymes cardiaques"
          ],
          "correct": [
            "Un électrocardiogramme",
            "Le dosage des enzymes cardiaques"
          ]
        },
        {
          "originalNumber": 21,
          "text": "Question 21 — Gazométrie, D dimères, troponine I : lequel n’appartient pas au bilan spécifique de l’EP ?\n[Item ambigu ou invalide : réponse libre d’entraînement, exclu de la note. Voir le corrigé à la fin.]",
          "explanation": "Réponse du corrigé : C attendu si la question vise le diagnostic ; item ambigu\n\nLa troponine sert surtout à l’évaluation pronostique de l’EP, donc peut appartenir à son bilan. La gazométrie n’est pas spécifique non plus. Les D dimères aident à exclure l’EP dans des situations sélectionnées ; l’imagerie confirme selon l’algorithme.",
          "source": "Cours p. 19 ; S8.\nS8 — ESC et ERS 2019 — Embolie pulmonaire, diagnostic et stratification du risque\nhttps://doi.org/10.1183/13993003.01647-2019",
          "ungraded": true,
          "type": "qcm",
          "options": [
            "Gazométrie artérielle",
            "D-dimères",
            "Troponine I"
          ],
          "answers": [],
          "correct": []
        },
        {
          "originalNumber": 22,
          "text": "Question 22 — Le Lasilix est quel type de diurétique ?",
          "explanation": "Réponse du corrigé : B — non épargneur potassique\n\nLe furosémide est un diurétique de l’anse qui peut entraîner une perte de potassium et aussi de calcium.",
          "source": "Cours p. 30–32.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Épargneur potassique",
            "Non épargneur potassique",
            "Épargneur calcique"
          ],
          "answers": [
            "Non épargneur potassique"
          ],
          "correct": [
            "Non épargneur potassique"
          ]
        },
        {
          "originalNumber": 23,
          "text": "Question 23 — Apport de sel préventif : 8 à 10 g par jour ou par repas ?\n[Item ambigu ou invalide : réponse libre d’entraînement, exclu de la note. Voir le corrigé à la fin.]",
          "explanation": "Réponse du corrigé : Aucune proposition conforme aux recommandations actuelles\n\nL’OMS recommande moins de 5 g de sel par jour chez l’adulte, soit moins de 2 g de sodium. Le cours donne un repère spécifique d’insuffisance cardiaque de 6 g de sel au maximum, et non de sodium.",
          "source": "Cours p. 30 ; S9.\nS9 — OMS — Réduction du sodium, recommandations chez l’adulte\nhttps://www.who.int/news-room/fact-sheets/detail/sodium-reduction",
          "ungraded": true,
          "type": "qcm",
          "options": [
            "8 à 10 g par jour",
            "8 à 10 g par repas"
          ],
          "answers": [],
          "correct": []
        },
        {
          "originalNumber": 24,
          "text": "Question 24 — Quel signe n’est pas typique de l’insuffisance cardiaque droite ?",
          "explanation": "Réponse du corrigé : A — dyspnée d’effort\n\nLes œdèmes, le reflux hépatojugulaire et la turgescence jugulaire sont des signes de congestion droite. Une dyspnée peut néanmoins coexister, notamment dans une insuffisance globale.",
          "source": "Cours p. 28–29.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Dyspnée d’effort",
            "OMI",
            "Reflux hépatojugulaire",
            "Turgescence des veines jugulaires"
          ],
          "answers": [
            "Dyspnée d’effort"
          ],
          "correct": [
            "Dyspnée d’effort"
          ]
        },
        {
          "originalNumber": 25,
          "text": "Question 25 — Le bon cholestérol correspond à quoi ?",
          "explanation": "Réponse du corrigé : B — HDL cholestérol\n\nC’est l’appellation pédagogique habituelle du HDL, contrairement au LDL qualifié de « mauvais » cholestérol.",
          "source": "S10.\nS10 — Assurance Maladie — Cholestérol et triglycérides, traitement\nhttps://www.ameli.fr/assure/sante/themes/trop-cholesterol-triglycerides-dans-sang-dyslipidemie/traitement",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Cholestérol total",
            "HDL cholestérol",
            "LDL cholestérol"
          ],
          "answers": [
            "HDL cholestérol"
          ],
          "correct": [
            "HDL cholestérol"
          ]
        },
        {
          "originalNumber": 26,
          "text": "Question 26 — Position dans l’OAP : demi assise, jambes pendantes ou surélevées ?",
          "explanation": "Réponse du corrigé : A et B compatibles, si l’état hémodynamique le permet\n\nInstaller en demi assise ; des jambes déclives peuvent être associées. La surélévation systématique des jambes n’est pas la position habituelle en cas de congestion pulmonaire.",
          "source": "Cours p. 6 et 28–32.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Demi-assise",
            "Jambes pendantes hors du lit",
            "Jambes surélevées"
          ],
          "answers": [
            "Demi-assise",
            "Jambes pendantes hors du lit"
          ],
          "correct": [
            "Demi-assise",
            "Jambes pendantes hors du lit"
          ]
        },
        {
          "originalNumber": 27,
          "text": "Question 27 — Bilan d’hémostase : TP, NFS, TCA, TCK.",
          "explanation": "Réponse du corrigé : A, B, C et D au sens large\n\nTP et TCA explorent la coagulation ; le TCK est une variante du TCA utilisant le kaolin. La NFS apporte notamment le nombre de plaquettes, utile à l’hémostase, sans être un test chronométrique de coagulation. Si l’on demande uniquement les temps de coagulation : A, C et D.",
          "source": "Cours p. 14–17 et 34–35.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Temps de prothrombine (TP)",
            "Numération formule sanguine (NFS)",
            "Temps de céphaline activée (TCA)",
            "Temps de céphaline kaolin (TCK)"
          ],
          "answers": [
            "Temps de prothrombine (TP)",
            "Numération formule sanguine (NFS)",
            "Temps de céphaline activée (TCA)",
            "Temps de céphaline kaolin (TCK)"
          ],
          "correct": [
            "Temps de prothrombine (TP)",
            "Numération formule sanguine (NFS)",
            "Temps de céphaline activée (TCA)",
            "Temps de céphaline kaolin (TCK)"
          ]
        }
      ],
      "filiere": "IDE",
      "year": "2021"
    },
    {
      "id": "cardiologie-abg-2022",
      "title": "Abengourou 2022 — Cardiologie · Compo sur table",
      "matter": "Cardiologie — Compo sur table",
      "description": "Abengourou 2022 — L3 IDE — 30 questions corrigées.",
      "instructions": "QCD : Vrai ou Faux. QCM : cocher la ou les bonnes réponses selon la consigne. Énoncés abrégés du corrigé ; propositions transcrites du sujet original. Les items signalés ambigus sont exclus de la note. Le corrigé pédagogique ne constitue pas un barème officiel.",
      "duration": 60,
      "programmed": true,
      "openDate": "2026-01-01",
      "openTime": "00:00",
      "closeDate": "2030-12-31",
      "closeTime": "23:59",
      "marking": {
        "correct": 1,
        "wrong": -1,
        "empty": 0
      },
      "questions": [
        {
          "originalNumber": 1,
          "text": "Question 1 — Le troisième trimestre de grossesse expose à la TVP.",
          "explanation": "Réponse du corrigé : Vrai\n\nLa grossesse est une situation à risque thromboembolique ; le risque persiste et augmente notamment après l’accouchement.",
          "source": "Cours p. 10–12.\n",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 2,
          "text": "Question 2 — La douleur de l’infarctus est trinitrosensible.",
          "explanation": "Réponse du corrigé : Faux\n\nLa douleur typique est prolongée et trinitrorésistante. La réponse à un nitrate ne permet toutefois pas, seule, d’exclure ou d’affirmer un infarctus.",
          "source": "Cours p. 22–23.\n",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 3,
          "text": "Question 3 — Le régime hypersodé est contre indiqué dans le traitement de l’hypotension.",
          "explanation": "Réponse du corrigé : Faux comme règle générale\n\nLe sujet écrit bien « hypotension ». Une augmentation du sel peut être envisagée dans certaines hypotensions orthostatiques après évaluation ; elle ne convient pas à tous les patients, notamment en cas de congestion cardiaque.",
          "source": "S11 ; cours p. 30.\nS11 — Base publique des médicaments — Fludrocortisone et hypotension orthostatique\nhttps://base-donnees-publique.medicaments.gouv.fr/medicament/69866610/extrait",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 4,
          "text": "Question 4 — Le signe de Homans positif caractérise l’AOMI.",
          "explanation": "Réponse du corrigé : Faux\n\nIl a historiquement été associé à la TVP et non à l’AOMI. Sa fiabilité est insuffisante pour confirmer ou exclure une TVP.",
          "source": "Cours p. 12.\n",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 5,
          "text": "Question 5 — Les symptômes d’un AVC hémorragique sont persistants et permanents.\n[Item ambigu ou invalide : réponse libre d’entraînement, exclu de la note. Voir le corrigé à la fin.]",
          "explanation": "Réponse du corrigé : Vrai attendu pour distinguer AVC et AIT ; « permanents » est excessif\n\nUn AVC peut laisser des séquelles durables, mais une récupération partielle ou complète est possible. Tous les symptômes ne sont donc pas nécessairement définitifs.",
          "source": "S12.\nS12 — Assurance Maladie — Comprendre l’AVC et l’AIT\nhttps://www.ameli.fr/assure/sante/themes/accident-vasculaire-cerebral-avc/avc-comprendre",
          "ungraded": true,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 6,
          "text": "Question 6 — L’asymétrie tensionnelle résulte d’un rétrécissement ou d’une rigidité des artères.\n[Item ambigu ou invalide : réponse libre d’entraînement, exclu de la note. Voir le corrigé à la fin.]",
          "explanation": "Réponse du corrigé : Vrai possible ; formulation trop générale\n\nUne différence persistante entre les bras peut évoquer une obstruction artérielle. Elle peut aussi tenir à la technique ou à la variabilité de mesure ; la rigidité artérielle seule ne suffit pas à l’expliquer systématiquement.",
          "source": "Cours p. 3–4 ; S1.\nS1 — Assurance Maladie — Mesurer sa tension à domicile\nhttps://www.ameli.fr/assure/sante/bons-gestes/soins/prendre-tension-arterielle-domicile",
          "ungraded": true,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 7,
          "text": "Question 7 — L’angine de poitrine survient seulement au repos.",
          "explanation": "Réponse du corrigé : Faux\n\nL’angor stable survient typiquement à l’effort. Certaines formes surviennent au repos.",
          "source": "Cours p. 22–24.\n",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 8,
          "text": "Question 8 — L’hypotension orthostatique est une PA inférieure à 90 sur 60 au lever.",
          "explanation": "Réponse du corrigé : Faux\n\nElle se définit classiquement par une baisse d’au moins 20 mmHg de PAS ou 10 mmHg de PAD dans les trois minutes suivant le passage debout, et non par ces seuls seuils absolus.",
          "source": "S13.\nS13 — Assurance Maladie — HTA, mesure de PA et hypotension orthostatique\nhttps://www.ameli.fr/medecin/sante-prevention/sante-cardiovasculaire/maladies-cardiovasculaires-et-associees/hypertension-arterielle/hypertension-arterielle",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 9,
          "text": "Question 9 — Les transaminases sont des enzymes cardiaques spécifiques.",
          "explanation": "Réponse du corrigé : Faux\n\nLes transaminases, notamment TGO ou ASAT, sont non spécifiques. Elles peuvent provenir d’autres tissus, dont le foie et les muscles.",
          "source": "Cours p. 24–25.\n",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 10,
          "text": "Question 10 — L’activité physique est formellement contre indiquée en cas d’infarctus.\n[Item ambigu ou invalide : réponse libre d’entraînement, exclu de la note. Voir le corrigé à la fin.]",
          "explanation": "Réponse du corrigé : Vrai uniquement à la phase aiguë ; faux comme interdiction durable\n\nL’effort non encadré est interrompu à la phase aiguë. Après stabilisation, la réadaptation et une activité adaptée font partie de la prise en charge.",
          "source": "Cours p. 26–27 et 33.\n",
          "ungraded": true,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 11,
          "text": "Question 11 — L’effet blouse blanche correspond à une hausse tensionnelle liée au stress face au soignant.",
          "explanation": "Réponse du corrigé : Vrai\n\nLa PA peut être plus élevée au cabinet qu’en dehors. L’automesure ou la mesure ambulatoire aide à confirmer cette situation.",
          "source": "Cours p. 3–4 ; S1.\nS1 — Assurance Maladie — Mesurer sa tension à domicile\nhttps://www.ameli.fr/assure/sante/bons-gestes/soins/prendre-tension-arterielle-domicile",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 12,
          "text": "Question 12 — L’angor est l’obstruction complète d’une coronaire par un thrombus.",
          "explanation": "Réponse du corrigé : Faux\n\nL’angor correspond à une ischémie myocardique transitoire. Une occlusion thrombotique complète n’est ni sa définition ni une condition constante.",
          "source": "Cours p. 22–24.\n",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 13,
          "text": "Question 13 — Dans l’AIT, les lésions cérébrales ne sont pas permanentes.",
          "explanation": "Réponse du corrigé : Vrai dans l’intention ; vocabulaire à préciser\n\nL’AIT correspond à un déficit neurologique transitoire sans infarctus cérébral constitué. Un infarctus à l’imagerie change la classification même si les symptômes ont régressé.",
          "source": "S12.\nS12 — Assurance Maladie — Comprendre l’AVC et l’AIT\nhttps://www.ameli.fr/assure/sante/themes/accident-vasculaire-cerebral-avc/avc-comprendre",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 14,
          "text": "Question 14 — On diagnostique l’HTA dès la première mesure.",
          "explanation": "Réponse du corrigé : Faux en règle générale\n\nLe diagnostic repose sur des mesures répétées et correctement réalisées, souvent complétées hors cabinet. Une élévation sévère avec urgence clinique impose une évaluation immédiate.",
          "source": "Cours p. 3–4 ; S1.\nS1 — Assurance Maladie — Mesurer sa tension à domicile\nhttps://www.ameli.fr/assure/sante/bons-gestes/soins/prendre-tension-arterielle-domicile",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 15,
          "text": "Question 15 — La déviation de la bouche est spécifique de l’AIT.",
          "explanation": "Réponse du corrigé : Faux\n\nElle peut traduire un AVC ou un AIT, mais aussi d’autres atteintes. Sa survenue brutale nécessite une évaluation urgente.",
          "source": "S12.\nS12 — Assurance Maladie — Comprendre l’AVC et l’AIT\nhttps://www.ameli.fr/assure/sante/themes/accident-vasculaire-cerebral-avc/avc-comprendre",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 16,
          "text": "Question 16 — Périmètre de marche : distance avant douleur imposant l’arrêt ou nombre de pas ?",
          "explanation": "Réponse du corrigé : B — nombre de pas, proposition fausse\n\nLe périmètre de marche en artériopathie désigne la distance parcourue avant l’apparition de la claudication limitante, et non simplement un compte de pas.",
          "source": "S14.\nS14 — ESC 2024 — Maladies artérielles périphériques et claudication\nhttps://academic.oup.com/eurheartj/article/45/36/3538/7738955",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "La distance parcourue au cours de laquelle surviennent des douleurs musculaires qui imposent l’arrêt de la marche",
            "Le nombre de pas réalisés au cours d’une marche"
          ],
          "answers": [
            "Le nombre de pas réalisés au cours d’une marche"
          ],
          "correct": [
            "Le nombre de pas réalisés au cours d’une marche"
          ]
        },
        {
          "originalNumber": 17,
          "text": "Question 17 — Quel signe n’appartient pas à l’insuffisance cardiaque gauche ?",
          "explanation": "Réponse du corrigé : D — oligurie, réponse attendue par comparaison\n\nDyspnée, toux et crachats mousseux décrivent la congestion pulmonaire. Une oligurie reste possible dans une insuffisance cardiaque sévère par baisse de perfusion rénale ; D n’est donc pas une exclusion absolue.",
          "source": "Cours p. 28–29.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Dyspnée de repos",
            "Toux",
            "Crachats mousseux",
            "Oligurie"
          ],
          "answers": [
            "Oligurie"
          ],
          "correct": [
            "Oligurie"
          ]
        },
        {
          "originalNumber": 18,
          "text": "Question 18 — Retour veineux dans la TVP : quelle conduite est mauvaise ?\n[Item ambigu ou invalide : réponse libre d’entraînement, exclu de la note. Voir le corrigé à la fin.]",
          "explanation": "Réponse du corrigé : C — marcher sans bas, réponse pédagogique probable\n\nLe cours associe mobilisation et contention prescrite. Le port de bas dépend toutefois de l’indication et de la prescription : marcher sans bas n’est pas universellement une faute. L’énoncé est trop catégorique.",
          "source": "Cours p. 12–13.\n",
          "ungraded": true,
          "type": "qcm",
          "options": [
            "Surélever les pieds du lit d’environ 10 cm",
            "Placer des coussins sous le matelas",
            "Marcher sans bas de contention"
          ],
          "answers": [],
          "correct": []
        },
        {
          "originalNumber": 19,
          "text": "Question 19 — HTA diastolique isolée : 140 sur 85, 150 sur 90 ou 130 sur 90 ?",
          "explanation": "Réponse du corrigé : C — 130 sur 90 mmHg\n\nSelon les seuils du cours, la PAS est inférieure à 140 et la PAD atteint 90 mmHg.",
          "source": "Cours p. 3.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "140/85 mmHg",
            "150/90 mmHg",
            "130/90 mmHg"
          ],
          "answers": [
            "130/90 mmHg"
          ],
          "correct": [
            "130/90 mmHg"
          ]
        },
        {
          "originalNumber": 20,
          "text": "Question 20 — La douleur de l’infarctus traduit un manque de sang, d’oxygène ou une nécrose ?",
          "explanation": "Réponse du corrigé : D — toutes justes dans l’intention du sujet\n\nLe mécanisme douloureux est l’ischémie, c’est à dire l’insuffisance d’apport sanguin et d’oxygène. L’infarctus comporte une nécrose, mais douleur et nécrose ne sont pas strictement équivalentes ; un infarctus peut être silencieux.",
          "source": "Cours p. 22–25.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Manque d’apport de sang au myocarde",
            "Manque d’apport d’oxygène au myocarde",
            "La nécrose du myocarde",
            "Toutes les réponses sont justes"
          ],
          "answers": [
            "Toutes les réponses sont justes"
          ],
          "correct": [
            "Toutes les réponses sont justes"
          ]
        },
        {
          "originalNumber": 21,
          "text": "Question 21 — Prévenir la constipation : infarctus, TVP, insuffisance cardiaque, sauf AOMI ?\n[Item ambigu ou invalide : réponse libre d’entraînement, exclu de la note. Voir le corrigé à la fin.]",
          "explanation": "Réponse du corrigé : D — AOMI probablement attendu ; item à confirmer\n\nÉviter les efforts de poussée est particulièrement utile en pathologie cardiaque et chez les patients immobilisés. Le cours disponible ne justifie pas cette exception unique ; la prévention de la constipation peut aussi bénéficier à un patient ayant une AOMI.",
          "source": "Cours p. 26–33 ; absence de règle explicite pour cette sélection.\n",
          "ungraded": true,
          "type": "qcm",
          "options": [
            "Infarctus du myocarde",
            "Thrombophlébite du membre inférieur",
            "Insuffisance cardiaque",
            "Artériopathie oblitérante du membre inférieur"
          ],
          "answers": [],
          "correct": []
        },
        {
          "originalNumber": 22,
          "text": "Question 22 — Ordre des trois R de la digoxine.",
          "explanation": "Réponse du corrigé : C — Régulariser, Renforcer, Ralentir\n\nC’est l’ordre écrit dans ton cours. Il s’agit d’un moyen mnémotechnique, sans ordre chronologique d’action.",
          "source": "Cours p. 32–33.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Ralentir, Régulariser, Renforcer",
            "Régulariser, Ralentir, Renforcer",
            "Régulariser, Renforcer, Ralentir"
          ],
          "answers": [
            "Régulariser, Renforcer, Ralentir"
          ],
          "correct": [
            "Régulariser, Renforcer, Ralentir"
          ]
        },
        {
          "originalNumber": 23,
          "text": "Question 23 — Quelle position n’aggrave pas la douleur de péricardite ?",
          "explanation": "Réponse du corrigé : C — assis penché en avant\n\nCette position tend à la soulager. Le décubitus et la toux peuvent l’exacerber.",
          "source": "Cours p. 24 ; S3.\nS3 — Société européenne de cardiologie — Diagnostic de la péricardite aiguë\nhttps://www.escardio.org/communities/councils/cardiology-practice/scientific-documents-and-publications/ejournal/volume-15/Diagnosis-of-acute-pericarditis/",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "En décubitus",
            "Pendant les efforts de toux",
            "Position assise penchée en avant"
          ],
          "answers": [
            "Position assise penchée en avant"
          ],
          "correct": [
            "Position assise penchée en avant"
          ]
        },
        {
          "originalNumber": 24,
          "text": "Question 24 — Signes d’insuffisance cardiaque gauche.",
          "explanation": "Réponse du corrigé : A, C et D — dyspnée d’effort, toux, crachats hématiques\n\nL’hépatomégalie évoque surtout la congestion droite. Une expectoration teintée de sang est possible lors de congestion pulmonaire.",
          "source": "Cours p. 28–29.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Dyspnée d’effort",
            "Hépatomégalie",
            "Toux",
            "Crachats hématiques"
          ],
          "answers": [
            "Dyspnée d’effort",
            "Toux",
            "Crachats hématiques"
          ],
          "correct": [
            "Dyspnée d’effort",
            "Toux",
            "Crachats hématiques"
          ]
        },
        {
          "originalNumber": 25,
          "text": "Question 25 — Les nitrés ont un effet vasodilatateur veineux ou artériel ?",
          "explanation": "Réponse du corrigé : C — les deux\n\nLe cours décrit une vasodilatation veineuse et artérielle. L’effet veineux est prédominant aux doses usuelles ; limiter toute leur action aux seuls vaisseaux coronaires serait imprécis.",
          "source": "Cours p. 32–33.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Veineux coronaires",
            "Artériels coronaires",
            "Toutes les réponses sont justes"
          ],
          "answers": [
            "Toutes les réponses sont justes"
          ],
          "correct": [
            "Toutes les réponses sont justes"
          ]
        },
        {
          "originalNumber": 26,
          "text": "Question 26 — Traitement médicamenteux de l’OAP : oxygène, diurétique, vasodilatateur.",
          "explanation": "Réponse du corrigé : A, B et C selon les indications\n\nL’oxygène est indiqué en cas d’hypoxémie ; les diurétiques traitent la congestion ; les vasodilatateurs sont utilisés lorsque la PA le permet. Ces mesures ne sont pas systématiquement toutes indiquées chez chaque patient.",
          "source": "Cours p. 30–33 ; S15.\nS15 — ESC 2021 — Insuffisance cardiaque, traitement de la forme aiguë\nhttps://doi.org/10.1093/eurheartj/ehab368",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Oxygénation",
            "Diurétique",
            "Vasodilatateur"
          ],
          "answers": [
            "Oxygénation",
            "Diurétique",
            "Vasodilatateur"
          ],
          "correct": [
            "Oxygénation",
            "Diurétique",
            "Vasodilatateur"
          ]
        },
        {
          "originalNumber": 27,
          "text": "Question 27 — Traitement de l’AIT : statine, antiœdémateux, anti inflammatoires, anticoagulants.",
          "explanation": "Réponse du corrigé : A ; D uniquement si indication cardioembolique\n\nLes statines participent à la prévention vasculaire selon le contexte. L’anticoagulation concerne notamment la fibrillation atriale. Les antiagrégants, absents des choix, occupent une place majeure dans les AIT non cardioemboliques. B et C ne sont pas des traitements systématiques.",
          "source": "S16.\nS16 — Assurance Maladie — Traitements après AVC et prévention des récidives\nhttps://www.ameli.fr/assure/sante/themes/accident-vasculaire-cerebral-avc/avc-traitement",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Statine",
            "Antiœdémateux",
            "Anti-inflammatoires",
            "Anticoagulants"
          ],
          "answers": [
            "Statine",
            "Anticoagulants"
          ],
          "correct": [
            "Statine",
            "Anticoagulants"
          ]
        },
        {
          "originalNumber": 28,
          "text": "Question 28 — Traitement de l’hypotension : « Coracoïdes », vasodilatateurs, hypotenseurs ou toutes.\n[Item ambigu ou invalide : réponse libre d’entraînement, exclu de la note. Voir le corrigé à la fin.]",
          "explanation": "Réponse du corrigé : Item à rectifier ; A si le mot visé est corticoïdes\n\n« Coracoïdes » ne désigne pas une classe thérapeutique. La fludrocortisone peut être utilisée dans certaines hypotensions orthostatiques, mais ne constitue pas le traitement de toute hypotension. Vasodilatateurs et hypotenseurs peuvent aggraver la baisse tensionnelle.",
          "source": "S11.\nS11 — Base publique des médicaments — Fludrocortisone et hypotension orthostatique\nhttps://base-donnees-publique.medicaments.gouv.fr/medicament/69866610/extrait",
          "ungraded": true,
          "type": "qcm",
          "options": [
            "Coracoïdes",
            "Vasodilatateurs",
            "Hypotenseurs",
            "Toutes les réponses sont justes"
          ],
          "answers": [],
          "correct": []
        },
        {
          "originalNumber": 29,
          "text": "Question 29 — Confirmation de l’angor et de l’infarctus : ECG, télé cœur, enzymes ou toutes.\n[Item ambigu ou invalide : réponse libre d’entraînement, exclu de la note. Voir le corrigé à la fin.]",
          "explanation": "Réponse du corrigé : A et C pour l’infarctus ; aucune réponse commune entièrement exacte\n\nL’infarctus se recherche par ECG et troponines. Dans l’angor stable, les troponines sont habituellement normales et l’ECG de repos peut l’être aussi ; des explorations adaptées sont nécessaires. La radiographie ne confirme ni l’un ni l’autre.",
          "source": "Cours p. 22–25.\n",
          "ungraded": true,
          "type": "qcm",
          "options": [
            "L’électrocardiogramme",
            "Le télécœur de face",
            "Le dosage des enzymes cardiaques",
            "Toutes les réponses sont justes"
          ],
          "answers": [],
          "correct": []
        },
        {
          "originalNumber": 30,
          "text": "Question 30 — Quel signe n’est pas typique de l’EP ?",
          "explanation": "Réponse du corrigé : D — crachats saumonés\n\nIls évoquent plutôt l’OAP. L’EP peut entraîner dyspnée brutale, douleur pleurale et toux, parfois hémoptysie.",
          "source": "Cours p. 18–19 et 28–29.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Dyspnée d’installation brutale",
            "Douleur thoracique à type de coup de poignard",
            "Toux",
            "Crachats saumonés"
          ],
          "answers": [
            "Crachats saumonés"
          ],
          "correct": [
            "Crachats saumonés"
          ]
        }
      ],
      "filiere": "IDE",
      "year": "2022"
    },
    {
      "id": "cardiologie-abg-2023",
      "title": "Abengourou 2023 — Cardiologie · Compo sur table",
      "matter": "Cardiologie — Compo sur table",
      "description": "Abengourou 2023 — L3 IDE — 25 questions corrigées.",
      "instructions": "QCD : Vrai ou Faux. QCM : cocher la ou les bonnes réponses selon la consigne. Énoncés abrégés du corrigé ; propositions transcrites du sujet original. Les items signalés ambigus sont exclus de la note. Le corrigé pédagogique ne constitue pas un barème officiel.",
      "duration": 40,
      "programmed": true,
      "openDate": "2026-01-01",
      "openTime": "00:00",
      "closeDate": "2030-12-31",
      "closeTime": "23:59",
      "marking": {
        "correct": 1,
        "wrong": -1,
        "empty": 0
      },
      "questions": [
        {
          "originalNumber": 1,
          "text": "Question 1 — Quelle héparine est non fractionnée ?",
          "explanation": "Réponse du corrigé : C — Calciparine\n\nLovenox est une HBPM ; les coumariniques sont des AVK.",
          "source": "Cours p. 14–17.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Lovenox",
            "Coumarine",
            "Calciparine"
          ],
          "answers": [
            "Calciparine"
          ],
          "correct": [
            "Calciparine"
          ]
        },
        {
          "originalNumber": 2,
          "text": "Question 2 — Unité d’une PA notée 16 sur 10.",
          "explanation": "Réponse du corrigé : A — cmHg\n\nCela correspond à 160/100 mmHg.",
          "source": "Cours p. 2–3.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Le centimètre de mercure (cmHg)",
            "Le millimètre de mercure (mmHg)"
          ],
          "answers": [
            "Le centimètre de mercure (cmHg)"
          ],
          "correct": [
            "Le centimètre de mercure (cmHg)"
          ]
        },
        {
          "originalNumber": 3,
          "text": "Question 3 — Ordre des trois R de la digoxine.\n[Item ambigu ou invalide : réponse libre d’entraînement, exclu de la note. Voir le corrigé à la fin.]",
          "explanation": "Réponse du corrigé : Aucune option ne reproduit l’ordre du cours\n\nTon cours écrit « Régularise, Renforce la contractilité, Ralentit le rythme ». Les propositions permutent ces effets sans reproduire cet ordre. Il n’existe pas d’ordre pharmacologique obligatoire permettant de trancher.",
          "source": "Cours p. 32–33.\n",
          "ungraded": true,
          "type": "qcm",
          "options": [
            "Régulariser, Ralentir, Renforcer",
            "Renforcer, Régulariser, Ralentir",
            "Ralentir, Régulariser, Renforcer",
            "Ralentir, Renforcer, Régulariser"
          ],
          "answers": [],
          "correct": []
        },
        {
          "originalNumber": 4,
          "text": "Question 4 — La toux irritative nocturne est un signe d’insuffisance cardiaque gauche.",
          "explanation": "Réponse du corrigé : Vrai\n\nElle peut accompagner la congestion pulmonaire, notamment en décubitus.",
          "source": "Cours p. 28–29.\n",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 5,
          "text": "Question 5 — Deux signes non typiques de l’insuffisance cardiaque gauche isolée.",
          "explanation": "Réponse du corrigé : A et D — hépatomégalie et prise de poids\n\nLe cours les classe du côté de la congestion droite. La prise de poids traduit une rétention hydrosodée et peut aussi survenir dans une insuffisance globale : ce n’est pas une exclusion absolue.",
          "source": "Cours p. 28–29.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Hépatomégalie",
            "Dyspnée d’effort",
            "Toux nocturne",
            "Prise de poids",
            "Expectoration teintée de sang"
          ],
          "answers": [
            "Hépatomégalie",
            "Prise de poids"
          ],
          "correct": [
            "Hépatomégalie",
            "Prise de poids"
          ]
        },
        {
          "originalNumber": 6,
          "text": "Question 6 — Le patient insuffisant cardiaque ne doit pas consommer plus de 6 g de sodium par jour.",
          "explanation": "Réponse du corrigé : Faux dans l’intention du cours\n\nLe cours parle de 6 g de SEL, pas de sodium. Six grammes de sodium représentent environ quinze grammes de sel. Les objectifs alimentaires doivent être individualisés ; le repère OMS général est inférieur à 2 g de sodium par jour.",
          "source": "Cours p. 30 ; S9.\nS9 — OMS — Réduction du sodium, recommandations chez l’adulte\nhttps://www.who.int/news-room/fact-sheets/detail/sodium-reduction",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 7,
          "text": "Question 7 — Enzymes libérées par la mort des cellules myocardiques : troponine, CPK, myoglobine, TGO ; chercher une exception.\n[Item ambigu ou invalide : réponse libre d’entraînement, exclu de la note. Voir le corrigé à la fin.]",
          "explanation": "Réponse du corrigé : Item invalide à réponse unique : A et C ne sont pas des enzymes\n\nCes quatre marqueurs peuvent augmenter lors d’une atteinte myocardique. Troponine et myoglobine sont des protéines, pas des enzymes. La TGO est non spécifique mais peut augmenter : la choisir uniquement parce qu’elle est non spécifique serait incorrect.",
          "source": "Cours p. 24–25.\n",
          "ungraded": true,
          "type": "qcm",
          "options": [
            "Troponine",
            "CPK",
            "Myoglobine",
            "TGO"
          ],
          "answers": [],
          "correct": []
        },
        {
          "originalNumber": 8,
          "text": "Question 8 — Quelle PA ne correspond pas à une HTA ?",
          "explanation": "Réponse du corrigé : A — 135 sur 75 mmHg\n\nAvec les seuils du cours, une PAS d’au moins 140 et/ou une PAD d’au moins 90 définit une mesure hypertensive. 139/95 est donc élevée par sa diastolique.",
          "source": "Cours p. 3.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "135/75 mmHg",
            "139/95 mmHg",
            "185/89 mmHg",
            "195/95 mmHg"
          ],
          "answers": [
            "135/75 mmHg"
          ],
          "correct": [
            "135/75 mmHg"
          ]
        },
        {
          "originalNumber": 9,
          "text": "Question 9 — La pression systolique correspond à quelle phase ?",
          "explanation": "Réponse du corrigé : A — contraction des ventricules avec éjection artérielle\n\nLa systole ventriculaire éjecte le sang dans les artères. La diastole correspond au relâchement et au remplissage.",
          "source": "Cours p. 2–3.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "La contraction des ventricules pour éjecter le sang dans le réseau artériel",
            "La contraction des oreillettes pour éjecter le sang dans le réseau artériel",
            "La dilatation des oreillettes et du ventricule pour éjecter le sang dans le réseau artériel",
            "Toutes les réponses sont justes"
          ],
          "answers": [
            "La contraction des ventricules pour éjecter le sang dans le réseau artériel"
          ],
          "correct": [
            "La contraction des ventricules pour éjecter le sang dans le réseau artériel"
          ]
        },
        {
          "originalNumber": 10,
          "text": "Question 10 — Les diabétiques ne présentent pas de douleur thoracique pendant un infarctus.",
          "explanation": "Réponse du corrigé : Faux\n\nUn infarctus silencieux est possible, notamment avec une neuropathie diabétique, mais tous les patients diabétiques n’ont pas un infarctus indolore.",
          "source": "Cours p. 23.\n",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "originalNumber": 11,
          "text": "Question 11 — Mesurer sur bras perfusé ou bras à hauteur du cœur ?",
          "explanation": "Réponse du corrigé : B — bras à hauteur du cœur\n\nLe bras doit être soutenu et le brassard placé à hauteur du cœur ; privilégier un bras sans perfusion.",
          "source": "Cours p. 3–4.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Sur un bras porteur de perfusion",
            "Sur un bras à hauteur du cœur"
          ],
          "answers": [
            "Sur un bras à hauteur du cœur"
          ],
          "correct": [
            "Sur un bras à hauteur du cœur"
          ]
        },
        {
          "originalNumber": 12,
          "text": "Question 12 — Brassard à 2 à 3 cm du coude, stéthoscope sous le brassard, patient parlant.",
          "explanation": "Réponse du corrigé : A seule\n\nLe bord inférieur du brassard se situe au dessus du pli du coude. En mesure auscultatoire, le stéthoscope est sur l’artère brachiale, sans être coincé sous le brassard ; le patient ne parle pas.",
          "source": "Cours p. 3–4.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Poser le brassard à environ 2 à 3 cm du pli du coude",
            "Poser le stéthoscope sous le brassard",
            "Le patient peut parler avec l’agent de santé"
          ],
          "answers": [
            "Poser le brassard à environ 2 à 3 cm du pli du coude"
          ],
          "correct": [
            "Poser le brassard à environ 2 à 3 cm du pli du coude"
          ]
        },
        {
          "originalNumber": 13,
          "text": "Question 13 — Une douleur thoracique impose un ECG dans les premières minutes.",
          "explanation": "Réponse du corrigé : Vrai attendu en évaluation aiguë\n\nUne douleur pouvant être cardiaque nécessite un ECG rapide, en particulier si un syndrome coronarien est suspecté.",
          "source": "Cours p. 22–23.\n",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 14,
          "text": "Question 14 — Quelle position éviter pendant la mesure assise de PA ?",
          "explanation": "Réponse du corrigé : D — jambes croisées\n\nDos et bras soutenus, pieds à plat et jambes décroisées facilitent une mesure standardisée.",
          "source": "Cours p. 4 ; S1.\nS1 — Assurance Maladie — Mesurer sa tension à domicile\nhttps://www.ameli.fr/assure/sante/bons-gestes/soins/prendre-tension-arterielle-domicile",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Dos appuyé contre le dossier de la chaise",
            "Pieds à plat au sol",
            "Bras soutenu par un coudoir ou une table",
            "Jambes croisées"
          ],
          "answers": [
            "Jambes croisées"
          ],
          "correct": [
            "Jambes croisées"
          ]
        },
        {
          "originalNumber": 15,
          "text": "Question 15 — Suivi biologique d’une HBPM : TCA, anti Xa ou TCK ?",
          "explanation": "Réponse du corrigé : B — anti Xa si une surveillance de l’activité est indiquée\n\nLe TCA et le TCK ne quantifient pas correctement l’effet d’une HBPM. Le dosage anti Xa n’est pas nécessaire en routine chez tous les patients.",
          "source": "Cours p. 15–16.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Temps de céphaline activée (TCA)",
            "Anti-Xa",
            "Temps de céphaline kaolin (TCK)"
          ],
          "answers": [
            "Anti-Xa"
          ],
          "correct": [
            "Anti-Xa"
          ]
        },
        {
          "originalNumber": 16,
          "text": "Question 16 — Les injections intramusculaires sont contre indiquées sous AVK.",
          "explanation": "Réponse du corrigé : Vrai attendu\n\nElles sont généralement évitées en raison du risque d’hématome. Certaines injections spécifiques relèvent de protocoles particuliers.",
          "source": "Cours p. 17.\n",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 17,
          "text": "Question 17 — HNF IV au pousse seringue : héparinémie, TCA ou INR ?",
          "explanation": "Réponse du corrigé : B attendu ; A également possible selon le protocole\n\nLe cours enseigne la surveillance par TCA. Une activité anti Xa dite héparinémie peut aussi servir à surveiller l’HNF ; elle ne doit pas être déclarée fausse de principe. L’INR concerne surtout les AVK.",
          "source": "Cours p. 14–16.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Héparinémie",
            "Temps de céphaline activée (TCA)",
            "INR"
          ],
          "answers": [
            "Héparinémie",
            "Temps de céphaline activée (TCA)"
          ],
          "correct": [
            "Héparinémie",
            "Temps de céphaline activée (TCA)"
          ]
        },
        {
          "originalNumber": 18,
          "text": "Question 18 — Les HBPM curatives sont administrées en deux injections par 24 heures.",
          "explanation": "Réponse du corrigé : Vrai selon le schéma du cours ; pas universel\n\nLe cours décrit deux injections quotidiennes. Le schéma réel dépend de la molécule, de l’indication et du patient ; certaines prescriptions curatives utilisent une injection quotidienne.",
          "source": "Cours p. 14–15.\n",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 19,
          "text": "Question 19 — Quel effet n’est pas un effet hémorragique habituel des anticoagulants ?",
          "explanation": "Réponse du corrigé : C — arthralgie\n\nÉpistaxis, gingivorragie et méléna sont des manifestations de saignement. Une douleur articulaire isolée n’en est pas une, même si une hémarthrose peut être douloureuse.",
          "source": "Cours p. 14–17.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Épistaxis",
            "Gingivorragies",
            "Arthralgie",
            "Méléna"
          ],
          "answers": [
            "Arthralgie"
          ],
          "correct": [
            "Arthralgie"
          ]
        },
        {
          "originalNumber": 20,
          "text": "Question 20 — Le TCA est un bilan de surveillance des héparines calciques.",
          "explanation": "Réponse du corrigé : Vrai dans le contexte de l’HNF à dose curative\n\nLa Calciparine est une HNF ; sa surveillance peut reposer sur le TCA selon le schéma et le protocole. Toutes les héparines n’ont pas la même surveillance.",
          "source": "Cours p. 14–16.\n",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 21,
          "text": "Question 21 — Parmi ulcère gastrique, AVC récent, diabète et HTA, quelle affection n’est pas une contre indication habituelle à rechercher ?",
          "explanation": "Réponse du corrigé : C — diabète\n\nUn diabète isolé n’interdit pas les anticoagulants. Les autres situations exigent une évaluation du risque hémorragique ; une HTA contrôlée ou tout AVC récent ne sont pas automatiquement des contre indications absolues.",
          "source": "Cours p. 14–15.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Ulcères gastriques",
            "Accident vasculaire cérébral récent",
            "Diabète",
            "Hypertension artérielle"
          ],
          "answers": [
            "Diabète"
          ],
          "correct": [
            "Diabète"
          ]
        },
        {
          "originalNumber": 22,
          "text": "Question 22 — Une chute de PA peut être constatée pendant une EP.",
          "explanation": "Réponse du corrigé : Vrai\n\nElle est possible dans une EP grave avec retentissement hémodynamique. Une PA normale n’exclut pas une EP.",
          "source": "Cours p. 18–19.\n",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "originalNumber": 23,
          "text": "Question 23 — Quel marqueur n’est pas un marqueur cardiaque non spécifique ?",
          "explanation": "Réponse du corrigé : D — troponine, réponse attendue\n\nLa troponine est un marqueur de lésion myocardique relativement cardiospécifique, mais ce n’est pas une enzyme. Sa hausse ne prouve pas à elle seule un infarctus. La CPK MB possède aussi une spécificité supérieure à la CPK totale, ce qui rend l’opposition simpliste.",
          "source": "Cours p. 24–25.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "LDH (lacticodéshydrogénase)",
            "Transaminase SGOT",
            "CPK-MB",
            "Troponine"
          ],
          "answers": [
            "Troponine"
          ],
          "correct": [
            "Troponine"
          ]
        },
        {
          "originalNumber": 24,
          "text": "Question 24 — Quel signe n’appartient pas au tableau typique de l’EP ?",
          "explanation": "Réponse du corrigé : B — dyspnée nocturne\n\nLa dyspnée paroxystique nocturne évoque surtout l’insuffisance cardiaque gauche. Une EP peut cependant se manifester à toute heure : « nocturne » n’est pas une exclusion diagnostique.",
          "source": "Cours p. 18–19 et 28–29.\n",
          "ungraded": false,
          "type": "qcm",
          "options": [
            "Dyspnée à type de polypnée",
            "Dyspnée nocturne",
            "Toux sèche et quinteuse",
            "Douleur thoracique à type de coup de poignard"
          ],
          "answers": [
            "Dyspnée nocturne"
          ],
          "correct": [
            "Dyspnée nocturne"
          ]
        },
        {
          "originalNumber": 25,
          "text": "Question 25 — La douleur de l’infarctus est trinitrorésistante.",
          "explanation": "Réponse du corrigé : Vrai pour la présentation typique\n\nC’est la caractéristique enseignée dans le cours. L’efficacité ou l’inefficacité du nitrate ne suffit pas à confirmer ou exclure l’infarctus.",
          "source": "Cours p. 22–23.\n",
          "ungraded": false,
          "type": "qcd",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai"
        }
      ],
      "filiere": "IDE",
      "year": "2023"
    }
  ]
};
    const STORAGE_SUBJECTS = "CARDIOLOGIE_L3_AHOUSSI_FIDEL_subjects_v1";
    const STORAGE_RESULTS = "CARDIOLOGIE_L3_AHOUSSI_FIDEL_results_v1";
    const STORAGE_ATTEMPTS = "CARDIOLOGIE_L3_AHOUSSI_FIDEL_attempts_v1";

    window.selectedFiliere = "IDE";
    let subjects = [];
        let currentSubject = null;
    let currentStudent = null;
    let quizStartTime = null;
    let timerInterval = null;
    let currentQuestionIndex = 0;
    let savedQuestionAnswers = {};
    const QUIZ_SETTINGS_KEY = "CARDIOLOGIE_L3_AHOUSSI_FIDEL_quiz_settings_v1";
    const DEFAULT_QUIZ_SETTINGS = {
      questionCount: 60,
      displayMode: "all",
      questionType: "both",
      cameraEnabled: false,
      antiCheatEnabled: true
    };
    let quizSettings = loadQuizSettings();

    // Chaque évaluation démarre avec toutes les questions par défaut.
    // La banque complète reste disponible et l’ordre est renouvelé à chaque tentative.

    function shuffleQuestions(items) {
      const shuffled = items.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }

    function getExpectedAnswers(question) {
      if (Array.isArray(question.answers)) return question.answers;
      if (Array.isArray(question.correct)) return question.correct;
      return [question.answer || question.correct].filter(Boolean);
    }

    function getQuestionCategory(question) {
      const options = Array.isArray(question.options) ? question.options : [];
      const isTrueFalse = options.length === 2 && options.includes("Vrai") && options.includes("Faux");
      if (isTrueFalse) return "trueFalse";
      return getExpectedAnswers(question).length > 1 ? "multipleAnswers" : "singleAnswer";
    }

    function getQuizQuestionCount() {
      return quizSettings.questionCount;
    }

    function loadQuizSettings() {
      try {
        const saved = { ...DEFAULT_QUIZ_SETTINGS, ...JSON.parse(localStorage.getItem(QUIZ_SETTINGS_KEY) || "{}") };
        saved.questionCount = 60;
        saved.questionType = "both";
        saved.cameraEnabled = false;
        saved.displayMode = "all";
        saved.antiCheatEnabled = true;
        return saved;
      } catch (error) {
        return { ...DEFAULT_QUIZ_SETTINGS, cameraEnabled: false };
      }
    }

    function getQuestionsForSelectedType(questionBank) {
      if (quizSettings.questionType === "qcd") {
        return questionBank.filter(question => getQuestionCategory(question) === "trueFalse");
      }
      if (quizSettings.questionType === "qcm") {
        return questionBank.filter(question => getQuestionCategory(question) !== "trueFalse");
      }
      return questionBank.slice();
    }

    function selectQuizQuestions(questionBank) {
      return shuffleQuestions(questionBank);
    }

    function getQuestionOrderSignature(questions) {
      return questions.map(question => question.text || "").join("||");
    }

    function shuffleForNewLearningSession(subjectId, questions) {
      const storageKey = `FORMATION_EVALUATION_last_question_order_${subjectId}`;
      const previousSignature = localStorage.getItem(storageKey);
      let shuffled = shuffleQuestions(questions);

      // Évite de présenter exactement le même ordre lors de deux sessions
      // consécutives, même si le tirage aléatoire produit par hasard le même résultat.
      if (shuffled.length > 1 && getQuestionOrderSignature(shuffled) === previousSignature) {
        shuffled = [...shuffled.slice(1), shuffled[0]];
      }

      localStorage.setItem(storageKey, getQuestionOrderSignature(shuffled));
      return shuffled;
    }

    function prepareSubjectForQuiz(subject) {
      const selectedQuestions = selectQuizQuestions(subject.questions);
      return {
        ...cloneData(subject),
        questions: shuffleForNewLearningSession(subject.id, selectedQuestions)
      };
    }

    /********************************************************************
     * SUIVI DE SORTIE DE PAGE / ONGLET
     * L'étudiant n'est pas bloqué et ne reçoit pas d'avertissement.
     * Si la page, l'onglet ou la fenêtre est quitté pendant l'évaluation,
     * l'information est enregistrée et apparaît dans le résultat final.
     ********************************************************************/
    const PAGE_EXIT_TRACKING_CONFIG = {
      enabled: true
    };

    function isAntiCheatEnabled() {
      return PAGE_EXIT_TRACKING_CONFIG.enabled && quizSettings.antiCheatEnabled !== false;
    }

    let pageExitTrackingActive = false;
    let pageExitCount = 0;
    let pageExitEvents = [];
    let lastPageExitAt = 0;
    let quizWasFullscreen = false;
    let pageExitDetectedDuringQuiz = false;

    /********************************************************************
     * PHOTO OBLIGATOIRE AVANT ACCÈS À L'ÉVALUATION
     ********************************************************************/
    let cameraStream = null;

    /********************************************************************
     * INITIALISATION
     ********************************************************************/
    document.addEventListener("DOMContentLoaded", () => {
      loadSubjects();
      renderSubjects();
      blockBackButton();
    });


    function cloneData(value) {
      if (typeof structuredClone === "function") return structuredClone(value);
      return JSON.parse(JSON.stringify(value));
    }

    function loadSubjects() {
      // Nouvelle version : on charge toujours le sujet intégré dans le fichier.
      // Cela évite que l’ancien cache du navigateur masque le nouveau sujet.
      subjects = cloneData(CONFIG.subjects).map(subject => ({
        ...subject,
        programmed: subject.programmed === true
      }));
      saveSubjects();
    }

    function saveSubjects() {
      localStorage.setItem(STORAGE_SUBJECTS, JSON.stringify(subjects));
    }

    function getResults() {
      return JSON.parse(localStorage.getItem(STORAGE_RESULTS) || "[]");
    }

    function saveResults(results) {
      localStorage.setItem(STORAGE_RESULTS, JSON.stringify(results));
    }

    function getAttempts() {
      return JSON.parse(localStorage.getItem(STORAGE_ATTEMPTS) || "{}");
    }

    function saveAttempts(attempts) {
      localStorage.setItem(STORAGE_ATTEMPTS, JSON.stringify(attempts));
    }

    /********************************************************************
     * GESTION DES DATES ET STATUTS
     ********************************************************************/
    function getDateTime(date, time) {
      return new Date(`${date}T${time || "00:00"}:00`);
    }

    function getSubjectStatus(subject) {
      const now = new Date();
      const open = getDateTime(subject.openDate, subject.openTime);
      const close = getDateTime(subject.closeDate, subject.closeTime);
      if (now < open) return { key: "locked", label: "Verrouillée", message: "Cette composition n’est pas encore disponible" };
      if (now > close) return { key: "closed", label: "Terminée", message: "La composition est terminée" };
      return { key: "available", label: "Disponible", message: "Composition disponible" };
    }

    function formatDateTime(date, time) {
      return `${date} à ${time}`;
    }


    /********************************************************************
     * SÉCURITÉ DE L'ÉVALUATION
     * L'étudiant continue son devoir jusqu'à la fin.
     * Tout incident détecté est enregistré et affichera "Auto envoi"
     * au résultat et dans l'administration.
     ********************************************************************/
    function isQuizVisible() {
      const quizView = document.getElementById("quizView");
      return pageExitTrackingActive && quizView && !quizView.classList.contains("hidden");
    }

    function registerPageExitEvent(reason, type = "incident") {
      if (!isAntiCheatEnabled() || !isQuizVisible()) return;

      const now = Date.now();

      // Évite de compter plusieurs fois le même incident en quelques secondes.
      if (now - lastPageExitAt < 1500) return;
      lastPageExitAt = now;

      pageExitDetectedDuringQuiz = true;
      pageExitCount++;
      pageExitEvents.push({
        type,
        reason,
        time: new Date().toLocaleString("fr-FR")
      });
    }

    function startPageExitTracking() {
      if (!isAntiCheatEnabled()) {
        stopPageExitTracking();
        pageExitDetectedDuringQuiz = false;
        pageExitCount = 0;
        pageExitEvents = [];
        return;
      }
      pageExitTrackingActive = true;
      pageExitDetectedDuringQuiz = false;
      pageExitCount = 0;
      pageExitEvents = [];
      lastPageExitAt = 0;
      quizWasFullscreen = Boolean(document.fullscreenElement);
    }

    function stopPageExitTracking() {
      pageExitTrackingActive = false;
    }

    function hasRealPageExitDuringQuiz() {
      return pageExitDetectedDuringQuiz === true && Number(pageExitCount || 0) > 0;
    }

    // Sortie réelle d'onglet, de page ou bascule vers une autre application.
    // On n'utilise plus window.blur, car sur téléphone il peut se déclencher
    // pendant des actions normales et mettait le résultat à zéro à tort.
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        registerPageExitEvent("L'étudiant a quitté l'onglet, la page ou l'application", "sortie_page");
      }
    });

    // Appel, notification, volet système ou changement temporaire d'application.
    // Sur téléphone, un appel ou une notification peut déclencher blur / visibilitychange.
    window.addEventListener("blur", () => {
      registerPageExitEvent("Appel, notification ou perte de focus détecté", "appel_notification");
    });

    // Tentative de capture d'écran ou d'action système détectable au clavier.
    // Important : les navigateurs ne permettent pas de détecter toutes les captures,
    // surtout sur téléphone. Les touches détectables sont enregistrées.
    document.addEventListener("keydown", (event) => {
      if (!isQuizVisible()) return;
      const key = String(event.key || "").toLowerCase();
      const code = String(event.code || "").toLowerCase();
      const isPrintScreen = key === "printscreen" || code === "printscreen";
      const isScreenShortcut =
        isPrintScreen ||
        (event.ctrlKey && key === "p") ||
        (event.metaKey && event.shiftKey && ["3", "4", "5"].includes(key)) ||
        (event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(key)) ||
        key === "f12";

      if (isScreenShortcut) {
        registerPageExitEvent("Tentative de capture d'écran ou raccourci système détecté", "capture_ecran");
      }
    });

    document.addEventListener("contextmenu", (event) => {
      if (!isQuizVisible()) return;
      registerPageExitEvent("Clic droit ou menu contextuel détecté", "menu_contextuel");
      event.preventDefault();
    });

    // Fermeture, actualisation ou navigation hors de la page.
    window.addEventListener("pagehide", () => {
      registerPageExitEvent("L'étudiant a quitté ou actualisé la page", "fermeture_actualisation");
    });

    // Sortie du mode plein écran, si l'évaluation était en plein écran.
    document.addEventListener("fullscreenchange", () => {
      if (!isQuizVisible()) return;

      if (document.fullscreenElement) {
        quizWasFullscreen = true;
        return;
      }

      if (quizWasFullscreen) {
        registerPageExitEvent("L'étudiant est sorti du mode plein écran", "plein_ecran");
      }
    });

    window.addEventListener("beforeunload", (event) => {
      if (!isQuizVisible()) return;
      registerPageExitEvent("L'étudiant a tenté de fermer ou actualiser la page", "fermeture_actualisation");
      event.preventDefault();
      event.returnValue = "Une évaluation est en cours. Quitter la page peut interrompre votre composition.";
      return event.returnValue;
    });


    /********************************************************************
     * PAGE ACCUEIL ÉTUDIANT
     ********************************************************************/
    function showHome() {
      clearInterval(timerInterval);
      stopPageExitTracking();
      document.getElementById("homeView").classList.remove("hidden");
      document.getElementById("quizView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      renderSubjects();
    }

    function getActiveMatricule() {
      return (window.activeStudentFullName || localStorage.getItem("REVISION_LICENCE_1_ACTIVE_FULL_NAME") || "").trim();
    }

    function getStudentProfile() {
      const nomComplet = getActiveMatricule() || "APPRENANT";
      return {
        nom: nomComplet,
        prenom: "",
        nomComplet,
        matricule: nomComplet
      };
    }

    function updateStudentHeader() {
      const node = document.getElementById("studentHeaderName");
      if (!node) return;
      node.textContent = getStudentProfile().nomComplet;
    }

    function getStudentResultsForDashboard() {
      const profile = getStudentProfile();
      return getResults().filter(item => {
        const matricule = String(item?.student?.matricule || "").trim();
        return matricule === profile.matricule;
      });
    }

    function renderStudentResultsTable() {
      const results = getStudentResultsForDashboard();
      if (results.length === 0) {
        return '<p class="student-empty-state">Aucune évaluation effectuée pour le moment.</p>';
      }

      const rows = results.slice().reverse().map(result => `
        <tr>
          <td>
            <strong>${escapeHTML(result.subjectTitle || "ÉVALUATION")}</strong>
            <div class="student-table-date">Terminée : ${escapeHTML(result.date || "")}</div>
          </td>
          <td><strong>${escapeHTML(result.note20 || "0.00")}</strong></td>
          <td>${Number(result.good || 0)}</td>
          <td>${Number(result.bad || 0)}</td>
        </tr>
      `).join("");

      return `
        <div class="student-table-wrap">
          <table class="student-results-table">
            <thead>
              <tr>
                <th>Évaluation</th>
                <th>Score</th>
                <th>Bonnes</th>
                <th>Mauvaises</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      `;
    }

    function renderSubjects() {
      const homeView = document.getElementById("homeView");
      if (!homeView) return;

      updateStudentHeader();

      const profile = getStudentProfile();
      const programmedSubjects = subjects.filter(subject => subject.programmed === true && window.selectedFiliere && (subject.filiere === window.selectedFiliere || subject.filiere === "COMMUN"));
      const availableSubjects = programmedSubjects.filter(subject => getSubjectStatus(subject).key === "available" && (!window.selectedYear || subject.year === window.selectedYear));

      const availableHtml = availableSubjects.length ? availableSubjects.map(availableSubject => `
        <div class="student-evaluation-card">
          <div class="student-evaluation-head">
            <span class="student-status-pill available">Disponible</span>
            <h4>${escapeHTML(availableSubject.title)}</h4>
          </div>
          <p class="student-evaluation-meta"><strong>Matière :</strong> ${escapeHTML(availableSubject.matter)}</p>
          <p class="student-evaluation-meta">Sans limite de temps</p>
          <p class="student-evaluation-meta"><strong>Questions :</strong> ${availableSubject.questions.length} dans le sujet — ${getQuizTypeLabel()} — ${quizSettings.displayMode === "all" ? "toutes sur une page" : "question par question"}</p>
          <p class="student-evaluation-meta"><strong>Fermeture :</strong> ${formatDateTime(availableSubject.closeDate, availableSubject.closeTime)}</p>
          <button class="student-start-btn" onclick="startQuickEvaluation('${availableSubject.id}')">Commencer</button>
        </div>
      `).join("") : `
        <div class="student-empty-state">Choisissez votre chapitre pour commencer votre entraînement.</div>
      `;

      homeView.innerHTML = `
        <div class="student-dashboard">
          <section class="student-profile-card">
            <h2>${escapeHTML(profile.nomComplet)}</h2>
            <p>
              <span>Nom et Prénoms :</span> <strong>${escapeHTML(profile.nomComplet)}</strong>
            </p>
            <button class="student-scroll-btn" onclick="document.getElementById('studentAvailableSection').scrollIntoView({behavior:'smooth', block:'start'})">Mes évaluations</button>
          </section>

          <section id="studentAvailableSection" class="student-section-card">
            <h3>Cardiologie — Compo sur table · L3 IDE</h3><div class="filiere-buttons">${["2021", "2022", "2023", "2026"].map(year => `<button class="student-start-btn" aria-pressed="${window.selectedYear === year}" onclick="selectYear('${year}')">${year === "2026" ? "Agboville 2026" : "Abengourou " + year}</button>`).join("")}<button class="student-start-btn" onclick="selectYear('')">Tout afficher</button></div>
            <div class="filiere-buttons"><button class="student-start-btn" aria-pressed="${window.selectedFiliere === 'IDE'}" onclick="selectFiliere('IDE')">IDE · Infirmier</button></div>
            <h3>${window.selectedFiliere ? 'Sujets · ' + window.selectedFiliere : 'Sélectionnez IDE ou SFM pour afficher les sujets'}</h3>
            <p class="student-section-note">Choisissez votre chapitre pour commencer votre entraînement.</p>
            ${availableHtml}
          </section>

          <section class="student-section-card">
            <h3>Évaluations effectuées</h3>
            <p class="student-section-note">Vous pouvez consulter votre note et le résumé de l'évaluation.</p>
            ${renderStudentResultsTable()}
          </section>
        </div>
      `;
    }

    function selectYear(year) { window.selectedYear = year; renderSubjects(); }

    function getQuizTypeLabel() {
      if (quizSettings.questionType === "qcd") return "QCD seulement";
      if (quizSettings.questionType === "qcm") return "QCM seulement";
      return "QCM et QCD";
    }

    function getMaximumQuestionCount(type = quizSettings.questionType) {
      const bank = subjects[0]?.questions || CONFIG.subjects[0]?.questions || [];
      if (type === "qcd") return bank.filter(q => getQuestionCategory(q) === "trueFalse").length;
      if (type === "qcm") return bank.filter(q => getQuestionCategory(q) !== "trueFalse").length;
      return bank.length;
    }

    function openQuizSettings() {
      const modal = document.getElementById("modal");
      const max = getMaximumQuestionCount();
      modal.className = "modal";
      modal.innerHTML = `
        <div class="modal-content settings-modal-content">
          <h2>⚙ Paramètres du quiz</h2>
          <div class="settings-field">
            <label for="settingsQuestionCount"><strong>Nombre de questions</strong></label>
            <input id="settingsQuestionCount" disabled type="number" min="1" max="${max}" value="${Math.min(quizSettings.questionCount, max)}">
            <small id="settingsQuestionLimit" class="muted">Toutes les questions du sujet sont affichées, sans limite de temps.</small>
          </div>
          <div class="settings-field">
            <label for="settingsDisplayMode"><strong>Mode d’affichage</strong></label>
            <select id="settingsDisplayMode" disabled>
              
              <option value="all" ${quizSettings.displayMode === "all" ? "selected" : ""}>Toutes les questions</option>
            </select>
          </div>
          <div class="settings-field">
            <label for="settingsQuestionType"><strong>Type de questions</strong></label>
            <select id="settingsQuestionType" disabled onchange="updateSettingsQuestionLimit()">
              <option value="both" ${quizSettings.questionType === "both" ? "selected" : ""}>QCM et QCD</option>
              <option value="qcm" ${quizSettings.questionType === "qcm" ? "selected" : ""}>QCM seulement</option>
              <option value="qcd" ${quizSettings.questionType === "qcd" ? "selected" : ""}>QCD seulement (Vrai/Faux)</option>
            </select>
          </div>
          <div class="settings-toggle-row">
            <div>
              <strong>Caméra</strong>
              <small>Désactivée pour ce site.</small>
            </div>
            <label class="settings-switch">
              <input id="settingsCameraEnabled" type="checkbox" disabled>
              <span class="settings-switch-slider"></span>
              <span class="settings-switch-state">Désactivée</span>
            </label>
          </div>
          <div class="settings-toggle-row">
            <div>
              <strong>Anti-triche</strong>
              <small>Détecter les sorties de page, changements d’application et raccourcis interdits.</small>
            </div>
            <label class="settings-switch">
              <input id="settingsAntiCheatEnabled" type="checkbox" disabled ${quizSettings.antiCheatEnabled !== false ? "checked" : ""}>
              <span class="settings-switch-slider"></span>
              <span class="settings-switch-state">${quizSettings.antiCheatEnabled !== false ? "Activé" : "Désactivé"}</span>
            </label>
          </div>
          <div class="actions settings-actions">
            <button class="btn-light" type="button" onclick="closeModal()">Annuler</button>
            <button class="btn-green" type="button" onclick="saveQuizSettings()">Enregistrer</button>
          </div>
        </div>`;
    }

    function updateSettingsQuestionLimit() {
      const type = document.getElementById("settingsQuestionType").value;
      const max = getMaximumQuestionCount(type);
      const input = document.getElementById("settingsQuestionCount");
      input.max = max;
      if (Number(input.value) > max) input.value = max;
      document.getElementById("settingsQuestionLimit").textContent = `Maximum disponible : ${max}`;
    }

    function saveQuizSettings() {
      const type = document.getElementById("settingsQuestionType").value;
      const max = getMaximumQuestionCount(type);
      const requested = Number(document.getElementById("settingsQuestionCount").value);
      quizSettings = {
        questionCount: Math.max(1, Math.min(max, Number.isFinite(requested) ? Math.floor(requested) : 50)),
        displayMode: "all",
        questionType: type,
        cameraEnabled: false,
        antiCheatEnabled: true
      };
      localStorage.setItem(QUIZ_SETTINGS_KEY, JSON.stringify(quizSettings));
      closeModal();
      renderSubjects();
    }

    function showStudentForm(subjectId) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      document.querySelectorAll(".student-form").forEach(form => form.classList.add("hidden"));
      const form = document.getElementById(`student-form-${subjectId}`);
      const matriculeInput = document.getElementById(`matricule-${subjectId}`);
      if (matriculeInput) matriculeInput.value = getActiveMatricule();

      if (form) {
        form.classList.remove("hidden");
        form.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }


    function stopCameraStream() {
      if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
      }
    }

    function closeCameraGate() {
      stopCameraStream();
      const modal = document.getElementById("cameraGateModal");
      if (modal) modal.remove();
    }

    function beginEvaluationAfterPhoto(subjectId, student, photoData) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      currentSubject = prepareSubjectForQuiz(subject);
      currentStudent = {
        ...student,
        photo: photoData || ""
      };
      quizStartTime = new Date();

      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("quizView").classList.remove("hidden");

      currentQuestionIndex = 0;
      savedQuestionAnswers = {};
      renderQuiz();

      startPageExitTracking();
    }

    async function openCameraGate(subjectId, student) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("Votre navigateur ne permet pas l'utilisation de la caméra. Utilisez Chrome, Edge ou Firefox avec un lien HTTPS.");
        return;
      }

      closeCameraGate();

      const modal = document.createElement("div");
      modal.id = "cameraGateModal";
      modal.className = "camera-gate-modal";
      modal.innerHTML = `

</div>
      `;
      document.body.appendChild(modal);

      const video = document.getElementById("cameraGateVideo");
      const takeBtn = document.getElementById("takeCameraPhotoBtn");
      const preview = document.getElementById("cameraGatePreview");
      const canvas = document.getElementById("cameraGateCanvas");

      try {
        cameraStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
          audio: false
        });
        video.srcObject = cameraStream;
      } catch (error) {
        closeCameraGate();
        alert("Caméra non activée. Vous devez autoriser la caméra et prendre une photo avant d'accéder à l'évaluation.");
        return;
      }

      takeBtn.onclick = () => {
        const width = 320;
        const videoWidth = video.videoWidth || 640;
        const videoHeight = video.videoHeight || 480;
        const height = Math.round(width * (videoHeight / videoWidth));

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, width, height);
        const photoData = canvas.toDataURL("image/jpeg", 0.65);

        preview.classList.remove("hidden");
        preview.innerHTML = `
<p>Photo prise avec succès.</p>`;
        takeBtn.textContent = "Accéder à l'évaluation";
        takeBtn.onclick = () => {
          closeCameraGate();
          beginEvaluationAfterPhoto(subjectId, student, photoData);
        };
      };
    }


    function startQuickEvaluation(subjectId) {
      if (quizSettings.cameraEnabled === false) {
        beginQuizAfterCamera(subjectId, "");
        return;
      }
      openCameraBeforeQuiz(subjectId);
    }

    function openCameraBeforeQuiz(subjectId) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      const modal = document.getElementById("modal");
      modal.className = "modal";
      modal.innerHTML = `
        <div class="modal-content camera-modal-content">
          <h2>Photo obligatoire avant l'évaluation</h2>
          <p class="muted">Autorisez la caméra, puis prenez une photo pour accéder à l'évaluation.</p>

          <div class="camera-box">
            <video id="cameraPreview" autoplay playsinline muted></video>
            <canvas id="cameraCanvas" class="hidden"></canvas>
            <img id="cameraPhotoPreview" class="camera-photo-preview hidden" alt="Photo prise">
            <div id="cameraFallbackBox" class="camera-fallback-box hidden">
              <p><strong>Caméra directe bloquée ou indisponible.</strong></p>
              <p>Utilisez le bouton ci-dessous pour prendre une photo avec votre téléphone ou choisir une photo.</p>
              <label class="camera-file-btn">
                Prendre / choisir une photo
                <input id="cameraFileInput" type="file" accept="image/*" capture="user" onchange="handleStudentPhotoFile('${subjectId}', this)">
              </label>
            </div>
          </div>

          <div class="actions camera-actions">
            <button id="captureCameraBtn" class="btn-green" onclick="captureStudentPhoto('${subjectId}')">Prendre la photo</button>
            <button class="btn-light" onclick="closeCameraModal()">Annuler</button>
          </div>
          <p id="cameraError" class="camera-error hidden"></p>
        </div>
      `;

      startCompatibleCamera(subjectId);
    }

    function getCompatibleGetUserMedia() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        return constraints => navigator.mediaDevices.getUserMedia(constraints);
      }

      const legacy =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;

      if (!legacy) return null;

      return constraints => new Promise((resolve, reject) => {
        legacy.call(navigator, constraints, resolve, reject);
      });
    }

    function startCompatibleCamera(subjectId) {
      const getMedia = getCompatibleGetUserMedia();
      const video = document.getElementById("cameraPreview");
      const captureBtn = document.getElementById("captureCameraBtn");

      if (!getMedia) {
        showCameraFallback(subjectId, "Votre navigateur ne permet pas la caméra directe.");
        return;
      }

      const attempts = [
        { video: { facingMode: "user" }, audio: false },
        { video: true, audio: false }
      ];

      function tryCamera(index) {
        if (index >= attempts.length) {
          showCameraFallback(subjectId, "La caméra directe est bloquée. Utilisez le bouton de photo proposé ci-dessous.");
          return;
        }

        getMedia(attempts[index])
          .then(stream => {
            window.currentCameraStream = stream;
            if (video) {
              video.srcObject = stream;
              video.classList.remove("hidden");
              video.play().catch(() => {});
            }
            if (captureBtn) captureBtn.disabled = false;
            const errorBox = document.getElementById("cameraError");
            if (errorBox) errorBox.classList.add("hidden");
          })
          .catch(() => tryCamera(index + 1));
      }

      if (captureBtn) captureBtn.disabled = false;
      tryCamera(0);
    }

    function showCameraFallback(subjectId, message = "") {
      const video = document.getElementById("cameraPreview");
      const fallback = document.getElementById("cameraFallbackBox");
      const captureBtn = document.getElementById("captureCameraBtn");
      const errorBox = document.getElementById("cameraError");

      if (window.currentCameraStream) {
        window.currentCameraStream.getTracks().forEach(track => track.stop());
        window.currentCameraStream = null;
      }

      if (video) {
        video.srcObject = null;
        video.classList.add("hidden");
      }
      if (fallback) fallback.classList.remove("hidden");
      if (captureBtn) captureBtn.disabled = true;

      if (message && errorBox) {
        errorBox.textContent = message + " Si possible, ouvrez le site en HTTPS ou en localhost.";
        errorBox.classList.remove("hidden");
      }
    }

    function handleStudentPhotoFile(subjectId, input) {
      const file = input && input.files && input.files[0];
      if (!file) return;

      if (!file.type || !file.type.startsWith("image/")) {
        alert("Veuillez sélectionner une image.");
        input.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onload = event => {
        const photoData = event.target.result;
        window.currentStudentPhoto = photoData;

        const img = document.getElementById("cameraPhotoPreview");
        if (img) {
          img.src = photoData;
          img.classList.remove("hidden");
        }

        closeCameraModal();
        beginQuizAfterCamera(subjectId, photoData);
      };
      reader.onerror = () => alert("Impossible de lire la photo. Veuillez réessayer.");
      reader.readAsDataURL(file);
    }

    function closeCameraModal() {
      if (window.currentCameraStream) {
        window.currentCameraStream.getTracks().forEach(track => track.stop());
        window.currentCameraStream = null;
      }
      const modal = document.getElementById("modal");
      if (modal) {
        modal.className = "modal hidden";
        modal.innerHTML = "";
      }
    }

    function captureStudentPhoto(subjectId) {
      const video = document.getElementById("cameraPreview");
      const canvas = document.getElementById("cameraCanvas");
      const img = document.getElementById("cameraPhotoPreview");

      if (!video || !canvas || !video.srcObject) {
        showCameraFallback(subjectId, "Veuillez autoriser la caméra, puis reprendre la photo.");
        return;
      }

      const width = video.videoWidth || 640;
      const height = video.videoHeight || 480;
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, width, height);

      const photoData = canvas.toDataURL("image/jpeg", 0.85);
      window.currentStudentPhoto = photoData;

      if (img) {
        img.src = photoData;
        img.classList.remove("hidden");
      }

      closeCameraModal();
      beginQuizAfterCamera(subjectId, photoData);
    }

    function beginQuizAfterCamera(subjectId, photoData) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      const profile = getStudentProfile();
      currentSubject = prepareSubjectForQuiz(subject);
      currentStudent = {
        nom: profile.nom,
        prenom: profile.prenom,
        matricule: profile.matricule,
        photo: photoData || ""
      };
      quizStartTime = new Date();

      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("quizView").classList.remove("hidden");

      currentQuestionIndex = 0;
      savedQuestionAnswers = {};
      renderQuiz();

      startPageExitTracking();
    }

    function logoutStudent() {
      clearInterval(timerInterval);
      localStorage.removeItem("REVISION_LICENCE_1_ACTIVE_FULL_NAME");
      window.activeStudentFullName = "";

      const accessPage = document.getElementById("accessPage");
      const siteHeader = document.getElementById("siteHeader");
      const mainContent = document.getElementById("mainContent");
      const input = document.getElementById("accessFullName");

      if (siteHeader) siteHeader.style.display = "none";
      if (mainContent) mainContent.style.display = "none";
      if (accessPage) accessPage.style.display = "flex";
      if (input) {
        input.value = "";
        setTimeout(() => input.focus(), 50);
      }
    }

    function startQuiz(subjectId) {
      const subject = subjects.find(s => s.id === subjectId);
      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      const nom = document.getElementById(`nom-${subjectId}`).value.trim();
      const prenom = document.getElementById(`prenom-${subjectId}`).value.trim();
      const matricule = (document.getElementById(`matricule-${subjectId}`).value || getActiveMatricule()).trim();

      if (!matricule) {
        alert("Veuillez entrer votre nom et vos prénoms sur la première page.");
        location.reload();
        return;
      }
      if (!nom || !prenom) return alert("Veuillez renseigner nom et prénom.");

      // Les étudiants peuvent reprendre le même sujet autant de fois qu’ils le souhaitent.
      if (quizSettings.cameraEnabled === false) {
        beginEvaluationAfterPhoto(subjectId, { nom, prenom, matricule }, "");
        return;
      }
      openCameraGate(subjectId, { nom, prenom, matricule });
    }

    /********************************************************************
     * INTERFACE QUIZ
     ********************************************************************/
    function renderQuiz() {
      quizSettings.displayMode = "all";
      const quizView = document.getElementById("quizView");
      const totalQuestions = currentSubject.questions.length;
      quizView.innerHTML = `
        <div class="quiz-layout quiz-layout-single"><div class="panel quiz-panel quiz-panel-clean">
          <h2>${escapeHTML(currentSubject.title)}</h2>
          <p class="muted">Toutes les ${totalQuestions} questions sont affichées ci-dessous. Sans limite de temps.</p>
          <form id="quizForm">
            ${currentSubject.questions.map((question, index) => `
              <section class="all-question-block">
                <div class="all-question-number">Question ${index + 1} / ${totalQuestions}</div>
                ${renderQuestion(question, index)}
              </section>`).join("")}
            <div class="question-navigation"><button type="button" class="btn-green" onclick="submitQuiz(false)">Valider ma composition</button></div>
          </form>
        </div></div>`;
      restoreAllQuestionAnswers();
      quizView.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function renderQuestion(q, index) {
      const isMultiple = Array.isArray(q.answers) || Array.isArray(q.correct);
      const inputType = isMultiple ? "checkbox" : "radio";
      const help = isMultiple ? `<p class="muted">Plusieurs réponses sont possibles.</p>` : "";
      const options = Array.isArray(q.options) ? q.options : [];
      const caseContext = q.caseContext ? `<div class="case-context"><div class="case-context-label">Texte de l’étude de cas</div><div class="case-context-text">${escapeHTML(q.caseContext).replace(/\n/g, "<br>")}</div></div>` : "";
      return `
        <div class="question question-clean">
          ${caseContext}
          <p class="question-text-only">${escapeHTML(q.text)}</p>
          ${help}
          ${options.map(option => `
            <label class="option">
              <input type="${inputType}" name="q-${index}" value="${escapeHTML(option)}">
              <span>${escapeHTML(option)}</span>
            </label>
          `).join("")}
        </div>
      `;
    }

    function saveCurrentQuestionAnswer() {
      const selectedNodes = Array.from(document.querySelectorAll(`input[name="q-${currentQuestionIndex}"]:checked`));
      savedQuestionAnswers[currentQuestionIndex] = selectedNodes.map(input => input.value);
    }

    function saveAllQuestionAnswers() {
      currentSubject.questions.forEach((question, index) => {
        const selectedNodes = Array.from(document.querySelectorAll(`input[name="q-${index}"]:checked`));
        savedQuestionAnswers[index] = selectedNodes.map(input => input.value);
      });
    }

    function restoreAllQuestionAnswers() {
      currentSubject.questions.forEach((question, index) => {
        (savedQuestionAnswers[index] || []).forEach(value => {
          const input = Array.from(document.querySelectorAll(`input[name="q-${index}"]`)).find(node => node.value === value);
          if (input) input.checked = true;
        });
      });
    }

    function restoreCurrentQuestionAnswer() {
      const savedAnswers = savedQuestionAnswers[currentQuestionIndex] || [];
      savedAnswers.forEach(value => {
        const input = Array.from(document.querySelectorAll(`input[name="q-${currentQuestionIndex}"]`))
          .find(node => node.value === value);
        if (input) input.checked = true;
      });
    }

    function goToNextQuestion() {
      saveCurrentQuestionAnswer();
      if (currentQuestionIndex >= currentSubject.questions.length - 1) {
        submitQuiz(false);
        return;
      }
      currentQuestionIndex++;
      renderQuiz();

    }




    function sameAnswers(studentAnswers, expectedAnswers) {
      const normalize = arr => arr.filter(Boolean).map(v => String(v).trim()).sort();
      const a = normalize(studentAnswers);
      const b = normalize(expectedAnswers);
      return a.length === b.length && a.every((value, index) => value === b[index]);
    }

    function renderSecurityEvents(events) {
      if (!events || !events.length) return "Aucun incident détecté";
      return events.map(item => escapeHTML(`${item.time || ""} - ${item.reason || "Incident de sécurité"}`)).join("<br>");
    }

    function submitQuiz(auto = false) {
      clearInterval(timerInterval);

      let good = 0, bad = 0, empty = 0, score = 0;
      const marking = currentSubject.marking || CONFIG.defaultMarking;
      const answers = [];

      saveAllQuestionAnswers();

      currentSubject.questions.forEach((q, index) => {
        const expected = Array.isArray(q.answers) ? q.answers : (Array.isArray(q.correct) ? q.correct : [q.answer || q.correct]);
        const studentAnswers = savedQuestionAnswers[index] || [];
        const studentAnswer = studentAnswers.join(" ; ");
        const correctAnswer = q.ungraded ? "Item non coté — consulter l’explication" : expected.join(" ; ");
        let state = "empty";

        if (q.ungraded) {
          state = "neutral";
        } else if (studentAnswers.length === 0) {
          empty++;
          score += Number(marking.empty);
        } else if (sameAnswers(studentAnswers, expected)) {
          good++;
          score += Number(marking.correct);
          state = "good";
        } else {
          bad++;
          // Barème : -1 uniquement pour une mauvaise réponse en QCD.
          // Une mauvaise réponse en QCM vaut 0 point.
          if (String(q.type || "").toLowerCase() === "qcd") {
            score += Number(marking.wrong);
          }
          state = "bad";
        }

        answers.push({
          question: q.text,
          options: Array.isArray(q.options) ? q.options : [],
          studentAnswer,
          correctAnswer,
          correction: (q.correction || q.explanation || "") + (q.source ? "\n\nSource : " + q.source : ""),
          state
        });
      });

      const maxScore = currentSubject.questions.filter(q => !q.ungraded).length * Number(marking.correct);
      let note20 = maxScore > 0 ? (score / maxScore) * 20 : 0;
      note20 = Math.max(0, note20).toFixed(2);

      // Si l'étudiant sort de la page, de l'onglet, de l'application ou du plein écran,
      // il continue son devoir jusqu'à la fin. Au résultat, on affiche seulement
      // la mention "Auto envoi" et l'information est enregistrée dans l'administration.
      const pageExitDetected = hasRealPageExitDuringQuiz();
      const autoSend = pageExitDetected === true;

      const usedSeconds = Math.round((new Date() - quizStartTime) / 1000);
      const result = {
        id: Date.now().toString(),
        date: new Date().toLocaleString("fr-FR"),
        student: currentStudent,
        studentPhoto: currentStudent.photo || "",
        photoTaken: Boolean(currentStudent.photo),
        subjectId: currentSubject.id,
        subjectTitle: currentSubject.title,
        matter: currentSubject.matter,
        score,
        note20,
        good,
        bad,
        empty,
        total: currentSubject.questions.length,
        answers,
        usedTime: formatDuration(usedSeconds),
        pageExitCount,
        pageExitEvents,
        securityEvents: pageExitEvents,
        pageExitDetected,
        autoSend,
        autoSendScoreZero: false
      };

      const results = getResults();
      results.push(result);
      saveResults(results);

      // Aucune tentative n’est verrouillée : le même matricule peut composer plusieurs fois le même sujet.

      renderResult(result);
    }

    function formatScoreForDisplay(value) {
      const numericValue = Number(value || 0);
      if (Number.isInteger(numericValue)) return String(numericValue);
      return numericValue.toFixed(2).replace(/\.00$/, "");
    }

    function renderResult(result) {
      stopPageExitTracking();
      // Afficher "Auto envoi" seulement si une sortie réelle a été détectée
      // pendant l'évaluation. La note calculée est conservée.
      const resultIsAutoSend = (result.autoSend === true || result.pageExitDetected === true);
      const displayedScore = Number(result.score || 0);
      const displayedResult = formatScoreForDisplay(displayedScore);
      const autoSendMessage = resultIsAutoSend ? '<div class="auto-send-message">Auto envoi</div>' : "";
      const mainContent = document.getElementById("mainContent");
      const resultPhoto = result.studentPhoto || result.student?.photo || "";
      const photoHtml = resultPhoto ? `
` : "";
      if (mainContent) mainContent.style.display = "block";
      const welcomePopup = document.getElementById("welcomePopup");
      if (welcomePopup) welcomePopup.style.display = "none";
      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("quizView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      document.getElementById("resultView").classList.remove("hidden");
      document.getElementById("resultView").innerHTML = `
        <div class="panel result-card">
          <h2>Résultat de composition</h2>
          ${autoSendMessage}
          <p class="score-big">${displayedResult}</p>
          <div class="grid">
            <div><strong>Statut :</strong> ${resultIsAutoSend ? "Auto envoi" : "Envoi normal"}</div>
            <div><strong>Nom et Prénoms :</strong> ${escapeHTML(`${result.student.nom || ""} ${result.student.prenom || ""}`.trim())}</div>
            <div><strong>Sujet :</strong> ${escapeHTML(result.subjectTitle)}</div>
            <div><strong>Score :</strong> ${displayedScore}</div>
            <div><strong>Bonnes réponses :</strong> ${result.good}</div>
            <div><strong>Mauvaises réponses :</strong> ${result.bad}</div>
            <div><strong>Sans réponse :</strong> ${result.empty}</div>

            <div><strong>Incidents sécurité :</strong> ${Number(result.pageExitCount || 0)}</div>
            <div><strong>Détails sécurité :</strong><br>${renderSecurityEvents(result.pageExitEvents || result.securityEvents)}</div>
          </div>
          ${photoHtml}
          <br>
          <div class="actions">
            <button id="correctionToggleButton" type="button" class="btn-green" onclick="toggleCorrection()">Voir la correction</button>
            <button onclick="showHome()">Retour à l'accueil</button>
          </div>
          <div id="correctionBox" class="correction-box hidden">
            ${renderCorrection(result)}
          </div>
        </div>
      `;
      document.getElementById("resultView").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function toggleCorrection() {
      const box = document.getElementById("correctionBox");
      const button = document.getElementById("correctionToggleButton");
      if (!box) return;
      const willShow = box.classList.contains("hidden");
      box.classList.toggle("hidden");
      if (button) button.textContent = willShow ? "Masquer la correction" : "Voir la correction";
      if (willShow) box.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function renderCorrection(result) {
      if (!result.answers || !result.answers.length) {
        return `<p class="muted">Aucune correction disponible pour cet ancien résultat.</p>`;
      }

      return `
        <h3>Correction détaillée</h3>
        <p class="muted">Comparez vos réponses avec les bonnes réponses et lisez l'explication de chaque question.</p>
        ${result.answers.map((a, index) => {
          const answerState = a.state === "neutral" ? "Non coté — item ambigu" : a.state === "good" ? "Trouvé" : (a.state === "empty" ? "Non répondu" : "Non trouvé");
          return `
          <div class="correction-item ${a.state}">
            <h4>Question ${index + 1}</h4>
            <p class="answer-status ${a.state}"><strong>${answerState}</strong></p>
            <p><strong>Énoncé :</strong> ${escapeHTML(a.question)}</p>
            <p><strong>Réponse donnée :</strong> ${a.studentAnswer ? escapeHTML(a.studentAnswer) : "Aucune réponse"}</p>
            <p><strong>Bonne réponse :</strong> ${escapeHTML(a.correctAnswer)}</p>
            ${a.correction ? `<p><strong>Explication :</strong> ${escapeHTML(a.correction)}</p>` : `<p><strong>Explication :</strong> La bonne réponse est ${escapeHTML(a.correctAnswer)}.</p>`}
          </div>
        `}).join("")}
      `;
    }

    /********************************************************************
     * ADMINISTRATION
     ********************************************************************/
    function openAdminLogin() {
      const password = prompt("Mot de passe ADMIN :");
      if (password === ADMIN_PASSWORD) showAdmin();
      else if (password !== null) alert("Mot de passe incorrect.");
    }

    function showAdmin() {
      clearInterval(timerInterval);
      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("quizView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("adminView").classList.remove("hidden");
      renderAdminSubjects();
    }

    function renderAdminSubjects() {
      const content = document.getElementById("adminContent");
      content.innerHTML = `
        <div class="table-wrap">
          <table>
            <thead><tr><th>Titre</th><th>Matière</th><th>Affichage accueil</th><th>Dates</th><th>Durée</th><th>Questions</th><th>Actions</th></tr></thead>
            <tbody>
              ${subjects.map(s => `
                <tr>
                  <td>${escapeHTML(s.title)}</td>
                  <td>${escapeHTML(s.matter)}</td>
                  <td><span class="badge ${s.programmed ? 'available' : 'locked'}">${s.programmed ? 'Programmé' : 'Non programmé'}</span></td>
                  <td>Du ${formatDateTime(s.openDate, s.openTime)}<br>au ${formatDateTime(s.closeDate, s.closeTime)}</td>
                  <td>${s.duration} min</td>
                  <td>${getQuizQuestionCount()} tirées sur ${s.questions.length}</td>
                  <td class="actions">
                    <button class="${s.programmed ? 'btn-dark' : 'btn-green'}" onclick="toggleProgrammed('${s.id}')">${s.programmed ? 'Retirer' : 'Programmer'}</button>
                    <button class="btn-orange" onclick="openSubjectEditor('${s.id}')">Modifier</button>
                    <button class="btn-red" onclick="deleteSubject('${s.id}')">Supprimer</button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    function renderAdminResults() {
      const results = getResults().slice().reverse();
      const content = document.getElementById("adminContent");
      content.innerHTML = `
        <div class="topbar results-toolbar">
          <div>
            <h3>Résultats enregistrés</h3>
            <p class="muted">Importe les résultats d’un autre devoir ou exporte les résultats sauvegardés.</p>
          </div>
          <div class="actions">
            <label class="btn btn-light file-btn" for="importResultsFile">Choisir un fichier</label>
            <input id="importResultsFile" class="hidden" type="file" accept=".json,.csv,application/json,text/csv">
            <button class="btn-green" onclick="importResultsFromFile()">Importer les résultats</button>
            <button class="btn-dark" onclick="exportResultsJSON()">Exporter JSON</button>
            <button class="btn-orange" onclick="exportResultsCSV()">Exporter Excel/CSV</button>
          </div>
        </div>
        <div class="import-help">
          <strong>Formats acceptés :</strong> JSON exporté par la plateforme ou CSV avec les colonnes : nom, prenom, matricule, sujet, note20.
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Date</th><th>Nom et Prénoms</th><th>Sujet</th><th>Note</th><th>Détails</th></tr></thead>
            <tbody>
              ${results.map(r => `
                <tr>
                  <td>${escapeHTML(r.date)}</td>
                  <td>${escapeHTML(`${r.student?.nom || ""} ${r.student?.prenom || ""}`.trim())}</td>
                  <td>${escapeHTML(r.subjectTitle || r.subjectId || "Devoir importé")}</td>
                  <td><strong>${escapeHTML(r.note20 ?? "")}</strong></td>
                  <td>Statut ${(r.autoSend === true || r.pageExitDetected === true) ? "Auto envoi" : "Normal"} | Score ${escapeHTML(r.score ?? "")} | Bonnes ${escapeHTML(r.good ?? "")} | Mauvaises ${escapeHTML(r.bad ?? "")} | Vides ${escapeHTML(r.empty ?? "")} | Temps ${escapeHTML(r.usedTime ?? "")} | Incidents sécurité ${escapeHTML(r.pageExitCount ?? 0)}<br>${renderSecurityEvents(r.pageExitEvents || r.securityEvents)}
</td>
                </tr>
              `).join("") || `<tr><td colspan="5">Aucun résultat pour le moment.</td></tr>`}
            </tbody>
          </table>
        </div>
      `;
    }

    /********************************************************************
     * IMPORTATION / EXPORTATION DES RÉSULTATS
     ********************************************************************/
    function importResultsFromFile() {
      const input = document.getElementById("importResultsFile");
      if (!input || !input.files.length) return alert("Veuillez choisir un fichier de résultats à importer.");

      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = function(event) {
        try {
          const text = event.target.result;
          const imported = file.name.toLowerCase().endsWith(".csv") ? parseResultsCSV(text) : JSON.parse(text);

          if (!Array.isArray(imported) || imported.length === 0) {
            return alert("Le fichier ne contient aucun résultat valide.");
          }

          const normalized = imported.map(normalizeImportedResult).filter(Boolean);
          if (!normalized.length) return alert("Aucun résultat valide n’a été trouvé dans le fichier.");

          const existing = getResults();
          const existingKeys = new Set(existing.map(resultUniqueKey));
          let added = 0;

          normalized.forEach(result => {
            const key = resultUniqueKey(result);
            if (!existingKeys.has(key)) {
              existing.push(result);
              existingKeys.add(key);
              added++;
            }
          });

          saveResults(existing);
          input.value = "";
          renderAdminResults();
          alert(`${added} résultat(s) importé(s). ${normalized.length - added} doublon(s) ignoré(s).`);
        } catch (error) {
          console.error(error);
          alert("Impossible d’importer ce fichier. Vérifiez qu’il s’agit d’un fichier JSON ou CSV valide.");
        }
      };

      reader.readAsText(file);
    }

    function normalizeImportedResult(item) {
      if (!item || typeof item !== "object") return null;
      const student = item.student || {};
      const nom = student.nom || item.nom || item.name || "";
      const prenom = student.prenom || item.prenom || item.firstname || "";
      const matricule = student.matricule || item.matricule || item.code || "";
      const note20 = item.note20 ?? item.note ?? item.note_sur_20 ?? "";
      if (!nom && !prenom && !matricule && note20 === "") return null;

      return {
        id: item.id || `import-${Date.now()}-${Math.random().toString(36).slice(2)}`,
        date: item.date || new Date().toLocaleString("fr-FR"),
        student: { nom: String(nom), prenom: String(prenom), matricule: String(matricule) },
        subjectId: item.subjectId || item.subject_id || "devoir-importe",
        subjectTitle: item.subjectTitle || item.sujet || item.subject || item.title || "Devoir importé",
        matter: item.matter || item.matiere || "",
        score: item.score ?? "",
        note20: note20 !== "" ? String(note20).replace(",", ".") : "",
        good: item.good ?? item.bonnes ?? "",
        bad: item.bad ?? item.mauvaises ?? "",
        empty: item.empty ?? item.vides ?? "",
        total: item.total ?? "",
        answers: Array.isArray(item.answers) ? item.answers : [],
        usedTime: item.usedTime || item.temps || ""
      };
    }

    function resultUniqueKey(result) {
      return [
        result.student?.matricule || "",
        result.subjectId || result.subjectTitle || "",
        result.note20 || "",
        result.date || ""
      ].join("|").toLowerCase();
    }

    function exportResultsJSON() {
      const results = getResults();
      if (!results.length) return alert("Aucun résultat à exporter.");
      downloadTextFile("resultats-composition.json", JSON.stringify(results, null, 2), "application/json");
    }

    function exportResultsCSV() {
      const results = getResults();
      if (!results.length) return alert("Aucun résultat à exporter.");
      const headers = ["date", "nom", "prenom", "matricule", "sujet", "matiere", "note20", "score", "bonnes", "mauvaises", "vides", "total", "temps"];
      const rows = results.map(r => [
        r.date,
        r.student?.nom,
        r.student?.prenom,
        r.student?.matricule,
        r.subjectTitle,
        r.matter,
        r.note20,
        r.score,
        r.good,
        r.bad,
        r.empty,
        r.total,
        r.usedTime
      ]);
      const csv = [headers, ...rows].map(row => row.map(csvEscape).join(";")).join("\n");
      downloadTextFile("resultats-composition.csv", "﻿" + csv, "text/csv;charset=utf-8");
    }

    function parseResultsCSV(text) {
      const lines = text.split(/\r?\n/).filter(line => line.trim());
      if (lines.length < 2) return [];
      const separator = lines[0].includes(";") ? ";" : ",";
      const headers = splitCSVLine(lines[0], separator).map(h => h.trim().toLowerCase());
      return lines.slice(1).map(line => {
        const values = splitCSVLine(line, separator);
        const obj = {};
        headers.forEach((h, i) => obj[h] = values[i] || "");
        return {
          date: obj.date,
          nom: obj.nom,
          prenom: obj.prenom || obj["prénom"],
          matricule: obj.matricule || obj.code,
          sujet: obj.sujet || obj.subject || obj.devoir,
          matiere: obj.matiere || obj["matière"],
          note20: obj.note20 || obj.note || obj["note"],
          score: obj.score,
          good: obj.bonnes,
          bad: obj.mauvaises,
          empty: obj.vides,
          total: obj.total,
          usedTime: obj.temps
        };
      });
    }

    function splitCSVLine(line, separator) {
      const values = [];
      let current = "";
      let inQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        const next = line[i + 1];
        if (char === '"' && inQuotes && next === '"') {
          current += '"';
          i++;
        } else if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === separator && !inQuotes) {
          values.push(current);
          current = "";
        } else {
          current += char;
        }
      }
      values.push(current);
      return values;
    }

    function csvEscape(value) {
      const str = String(value ?? "");
      return `"${str.replaceAll('"', '""')}"`;
    }

    function downloadTextFile(filename, content, type) {
      const blob = new Blob([content], { type });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    }

    function openSubjectEditor(subjectId = null) {
      const subject = subjectId ? cloneData(subjects.find(s => s.id === subjectId)) : {
        id: "sujet-" + Date.now(),
        title: "Nouveau sujet",
        matter: "Soins infirmiers",
        description: "Description du sujet",
        instructions: "Répondez à toutes les questions.",
        duration: 30,
        programmed: false,
        openDate: new Date().toISOString().slice(0, 10),
        openTime: "08:00",
        closeDate: new Date().toISOString().slice(0, 10),
        closeTime: "18:00",
        marking: { correct: 1, wrong: -1, empty: 0 },
        questions: []
      };

      document.getElementById("modal").classList.remove("hidden");
      document.getElementById("modal").innerHTML = `
        <div class="modal-content">
          <div class="topbar">
            <h2>${subjectId ? "Modifier" : "Ajouter"} un sujet</h2>
            <button class="btn-red" onclick="closeModal()">Fermer</button>
          </div>
          <div class="form-grid">
            <div><label>Titre</label><input id="edit-title" value="${escapeAttr(subject.title)}"></div>
            <div><label>Matière</label><select id="edit-matter">
              ${["Soins infirmiers", "Santé publique", "Obstétrique", "Anatomie", "Pharmacologie"].map(m => `<option ${subject.matter === m ? "selected" : ""}>${m}</option>`).join("")}
            </select></div>
            <div><label>Durée en minutes</label><input id="edit-duration" type="number" min="1" value="${subject.duration}"></div>
            <div><label>Affichage accueil</label><select id="edit-programmed">
              <option value="false" ${subject.programmed !== true ? "selected" : ""}>Non programmé</option>
              <option value="true" ${subject.programmed === true ? "selected" : ""}>Programmé</option>
            </select></div>
            <div><label>Bonne réponse</label><input id="edit-correct" type="number" value="${subject.marking.correct}"></div>
            <div><label>Mauvaise réponse</label><input id="edit-wrong" type="number" value="${subject.marking.wrong}"></div>
            <div><label>Pas de réponse</label><input id="edit-empty" type="number" value="${subject.marking.empty}"></div>
            <div><label>Date ouverture</label><input id="edit-open-date" type="date" value="${subject.openDate}"></div>
            <div><label>Heure ouverture</label><input id="edit-open-time" type="time" value="${subject.openTime}"></div>
            <div><label>Date fermeture</label><input id="edit-close-date" type="date" value="${subject.closeDate}"></div>
            <div><label>Heure fermeture</label><input id="edit-close-time" type="time" value="${subject.closeTime}"></div>
          </div>
          <label>Description</label><textarea id="edit-description">${escapeHTML(subject.description)}</textarea>
          <label>Consignes</label><textarea id="edit-instructions">${escapeHTML(subject.instructions)}</textarea>
          <h3>Questions</h3>
          <div id="questionsEditor"></div>
          <button class="btn-green" onclick="addQuestionEditor()">+ Ajouter une question</button>
          <br><br>
          <button class="btn-green" onclick="saveSubjectFromEditor('${subject.id}')">Enregistrer le sujet</button>
        </div>
      `;

      window.editingQuestions = subject.questions;
      renderQuestionsEditor();
    }

    function renderQuestionsEditor() {
      const box = document.getElementById("questionsEditor");
      box.innerHTML = window.editingQuestions.map((q, index) => `
        <div class="question-editor">
          <div class="topbar">
            <h3>Question ${index + 1}</h3>
            <button class="btn-red" onclick="removeQuestionEditor(${index})">Supprimer</button>
          </div>
          <label>Type</label>
          <select onchange="updateQuestionField(${index}, 'type', this.value)">
            <option value="qcm" ${q.type === "qcm" ? "selected" : ""}>QCM</option>
            <option value="vf" ${q.type === "vf" ? "selected" : ""}>Vrai/Faux</option>
          </select>
          <label>Question</label>
          <textarea oninput="updateQuestionField(${index}, 'text', this.value)">${escapeHTML(q.text)}</textarea>
          <label>Options séparées par un point-virgule ;</label>
          <input value="${escapeAttr(q.options.join('; '))}" oninput="updateOptions(${index}, this.value)">
          <label>Réponse correcte</label>
          <input value="${escapeAttr(q.answer)}" oninput="updateQuestionField(${index}, 'answer', this.value)">
          <label>Correction / explication à afficher après le résultat</label>
          <textarea oninput="updateQuestionField(${index}, 'correction', this.value)">${escapeHTML(q.correction || "")}</textarea>
        </div>
      `).join("") || `<p class="muted">Aucune question. Clique sur “Ajouter une question”.</p>`;
    }

    function updateQuestionField(index, field, value) {
      window.editingQuestions[index][field] = value;
      if (field === "type" && value === "vf") {
        window.editingQuestions[index].options = ["Vrai", "Faux"];
        window.editingQuestions[index].answer = "Vrai";
        renderQuestionsEditor();
      }
    }

    function updateOptions(index, value) {
      window.editingQuestions[index].options = value.split(";").map(v => v.trim()).filter(Boolean);
    }

    function addQuestionEditor() {
      window.editingQuestions.push({ type: "qcm", text: "Nouvelle question", options: ["Réponse A", "Réponse B", "Réponse C"], answer: "Réponse A", correction: "Explication de la bonne réponse." });
      renderQuestionsEditor();
    }

    function removeQuestionEditor(index) {
      window.editingQuestions.splice(index, 1);
      renderQuestionsEditor();
    }

    function saveSubjectFromEditor(id) {
      const subject = {
        id,
        title: document.getElementById("edit-title").value.trim(),
        matter: document.getElementById("edit-matter").value,
        description: document.getElementById("edit-description").value.trim(),
        instructions: document.getElementById("edit-instructions").value.trim(),
        duration: Number(document.getElementById("edit-duration").value),
        programmed: document.getElementById("edit-programmed").value === "true",
        openDate: document.getElementById("edit-open-date").value,
        openTime: document.getElementById("edit-open-time").value,
        closeDate: document.getElementById("edit-close-date").value,
        closeTime: document.getElementById("edit-close-time").value,
        marking: {
          correct: Number(document.getElementById("edit-correct").value),
          wrong: Number(document.getElementById("edit-wrong").value),
          empty: Number(document.getElementById("edit-empty").value)
        },
        questions: window.editingQuestions
      };

      if (!subject.title || !subject.openDate || !subject.closeDate || !subject.duration) {
        return alert("Veuillez remplir les champs obligatoires.");
      }

      const index = subjects.findIndex(s => s.id === id);
      if (index >= 0) subjects[index] = subject;
      else subjects.push(subject);

      saveSubjects();
      closeModal();
      renderAdminSubjects();
      alert("Sujet sauvegardé avec succès.");
    }

    function toggleProgrammed(id) {
      const subject = subjects.find(s => s.id === id);
      if (!subject) return;
      subject.programmed = subject.programmed !== true;
      saveSubjects();
      renderAdminSubjects();
      renderSubjects();
    }

    function deleteSubject(id) {
      if (!confirm("Supprimer ce sujet ?")) return;
      subjects = subjects.filter(s => s.id !== id);
      saveSubjects();
      renderAdminSubjects();
    }

    function resetDefaultSubjects() {
      if (!confirm("Voulez-vous restaurer les sujets par défaut ? Les sujets modifiés seront supprimés.")) return;
      localStorage.removeItem(STORAGE_SUBJECTS);
      subjects = cloneData(CONFIG.subjects);
      saveSubjects();
      renderAdminSubjects();
      alert("Sujets par défaut restaurés.");
    }

    function closeModal() {
      document.getElementById("modal").classList.add("hidden");
      document.getElementById("modal").innerHTML = "";
    }

    /********************************************************************
     * SÉCURITÉ SIMPLE
     ********************************************************************/
    // Le suivi beforeunload est déjà géré plus haut avec le comptage des sorties.

    function blockBackButton() {
      history.pushState(null, null, location.href);
      window.addEventListener("popstate", function() {
        history.pushState(null, null, location.href);
        if (!document.getElementById("quizView").classList.contains("hidden")) {
          alert("Le retour est bloqué pendant la composition.");
        }
      });
    }

    /********************************************************************
     * OUTILS
     ********************************************************************/
    function formatDuration(seconds) {
      const min = Math.floor(seconds / 60);
      const sec = seconds % 60;
      return `${min} min ${sec} s`;
    }

    function escapeHTML(str) {
      return String(str ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }

    function escapeAttr(str) {
      return escapeHTML(str).replaceAll("\n", " ");
    }


/************************************************
 * MESSAGE AUCUN DEVOIR
 ************************************************/
function renderEmptySubjectsMessage(container){
    container.innerHTML = `
        <div class="empty-state">
            <div class="empty-icon">📝</div>

            <h2>Aucun devoir disponible pour le moment</h2>

            <p>
                Aucun devoir n’est actuellement programmé sur la plateforme.
                Veuillez revenir plus tard afin de consulter les prochaines compositions en ligne.
            </p>

            <div class="empty-info">
                La plateforme reste accessible 24h/24 pour les prochaines évaluations.
            </div>
        </div>
    `;
}








/* ============================================================
   PATCH - Bouton Commencer uniquement pour devoir disponible
   ============================================================ */
(function () {
  function cleanStartButtons() {
    const candidates = Array.from(document.querySelectorAll("button, a"));
    candidates.forEach(btn => {
      const label = (btn.innerText || btn.textContent || "").trim().toLowerCase();
      if (label.includes("choisir ce devoir")) {
        btn.textContent = "Commencer";
      }
      if (!label.includes("commencer") && !label.includes("choisir ce devoir")) return;

      let card = btn;
      for (let i = 0; i < 6 && card.parentElement; i++) {
        card = card.parentElement;
        const text = (card.innerText || card.textContent || "").toLowerCase();
        if (text.includes("verrouill") || text.includes("termin")) {
          btn.style.display = "none";
          btn.disabled = true;
          return;
        }
        if (text.includes("disponible")) {
          btn.style.display = "";
          btn.disabled = false;
          return;
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(cleanStartButtons, 100);
    setTimeout(cleanStartButtons, 500);
    setTimeout(cleanStartButtons, 1200);
  });

  new MutationObserver(function () {
    setTimeout(cleanStartButtons, 50);
  }).observe(document.documentElement, { childList: true, subtree: true });
})();

function selectFiliere(value) { if (!["IDE", "SFM"].includes(value)) return; window.selectedFiliere = value; renderSubjects(); }
