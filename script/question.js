//toute les question

//sagese, courage, égoisme, génerosité, humour, naifté, ambitieux, humilité,

const question1 = {
    question: "tu et gentil ou méchant ?",
    réponse1: "gentil",
    réponse2: "méchant",
    réponse3: "bof",
    réponse4: "simpa",
    bonnus1: [3,1,0,3,2,4,1,2],
    bonnus2: [0,3,5,0,1,2,4,1],
    bonnus3: [5,9,2,4,6,2,8,7],
    bonnus4: [3,5,0,2,1,7,9,4],
}

const question2 = {
    question: "tu tue des gent ?",
    réponse1: "oui",
    réponse2: "non",
    réponse3: "pourquoi pas",
    réponse4: "une fois",
    bonnus1: [0,3,5,0,1,2,4,1],
    bonnus2: [3,1,0,3,2,4,1,2],
    bonnus3: [1,3,5,4,9,8,0,4],
    bonnus4: [1,2,9,0,5,9,8,3],
}

const question3 = {
    question: "tu préfaire le coca ou le fanta ?",
    réponse1: "coca",
    réponse2: "fanta",
    réponse3: "aucun des deux",
    réponse4: "pepsi",
    bonnus1: [3,1,0,3,2,4,1,2],
    bonnus2: [0,3,5,0,1,2,4,1],
    bonnus3: [4,3,9,2,5,0,1,9],
    bonnus4: [9,3,7,0,1,5,9,7],
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
const listeQuestion =[question1, question2, question3, FIN]
