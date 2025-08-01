/*
const MbtiModule = (function () {
  // MBTI trait scores
  let e, i, s, n, t, f, j, p;

  function resetScores() {
    e = i = s = n = t = f = j = p = 0;
  }

  function getScores() {
    const inputs = document.getElementsByTagName("input");
    Array.prototype.forEach.call(inputs, function (input) {
      if (input.checked) {
        switch (input.value) {
          case "e": e++; break;
          case "i": i++; break;
          case "s": s++; break;
          case "n": n++; break;
          case "t": t++; break;
          case "f": f++; break;
          case "j": j++; break;
          case "p": p++; break;
        }
      }
    });
  }

  return {
    processForm: function () {
      resetScores();
      getScores();

      // Determine MBTI type based on majority
      const type =
        (e >= i ? "E" : "I") +
        (s >= n ? "S" : "N") +
        (t >= f ? "T" : "F") +
        (j >= p ? "J" : "P");

      // Redirect to results page with scores and type as query params
      const query = new URLSearchParams({
        type, e, i, s, n, t, f, j, p
      }).toString();

      window.location.href = `results.html?${query}`;
    }
  };
})();

// Attach handler to the submit button
document.querySelector("#submit").addEventListener("click", function () {
  MbtiModule.processForm();
});