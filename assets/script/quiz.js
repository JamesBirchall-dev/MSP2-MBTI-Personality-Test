document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const sectionKey = document.body.dataset.section;
    const validationMsg = document.getElementById("validation-message");

    const valueMap = {
        
         section1: ["e", "i"],
         section2: ["s", "n"],
         section3: ["t", "f"],
         section4: ["j", "p"],
    };

    const nextPageMap = {
        section1: "sn.html",
        section2: "tf.html",
        section3: "jp.html",
        section4: "results.html"
        
    };

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

const validateForm = (form) => {
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
        if (validationMsg) validationMsg.style.display = "block";
        return false;
        
    }
    if (validationMsg) validationMsg.style.display = "none";
    return true;
};

const saveResults = (sectionKey, result) => {
    try {
        sessionStorage.setItem(sectionKey, JSON.stringify(result));
    } catch (err) {
        console.error("Error saving results to sessionStorage", err);
    }
};

const goToNextPage = (sectionKey) => {
    const nextPage = nextPageMap[sectionKey];
    if (nextPage) {
        window.location.href = nextPage;
    }
};


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

try {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        const radios = card.querySelectorAll('input[type="radio"]');

        radios.forEach((radio) => {
            radio.addEventListener("change", () => {
                card.classList.add("answered");
            });
        });
    });
} catch (err) {
    console.error("Error adding answered card color", err);
}

try {
    form.addEventListener("submit", handleSubmit);
} catch (err) {
    console.error("Unexpected error processing form", err);
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