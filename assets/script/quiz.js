document.addEventListener("DOMContentLoaded", () => { 
    const form = document.querySelector("form");
    const nextBtn = document.querySelector("#next"); // Testing next button functionality 
    const sectionKey = document.body.dataset.section; 
    const feedbackImage = document.getElementById("section-result");

nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Next buttton clicked. JS OK!!!") // Testing next button functionality 
});
});