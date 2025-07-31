document.addEventListener("DOMContentLoaded", () => { 
    const form = document.querySelector("form");
    const sectionKey = document.body.dataset.section; 
    const feedbackImage = document.getElementById("section-result");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    form.classList.add("was-validated");

    if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
    }
 
 alert("Form complete ready to store")//testing form validation and store functionality. 
});
})
