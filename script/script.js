let textQuestion = document.getElementById("textQuestion")

let btnRadio1 = document.getElementById("btnRadio1")
let btnRadio2 = document.getElementById("btnRadio2")

let labelQuestion1 = document.getElementById("labelRéponse1")
let labelQuestion2 = document.getElementById("labelRéponse2")

let btnConfirmer = document.getElementById("btnConfirmer")

let numeroQuestionText = document.getElementById("nmQuestion")
let questionText = document.querySelector("#questionaire h2")

let textScore = document.getElementById("textScore")

let TextNomPerso = document.getElementById("tonPersoTXT")
let boiteNomPerso = document.getElementById("boiteNomPerso")

let tabDifPerso = []


btnRadio1.addEventListener("change", () => {
    console.log("BtnRadio1")

})

btnRadio2.addEventListener("change", () => {
    console.log("BtnRadio2")
})


//initialisation de la question

textQuestion.innerText = listeQuestion[0].question
labelQuestion1.innerText = listeQuestion[0].réponse1
labelQuestion2.innerText = listeQuestion[0].réponse2


function initialiserQuestion() {
   let index = 1
   let nmQuestion = 0
   
    btnConfirmer.addEventListener("click", () => {

        textQuestion.innerText = listeQuestion[index].question
        labelQuestion1.innerText = listeQuestion[index].réponse1
        labelQuestion2.innerText = listeQuestion[index].réponse2

        aditionPoint(nmQuestion)

        index++
        nmQuestion++

        numeroQuestionText.textContent = index

        btnRadio1.checked = false
        btnRadio2.checked = false

        if (index === listeQuestion.length) {
            textScore.textContent = `votre score et de SAGESSE: ${scoreSagesse} COURAGE: ${scoreCourage} EGOISME: ${scoreégoisme} GENEROSITE: ${scoreGénerosité} HUMOUR: ${scoreHumour} NAIFTE: ${scoreNaifté} AMBITIEUX: ${scoreAmbitieux} HUMILITE: ${scoreHumilité}`
            
            btnRadio1.classList.add("cacher")
            btnRadio2.classList.add("cacher")
            questionText.classList.add("cacher")
            btnConfirmer.classList.add("cacher")
            choixPersonage()
        }
        

})
}
//sagese, courage, égoisme, génerosité, humour, naifté, ambitieux, humilité,
let scoreSagesse = 0
let scoreCourage = 0
let scoreégoisme = 0
let scoreGénerosité = 0
let scoreHumour = 0
let scoreNaifté = 0
let scoreAmbitieux = 0
let scoreHumilité = 0

function aditionPoint(nmQuestion) {

    if (btnRadio1.checked === true) {
        scoreSagesse += listeQuestion[nmQuestion].bonnus1[0]
        scoreCourage += listeQuestion[nmQuestion].bonnus1[1]
        scoreégoisme += listeQuestion[nmQuestion].bonnus1[2]
        scoreGénerosité += listeQuestion[nmQuestion].bonnus1[3]
        scoreHumour += listeQuestion[nmQuestion].bonnus1[4]
        scoreNaifté += listeQuestion[nmQuestion].bonnus1[5]
        scoreAmbitieux += listeQuestion[nmQuestion].bonnus1[6]
        scoreHumilité += listeQuestion[nmQuestion].bonnus1[7]
        console.log("btn1")
    } else {
        scoreSagesse += listeQuestion[nmQuestion].bonnus2[0]
        scoreCourage += listeQuestion[nmQuestion].bonnus2[1]
        scoreégoisme += listeQuestion[nmQuestion].bonnus2[2]
        scoreGénerosité += listeQuestion[nmQuestion].bonnus2[3]
        scoreHumour += listeQuestion[nmQuestion].bonnus2[4]
        scoreNaifté += listeQuestion[nmQuestion].bonnus2[5]
        scoreAmbitieux += listeQuestion[nmQuestion].bonnus2[6]
        scoreHumilité += listeQuestion[nmQuestion].bonnus2[7]
        console.log("btn2")
    }
    



    
}

//variable pour choixPersonage
let nbPerso = Object.keys(listePerso).length

function choixPersonage() {
    for (let i = 1; i <= nbPerso; i++) {
        let PersonageNom = "personage" + i

        //calcucle des diference
        

        //Sagesse
        let nombrePersoSagesse = Number(listePerso[PersonageNom].sagesse)
        let nombreJoueurSagesse = Number(scoreSagesse)
        //Courage
        let nombrePersoCourage = Number(listePerso[PersonageNom].courage)
        let nombreJoueurCourage = Number(scoreCourage)
        //Egoisme
        let nombrePersoEgoisme = Number(listePerso[PersonageNom].égoisme)
        let nombreJoueurEgoisme = Number(scoreégoisme)
        //Génerosité
        let nombrePersoGénerosité = Number(listePerso[PersonageNom].génerosité)
        let nombreJoueurGénerosité = Number(scoreGénerosité)
        //Humour
        let nombrePersoHumour = Number(listePerso[PersonageNom].humour)
        let nombreJoueurHumour = Number(scoreHumour)
        //Naifté
        let nombrePersoNaifté = Number(listePerso[PersonageNom].naifté)
        let nombreJoueurNaifté = Number(scoreNaifté)
        //Ambitieux
        let nombrePersoAmbitieux = Number(listePerso[PersonageNom].ambitieux)
        let nombreJoueurAmbitieux = Number(scoreAmbitieux)
        //Humilité
        let nombrePersoHumilité = Number(listePerso[PersonageNom].humilité)
        let nombreJoueurHumilité = Number(scoreHumilité)

        let differenceTotal = 0

        differenceTotal += Math.abs(nombreJoueurSagesse - nombrePersoSagesse)
        differenceTotal += Math.abs(nombreJoueurCourage - nombrePersoCourage)
        differenceTotal += Math.abs(nombreJoueurEgoisme - nombrePersoEgoisme)
        differenceTotal += Math.abs(nombreJoueurGénerosité - nombrePersoGénerosité)
        differenceTotal += Math.abs(nombreJoueurHumour - nombrePersoHumour)
        differenceTotal += Math.abs(nombreJoueurNaifté - nombrePersoNaifté)
        differenceTotal += Math.abs(nombreJoueurAmbitieux - nombrePersoAmbitieux)
        differenceTotal += Math.abs(nombreJoueurHumilité - nombrePersoHumilité)
        
        tabDifPerso.push(differenceTotal)
        console.log(Math.abs(nombreJoueurGénerosité - nombrePersoGénerosité))

    }
    let numPerso = Math.min(...tabDifPerso)
    let selectPerso = tabDifPerso.indexOf(numPerso)+1

    let persoSelect = "personage" + selectPerso

    let PersoDuJoueur = (listePerso[persoSelect].nom)

    console.log(PersoDuJoueur)
    TextNomPerso.textContent = PersoDuJoueur

    boiteNomPerso.classList.remove("cacher")


}






function lancerLeQuiz() {
    initialiserQuestion()
    
    
}

lancerLeQuiz()


