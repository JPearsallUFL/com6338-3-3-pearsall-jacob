var questionsArr = [
    {
        question: 'Is the world round?', 
        answer: true
    },
    {
        question: 'Is strawberry the best flavor of ice cream?', 
        answer: true
    },
    {
        question: 'Was the last season of Game of Thrones amazing?', 
        answer: false
    },
    {
        question: 'The atomic number for lithium is 17', 
        answer: false
    },
    {
        question: 'Prince Harry is taller than Prince William', 
        answer: false
    },
    {
        question: 'The unicorn is the national animal of Scotland',
        answer: true
    },
    {
        question: 'Alexander Fleming discovered penicillin',
        answer: true
    },
    {
        question: 'An octopus has three hearts',
        answer: true
    },
    {
        question: 'Hot and cold water sound the same when poured',
        answer: false
    },
    {
        question: 'Hippos sweat a red substance',
        answer: true
    }
];
function runQuiz() {
    var score = 0;
    for(var i = 0; i < questionsArr.length; i++){
        if(confirm(questionsArr[i].question) == questionsArr[i].answer){
            score++;
        };
    }
    var grade = Math.round((score/questionsArr.length)*100);
    alert("You got " + grade + "% of the questions correct.");
}