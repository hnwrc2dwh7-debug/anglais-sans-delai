(() => {
  const tenseIds = [
    "present-simple", "present-continuous", "present-perfect", "present-perfect-continuous",
    "past-simple", "past-continuous", "past-perfect", "past-perfect-continuous",
    "will", "future-continuous", "future-perfect", "future-perfect-continuous"
  ];
  const tenseLabels = {
    "present-simple": ["Présent simple", "Present simple"],
    "present-continuous": ["Présent en -ing", "Present continuous"],
    "present-perfect": ["Present perfect", "Present perfect simple"],
    "present-perfect-continuous": ["Present perfect continu", "Present perfect continuous"],
    "past-simple": ["Prétérit", "Past simple"],
    "past-continuous": ["Passé en -ing", "Past continuous"],
    "past-perfect": ["Past perfect", "Past perfect simple"],
    "past-perfect-continuous": ["Past perfect continu", "Past perfect continuous"],
    "will": ["Futur simple", "Future simple · will"],
    "future-continuous": ["Futur en cours", "Future continuous"],
    "future-perfect": ["Futur antérieur", "Future perfect"],
    "future-perfect-continuous": ["Futur antérieur continu", "Future perfect continuous"]
  };

  if (!grammar.some(item => item.id === "future-perfect-continuous")) {
    grammar.push({
      id: "future-perfect-continuous", topic: "Futur", level: "Avancé",
      name: "Futur antérieur continu · Future perfect continuous",
      lead: "Une activité aura commencé avant un repère futur et aura duré jusqu’à ce repère.",
      form: "will + have been + verbe-ing",
      examples: [
        ["By June, I’ll have been learning English for two years.", "En juin, cela fera deux ans que j’étudie l’anglais."],
        ["Next month, she’ll have been working here for a decade.", "Le mois prochain, cela fera dix ans qu’elle travaille ici."],
        ["How long will you have been travelling by then?", "À ce moment-là, cela fera combien de temps que tu voyages ?"]
      ],
      uses: [
        "Insister sur la durée d’une activité jusqu’à un repère futur : by June, for two years.",
        "Décrire ce qui sera en cours depuis un certain temps à ce moment-là.",
        "Forme rare dans la conversation courante, mais utile à reconnaître et à comprendre."
      ],
      trap: "Le future perfect simple insiste sur l’action achevée; cette forme insiste sur sa durée. Certains verbes d’état ne s’emploient généralement pas au continu.",
      memory: "Au futur, imagine un chronomètre qui tourne déjà depuis longtemps quand tu arrives au repère."
    });
    updateProgress();
  }

  const extraLessons = [
    {
      id:"personal-pronouns",topic:"Construire ses phrases",level:"Débutant",
      name:"Pronoms personnels et possessifs",
      lead:"La forme du pronom change selon qu’il fait l’action, la reçoit ou indique à qui appartient une chose.",
      form:"Sujet : I / he · complément : me / him · adjectif possessif : my / his · pronom possessif : mine / his",
      examples:[["She knows me.","Elle me connaît."],["This is my coat. It’s mine.","C’est mon manteau. Il est à moi."],["They gave him their address.","Ils lui ont donné leur adresse."]],
      uses:["Le pronom sujet précède généralement le verbe.","Le pronom complément suit un verbe ou une préposition.","my / your / his précèdent un nom; mine / yours / his remplacent le nom."],
      trap:"Ne confonds pas he et him, ni my et mine : « This is my book » mais « This book is mine ».",
      memory:"Imagine trois places : celui qui agit, celui qui reçoit, puis l’étiquette de propriété."
    },
    {
      id:"negatives-do-be",topic:"Construire ses phrases",level:"Débutant",
      name:"Faire une phrase négative",
      lead:"Be se nie directement; avec la plupart des autres verbes, do porte la négation.",
      form:"be + not · do / does / did + not + verbe de base",
      examples:[["I’m not tired.","Je ne suis pas fatigué(e)."],["She doesn’t play tennis.","Elle ne joue pas au tennis."],["We didn’t see the sign.","Nous n’avons pas vu le panneau."]],
      uses:["Au présent : don’t, ou doesn’t avec he / she / it.","Au passé : didn’t pour toutes les personnes.","Après do / does / did, le verbe reste à la base."],
      trap:"Ne mets pas le verbe au passé après didn’t : « didn’t go », jamais « didn’t went ». Évite aussi la double négation.",
      memory:"L’auxiliaire prend le travail de la négation; le verbe principal redevient simple."
    },
    {
      id:"frequency-adverbs",topic:"Construire ses phrases",level:"Débutant",
      name:"Adverbes de fréquence",
      lead:"Ces mots indiquent à quelle fréquence une action se produit, de always à never.",
      form:"Avant le verbe principal · après be · entre l’auxiliaire et le verbe",
      examples:[["I often read before bed.","Je lis souvent avant de dormir."],["She is always kind.","Elle est toujours gentille."],["We have never tried sushi.","Nous n’avons jamais goûté les sushis."]],
      uses:["Place généralement always, usually, often, sometimes avant le verbe principal.","Après be : « He is often busy ».","Avec un auxiliaire, place l’adverbe après celui-ci."],
      trap:"L’adverbe ne se place généralement pas avant be : « She is always ready ».",
      memory:"Be attire l’adverbe juste après lui; les autres verbes le placent avant."
    },
    {
      id:"countable-uncountable",topic:"Construire ses phrases",level:"Débutant",
      name:"Noms dénombrables et indénombrables",
      lead:"On peut compter un nom dénombrable; un nom indénombrable se mesure ou se décrit comme une quantité.",
      form:"a / an + nom singulier dénombrable · nombre + pluriel · quantité pour un indénombrable",
      examples:[["an apple · two apples","une pomme · deux pommes"],["some water","de l’eau"],["a piece of advice","un conseil"]],
      uses:["Les dénombrables ont un singulier et un pluriel.","Les indénombrables comme water, information et advice n’ont généralement pas de pluriel en anglais.","Utilise a piece of, a glass of ou a bit of pour compter une portion."],
      trap:"On dit « some information » et « a piece of advice », pas « informations » ni « an advice ».",
      memory:"Une pomme se compte à l’unité; l’eau se verse dans un récipient."
    },
    {
      id:"quantifiers",topic:"Construire ses phrases",level:"Débutant",
      name:"Quantités · some, any, much, many",
      lead:"Le choix du quantifieur dépend du type de nom et du sens de la phrase.",
      form:"many / a few + pluriel dénombrable · much / a little + indénombrable · some / any",
      examples:[["How many tickets do we need?","De combien de billets avons-nous besoin ?"],["There isn’t much time.","Il ne reste pas beaucoup de temps."],["Would you like some tea?","Veux-tu du thé ?"]],
      uses:["many accompagne les noms pluriels dénombrables; much accompagne les indénombrables.","some est courant dans les affirmations et les offres; any apparaît souvent dans les questions et les négations.","a few / a little signifient « quelques / un peu »; few / little insistent sur le manque."],
      trap:"« How much apples? » est incorrect : apples se compte, donc « How many apples? ».",
      memory:"Many compte des unités; much mesure une masse ou une quantité."
    },
    {
      id:"place-movement-prepositions",topic:"Construire ses phrases",level:"Débutant",
      name:"Prépositions de lieu et de déplacement",
      lead:"Ces prépositions situent une chose ou décrivent un trajet.",
      form:"in = dans · on = sur · at = point / lieu précis · into = vers l’intérieur · through = à travers",
      examples:[["The keys are in the drawer.","Les clés sont dans le tiroir."],["Meet me at the entrance.","Retrouve-moi à l’entrée."],["We walked through the park.","Nous avons traversé le parc à pied."]],
      uses:["in décrit souvent un espace contenant; on une surface; at un point précis.","into marque l’entrée dans un lieu; out of la sortie.","across signifie d’un côté à l’autre d’une surface."],
      trap:"in indique souvent où l’on est; into indique un mouvement vers l’intérieur.",
      memory:"Dessine une boîte : in est dedans, on est dessus, into est une flèche qui entre."
    },
    {
      id:"comparatives-superlatives",topic:"Construire ses phrases",level:"Débutant",
      name:"Comparatifs et superlatifs",
      lead:"Le comparatif compare deux éléments; le superlatif distingue un élément dans un groupe.",
      form:"adjectif court + -er / the + -est · more / the most + adjectif long",
      examples:[["This road is shorter than the other one.","Cette route est plus courte que l’autre."],["It’s the most interesting book here.","C’est le livre le plus intéressant ici."],["Today is better than yesterday.","Aujourd’hui est meilleur qu’hier."]],
      uses:["Ajoute souvent -er et -est aux adjectifs courts.","Utilise more et the most avec beaucoup d’adjectifs longs.","good devient better / the best; bad devient worse / the worst."],
      trap:"Le comparatif utilise souvent than; le superlatif prend généralement the.",
      memory:"Deux choses : -er. Le champion du groupe : the -est ou the most."
    },
    {
      id:"adjectives-adverbs",topic:"Construire ses phrases",level:"Débutant",
      name:"Adjectif ou adverbe ?",
      lead:"L’adjectif décrit un nom; l’adverbe décrit souvent comment une action se déroule.",
      form:"adjectif + nom · verbe + adverbe en -ly (souvent)",
      examples:[["a careful driver","un conducteur prudent"],["She drives carefully.","Elle conduit prudemment."],["He speaks English well.","Il parle bien anglais."]],
      uses:["Place souvent l’adjectif avant le nom.","L’adverbe répond souvent à « comment ? ».","good est un adjectif; well est son adverbe courant."],
      trap:"Tous les adverbes ne finissent pas par -ly : fast reste fast, et well ne signifie pas good.",
      memory:"Adjectif = portrait d’une chose; adverbe = manière de faire l’action."
    },
    {
      id:"gerund-infinitive",topic:"Construire ses phrases",level:"Intermédiaire",
      name:"Verbe en -ing ou infinitif avec to",
      lead:"Le verbe qui suit dépend souvent du premier verbe; parfois le sens change.",
      form:"enjoy / finish + verbe-ing · want / decide + to + base",
      examples:[["I enjoy learning languages.","J’aime apprendre les langues."],["They decided to leave early.","Ils ont décidé de partir tôt."],["He stopped smoking.","Il a arrêté de fumer."]],
      uses:["Après enjoy, avoid et finish, utilise généralement -ing.","Après want, hope et decide, utilise généralement to + base.","Avec stop, -ing signifie arrêter l’action; to + base signifie s’arrêter pour faire autre chose."],
      trap:"Ne traduis pas mécaniquement le « de » ou le « à » français : apprends le modèle du verbe anglais.",
      memory:"Chaque verbe pilote sa suite : certains demandent -ing, d’autres to."
    },
    {
      id:"relative-clauses",topic:"Construire ses phrases",level:"Intermédiaire",
      name:"Propositions relatives · who, which, that",
      lead:"Une proposition relative ajoute une précision sur une personne, une chose ou un lieu.",
      form:"personne : who · chose : which / that · lieu : where · possession : whose",
      examples:[["The woman who called is my aunt.","La femme qui a appelé est ma tante."],["This is the film that I told you about.","Voici le film dont je t’ai parlé."],["That’s the café where we met.","C’est le café où nous nous sommes rencontrés."]],
      uses:["who renvoie généralement à une personne.","which renvoie à une chose; that peut remplacer who ou which dans une relative définissante.","where indique un lieu; whose marque la possession."],
      trap:"Dans « the woman who called », who est le sujet du verbe called; ne le répète pas avec she.",
      memory:"Le pronom relatif accroche une précision au nom qui le précède."
    },
    {
      id:"linking-words",topic:"Construire ses phrases",level:"Intermédiaire",
      name:"Relier ses idées",
      lead:"Les mots de liaison montrent si les idées s’ajoutent, s’opposent, expliquent une cause ou donnent un résultat.",
      form:"and = ajout · but / although = opposition · because = cause · so = résultat",
      examples:[["I stayed home because I was ill.","Je suis resté(e) à la maison parce que j’étais malade."],["Although it was cold, we went out.","Même s’il faisait froid, nous sommes sortis."],["It was raining, so we took a taxi.","Il pleuvait, alors nous avons pris un taxi."]],
      uses:["because introduit une cause.","so introduit une conséquence.","although introduit une opposition; however relie souvent deux phrases."],
      trap:"Évite « Although it was cold, but we went out » : although et but ne s’emploient pas ensemble ainsi.",
      memory:"Demande-toi si tu ajoutes, opposes, expliques ou conclus."
    },
    {
      id:"present-perfect-past-simple",topic:"Construire ses phrases",level:"Intermédiaire",
      name:"Present perfect ou past simple ?",
      lead:"Le past simple situe un événement dans une période terminée; le present perfect le relie à maintenant.",
      form:"past simple + repère passé terminé · have / has + participe passé + lien avec le présent",
      examples:[["I saw her yesterday.","Je l’ai vue hier."],["I’ve seen this film before.","J’ai déjà vu ce film."],["Have you finished yet?","As-tu déjà terminé ?"]],
      uses:["Hier, en 2022, last week : période terminée, donc past simple.","Expérience, résultat actuel ou période encore ouverte : present perfect.","ever, never, just, already et yet accompagnent souvent le present perfect."],
      trap:"Avec yesterday, utilise le past simple, pas le present perfect.",
      memory:"Si l’horloge du récit est arrêtée dans le passé, choisis le past simple; si le lien avec maintenant compte, choisis le present perfect."
    },
    {
      id:"phrasal-verbs",topic:"Construire ses phrases",level:"Intermédiaire",
      name:"Verbes à particule · phrasal verbs",
      lead:"Un verbe associé à une particule peut prendre un sens nouveau, parfois impossible à deviner mot à mot.",
      form:"verbe + particule : get up · look after · turn off",
      examples:[["I get up at seven.","Je me lève à sept heures."],["She looks after her brother.","Elle s’occupe de son frère."],["Turn the lights off. / Turn them off.","Éteins les lumières."]],
      uses:["Apprends chaque expression avec une phrase et son contexte.","Certains phrasal verbs sont séparables : turn the radio off / turn it off.","D’autres ne se séparent pas : look after the child."],
      trap:"Avec un pronom objet, un phrasal verb séparable place généralement le pronom au milieu : « turn it off ».",
      memory:"La particule est une petite pièce qui peut transformer le sens du verbe."
    },
    {
      id:"mixed-conditionals",topic:"Conditionnels",level:"Avancé",
      name:"Conditionnels mixtes",
      lead:"Un conditionnel mixte relie une condition passée à un résultat présent, ou une situation présente à un résultat passé.",
      form:"If + past perfect, would + base (résultat présent) · If + past simple, would have + participe passé",
      examples:[["If I had taken a map, I wouldn’t be lost now.","Si j’avais pris une carte, je ne serais pas perdu(e) maintenant."],["If she were more careful, she wouldn’t have made that mistake.","Si elle était plus prudente, elle n’aurait pas fait cette erreur."]],
      uses:["Utilise la première structure pour imaginer un autre passé et son effet actuel.","Utilise la seconde pour relier un état présent à un résultat passé imaginaire."],
      trap:"Les deux parties peuvent avoir des temps différents : choisis chaque forme selon le moment qu’elle décrit.",
      memory:"Trace une flèche entre la condition et le résultat : ils ne se trouvent pas toujours au même moment."
    },
    {
      id:"stative-verbs",topic:"Construire ses phrases",level:"Intermédiaire",
      name:"Verbes d’état et formes continues",
      lead:"Certains verbes décrivent un état plutôt qu’une action et s’emploient généralement au simple.",
      form:"I know · I like · I believe · I own (plutôt que be + -ing)",
      examples:[["I know the answer.","Je connais la réponse."],["She likes this song.","Elle aime cette chanson."],["I’m thinking about your idea.","Je réfléchis à ton idée."]],
      uses:["Les verbes d’opinion, de possession et de sentiment sont souvent des verbes d’état.","think, have, see et taste peuvent aussi décrire une action selon le contexte.","Pour une action temporaire, la forme continue peut être correcte : I’m having lunch."],
      trap:"« I’m knowing » est généralement incorrect pour dire « je sais ».",
      memory:"Un état décrit une situation; une action se déroule et peut souvent être filmée."
    },
    {
      id:"indirect-questions",topic:"Construire ses phrases",level:"Intermédiaire",
      name:"Questions indirectes et polies",
      lead:"Dans une question indirecte, les mots qui suivent l’introduction reprennent l’ordre d’une phrase affirmative.",
      form:"Could you tell me + mot interrogatif + sujet + verbe ?",
      examples:[["Where is the station?","Où est la gare ?"],["Could you tell me where the station is?","Pourriez-vous me dire où se trouve la gare ?"],["Do you know what time the shop opens?","Savez-vous à quelle heure le magasin ouvre ?"]],
      uses:["Utilise ces formes pour poser une question plus poliment.","Après Could you tell me… ou Do you know…, garde l’ordre sujet + verbe.","Si la réponse attendue est oui ou non, utilise if ou whether."],
      trap:"Ne garde pas l’inversion dans la subordonnée : « where the station is », pas « where is the station ».",
      memory:"Une question dans une question retrouve l’ordre normal d’une phrase."
    }
  ];
  extraLessons.forEach(lesson => {
    if (!grammar.some(item => item.id === lesson.id)) grammar.push(lesson);
  });

  grammarQuestions.push(
    {q:"I can’t find my keys. Have you seen ___?",a:"them",opts:["them","they","their","theirs"],why:"Après seen, il faut le pronom complément them."},
    {q:"She ___ like coffee.",a:"doesn’t",opts:["doesn’t","don’t","isn’t","didn’t"],why:"Au présent, he / she / it utilise doesn’t, suivi du verbe de base."},
    {q:"He is ___ late for class.",a:"often",opts:["often","quick","yesterday","since"],why:"Often est un adverbe de fréquence; avec be, il se place après le verbe."},
    {q:"How ___ apples do we need?",a:"many",opts:["many","much","little","any"],why:"Apples est un nom pluriel dénombrable : on demande how many."},
    {q:"There isn’t ___ milk left.",a:"much",opts:["much","many","few","several"],why:"Milk est indénombrable : much convient ici."},
    {q:"The cat jumped ___ the box.",a:"into",opts:["into","at","on","between"],why:"Into décrit le mouvement qui fait entrer dans la boîte."},
    {q:"This exercise is ___ than the last one.",a:"easier",opts:["easier","easiest","more easy","the easier"],why:"Easy forme son comparatif en -ier : easier than."},
    {q:"She drives very ___.",a:"carefully",opts:["carefully","careful","care","more careful"],why:"Carefully est l’adverbe qui décrit la manière de conduire."},
    {q:"They enjoy ___ together.",a:"cooking",opts:["cooking","to cook","cook","cooked"],why:"Enjoy est suivi d’un verbe en -ing."},
    {q:"The person ___ lives next door is a doctor.",a:"who",opts:["who","where","whose","when"],why:"Who introduit ici une relative qui décrit une personne."},
    {q:"It was raining, ___ we stayed inside.",a:"so",opts:["so","because","although","unless"],why:"So introduit le résultat : nous sommes restés à l’intérieur."},
    {q:"I ___ her yesterday.",a:"saw",opts:["saw","have seen","see","had saw"],why:"Yesterday situe l’action dans une période passée terminée : past simple."},
    {q:"Please ___ the lights before you leave.",a:"turn off",opts:["turn off","look after","get up","take after"],why:"Turn off signifie éteindre; le contexte parle des lumières."},
    {q:"If I had taken a map, I ___ lost now.",a:"wouldn’t be",opts:["wouldn’t be","won’t be","wouldn’t have been","am not"],why:"La condition passée a un résultat au présent : conditionnel mixte."},
    {q:"Choisis la forme naturelle : « Je connais la réponse. »",a:"I know the answer.",opts:["I know the answer.","I’m knowing the answer.","I knew the answer tomorrow.","I do knowing the answer."],why:"Know décrit généralement un état et s’emploie au simple."},
    {q:"Could you tell me where the station ___?",a:"is",opts:["is","is it","does it","it is?"],why:"Une question indirecte garde l’ordre sujet + verbe : the station is."}
  );
  updateProgress();
  renderGrammar();

  const roadmap = document.querySelector("#tenseGrid");
  roadmap.innerHTML = tenseIds.map(id => {
    const lesson = grammar.find(item => item.id === id);
    const names = tenseLabels[id];
    const period = id.startsWith("present-") ? "PRÉSENT" : id.startsWith("past-") ? "PASSÉ" : "FUTUR";
    return `<button class="tense-card" type="button" data-tense-jump="${id}" aria-label="Ouvrir ${names[0]} · ${names[1]}">
      <span>${period} · ${lesson.level}</span><strong>${names[0]}</strong><small>${names[1]}</small>
    </button>`;
  }).join("");

  document.addEventListener("click", event => {
    const jump = event.target.closest("[data-tense-jump]");
    const topic = event.target.closest("[data-grammar-topic]");
    if (jump) {
      const lesson = grammar.find(item => item.id === jump.dataset.tenseJump);
      if (!lesson) return;
      grammarTopic = lesson.topic;
      grammarId = lesson.id;
      renderGrammar();
      document.querySelector("#grammarDetail")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (topic) {
      grammarTopic = topic.dataset.grammarTopic;
      grammarId = grammar.find(item => item.topic === grammarTopic)?.id || grammar[0].id;
      renderGrammar();
    }
  }, true);

  const irregularRows = [
    ["arise","arose","arisen","surgir"],["awake","awoke","awoken","se réveiller"],["bear","bore","borne","porter, supporter"],
    ["beat","beat","beaten","battre"],["bend","bent","bent","plier"],["bet","bet","bet","parier"],
    ["bind","bound","bound","lier, attacher"],["bite","bit","bitten","mordre"],["bleed","bled","bled","saigner"],
    ["blow","blew","blown","souffler"],["breed","bred","bred","élever, se reproduire"],["broadcast","broadcast","broadcast","diffuser"],
    ["burn","burned / burnt","burned / burnt","brûler"],["burst","burst","burst","éclater"],["cast","cast","cast","jeter, distribuer un rôle"],
    ["cling","clung","clung","s’accrocher"],["creep","crept","crept","ramper, avancer furtivement"],["deal","dealt","dealt","traiter, distribuer"],
    ["dig","dug","dug","creuser"],["dive","dived / dove","dived","plonger"],["dream","dreamed / dreamt","dreamed / dreamt","rêver"],
    ["dwell","dwelled / dwelt","dwelled / dwelt","habiter, s’attarder"],["flee","fled","fled","s’enfuir"],["fling","flung","flung","lancer"],
    ["fit","fit / fitted","fit / fitted","aller, convenir (taille)"],["forbid","forbade","forbidden","interdire"],["forgive","forgave","forgiven","pardonner"],
    ["forgo","forwent","forgone","renoncer à"],["forsake","forsook","forsaken","abandonner"],["freeze","froze","frozen","geler"],
    ["grind","ground","ground","moudre, broyer"],["hang","hung / hanged","hung / hanged","pendre, accrocher"],["kneel","knelt / kneeled","knelt / kneeled","s’agenouiller"],
    ["lay","laid","laid","poser, étendre"],["lean","leaned / leant","leaned / leant","s’appuyer, pencher"],["leap","leaped / leapt","leaped / leapt","bondir"],
    ["lend","lent","lent","prêter"],["lie","lay / lied","lain / lied","être allongé : lay / lain · mentir : lied / lied"],["light","lit / lighted","lit / lighted","allumer, éclairer"],
    ["mislead","misled","misled","induire en erreur"],["mistake","mistook","mistaken","se tromper, confondre"],["mow","mowed","mown / mowed","tondre"],
    ["overcome","overcame","overcome","surmonter"],["overdo","overdid","overdone","en faire trop"],["overhear","overheard","overheard","entendre par hasard"],
    ["overrun","overran","overrun","envahir, dépasser"],["overtake","overtook","overtaken","rattraper, dépasser"],["plead","pleaded / pled","pleaded / pled","supplier, plaider"],
    ["prove","proved","proven / proved","prouver"],["quit","quit","quit","quitter, arrêter"],["ride","rode","ridden","monter (à vélo / cheval)"],
    ["seek","sought","sought","chercher"],["sew","sewed","sewn / sewed","coudre"],["shake","shook","shaken","secouer"],
    ["shed","shed","shed","perdre, laisser tomber"],["shoot","shot","shot","tirer"],["shrink","shrank / shrunk","shrunk / shrunken","rétrécir"],
    ["slide","slid","slid","glisser"],["sling","slung","slung","lancer, porter en bandoulière"],["slink","slunk","slunk","se faufiler"],
    ["slit","slit","slit","fendre"],["smell","smelled / smelt","smelled / smelt","sentir (une odeur)"],["sneak","sneaked / snuck","sneaked / snuck","se faufiler"],
    ["sow","sowed","sown / sowed","semer"],["speed","sped / speeded","sped / speeded","accélérer"],["spell","spelled / spelt","spelled / spelt","épeler"],
    ["spill","spilled / spilt","spilled / spilt","renverser un liquide"],["spin","spun","spun","tourner, filer"],["spit","spat / spit","spat / spit","cracher"],
    ["split","split","split","fendre, partager"],["spoil","spoiled / spoilt","spoiled / spoilt","gâcher, gâter"],
    ["steal","stole","stolen","voler, dérober"],["sting","stung","stung","piquer"],["stink","stank / stunk","stunk","puer"],
    ["stride","strode","stridden","marcher à grands pas"],["strike","struck","struck / stricken","frapper, faire grève"],["string","strung","strung","enfiler, tendre"],
    ["strive","strove / strived","striven / strived","s’efforcer"],["swear","swore","sworn","jurer"],["sweep","swept","swept","balayer"],
    ["swell","swelled","swollen / swelled","gonfler"],["swing","swung","swung","se balancer"],["tear","tore","torn","déchirer"],
    ["thrust","thrust","thrust","pousser brusquement"],["tread","trod","trodden / trod","marcher sur"],["undergo","underwent","undergone","subir"],
    ["undertake","undertook","undertaken","entreprendre"],["upset","upset","upset","bouleverser"],["wake","woke / waked","woken / waked","se réveiller"],
    ["weave","wove / weaved","woven / weaved","tisser"],["weep","wept","wept","pleurer"],["wet","wet / wetted","wet / wetted","mouiller"],
    ["wind","wound","wound","remonter, enrouler"],["withdraw","withdrew","withdrawn","retirer"],["withstand","withstood","withstood","résister à"],
    ["wring","wrung","wrung","tordre"],["behold","beheld","beheld","contempler"],["befall","befell","befallen","arriver à (un événement)"],
    ["beseech","besought / beseeched","besought / beseeched","supplier"],["beset","beset","beset","assaillir"],["bid","bid / bade","bid / bidden","offrir, ordonner"],
    ["clothe","clothed / clad","clothed / clad","habiller"],["forecast","forecast","forecast","prévoir"],["thrive","thrived / throve","thrived / thriven","prospérer"],
    ["slay","slew","slain","tuer (registre soutenu)"],["strew","strewed","strewn / strewed","parsemer"],["abide","abided / abode","abided / abode","demeurer, tolérer"],
    ["beget","begot","begotten","engendrer"],["browbeat","browbeat","browbeaten","intimider"],["chide","chided / chid","chided / chidden","gronder"],
    ["saw","sawed","sawn / sawed","scier"],["shave","shaved","shaven / shaved","raser"],["slink","slunk","slunk","se faufiler"],
    ["spit","spat / spit","spat / spit","cracher"],["stink","stank / stunk","stunk","puer"],["thrive","thrived / throve","thrived / thriven","prospérer"]
  ];
  const firstForm = form => String(form).split("/")[0].trim();
  const seen = new Set(verbs.map(verb => verb.base.toLowerCase()));
  const additions = [];
  irregularRows.forEach(([base, past, part, fr]) => {
    const key = base.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    additions.push({ base, past, part, fr, group: "extended", groupName: "Autres verbes fréquents" });
  });
  verbs.push(...additions);
  verbGroups.push({
    id: "extended", title: "Autres verbes fréquents",
    verbs: additions.map(v => ({ base: v.base, past: v.past, part: v.part, fr: v.fr }))
  });
  const groupSelect = document.querySelector("#verbGroup");
  if (groupSelect) {
    groupSelect.innerHTML = '<option value="all">Toutes les familles</option>' + verbGroups.map(group => `<option value="${group.id}">${group.title}</option>`).join("");
    groupSelect.value = "all";
  }
  renderVerbs();

  const form = document.querySelector("#conjugatorForm");
  const baseInput = document.querySelector("#conjugatorBase");
  const pastInput = document.querySelector("#conjugatorPast");
  const partInput = document.querySelector("#conjugatorPart");
  const tenseSelect = document.querySelector("#conjugatorTense");
  const output = document.querySelector("#conjugatorResults");
  const status = document.querySelector("#conjugatorStatus");
  const subjects = [
    { label: "I", form: "I", person: 0 }, { label: "you (1 pers.)", form: "you", person: 1 },
    { label: "he / she / it", form: "he", person: 2 }, { label: "we", form: "we", person: 3 },
    { label: "you (plur.)", form: "you", person: 4 }, { label: "they", form: "they", person: 5 }
  ];
  tenseSelect.innerHTML = tenseIds.map(id => `<option value="${id}">${tenseLabels[id][0]} · ${tenseLabels[id][1]}</option>`).join("");

  const thirdPerson = verb => {
    if (verb === "be") return "is";
    if (verb === "have") return "has";
    if (verb === "do") return "does";
    if (/(s|x|z|ch|sh|o)$/.test(verb)) return `${verb}es`;
    if (/[^aeiou]y$/.test(verb)) return `${verb.slice(0, -1)}ies`;
    return `${verb}s`;
  };
  const doublesFinal = new Set(["stop","plan","chat","drop","shop","rub","hug","beg","nod","jog","rob","fit","sit","set","put","get","win","run","swim","begin","forget","regret","admit","commit","occur","refer","prefer","permit","submit","omit","control","compel","clap","drag","flip","grab","slip","step","trap","wrap","scan","slam","plug","spot","trim","snip","clog","flap","plot","snag","swat"]);
  const ingForm = verb => {
    if (verb === "be") return "being";
    if (/ie$/.test(verb)) return `${verb.slice(0, -2)}ying`;
    if (/ic$/.test(verb)) return `${verb}king`;
    if (/[^e]e$/.test(verb) && !/(ee|ye|oe)$/.test(verb)) return `${verb.slice(0, -1)}ing`;
    if (doublesFinal.has(verb) || (verb.length <= 3 && /[^aeiou][aeiou][^aeiouwxy]$/.test(verb))) return `${verb}${verb.at(-1)}ing`;
    return `${verb}ing`;
  };
  const regularPast = verb => {
    if (/ic$/.test(verb)) return `${verb}ked`;
    if (/e$/.test(verb)) return `${verb}d`;
    if (/[^aeiou]y$/.test(verb)) return `${verb.slice(0, -1)}ied`;
    if (doublesFinal.has(verb) || (verb.length <= 3 && /[^aeiou][aeiou][^aeiouwxy]$/.test(verb))) return `${verb}${verb.at(-1)}ed`;
    return `${verb}ed`;
  };
  const makeRows = () => {
    const raw = baseInput.value.trim().toLowerCase().replace(/^to\s+/, "");
    const verb = raw.replace(/\s+/g, " ");
    if (!/^[a-z]+(?: [a-z]+)*$/.test(verb)) return null;
    const [head, ...particles] = verb.split(" ");
    const tail = particles.join(" ");
    const entry = verbs.find(v => v.base.toLowerCase() === head);
    const manualPast = pastInput.value.trim();
    const manualPart = partInput.value.trim();
    const irregular = !!entry || !!manualPast || !!manualPart;
    const base = verb;
    const attach = inflected => tail ? `${inflected} ${tail}` : inflected;
    const past = attach(manualPast || (entry ? firstForm(entry.past) : regularPast(head)));
    const part = attach(manualPart || (entry ? firstForm(entry.part) : regularPast(head)));
    const ing = attach(ingForm(head));
    const presentAux = person => person === 2 ? "has" : "have";
    const bePresent = person => ["am", "are", "is", "are", "are", "are"][person];
    const bePast = person => ["was", "were", "was", "were", "were", "were"][person];
    return subjects.map(({label,form: subject,person}) => {
      let affirmative, negative, question;
      switch (tenseSelect.value) {
        case "present-simple":
          if (head === "be") {
            const aux = bePresent(person); affirmative = `${subject} ${aux}`; negative = `${subject} ${aux} not`; question = `${aux[0].toUpperCase()}${aux.slice(1)} ${subject}?`;
          } else {
            const inflected = attach(person === 2 ? thirdPerson(head) : head);
            const aux = person === 2 ? "does" : "do";
            affirmative = `${subject} ${inflected}`; negative = `${subject} ${aux} not ${base}`; question = `${aux[0].toUpperCase()}${aux.slice(1)} ${subject} ${base}?`;
          }
          break;
        case "past-simple":
          if (head === "be") {
            const aux = bePast(person); affirmative = `${subject} ${aux}`; negative = `${subject} ${aux} not`; question = `${aux[0].toUpperCase()}${aux.slice(1)} ${subject}?`;
          } else { affirmative = `${subject} ${past}`; negative = `${subject} did not ${base}`; question = `Did ${subject} ${base}?`; }
          break;
        case "present-continuous": {
          const aux = bePresent(person); affirmative = `${subject} ${aux} ${ing}`; negative = `${subject} ${aux} not ${ing}`; question = `${aux[0].toUpperCase()}${aux.slice(1)} ${subject} ${ing}?`; break;
        }
        case "past-continuous": {
          const aux = bePast(person); affirmative = `${subject} ${aux} ${ing}`; negative = `${subject} ${aux} not ${ing}`; question = `${aux[0].toUpperCase()}${aux.slice(1)} ${subject} ${ing}?`; break;
        }
        case "present-perfect": {
          const aux = presentAux(person); affirmative = `${subject} ${aux} ${part}`; negative = `${subject} ${aux} not ${part}`; question = `${aux[0].toUpperCase()}${aux.slice(1)} ${subject} ${part}?`; break;
        }
        case "present-perfect-continuous": {
          const aux = presentAux(person); affirmative = `${subject} ${aux} been ${ing}`; negative = `${subject} ${aux} not been ${ing}`; question = `${aux[0].toUpperCase()}${aux.slice(1)} ${subject} been ${ing}?`; break;
        }
        case "past-perfect": affirmative = `${subject} had ${part}`; negative = `${subject} had not ${part}`; question = `Had ${subject} ${part}?`; break;
        case "past-perfect-continuous": affirmative = `${subject} had been ${ing}`; negative = `${subject} had not been ${ing}`; question = `Had ${subject} been ${ing}?`; break;
        case "will": affirmative = `${subject} will ${base}`; negative = `${subject} will not ${base}`; question = `Will ${subject} ${base}?`; break;
        case "future-continuous": affirmative = `${subject} will be ${ing}`; negative = `${subject} will not be ${ing}`; question = `Will ${subject} be ${ing}?`; break;
        case "future-perfect": affirmative = `${subject} will have ${part}`; negative = `${subject} will not have ${part}`; question = `Will ${subject} have ${part}?`; break;
        case "future-perfect-continuous": affirmative = `${subject} will have been ${ing}`; negative = `${subject} will not have been ${ing}`; question = `Will ${subject} have been ${ing}?`; break;
      }
      return {label,affirmative,negative,question};
    });
  };
  const renderConjugation = () => {
    const verb = baseInput.value.trim().toLowerCase().replace(/^to\s+/, "");
    const head = verb.split(/\s+/)[0];
    const customPast = pastInput.dataset.userEdited === "true";
    const customPart = partInput.dataset.userEdited === "true";
    const enteredManual = customPast || customPart;
    const manualPast = pastInput.value.trim();
    const manualPart = partInput.value.trim();
    if (enteredManual && (!customPast || !customPart || !manualPast || !manualPart)) {
      output.innerHTML = '<div class="empty-state">Pour garder une conjugaison cohérente, renseigne le prétérit et le participe passé ensemble.</div>';
      status.textContent = "Complète les deux formes du verbe.";
      return;
    }
    const rows = makeRows();
    if (!rows) {
      output.innerHTML = '<div class="empty-state">Écris un verbe en lettres anglaises pour afficher sa conjugaison.</div>';
      status.textContent = "";
      return;
    }
    const label = tenseLabels[tenseSelect.value];
    const listed = verbs.some(v => v.base.toLowerCase() === verb.split(" ")[0]);
    output.innerHTML = `<div class="conjugator-title"><div><span>VERBE : <b>${esc(verb)}</b></span><h3>${label[0]} · ${label[1]}</h3></div><span class="conjugator-kind">${enteredManual ? "formes personnalisées" : listed ? "forme irrégulière connue" : "règles régulières"}</span></div>
      <div class="table-wrap"><table class="conjugation-table"><thead><tr><th>Personne</th><th>Affirmative</th><th>Négative</th><th>Question</th></tr></thead><tbody>${rows.map(row => `<tr><th scope="row">${esc(row.label)}</th><td>${esc(row.affirmative)}</td><td>${esc(row.negative)}</td><td>${esc(row.question)}</td></tr>`).join("")}</tbody></table></div>`;
    status.textContent = verb.split(" ")[0] === "lie" && !enteredManual ? "Par défaut, lie signifie « être allongé » (lay / lain). Pour « mentir », saisis lied dans les deux champs." : enteredManual ? "Formes irrégulières personnalisées prises en compte." : listed ? "Formes irrégulières de la liste utilisées." : "Règles régulières appliquées. Si ce verbe est irrégulier, saisis ses deux formes.";
  };
  const known = new Map(verbs.map(v => [v.base.toLowerCase(), v]));
  const applyDefaults = () => {
    const verb = baseInput.value.trim().toLowerCase().replace(/^to\s+/, "").split(/\s+/)[0];
    const entry = known.get(verb);
    if (!entry) return;
    if (!pastInput.dataset.userEdited) pastInput.value = firstForm(entry.past);
    if (!partInput.dataset.userEdited) partInput.value = firstForm(entry.part);
  };
  pastInput.addEventListener("input", () => { pastInput.dataset.userEdited = "true"; renderConjugation(); });
  partInput.addEventListener("input", () => { partInput.dataset.userEdited = "true"; renderConjugation(); });
  baseInput.addEventListener("input", () => {
    pastInput.value = ""; partInput.value = "";
    delete pastInput.dataset.userEdited; delete partInput.dataset.userEdited;
    applyDefaults(); renderConjugation();
  });
  tenseSelect.addEventListener("change", renderConjugation);
  form.addEventListener("submit", event => { event.preventDefault(); applyDefaults(); renderConjugation(); });
  applyDefaults();
  renderConjugation();

  grammarQuestions.push({
    q: "Complète : By June, I ___ English for two years.", a: "will have been learning",
    opts: ["will have been learning", "will learn", "have learned yesterday", "was learning"],
    why: "La durée d’une activité jusqu’à un repère futur se forme avec will have been + -ing."
  });
})();
