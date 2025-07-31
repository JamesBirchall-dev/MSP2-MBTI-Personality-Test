document.addEventListener("DOMContentLoaded", () => { 
    const form = document.querySelector("form");
    const nextBtn = document.querySelector("#next"); 
    const sectionKey = document.body.dataset.section; 
    const feedbackImage = document.getElementById("section-result");

nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    //set for questions, the answers and to target radio elements
    const questions = new Set();
    const answered = new Set();
    const inputs = form.querySelectorAll("input[type=radio]");

    //loop for each input element and add names to questions
    inputs.forEach(input => {
        questions.add(input.name);
    // adding question name to the set of answers
        if (input.checked) {
            answered.add(input.name);
        }
    })

// validate calculation
 if (questions.size !== answered.size) {
    alert("Please answer all questions before continuing");
    return;
 }
 alert("Form complete ready to store")//testing form validation and store functionality. 
});
});
