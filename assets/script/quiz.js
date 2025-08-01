document.addEventListener("DOMContentLoaded", () => { 
    var form = document.querySelector("form");
    var sectionKey = document.body.dataset.section;
    var feedbackImage = document.getElementById("section-result");
    var validationMsg = document.getElementById("validation-message"); 
    
    var valueMap = { // define answer ids to count for each section         
        section1: ["e", "i"],
        section2: ["s", "n"],
        section3: ["t", "f"],
        section4: ["j", "p"],
    };

      
    // Listen for form submission and prevent reload of page
    form.addEventListener("submit", (e) => {
        e.preventDefault(); 
        //bootstrap class
        form.classList.add("was-validated");

        // if form is invalid, displays message as block
        if (!form.checkValidity()) {
            if (validationMsg) {
                validationMsg.style.display = "block"; 
            }
            return; 
        }

        // If the form is valid displays no message
        if (validationMsg) {
            validationMsg.style.display = "none"; 
        }

        var formData = new FormData(form);
        
        var firstLetter = "";
        var secondLetter = "";

        if (valueMap[sectionKey]) {
            firstLetter = valueMap[sectionKey][0];
            secondLetter = valueMap[sectionKey][1];
        }
        // counts first and second letter so can be applied to all the section pages
        var firstCount = 0;
        var secondCount = 0;

    //loop and count for e and i values
        var entries = formData.entries();
        var entry;
        while (!(entry = entries.next()).done) {
            var name = entry.value[0];
            var value = entry.value[1];

            if (value === firstLetter) {
                firstCount += 1;
            }
          else if (value === secondLetter) {
                secondCount +=1;
                }           
        }

        var result = {};
        result [firstLetter] = firstCount;
        result [secondLetter] = secondCount;

    
    // store results in a sessionstorage
    sessionStorage.setItem(sectionKey, JSON.stringify(result));
    var nextPage = "";
    if (sectionKey === "section1") {
        nextPage = "sn.html";
    } else if (sectionKey === "section2") {
        nextPage = "tf.html";
    } else if (sectionKey === "section3") {
        nextPage = "jp.html";
    } else if (sectionKey === "section4") {
        nextPage = "results.html";       
    }
    
    if (nextPage) {
        window.location. href = nextPage;    
    }
});
})