var sit = 0;
var correct = 0;
var test, status, question, selection, options, opA, opB;

var questions = [
    {
        question: "Are you between 16-75 years old?",
        a: "Yes",
        b: "No",
        answer: "A"
     },
    {
        question: "Do you weigh more than 50 KG?",
        a: "Yes",
        b: "No",
        answer: "A"
     },
    {
        question: "Have you donated blood in the last 12 weeks (3 months)",
        a: "Yes",
        b: "No",
        answer: "B"
      },
     {
        question: "Have you had a tattoo or piercing in the last 4 months?",
        a: "Yes",
        b: "No",
        answer: "B"
      },
     {
        question: "Do you have a heart condition?",
        a: "Yes",
        b: "No",
        answer: "B"
       },
      {
        question: "For women: Are you pregnant, have been pregnant or had a baby in the last six months?",
        a: "Yes",
        b: "No",
        answer: "B"
       },
      {
        question: "Have you had major surgery in the last 3 months?",
        a: "Yes",
        b: "No",
        answer: "B"
       },
      {
        question: "Have you been to the dentist for an extraction, surgery or root canal in the last three days?",
        a: "Yes",
        b: "No",
        answer: "B"
       },
      {
        question: "Have you had a cough, cold, sore throat or influenza in last 28 days?",
        a: "Yes",
        b: "No",
        answer: "B"
       },
      {
        question: "Did you live in the UK for 6 months or more between 1980 and 1996?",
        a: "Yes",
        b: "No",
        answer: "B"
       },
      {
        question: "Are you low in iron?",
        a: "Yes",
        b: "No",
        answer: "B"
       },
      {
        question: "Have you injected recreational drugs in the past 5 years?",
        a: "Yes",
        b: "No",
        answer: "B"
       },
      {
        question: "Have you had symptoms from a lab-diagnosed or suspected COVID-19 infection.",
        a: "Yes",
        b: "No",
        answer: "B"
       },
      {
        question: "Have you lived with or been in close contact with individuals diagnosed with or suspected of having COVID-19 infection.",
        a: "Yes",
        b: "No",
        answer: "B"
       },
      {
        question: "Are you a health care worker who has been caring for a patient diagnosed with or suspected of having COVID-19 and have not consistently been able to use recommended personal protective equipment (face mask, gown and gloves).",
        a: "Yes",
        b: "No",
        answer: "B"
       },
      {
        question: "Do you drink any kind of alcohol",
        a: "Yes",
        b: "No",
        answer: "B"
       },
      {
        question: "Have you had a positive test for HIV",
        a: "Yes",
        b: "No",
        answer: "B"
      }
     
    ];

    function get(x){
      return document.getElementById(x);
      }
  
    function renderQuestion(){
      test = get("test");

    if (correct < 17) {
       test.innerHTML = "<h2 style= 'color: rgb(70, 1, 102)'>Sorry, you are currently ineligible to donate.</h2>";
      }
    else if (correct = 17) {
       test.innerHTML = "<h3 style= 'color: rgb(1, 105, 27)'>Congratulations! You should be able to give blood.</h3>";
  
        get("status").innerHTML = "Test completed";
        // resets the variable to allow user to restart the test
        pos = 0;
        correct = 0;
        // stops renderQuestion function running when test is completed
        return false;
      }

      get("status").innerHTML = "Question "+(sit+1)+" of "+questions.length;
      
      question = questions[sit].question;
      opA = questions[sit].a;
      opB = questions[sit].b;
  
      // display the question
      test.innerHTML = "<h3 style= 'color: rgb(156, 26, 8)'>"+question+"</h3>";
      // display the answer options
      test.innerHTML += "<label style= 'color:#434242; font-size:25px; font-weight:bold'> <input type='radio' name='options' value='A'> "+opA+"</label><br>";
      test.innerHTML += "<label style= 'color:#434242; font-size:25px; font-weight:bold'> <input type='radio' name='options' value='B'> "+opB+"</label><br><br>";
      test.innerHTML += "<button style= 'color:#fffffff; background-color:#0200000; font-size:25px; font-weight:bold; border-radius: 12px; border: 0.1rem solid;' onclick='checkAnswer()'>Next &#9658</button>";
     }
    function checkAnswer(){
      options = document.getElementsByName("options");
      for(var i=0; i<options.length; i++){
        if(options[i].checked){
          selection = options[i].value;
        }
      }
     // checks if answer matches the correct choice
      if(selection == questions[sit].answer){
        //this value increases each time there is a correct answer
        correct++;
      }
      sit++;
      //renderQuestion function runs again to go to next question
      renderQuestion();
    }
      window.addEventListener("load", renderQuestion);