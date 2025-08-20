document.addEventListener("DOMContentLoaded", () => {
  // Define the MBTI types data
  const types = {
    ISTJ: { title: "The Logistician", percentage: "13.7%", description: "Introverted, Observant, Thinking, and Judging", site: "https://www.16personalities.com/istj-personality", 
    images: {
    mobileS: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/istjresult349x172.webp",
    mobileL: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/istjresult399x197.webp", 
    tablet: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/istjresult674x332.webp" ,
    desktop: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/istjresult.webp"
    }
  },
    ISFJ: { title: "The Defender", percentage: "12.7%", description: "Introverted, Observant, Feeling, and Judging", site: "https://www.16personalities.com/isfj-personality", 
    images: {
    mobileS: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/isfjresult349x172.webp",
    mobileL:"https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/isfjresult399x197.webp",
    tablet:"https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/isfjresult674x332.webp",
    desktop: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/isfjresult.webp"
    }
  }, 
    INFJ: { title: "The Advocate", percentage: "1.7%", description: "Introverted, Intuitive, Feeling, and Judging", site: "https://www.16personalities.com/infj-personality", 
    images: {
    mobileS: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/infjresult349x172.webp" ,
    mobileL: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/infjresult399x197.webp" ,
    tablet: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/infjresult674x332.webp" ,
    desktop:"https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/infjresult.webp"
    }
    },
    INTJ: { title: "The Architect", percentage: "1.4%", description: "Introverted, Intuitive, Thinking, and Judging", site: "https://www.16personalities.com/intj-personality", 
    images: {
    mobileS: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/intjresult349x172.webp",
    mobileL: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/intjresult.webp",
    tablet: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/intjresult.webp",
    desktop: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/intjresult.webp"
    }
    },
    ISTP: { title: "The Virtuoso", percentage: "6.4%", description: "Introverted, Observant, Thinking, and Prospecting", site: "https://www.16personalities.com/istp-personality", 
    images: {
    mobileS: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/istpresult349x172.webp" ,
    mobileL: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/istpresult399x197.webp" ,
    tablet: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/istpresult674x332.webp" ,
    desktop: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/istpresult.webp"
    } 
    },
    ISFP: { title: "The Adventurer", percentage: "6.1%", description: "Introverted, Observant, Feeling, and Prospecting", site: "https://www.16personalities.com/isfp-personality", 
    images: {
    mobileS: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/isfpresult349x172.webp",
    mobileL: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/isfpresult399x197.webp",
    tablet: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/isfpresult674x332.webp",
    desktop: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/isfpresult.webp"
    }
    },
    INFP: { title: "The Mediator", percentage: "3.2%", description: "Introverted, Intuitive, Feeling, and Prospecting", site: "https://www.16personalities.com/infp-personality", 
    images: {
    mobileS: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/infpresult349x172.webp" ,
    mobileL: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/infpresult399x197.webp" ,
    tablet: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/infpresult674x332.webp" ,
    desktop: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/infpresult.webp"
    }
    },
    INTP: { title: "The Logician", percentage: "2.4%", description: "Introverted, Intuitive, Thinking, and Prospecting", site: "https://www.16personalities.com/intp-personality", 
    images: {
    mobileS: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/intpresult349x172.webp" ,
    mobileL: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/intpresult399x197.webp" ,
    tablet: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/intpresult674x332.webp" ,
    desktop: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/intpresult.webp"
    }
    },
    ESTP: { title: "The Entrepreneur", percentage: "5.8%", description: "Extraverted, Observant, Thinking, and Prospecting", site: "https://www.16personalities.com/estp-personality", 
    images: {
    mobileS: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/estpresult349x172.webp" ,
    mobileL: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/estpresult399x197.webp" ,
    tablet: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/estpresult674x332.webp" ,
    desktop: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/estpresult.webp"
    }
    },
    ESFP: { title: "The Entertainer", percentage: "8.7%", description: "Extraverted, Observant, Feeling, and Prospecting", site: "https://www.16personalities.com/esfp-personality", 
    images: {
    mobileS: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/esfpresult349x172.webp" ,
    mobileL: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/esfpresult399x197.webp" ,
    tablet: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/esfpresult674x332.webp" ,
    desktop: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/esfpresult.webp"
    }
    },
    ENFP: { title: "The Campaigner", percentage: "6.3%", description: "Extraverted, Intuitive, Feeling, and Prospecting", site: "https://www.16personalities.com/enfp-personality", 
    images: {
    mobileS: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/enfpresult349x172.webp" ,
    mobileL: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/enfpresult399x197.webp" ,
    tablet: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/enfpresult674x332.webp" ,
    desktop: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/enfpresult.webp" 
    }
    },
    ENTP: { title: "The Debater", percentage: "2.8%", description: "Extraverted, Intuitive, Thinking, and Prospecting", site: "https://www.16personalities.com/entp-personality", 
    images: { 
    mobileS: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/entpresult349x172.webp" ,
    mobileL: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/entpresult399x197.webp" ,
    tablet: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/entpresult674x332.webp" ,
    desktop: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/entpresult.webp"
    }
    },
    ESTJ: { title: "The Executive", percentage: "10.4%", description: "Extraverted, Observant, Thinking, and Judging", site: "https://www.16personalities.com/estj-personality", 
    images: {
    mobileS: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/estjresult349x172.webp" ,
    mobileL: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/estjresult399x197.webp" ,
    tablet: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/estjresult674x332.webp" ,
    desktop: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/estjresult.webp"
    }
    },
    ESFJ: { title: "The Consul", percentage: "12.6%", description: "Extraverted, Observant, Feeling, and Judging", site: "https://www.16personalities.com/esfj-personality", 
    images: {
    mobileS: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/esfjresult349x172.webp" ,
    mobileL: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/esfjresult399x197.webp" ,
    tablet: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/esfjresult674x332.webp" ,
    desktop: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/esfjresult.webp"
    }
    },
    ENFJ: { title: "The Protagonist", percentage: "2.8%", description: "Extraverted, Intuitive, Feeling, and Judging", site: "https://www.16personalities.com/enfj-personality", 
    images: {
    mobileS: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/enfjresult349x172.webp" ,
    mobileL: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/enfjresult399x197.webp" ,
    tablet: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/enfjresult674x332.webp" ,
    desktop: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/enfjresult.webp"
    }
  },
    ENTJ: { title: "The Commander", percentage: "2.9%", description: "Extraverted, Intuitive, Thinking, and Judging", site: "https://www.16personalities.com/entj-personality", 
    images: {
    mobileS: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/entjresult349x172.webp" ,
    mobileL: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/entjresult399x197.webp" ,
    tablet: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/entjresult674x332.webp" ,
    desktop: "https://raw.githubusercontent.com/JamesBirchall-dev/imagehost/main/entjresult.webp"
    }
  },
  };
  // responsive image function

function getResponsiveImage(images) {
  const width = window.innerWidth;
  if (width < 320) return images.mobileS;
  else if (width < 425) return images.mobileL;
  else if (width < 768) return images.tablet;
  else return images.desktop;
}


  // Retrieve stored section results from sessionStorage
  const section1 = JSON.parse(sessionStorage.getItem("section1"));
  const section2 = JSON.parse(sessionStorage.getItem("section2"));
  const section3 = JSON.parse(sessionStorage.getItem("section3"));
  const section4 = JSON.parse(sessionStorage.getItem("section4"));

  // Handle missing data
  if (!section1 || !section2 || !section3 || !section4) {
    document.body.innerHTML = "<h1>Error: Missing results from one or more sections.</h1>";
    return;
  }

  // Build the MBTI type
  const type =
    (section1.e >= section1.i ? "E" : "I") +
    (section2.s >= section2.n ? "S" : "N") +
    (section3.t >= section3.f ? "T" : "F") +
    (section4.j >= section4.p ? "J" : "P");

  const resultData = types[type];

  // Populate page elements with result data
  document.getElementById("type").textContent = type;
  document.getElementById("title").textContent = resultData.title;
  document.getElementById("percentage").textContent = resultData.percentage;
  document.getElementById("description").textContent = resultData.description;
  document.getElementById("site").href = resultData.site;
  document.getElementById("resultImage").src = getResponsiveImage(resultData.images);
  document.getElementById("resultImage").alt = `${resultData.title} Image`;
});