document.addEventListener("DOMContentLoaded", () => {
  // Define the MBTI types data (same as your original)
  const types = {
    ISTJ: {title: "The Logistician", percentage: "13.7%", description: "Introverted, Observant, Thinking, and Judging", site: "https://www.16personalities.com/istj-personality", image: "https://github.com/JamesBirchall-dev/imagehost/blob/main/istjresult.png?raw=true" },
    ISFJ: {title: "The Defender", percentage: "12.7%", description: "Introverted, Observant, Feeling, and Judging", site: "https://www.16personalities.com/isfj-personality", image: "https://github.com/JamesBirchall-dev/imagehost/blob/main/isfjresult.png?raw=true" },
    INFJ: {title: "The Advocate", percentage: "1.7%", description: "Introverted, Intuitive, Feeling, and Judging", site: "https://www.16personalities.com/infj-personality", image: "https://github.com/JamesBirchall-dev/imagehost/blob/main/infjresult.png?raw=true" }, 
    INTJ: {title: "The Architect", percentage: "1.4%", description: "Introverted, Intuitive, Thinking, and Judging", site: "https://www.16personalities.com/intj-personality", image: "https://github.com/JamesBirchall-dev/imagehost/blob/main/intjresult.png?raw=true" },
    ISTP: {title: "The Virtuoso", percentage: "6.4%", description: "Introverted, Observant, Thinking, and Prospecting", site: "https://www.16personalities.com/istp-personality", image: "https://github.com/JamesBirchall-dev/imagehost/blob/main/istpresult.png?raw=true" },
    ISFP: {title: "The Adventurer", percentage: "6.1%", description: "Introverted, Observant, Feeling, and Prospecting", site: "https://www.16personalities.com/isfp-personality", image: "https://github.com/JamesBirchall-dev/imagehost/blob/main/isfpresult.png?raw=true" },
    INFP: {title: "The Mediator", percentage: "3.2%", description: "Introverted, Intuitive, Feeling, and Prospecting ", site: "https://www.16personalities.com/infp-personality", image: "https://github.com/JamesBirchall-dev/imagehost/blob/main/infpresult.png?raw=true" },
    INTP: {title: "The Logician", percentage: "2.4%", description: "Introverted, Intuitive, Thinking, and Prospecting", site: "https://www.16personalities.com/intp-personality", image: "https://github.com/JamesBirchall-dev/imagehost/blob/main/intpresult.png?raw=true" },
    ESTP: {title: "The Entrepeneur", percentage: "5.8%", description: "Extraverted, Observant, Thinking, and Prospecting", site: "https://www.16personalities.com/estp-personality", image: "https://github.com/JamesBirchall-dev/imagehost/blob/main/estpresult.png?raw=true" },
    ESFP: {title: "The Entertainer", percentage: "8.7%", description: "Extraverted, Observant, Feeling, and Prospecting", site: "https://www.16personalities.com/esfp-personality", image: "https://github.com/JamesBirchall-dev/imagehost/blob/main/esfpresult.png?raw=true" },
    ENFP: {title: "The Campaigner", percentage: "6.3%", description: "Extraverted, Intuitive, Feeling, and Prospecting", site: "https://www.16personalities.com/enfp-personality", image: "https://github.com/JamesBirchall-dev/imagehost/blob/main/enfpresult.png?raw=true" },
    ENTP: {title: "The Debater", percentage: "2.8%", description: "Extraverted, Intuitive, Thinking, and Prospecting", site: "https://www.16personalities.com/entp-personality", image: "https://github.com/JamesBirchall-dev/imagehost/blob/main/entpresult.png?raw=true" },
    ESTJ: {title: "The Executive", percentage: "10.4%", description: "Extraverted, Observant, Thinking, and Judging ", site: "https://www.16personalities.com/estj-personality", image: "https://github.com/JamesBirchall-dev/imagehost/blob/main/estjresult.png?raw=true" },
    ESFJ: {title: "The Consul", percentage: "12.6%", description: "Extraverted, Observant, Feeling, and Judging", site: "https://www.16personalities.com/esfj-personality", image: "https://github.com/JamesBirchall-dev/imagehost/blob/main/esfjresult.png?raw=true" },
    ENFJ: {title: "The Protagonist", percentage: "2.8%", description: "Extraverted, Intuitive, Feeling, and Judging", site: "https://www.16personalities.com/enfj-personality", image: "https://github.com/JamesBirchall-dev/imagehost/blob/main/enfjresult.png?raw=true" },
    ENTJ: {title: "The Commander", percentage: "2.9%", description: "Extraverted, Intuitive, Thinking, and Judging", site: "https://www.16personalities.com/entj-personality", image: "https://github.com/JamesBirchall-dev/imagehost/blob/main/entjresult.png?raw=true" },
  };

  // Parse URL parameters
                const params = new URLSearchParams(window.location.search);
                const type = params.get("type");  

  if (!type || !types[type]) {
    document.body.innerHTML = "<h1>Error: MBTI type not found or invalid.</h1>";
    return;
  }

  // Populate page elements
  document.getElementById("type").textContent = type;
  document.getElementById("title").textContent = types[type].title;
  document.getElementById("percentage").textContent = types[type].percentage;
  document.getElementById("description").textContent = types[type].description;
  document.getElementById("site").href = types[type].site;
  document.getElementById("resultImage").src = types[type].image;
  document.getElementById("resultImage").alt = `${types[type].title} Image`;
  
});