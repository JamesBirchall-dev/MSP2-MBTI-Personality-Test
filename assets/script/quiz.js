

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const sectionKey = document.body.dataset.section;
    const validationMsg = document.getElementById("validation-message");



    // total questions for overall progress bar update
    const total_questions = 40;
    const progress_key = "questionsAnswered"; // key for session storage

    // ensures the progress defaults at 0% for section 1, 25% section 2 etc. 
  
if (!sessionStorage.getItem(progress_key)) {
    const baseProgressMap = {
        section1: 0,
        section2: 10,
        section3: 20,
        section4: 30
    };

    const initialCount = baseProgressMap[sectionKey] || 0;
    sessionStorage.setItem(progress_key, initialCount);
}

    // map for each section defined in body section in ei.html sn.html tf.html jp.html

    const valueMap = {
        
         section1: ["e", "i"],
         section2: ["s", "n"],
         section3: ["t", "f"],
         section4: ["j", "p"],
    };

    // page nav
    const nextPageMap = {
        section1: "sn.html",
        section2: "tf.html",
        section3: "jp.html",
        section4: "results.html"
        
    };
    // counts first and second ansers corresponding to each section ie. section 1 = e or i
    const getFormDataCounts = (formData, firstLetter, secondLetter) => {
        let firstCount = 0;
        let secondCount = 0;

    for (const [, value] of formData.entries()) {
        if (value === firstLetter) firstCount++;
        else if (value === secondLetter) secondCount++;
    }

    return {
        [firstLetter] : firstCount,
        [secondLetter] : secondCount,
    };
};

// validation check for unanswered questions

const validateForm = (form) => {
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
        if (validationMsg) validationMsg.style.display = "block";
        return false;
        
    }
    if (validationMsg) validationMsg.style.display = "none";
    return true;
};

// session storage for results per section
const saveResults = (sectionKey, result) => {
    try {
        sessionStorage.setItem(sectionKey, JSON.stringify(result));
    } catch (err) {
        console.error("Error saving results to sessionStorage", err);
    }
};
// redireet
const goToNextPage = (sectionKey) => {
    const nextPage = nextPageMap[sectionKey];
    if (nextPage) {
        window.location.href = nextPage;
    }
};

// form submssion
const handleSubmit = (e) => {
    e.preventDefault();
    
    try {
        if (!validateForm(form)) return;

        const formData = new FormData(form);
        const [firstLetter, secondLetter] = valueMap[sectionKey] || ["", ""];
        const result = getFormDataCounts(formData,firstLetter,secondLetter);

        saveResults(sectionKey, result);
        goToNextPage(sectionKey);
    } catch (err) {
        console.error("Unexpected error processing form", err);
    }
};

//change card color background upon selection function
try {
    const section = document.body.dataset.section;
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        const radios = card.querySelectorAll('input[type="radio"]');
        radios.forEach((radio) => {
            radio.addEventListener("change", () => {
                const oldClassList = [
                    "e-selected", "i-selected",
                    "s-selected", "n-selected",
                    "t-selected", "f-selected",
                    "j-selected", "p-selected"
                ];
                card.classList.remove(...oldClassList);

                const selectedValue = radio.value.toLowerCase();
                card.classList.add(`${selectedValue}-selected`);

                                
                incrementGlobalProgress(card); //for overall progress not just the section's
                updateProgressBar();
                
            });
        });
    });
} catch (err) {
    console.error("Error adding answered card color", err);
}
//progress bar at section level
const updateProgressBar = () => {
    const cards = document.querySelectorAll(".card");
    const totalQuestions = cards.length;

    let answeredCount = 0;

    cards.forEach((card) => {
        const radios = card.querySelectorAll('input[type="radio"]');
        const oneChecked = Array.from(radios).some(radio => radio.checked);
        if (oneChecked) answeredCount++;
    });

    const percent = (answeredCount / totalQuestions) * 100;
    const progressBar = document.getElementById("progress-bar");
    if (progressBar) {
        progressBar.style.width = `${percent}%`;
    }
};
// get total answered questions for progress bar
const getQuestionsAnswered = () => {
    return parseInt(sessionStorage.getItem(progress_key)) || 0;
    }
const saveQuestionsAnswered = (count) => {
    sessionStorage.setItem(progress_key, count);
};

// increment the progress count
const incrementGlobalProgress = (card) => {
    if (!card.classList.contains("answered")) {
        card.classList.add("answered"); //ensures it adds to the answered class
        const current = getQuestionsAnswered();
        const updated = current +1;
        saveQuestionsAnswered(updated);
        updateOverallProgressBar();
    }
};

// update the progress bar for all sections

const updateOverallProgressBar = () => {
    const answered = getQuestionsAnswered();
    const percent = Math.round((answered / total_questions) * 100); //percentage

    const progressBar = document.getElementById("overall-progress-bar");
    if (progressBar) {
        progressBar.style.width = `${percent}%`;
    }
};

updateProgressBar();
updateOverallProgressBar();

try {
    form.addEventListener("submit", handleSubmit);
} catch (err) {
    console.error("Error processing progress bar", err)
}
});
 










// document.addEventListener("DOMContentLoaded", () => { 
//     var form = document.querySelector("form");
//     var sectionKey = document.body.dataset.section;
//     var feedbackImage = document.getElementById("section-result");
//     var validationMsg = document.getElementById("validation-message"); 
    
//     var valueMap = { // define answer ids to count for each section         
//         section1: ["e", "i"],
//         section2: ["s", "n"],
//         section3: ["t", "f"],
//         section4: ["j", "p"],
//     };

      
//     // Listen for form submission and prevent reload of page
//     form.addEventListener("submit", (e) => {
//         e.preventDefault(); 
//         //bootstrap class
//         form.classList.add("was-validated");

//         // if form is invalid, displays message as block
//         if (!form.checkValidity()) {
//             if (validationMsg) {
//                 validationMsg.style.display = "block"; 
//             }
//             return; 
//         }

//         // If the form is valid displays no message
//         if (validationMsg) {
//             validationMsg.style.display = "none"; 
//         }

//         var formData = new FormData(form);
        
//         var firstLetter = "";
//         var secondLetter = "";

//         if (valueMap[sectionKey]) {
//             firstLetter = valueMap[sectionKey][0];
//             secondLetter = valueMap[sectionKey][1];
//         }
//         // counts first and second letter so can be applied to all the section pages
//         var firstCount = 0;
//         var secondCount = 0;

//     //loop and count for e and i values
//         var entries = formData.entries();
//         var entry;
//         while (!(entry = entries.next()).done) {
//             var name = entry.value[0];
//             var value = entry.value[1];

//             if (value === firstLetter) {
//                 firstCount += 1;
//             }
//           else if (value === secondLetter) {
//                 secondCount +=1;
//                 }           
//         }

//         var result = {};
//         result [firstLetter] = firstCount;
//         result [secondLetter] = secondCount;

    
//     // store results in a sessionstorage
//     sessionStorage.setItem(sectionKey, JSON.stringify(result));
//     var nextPage = "";
//     if (sectionKey === "section1") {
//         nextPage = "sn.html";
//     } else if (sectionKey === "section2") {
//         nextPage = "tf.html";
//     } else if (sectionKey === "section3") {
//         nextPage = "jp.html";
//     } else if (sectionKey === "section4") {
//         nextPage = "results.html";       
//     }
    
//     if (nextPage) {
//         window.location. href = nextPage;    
//     }
// });
// })