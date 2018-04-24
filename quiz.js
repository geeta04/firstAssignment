var questionArray = [
    {
        "id": 1,
        "question": "1. India's first high-speed electric locomotive has been flagged off from which state?",
        "optionLine1": "Assam",
        "optionLine2": "Uttar Pradesh",
        "optionLine3": "Maharashtra",
        "optionLine4": "Bihar",
        "partOf": "not-visited",
        "section": "General Awareness"
    },
    {
        "id": 2,
        "question": "2. Which country is hosting the 2018 International Conference on Human Rights in South Asia? ",
        "optionLine1": "India",
        "optionLine2": "Nepal",
        "optionLine3": "South Korea",
        "optionLine4": "China",
        "partOf": "not-visited",
        "section": "General Awareness"
    },
    {
        "id": 3,
        "question": "3. Who is the newly elected Chairman of Boao Forum for Asia (BFA)?",
        "optionLine1": "Yasuo Fukuda",
        "optionLine2": "Li Baodong",
        "optionLine3": "Ban Ki-moon",
        "optionLine4": "Zhou Xiaochuan",
        "partOf": "not-visited",
        "section": "General Awareness"
    },
    {
        "id": 4,
        "question": "4. Akhil said looking at a girl, She is the daughter of the mother of the father of my grandson'. How is the girl related to Akhil?",
        "optionLine1": "Daughter",
        "optionLine2": "Grand Daughter",
        "optionLine3": "Niece",
        "optionLine4": "Mother",
        "partOf": "not-visited",
        "section": "Reasoning"
    },
    {
        "id": 5,
        "question": "5. Falguni is Hansraj’s daughter. Himani is Aradhya's maternal aunt and Sakshi is Hansraj’s sister. Sakshi’s daughter is Aradhya whereas son is Daksh. Hansraj and Himani are siblings. How is Daksh related to Himani?",
        "optionLine1": "Nephew",
        "optionLine2": "Niece",
        "optionLine3": "Uncle",
        "optionLine4": "Aunt",
        "partOf": "not-visited",
        "section": "Reasoning"
    },
    {
        "id": 6,
        "question": "6. Akhil said looking at a girl, “She is the daughter of the mother of the father of my grandson'. How is the girl related to Akhil?",
        "optionLine1": "Daughter",
        "optionLine2": "Grand Daughter",
        "optionLine3": "Niece",
        "optionLine4": "Mother",
        "partOf": "not-visited",
        "section": "Reasoning"
    },
    {
        "id": 7,
        "question": "7. Ten years ago, P was half of Q's age. If the ratio of their present ages is 3:4 , what will be the total of their present ages?",
        "optionLine1": "45",
        "optionLine2": "40 ",
        "optionLine3": "35",
        "optionLine4": "30",
        "partOf": "not-visited",
        "section": "Quant"
    },
    {
        "id": 8,
        "question": " 8. A man is 24 years older than his son. In two years, his age will be twice the age of his son. What is the present age of his son?",
        "optionLine1": "23",
        "optionLine2": "21 ",
        "optionLine3": "22",
        "optionLine4": "20",
        "partOf": "not-visited",
        "section": "Quant "
    },
    {
        "id": 9,
        "question": "9. Present ages of Kiran and Syam are in the ratio of 5: 4 respectively. Three years hence, the ratio of their ages will become 11:9 respectively. What is Syam's present age in ",
        "optionLine1": "28",
        "optionLine2": "26",
        "optionLine3": "27",
        "optionLine4": "24",
        "partOf": "not-visited",
        "section": "Quant "
    },
    {
        "id": 10,
        "question": "10. The head of the pigeon had been______ away with the rifle.",
        "optionLine1": "Blows",
        "optionLine2": " Blew",
        "optionLine3": "Blown",
        "optionLine4": "Blow",
        "partOf": "not-visited",
        "section": "English "
    },
    {
        "id": 11,
        "question": "11. Do you have _____ book focusing on this war?",
        "optionLine1": "some",
        "optionLine2": " any",
        "optionLine3": "the",
        "optionLine4": "None of the above",
        "partOf": "not-visited",
        "section": "English"
    },
    {
        "id": 12,
        "question": "12. The head of the pigeon had been______ away with the rifle.",
        "optionLine1": "Blows",
        "optionLine2": " Blew",
        "optionLine3": "Blown",
        "optionLine4": "Blow",
        "partOf": "not-visited",
        "section": "English "
    }

];

var questionLine = document.getElementById('questionLine');
var questionNumber = document.getElementById('questionNumber');
var optionLine1 = document.getElementById('optionLine1');
var optionLine2 = document.getElementById('optionLine2');
var optionLine3 = document.getElementById('optionLine3');
var optionLine4 = document.getElementById('optionLine4');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var notAttemptedCount = document.getElementById('notVisitedCount');
var optionValue = document.getElementById('optionValue');
var markForReviewCount = document.getElementById('markForReviewCount');

questionNumber.innerHTML = 1;
//NOT VISITED
var notVisited = 12;
var notVisited = questionArray.length;
notVisitedCount.innerHTML = notVisited;

//NOT ANSWERED
var notAnswered = 0;
notAnsweredCount.innerHTML = notAnswered;

//ANSWERED
var answered = 0;
AnsweredCount.innerHTML = answered;
//REVIEW
var reviewed = 0;
markForReviewCount.innerHTML = reviewed;

var answerReviewed = 0;
answeredMarkForReviewCount.innerHTML = answerReviewed;

questionLine.innerHTML = questionArray[0]['question'];
optionLine1.innerHTML = questionArray[0]['optionLine1'];
optionLine2.innerHTML = questionArray[0]['optionLine2'];
optionLine3.innerHTML = questionArray[0]['optionLine3'];
optionLine4.innerHTML = questionArray[0]['optionLine4'];


//In your code where you get a handle on the checked radio button, simply do
// choice = choices[i].value; //I'm assuming here is where you get the value
// UserAnswers.push(choice);

//Once you do this for all the questions, just do

function checkPartOfAndchangeAccordingly(partOf) {
    // answered++;
    // AnsweredCount.innerHTML = answered;
    // notAnswered--; //NOT VISITED
    // notAnsweredCount.innerHTML = notAnswered;

    switch (partOf) {
        case 'not-visited': notVisited--; //NOT VISITED
            notVisitedCount.innerHTML = notVisited;
            break;


        case 'not-answered': notAnswered--; //NOT VISITED
            notAnsweredCount.innerHTML = notAnswered;
            break;

        case 'answered': answered--; //NOT VISITED
            AnsweredCount.innerHTML = answered;
            break;

        case 'mark-for-review': reviewed--; //NOT VISITED
            markForReviewCount.innerHTML = reviewed;
            break;

        case 'answer-mark': answerReviewed--;
            answeredMarkForReviewCount.innerHTML = answerReviewed;
            break;
    }
}

function changeQuestion(index) {
    questionNumber.innerHTML = index + 1;
    questionLine.innerHTML = questionArray[index]['question'];
    optionLine1.innerHTML = questionArray[index]['optionLine1'];
    optionLine2.innerHTML = questionArray[index]['optionLine2'];
    optionLine3.innerHTML = questionArray[index]['optionLine3'];
    optionLine4.innerHTML = questionArray[index]['optionLine4'];
}
var userAnswers = new Array(questionArray.length);
userAnswers.fill('0');

function saveCheckboxState(index) {
    // var cbChecked = document.querySelector('[name="optionValue"]:checked')
    // for(i=0;i<questionArray.length;i++){
    // if (cbChecked != null) {
    //     UserAnswers.push(cbChecked.value);
    // }
    if(option1.checked) {
        userAnswers[index] = '1';
    } else if(option2.checked) {
        userAnswers[index] = '2';
    } else if(option3.checked) {
        userAnswers[index] = '3';
    } else if(option4.checked) {
        userAnswers[index] = '4';
    }
    console.log(userAnswers);
}
  
    
    // if (document.getElementById('option1').checked) {
    //     option1_value = document.getElementById('option1').value;
    //     alert("saved");
    //     UserAnswers.push(option1_value);
    // }
    // else if (document.getElementById('option2').checked) {
    //     option2_value = document.getElementById('option2').value;
    //     alert("saved");
    //     UserAnswers.push(option2_value);
        
        
    // }
    // else if (document.getElementById('option3').checked) {
    //     option3_value = document.getElementById('option3').value;
    //     alert("saved");
    //     UserAnswers.push(option3_value);        
        
    // }
    // else if (document.getElementById('option4').checked) {
    //     option4_value = document.getElementById('option4').value;
    //     alert("saved");
    //     UserAnswers.push(option4_value);
        
        
    // }
    // localStorage["answers"] = JSON.stringify(UserAnswers);
    


function uncheckingNextQuestion(newQuestionNumber){
    option1.checked = false;
    option2.checked = false;
    option3.checked = false;
    option4.checked = false;
}


//clicking next button functionality
$("#next").click(function () {
    //notAnswered++; //NOT ANSWERED
    //notAnsweredCount.innerHTML=notAnswered;
    var newQuestionNumber = parseInt(questionNumber.innerHTML) + 1;
    var arrayQuestionIndex = newQuestionNumber - 1;
    var changePartOfIndex = arrayQuestionIndex - 1;
    changeQuestion(arrayQuestionIndex);
    // questionNumber.innerHTML = newQuestionNumber;
    // questionLine.innerHTML = questionArray[arrayQuestionIndex]['question'];
    // optionLine1.innerHTML = questionArray[arrayQuestionIndex]['optionLine1'];
    // optionLine2.innerHTML = questionArray[arrayQuestionIndex]['optionLine2'];
    // optionLine3.innerHTML = questionArray[arrayQuestionIndex]['optionLine3'];
    // optionLine4.innerHTML = questionArray[arrayQuestionIndex]['optionLine4'];
    // notVisited--; //NOT VISITED
    // notVisitedCount.innerHTML = notVisited;

    // if(marked) {
    //     changeAnswere();
    //     if(partof) {

    //     }
    // }

    if (!(questionArray[changePartOfIndex].partOf == 'answered')
        && (option1.checked || option2.checked || option3.checked || option4.checked)) {
        //if(optionValue.checked) {
        answered++;
        AnsweredCount.innerHTML = answered;
        // notAnswered--;
        // notAnsweredCount.innerHTML = notAnswered;
        checkPartOfAndchangeAccordingly(questionArray[changePartOfIndex].partOf);
        document.getElementById(arrayQuestionIndex).classList.add('answered');
        questionArray[changePartOfIndex].partOf = "answered";
        saveCheckboxState(changePartOfIndex);
        uncheckingNextQuestion();


    }
    else if (!(questionArray[changePartOfIndex].partOf == 'not-answered')) {
        checkPartOfAndchangeAccordingly(questionArray[changePartOfIndex].partOf);
        // notVisited--; //NOT VISITED
        // notVisitedCount.innerHTML = notVisited;
        notAnswered++;
        notAnsweredCount.innerHTML = notAnswered;
        questionArray[changePartOfIndex].partOf = "not-answered";
        document.getElementById(arrayQuestionIndex).classList.add('not-answered');
    }

});
// clicking marked for review button functionality
$("#markForReview").click(function () {
    var newQuestionNumber = parseInt(questionNumber.innerHTML) + 1;
    var arrayQuestionIndex = newQuestionNumber - 1;
    var changePartOfIndex = arrayQuestionIndex - 1;
    changeQuestion(arrayQuestionIndex);
    // questionNumber.innerHTML = newQuestionNumber;
    // questionLine.innerHTML = questionArray[arrayQuestionIndex]['question'];
    // optionLine1.innerHTML = questionArray[arrayQuestionIndex]['optionLine1'];
    // optionLine2.innerHTML = questionArray[arrayQuestionIndex]['optionLine2'];
    // optionLine3.innerHTML = questionArray[arrayQuestionIndex]['optionLine3'];
    // optionLine4.innerHTML = questionArray[arrayQuestionIndex]['optionLine4'];
    if (!(questionArray[changePartOfIndex].partOf == 'answer-mark')
        && (option1.checked || option2.checked || option3.checked || option4.checked)) {
        // notVisited--; //NOT VISITED
        // notVisitedCount.innerHTML = notVisited;
        checkPartOfAndchangeAccordingly(questionArray[changePartOfIndex].partOf);
        answerReviewed++;
        answeredMarkForReviewCount.innerHTML = answerReviewed;
        document.getElementById(arrayQuestionIndex).classList.add('answer-mark');
        questionArray[changePartOfIndex].partOf = "answer-mark";
        option1.checked = false;
        option2.checked = false;
        option3.checked = false;
        option4.checked = false;
    }
    else if (!(questionArray[changePartOfIndex].partOf == 'mark-for-review')) {
        // notVisited--; //NOT VISITED
        // notVisitedCount.innerHTML = notVisited;
        checkPartOfAndchangeAccordingly(questionArray[changePartOfIndex].partOf);
        reviewed++;
        markForReviewCount.innerHTML = reviewed;
        document.getElementById(arrayQuestionIndex).classList.add('mark-for-review');
        questionArray[changePartOfIndex].partOf = "mark-for-review";
    }
});

//question change on li click
$("ul li").click(function () {
    var id = this.id;
    var quesArrayId = id - 1;
    questionNumber;
    currentQuestionNumber = parseInt(questionNumber.innerHTML);
    if (!(id == currentQuestionNumber)) {
        document.getElementById(questionNumber.innerHTML).classList.add('not-answered');
        if (questionArray[currentQuestionNumber - 1]['partOf'] == 'not-visited') {
            questionArray[currentQuestionNumber - 1]['partOf'] = 'not-answered';
            notVisited--; //NOT VISITED
            notVisitedCount.innerHTML = notVisited;
            notAnswered++;
            notAnsweredCount.innerHTML = notAnswered;
        }
        changeQuestion(quesArrayId);
        // questionNumber.innerHTML = id;
        // questionLine.innerHTML = questionArray[quesArrayId]['question'];
        // optionLine1.innerHTML = questionArray[quesArrayId]['optionLine1'];
        // optionLine2.innerHTML = questionArray[quesArrayId]['optionLine2'];
        // optionLine3.innerHTML = questionArray[quesArrayId]['optionLine3'];
        // optionLine4.innerHTML = questionArray[quesArrayId]['optionLine4'];
    }
});




