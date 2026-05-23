//toute les question

//sagese, courage, égoisme, génerosité, humour, naifté, ambitieux, humilité,

const question1 = {
    question: "Si tu te retrouvais dans l'univers de StarWars, quelle vaisseau amerais tu avoire ?",
    réponse1: "Razor Crest : Navette de transport discrete.",
    réponse2: "Nébulon B : Grand frégat avec des engars.",
    réponse3: "X-wing : Chasseur monoplace très rapide.",
    réponse4: "Faucon Millenium : grand cargo iconique.",
    bonnus1: [4,2,3,3,2,1,1,4],
    bonnus2: [3,1,1,4,3,2,4,2],
    bonnus3: [1,4,4,2,1,3,2,3],
    bonnus4: [2,3,2,1,4,4,3,1],
}

const question2 = {
    question: "Tu vien de rentrer dans l'Ordre Jedi et tu peut choisir ton Maitre entre...",
    réponse1: "Mace Windu : Séver mais as du sabre Laser.",
    réponse2: "Obi-Wan Kenobi : Drole et sage a la fois.",
    réponse3: "Yoda : Calme et sage, il a des centaines d'années d'experience.",
    réponse4: "Anakin Skywalker : Sympa mais autoritaire.",
    bonnus1: [3,4,2,1,2,1,3,4],
    bonnus2: [4,1,3,4,3,2,1,2],
    bonnus3: [2,2,1,3,1,4,4,3],
    bonnus4: [1,3,4,2,4,3,2,1],
}

const question3 = {
    question: "Quelle est ta plus grande peur irationelle ?",
    réponse1: "Les araignées, et les insecetes en général.",
    réponse2: "Le vide et les hauteurs.",
    réponse3: "Le noir et les endroits sombre.",
    réponse4: "Les petit endroits clos.",
    bonnus1: [1,4,2,2,4,3,1,3],
    bonnus2: [4,3,1,4,3,2,2,1],
    bonnus3: [2,1,3,1,2,4,3,4],
    bonnus4: [3,2,4,3,1,1,4,2],
}

const question4 = {
    question: "Si tu pouvais visiter une planete StarWars, la quelle choisirai tu ?",
    réponse1: "Naboo : Lacs, marais et grandes plaines vertes.",
    réponse2: "Kashyyk : Jungle luxuriente et arbres géants.",
    réponse3: "Géonosis : Montagnes et déserts de roches rouges.",
    réponse4: "Coruscant : énorme ville animé et lumineuse.",
    bonnus1: [4,2,4,1,3,2,1,3],
    bonnus2: [1,4,3,2,2,3,4,1],
    bonnus3: [3,3,2,4,1,1,2,4],
    bonnus4: [2,1,1,3,4,4,3,2],
}

const question5 = {
    question: "Tu trouve une carcasse de cargo perdue dans le désert, a l'interieure ce trouve 800M de crédits, que fait tu ?",
    réponse1: "Tu achete une villa sur Naboo et 50 speeder de luxe.",
    réponse2: "Tu achete un croiseur et une flotte militaire.",
    réponse3: "Tu garde juste asser pour vivre et tu donne le reste.",
    réponse4: "Tu rachete une entreprise de trading à succès.",
    bonnus1: [1,2,4,3,3,4,2,1],
    bonnus2: [3,1,3,1,4,2,4,2],
    bonnus3: [2,3,1,4,2,3,1,4],
    bonnus4: [4,4,2,2,1,1,3,3],
}

const question6 = {
    question: "Que voudrais tu laisser au monde apres ta mort ?",
    réponse1: "Que tes proche gardent un bon souvenire de toi.",
    réponse2: "Une invention technologique révolutionaire.",
    réponse3: "Les gents ce sonvienne de toi comme une star.",
    réponse4: "Tu a sauvé la Galaxie mais personne ne se souvient de toi.",
    bonnus1: [2,1,2,3,4,3,1,4],
    bonnus2: [4,3,3,1,1,2,4,2],
    bonnus3: [1,2,4,2,3,4,3,1],
    bonnus4: [3,4,1,4,2,1,2,3],
}

const question7 = {
    question: "Tu vien de découvrire une nouvelle planete, habitable et magnifique, que fait tu ?",
    réponse1: "Tu la garde secrete pour toi.",
    réponse2: "Tu vas la signialer aux archives.",
    réponse3: "Tu vend sa position à une entreprise miniere.",
    réponse4: "Tu exploite les recources et tu les vend.",
    bonnus1: [1,2,3,1,4,3,2,4],
    bonnus2: [2,3,1,4,2,4,1,3],
    bonnus3: [4,1,4,3,1,2,3,2],
    bonnus4: [3,4,2,2,3,1,4,1],
}

const question8 = {
    question: "Ton meilleur ami vien te voir et te présente son idée de projet completement nul mais quille croit génial.",
    réponse1: "Tu est honête et tu lui dit que c'est nul.",
    réponse2: "tu l'encourage et tu lui ment pour ne pas le blesser.",
    réponse3: "Tu ne t'en melle pas et tu change de sujet.",
    réponse4: "Tu le fait se questionner sur son projet.",
    bonnus1: [3,4,1,2,1,4,2,3],
    bonnus2: [1,3,4,3,2,1,4,2],
    bonnus3: [2,1,3,1,4,2,3,4],
    bonnus4: [4,2,2,4,3,3,1,1],
}

const FIN = {
    question: "le quiz est FINI",
    réponse1: "",
    réponse2: "",
    réponse3: "",
    réponse4: "",
    bonnus1: [],
    bonnus2: [],
    bonnus3: [],
    bonnus4: [],
}

//tableaux de question
const listeQuestion =[question1, question2, question3,question4, question5, question6, question7, question8, FIN]
