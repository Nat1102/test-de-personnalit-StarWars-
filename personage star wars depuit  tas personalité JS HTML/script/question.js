//toute les question

//sagese, courage, égoisme, génerosité, humour, naifté, ambitieux, humilité,

const question1 = {
    question: "tu et gentil ou méchant ?",
    réponse1: "gentil",
    réponse2: "méchant",
    bonnus1: [3,1,0,3,2,4,1,2],
    bonnus2: [0,3,5,0,1,2,4,1],
}

const question2 = {
    question: "tu aime tuer des gent ?",
    réponse1: "oui",
    réponse2: "non",
    bonnus1: [0,3,5,0,1,2,4,1],
    bonnus2: [3,1,0,3,2,4,1,2],
}

const question3 = {
    question: "tu préfaire le coca ou le fanta ?",
    réponse1: "coca",
    réponse2: "fanta",
    bonnus1: [3,1,0,3,2,4,1,2],
    bonnus2: [0,3,5,0,1,2,4,1],
}

const FIN = {
    question: "le quiz est FINI",
    réponse1: "",
    réponse2: "",
    bonnus1: [],
    bonnus2: [],
}

//tableaux de question
const listeQuestion =[question1, question2, question3, FIN]
