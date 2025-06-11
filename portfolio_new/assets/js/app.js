let overMij = document.getElementById("over-mij");
let projecten = document.getElementById("projecten");
let contact = document.getElementById("contact");
let intro = document.getElementById("intro");
let skills = document.getElementById("skills");
let overMijText = document.getElementById("over-mij-tekst");
let projectenText = document.getElementById("projecten-tekst");
let skillsText = document.getElementById("skills-tekst");
let contactText = document.getElementById("contact-tekst");

let active = 1;

let slideIndex = 0;
showSlides();

overMij.addEventListener("click", function () {
  console.log("over mij");
  if (active == 1) {
    startBlocks();
  }
  setTimeout(() => {
    fillAbout();
  }, 2000);
});

projecten.addEventListener("click", function () {
  console.log("projecten");
  if (active == 1) {
    startBlocks();
  }
  setTimeout(() => {
    fillProjects();
  }, 2000);
});

contact.addEventListener("click", function () {
  console.log("contact");
  if (active == 1) {
    startBlocks();
  }
  setTimeout(() => {
    fillContact();
  }, 2000);
});

skills.addEventListener("click", function () {
  console.log("skills");
  if (active == 1) {
    startBlocks();
  }
  setTimeout(() => {
    fillSkills();
  }, 2000);
});

function startBlocks() {
  height = 5;
  width = 20;

  intro.style.display = "none";
  overMij.classList.remove("intros");
  contact.classList.remove("intros");
  skills.classList.remove("intros");
  projecten.classList.remove("intros");

  let sizeInterval = setInterval(() => {
    if (height >= 30) {
      clearInterval(sizeInterval);
    } else {
      height += 1;
      width += 1;
      overMij.style.height = height + "vh";
      overMij.style.width = width + "vw";
      contact.style.height = height + "vh";
      contact.style.width = width + "vw";
      skills.style.height = height + "vh";
      skills.style.width = width + "vw";
      projecten.style.height = height + "vh";
      projecten.style.width = width + "vw";
    }
  }, 10);
}

function fillAbout() {
  if (active == 1) {
    height = 30;
    width = 45;
    heightdiff = 0;
    widthdiff = 0;

    let posInterval = setInterval(() => {
      if (heightdiff >= 25) {
        clearInterval(posInterval);
      } else {
        heightdiff += 1;
        widthdiff += 1.4;
        overMij.style.height = height + heightdiff + "vh";
        overMij.style.width = width + widthdiff + "vw";
        skills.style.height = height - heightdiff + "vh";
        skills.style.width = width + widthdiff + "vw";
        contact.style.height = height - heightdiff + "vh";
        contact.style.width = width - widthdiff + "vw";
        projecten.style.height = height + heightdiff + "vh";
        projecten.style.width = width - widthdiff + "vw";
      }
    }, 10);
  } else if (active == 3) {
    let textInterval = setInterval(() => {
      if (projectenText.style.opacity <= 0) {
        clearInterval(textInterval);
        projectenText.style.display = "none";
      } else {
        projectenText.style.opacity =
          parseFloat(projectenText.style.opacity) - 0.01;
      }
    }, 10);
    setTimeout(() => {
      widthdiff = 0;
      heightdiff = 0;
      let posInterval = setInterval(() => {
        console.log(widthdiff);
        if (widthdiff >= 35) {
          clearInterval(posInterval);
        } else {
          widthdiff += 1;
          overMij.style.width = width + widthdiff + "vw";
          skills.style.width = width + widthdiff + "vw";
          contact.style.width = width - widthdiff + "vw";
          projecten.style.width = width - widthdiff + "vw";
        }
      }, 10);
    }, 1000);
  } else if (active == 4) {
    let textInterval = setInterval(() => {
      if (contactText.style.opacity <= 0) {
        clearInterval(textInterval);
        contactText.style.display = "none";
      } else {
        contactText.style.opacity =
          parseFloat(contactText.style.opacity) - 0.01;
      }
    }, 10);

    setTimeout(() => {
      widthdiff = 0;
      heightdiff = 0;
      let posInterval = setInterval(() => {
        console.log(widthdiff);
        if (heightdiff >= 25) {
          clearInterval(posInterval);
        } else {
          heightdiff += 1;
          widthdiff += 1.4;
          overMij.style.height = height + heightdiff + "vh";
          overMij.style.width = width + widthdiff + "vw";
          skills.style.height = height - heightdiff + "vh";
          skills.style.width = width + widthdiff + "vw";
          contact.style.height = height - heightdiff + "vh";
          contact.style.width = width - widthdiff + "vw";
          projecten.style.height = height + heightdiff + "vh";
          projecten.style.width = width - widthdiff + "vw";
        }
      }, 10);
    }, 1000);
  } else if (active == 5) {
    let textInterval = setInterval(() => {
      if (skillsText.style.opacity <= 0) {
        clearInterval(textInterval);
        skillsText.style.display = "none";
      } else {
        skillsText.style.opacity =
          parseFloat(skillsText.style.opacity) - 0.01;
      }
    }, 10);
    setTimeout(() => {
      heightdiff = 0;
      let posInterval = setInterval(() => {
        console.log(heightdiff);
        if (heightdiff >= 25) {
          clearInterval(posInterval);
        } else {
          heightdiff += 1;
          overMij.style.height = height + heightdiff + "vh";
          skills.style.height = height - heightdiff + "vh";
          contact.style.height = height - heightdiff + "vh";
          projecten.style.height = height + heightdiff + "vh";
        }
      }, 10);
    }, 1000);
  }

  setTimeout(() => {
    overMijText.style.display = "grid";
    overMijText.style.opacity = 0;
    let textInterval = setInterval(() => {
      if (overMijText.style.opacity >= 1) {
        clearInterval(textInterval);
      } else {
        overMijText.style.opacity =
          parseFloat(overMijText.style.opacity) + 0.01;
      }
    }, 20);
    active = 2;
  }, 2000);
}

function fillProjects() {
  if (active == 1) {
    height = 30;
    width = 45;
    heightdiff = 0;
    widthdiff = 0;

    let posInterval = setInterval(() => {
      if (heightdiff >= 25) {
        clearInterval(posInterval);
      } else {
        heightdiff += 1;
        widthdiff += 1.4;
        overMij.style.height = height + heightdiff + "vh";
        overMij.style.width = width - widthdiff + "vw";
        skills.style.height = height - heightdiff + "vh";
        skills.style.width = width - widthdiff + "vw";
        contact.style.height = height - heightdiff + "vh";
        contact.style.width = width + widthdiff + "vw";
        projecten.style.height = height + heightdiff + "vh";
        projecten.style.width = width + widthdiff + "vw";
      }
    }, 10);
    active = 3;
  } else if (active == 2) {
    let textInterval = setInterval(() => {
      if (overMijText.style.opacity <= 0) {
        clearInterval(textInterval);
        overMijText.style.display = "none";
      } else {
        overMijText.style.opacity =
          parseFloat(overMijText.style.opacity) - 0.01;
      }
    }
    , 10);

    setTimeout(() => {
      widthdiff = 0;
      let posInterval = setInterval(() => {
        console.log(widthdiff);
        if (widthdiff >= 35) {
          clearInterval(posInterval);
        } else {
          widthdiff += 1.4;
          overMij.style.width = width - widthdiff + "vw";
          skills.style.width = width - widthdiff + "vw";
          contact.style.width = width + widthdiff + "vw";
          projecten.style.width = width + widthdiff + "vw";
        }
      }, 10);
    } , 1000);
  } else if (active == 4) {
    let textInterval = setInterval(() => {
      if (contactText.style.opacity <= 0) {
        clearInterval(textInterval);
        contactText.style.display = "none";
      } else {
        contactText.style.opacity =
          parseFloat(contactText.style.opacity) - 0.01;
      }
    }, 10);
    setTimeout(() => {
      widthdiff = 0;
      heightdiff = 0;
      let posInterval = setInterval(() => {
        console.log(widthdiff);
        if (heightdiff >= 25) {
          clearInterval(posInterval);
        } else {
          heightdiff += 1;
          overMij.style.height = height + heightdiff + "vh";
          skills.style.height = height - heightdiff + "vh";
          contact.style.height = height - heightdiff + "vh";
          projecten.style.height = height + heightdiff + "vh";
        }
      }, 10);
    }, 1000);
  }
  else if (active == 5) {
    let textInterval = setInterval(() => {
      if (skillsText.style.opacity <= 0) {
        clearInterval(textInterval);
        skillsText.style.display = "none";
      } else {
        skillsText.style.opacity =
          parseFloat(skillsText.style.opacity) - 0.01;
      }
    }, 10);
    setTimeout(() => {
      heightdiff = 0;
      widthdiff = 0;
      let posInterval = setInterval(() => {
        console.log(heightdiff);
        if (heightdiff >= 25) {
          clearInterval(posInterval);
        } else {
          heightdiff += 1;
          widthdiff += 1.4;
          overMij.style.height = height + heightdiff + "vh";
          overMij.style.width = width - widthdiff + "vw";
          skills.style.height = height - heightdiff + "vh";
          skills.style.width = width - widthdiff + "vw";
          contact.style.height = height - heightdiff + "vh";
          contact.style.width = width + widthdiff + "vw";
          projecten.style.height = height + heightdiff + "vh";
          projecten.style.width = width + widthdiff + "vw";
        }
      }, 10);
    }, 1000);
  }
 
  setTimeout(() => {
    projectenText.style.display = "flex";
    projectenText.style.opacity = 0;
    let textInterval = setInterval(() => {
      if (projectenText.style.opacity >= 1) {
        clearInterval(textInterval);
      } else {
        projectenText.style.opacity =
          parseFloat(projectenText.style.opacity) + 0.01;
      }
    }, 20);
  }, 2000);
  active = 3;
}

function fillContact() {
  if (active == 1) {
    height = 30;
    width = 45;
    heightdiff = 0;
    widthdiff = 0;

    let posInterval = setInterval(() => {
      if (heightdiff >= 25) {
        clearInterval(posInterval);
      } else {
        heightdiff += 1;
        widthdiff += 1.4;
        overMij.style.height = height - heightdiff + "vh";
        overMij.style.width = width - widthdiff + "vw";
        skills.style.height = height + heightdiff + "vh";
        skills.style.width = width - widthdiff + "vw";
        contact.style.height = height + heightdiff + "vh";
        contact.style.width = width + widthdiff + "vw";
        projecten.style.height = height - heightdiff + "vh";
        projecten.style.width = width + widthdiff + "vw";
      }
    }, 10);
  } else if (active == 2) {
    let textInterval = setInterval(() => {
      if (overMijText.style.opacity <= 0) {
        clearInterval(textInterval);
        overMijText.style.display = "none";
      } else {
        overMijText.style.opacity =
          parseFloat(overMijText.style.opacity) - 0.01;
      }
    }, 10);

    setTimeout(() => {
      widthdiff = 0;
      heightdiff = 0;
      let posInterval = setInterval(() => {
        console.log(widthdiff);
        if (widthdiff >= 35) {
          clearInterval(posInterval);
        } else {
          widthdiff += 1.4;
          heightdiff += 0.9;
          overMij.style.width = width - widthdiff + "vw";
          overMij.style.height = height - heightdiff + "vh";
          skills.style.width = width - widthdiff + "vw";
          skills.style.height = height + heightdiff + "vh";
          contact.style.width = width + widthdiff + "vw";
          contact.style.height = height + heightdiff + "vh";
          projecten.style.width = width + widthdiff + "vw";
          projecten.style.height = height - heightdiff + "vh";
        }
      }, 10);
    }, 1000);
  } else if (active == 3) {
    let textInterval = setInterval(() => {
      if (projectenText.style.opacity <= 0) {
        clearInterval(textInterval);
        projectenText.style.display = "none";
      } else {
        projectenText.style.opacity =
          parseFloat(projectenText.style.opacity) - 0.01;
      }
    }, 10);

    setTimeout(() => {
      widthdiff = 0;
      heightdiff = 0;
      let posInterval = setInterval(() => {
        console.log(widthdiff);
        if (heightdiff >= 25) {
          clearInterval(posInterval);
        } else {
          heightdiff += 1;
          overMij.style.height = height - heightdiff + "vh";
          skills.style.height = height + heightdiff + "vh";
          contact.style.height = height + heightdiff + "vh";
          projecten.style.height = height - heightdiff + "vh";
        }
      }, 10);
    }, 1000);
  } else if (active == 5) {
    let textInterval = setInterval(() => {
      if (skillsText.style.opacity <= 0) {
        clearInterval(textInterval);
        skillsText.style.display = "none";
      } else {
        skillsText.style.opacity =
          parseFloat(skillsText.style.opacity) - 0.01;
      }
    }, 10);
    setTimeout(() => {
      heightdiff = 0;
      widthdiff = 0;
      let posInterval = setInterval(() => {
        console.log(heightdiff);
        if (widthdiff >= 35) {
          clearInterval(posInterval);
        } else {
          widthdiff += 1.4;
          overMij.style.width = width - widthdiff + "vw";
          skills.style.width = width - widthdiff + "vw";
          contact.style.width = width + widthdiff + "vw";
          projecten.style.width = width + widthdiff + "vw";
        }
      }, 10);
    }, 1000);
  }

  setTimeout(() => {
    contactText.style.display = "flex";
    contactText.style.opacity = 0;
    let textInterval = setInterval(() => {
      if (contactText.style.opacity >= 1) {
        clearInterval(textInterval);
      } else {
        contactText.style.opacity =
          parseFloat(contactText.style.opacity) + 0.01;
      }
    }, 20);
  }, 2000);
  active = 4;
}

function fillSkills() {
  if (active == 1) {
    height = 30;
    width = 45;
    heightdiff = 0;
    widthdiff = 0;

    let posInterval = setInterval(() => {
      if (heightdiff >= 25) {
        clearInterval(posInterval);
      } else {
        heightdiff += 1;
        widthdiff += 1.4;
        overMij.style.height = height - heightdiff + "vh";
        overMij.style.width = width + widthdiff + "vw";
        skills.style.height = height + heightdiff + "vh";
        skills.style.width = width + widthdiff + "vw";
        contact.style.height = height + heightdiff + "vh";
        contact.style.width = width - widthdiff + "vw";
        projecten.style.height = height - heightdiff + "vh";
        projecten.style.width = width - widthdiff + "vw";
      }
    }, 10);

    setTimeout(() => {
      skillsText.style.display = "block";
      skillsText.style.opacity = 0;
      let textInterval = setInterval(() => {
        if (skillsText.style.opacity >= 1) {
          clearInterval(textInterval);
        } else {
          skillsText.style.opacity =
            parseFloat(skillsText.style.opacity) + 0.01;
        }
      }, 20);
    }, 2000);


  } else if (active == 2) {
    let textInterval = setInterval(() => {
      if (overMijText.style.opacity <= 0) {
        clearInterval(textInterval);
        overMijText.style.display = "none";
      } else {
        overMijText.style.opacity =
          parseFloat(overMijText.style.opacity) - 0.01;
      }
    }, 10);

    setTimeout(() => {
      heightdiff = 0;
      let posInterval = setInterval(() => {
        console.log(widthdiff);
        if (heightdiff >= 25) {
          clearInterval(posInterval);
        } else {
          heightdiff += 1;
          overMij.style.height = height - heightdiff + "vh";
          skills.style.height = height + heightdiff + "vh";
          contact.style.height = height + heightdiff + "vh";
          projecten.style.height = height - heightdiff + "vh";
        }
      }, 10);
    }, 1000);

    setTimeout(() => {
      skillsText.style.display = "block";
      skillsText.style.opacity = 0;
      let textInterval = setInterval(() => {
        if (skillsText.style.opacity >= 1) {
          clearInterval(textInterval);
        } else {
          skillsText.style.opacity =
            parseFloat(skillsText.style.opacity) + 0.01;
        }
      }, 20);
    }, 2000);
  
  } else if (active == 3) {
    let textInterval = setInterval(() => {
      if (projectenText.style.opacity <= 0) {
        clearInterval(textInterval);
        projectenText.style.display = "none";
      } else {
        projectenText.style.opacity =
          parseFloat(projectenText.style.opacity) - 0.01;
      }
    }
    , 10);
    setTimeout(() => {
      heightdiff = 0;
      widthdiff = 0;
      let posInterval = setInterval(() => {
        console.log(widthdiff);
        if (heightdiff >= 25) {
          clearInterval(posInterval);
        } else {
          heightdiff += 1;
          widthdiff += 1.4;
          overMij.style.height = height - heightdiff + "vh";
          overMij.style.width = width + widthdiff + "vw";
          skills.style.height = height + heightdiff + "vh";
          skills.style.width = width + widthdiff + "vw";
          contact.style.height = height + heightdiff + "vh";
          contact.style.width = width - widthdiff + "vw";
          projecten.style.height = height - heightdiff + "vh";
          projecten.style.width = width - widthdiff + "vw";
        }
      }, 10);
    }, 1000);

    setTimeout(() => {
      skillsText.style.display = "block";
      skillsText.style.opacity = 0;
      let textInterval = setInterval(() => {
        if (skillsText.style.opacity >= 1) {
          clearInterval(textInterval);
        } else {
          skillsText.style.opacity =
            parseFloat(skillsText.style.opacity) + 0.01;
        }
      }, 20);
    }, 2000);

  } else if (active == 4) {
    let textInterval = setInterval(() => {
      if (contactText.style.opacity <= 0) {
        clearInterval(textInterval);
        contactText.style.display = "none";
      } else {
        contactText.style.opacity =
          parseFloat(contactText.style.opacity) - 0.01;
      }
    }, 10);

    setTimeout(() => {
      widthdiff = 0;
      let posInterval = setInterval(() => {
        console.log(widthdiff);
        if (widthdiff >= 35) {
          clearInterval(posInterval);
        } else {
          widthdiff += 1.4;
          overMij.style.width = width + widthdiff + "vw";
          skills.style.width = width + widthdiff + "vw";
          contact.style.width = width - widthdiff + "vw";
          projecten.style.width = width - widthdiff + "vw";
        }
      }, 10);
    }, 1000);

    setTimeout(() => {
      skillsText.style.display = "block";
      skillsText.style.opacity = 0;
      let textInterval = setInterval(() => {
        if (skillsText.style.opacity >= 1) {
          clearInterval(textInterval);
        } else {
          skillsText.style.opacity =
            parseFloat(skillsText.style.opacity) + 0.01;
        }
      }, 20);
    }
    , 2000);
  }
  active = 5;
}



function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 10000); // elke 4 seconden
}

function openTab(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active-tab";
}

openTab(event, 'skills-list');