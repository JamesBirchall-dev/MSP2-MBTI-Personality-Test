document.addEventListener("DOMContentLoaded", () => { 
    const form = document.querySelector("form");
    const sectionKey = document.body.dataset.section; 
    const feedbackImage = document.getElementById("section-result");
    const validationMsg = document.getElementById("validation-message"); 

    // Listen for form submission and prevent reload of page
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // 
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

        alert("Form complete — ready to store");
    });
});