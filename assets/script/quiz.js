document.addEventListener("DOMContentLoaded", () => { 
    const form = document.querySelector("form");
    const sectionKey = document.body.dataset.section; 
    const feedbackImage = document.getElementById("section-result");
    const validationMsg = document.getElementById("validation-message"); 
      
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

        const formData = new FormData(form);

            //start counting e and i values from the form
    let eCount = 0;
    let iCount = 0;

    //loop and count for e and i values
    for (const [name, value] of formData.entries()) {
        if (value ==="e") {
            eCount++;
        }

        else if (value ==="i") {
            iCount++;
        }
    }
    // store results in a sessionstorage
    sessionStorage.setItem("section1", JSON.stringify({ e: eCount, i: iCount}));


        alert("Form complete — ready to store");

        // to test the session storage using the unique body id assigned to eat page  
        console.log("Stored section1:",sessionStorage.getItem("section1"))
    });
});