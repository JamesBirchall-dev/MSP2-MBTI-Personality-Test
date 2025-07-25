document.addEventListener("DOMContentLoaded", () => {
  // Define the MBTI types data (same as your original)
  const types = {
    ISTJ: {title: "The Traditionalist", percentage: "13.7%", description: "Dutiful, Practical, Logical, Methodical", site: "http://www.personalitypage.com/html/ISTJ.html"},
    ISFJ: {title: "The Protector", percentage: "12.7%", description: "Dutiful, Practical, Supportive, Meticulous", site: "http://www.personalitypage.com/html/ISFJ.html"},
    INFJ: {title: "The Guide", percentage: "1.7%", description: "Devoted, Innovative, Idealistic, Compassionate", site: "http://www.personalitypage.com/html/INFJ.html"},
    INTJ: {title: "The Visionary", percentage: "1.4%", description: "Independent, Innovative, Analytical, Purposeful", site: "http://www.personalitypage.com/html/INTJ.html"},
    ISTP: {title: "The Problem-Solver", percentage: "6.4%", description: "Expedient, Practical, Objective, Adaptable", site: "http://www.personalitypage.com/html/ISTP.html"},
    ISFP: {title: "The Harmonizer", percentage: "6.1%", description: "Tolerant, Realistic, Harmonious, Adaptable", site: "http://www.personalitypage.com/html/ISFP.html"},
    INFP: {title: "The Humanist", percentage: "3.2%", description: "Insightful, Innovative, Idealistic, Adaptable", site: "http://www.personalitypage.com/html/INFP.html"},
    INTP: {title: "The Conceptualizer", percentage: "2.4%", description: "Questioning, Innovative, Objective, Abstract", site: "http://www.personalitypage.com/html/INTP.html"},
    ESTP: {title: "The Activist", percentage: "5.8%", description: "Energetic, Practical, Pragmatic, Spontaneous", site: "http://www.personalitypage.com/html/ESTP.html"},
    ESFP: {title: "The Fun-Lover", percentage: "8.7%", description: "Spontaneous, Practical, Friendly, Harmonious", site: "http://www.personalitypage.com/html/ESFP.html"},
    ENFP: {title: "The Enthusiast", percentage: "6.3%", description: "Optimistic, Innovative, Compassionate, Versatile", site: "http://www.personalitypage.com/html/ENFP.html"},
    ENTP: {title: "The Entrepreneur", percentage: "2.8%", description: "Risk-Taking, Innovative, Outgoing, Adaptable", site: "http://www.personalitypage.com/html/ENTP.html"},
    ESTJ: {title: "The Coordinator", percentage: "10.4%", description: "Organized, Practical, Logical, Outgoing", site: "http://www.personalitypage.com/html/ESTJ.html"},
    ESFJ: {title: "The Supporter", percentage: "12.6%", description: "Friendly, Practical, Loyal, Organized", site: "http://www.personalitypage.com/html/ESFJ.html"},
    ENFJ: {title: "The Developer", percentage: "2.8%", description: "Friendly, Innovative, Supportive, Idealistic", site: "http://www.personalitypage.com/html/ENFJ.html"},
    ENTJ: {title: "The Reformer", percentage: "2.9%", description: "Determined, Innovative, Strategic, Outgoing", site: "http://www.personalitypage.com/html/ENTJ.html"}
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
});