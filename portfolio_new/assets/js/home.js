// let tijd = document.getElementById('hidden').innerHTML;

let i = 0;
let j = 0;
let k = 0;
let txt1 = "Goede " + tijd + "!";
let txt2 ="Ik ben Lisa Guijt";
let txt3 = "Welkom op mijn website";

setTimeout(typeWriter, 1000);

function typeWriter() {
  if (i < txt1.length) {
    document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, 200);
  } else {
    document.getElementById("typing1").style.display = "none";
    document.getElementById("typing2").innerHTML = "|";
    setTimeout(typeWriter2, 1000);
  }
}

function typeWriter2() {
    if (j < txt2.length) {
      document.getElementById("text2").innerHTML += txt2.charAt(j);
      j++;
      setTimeout(typeWriter2, 200);
    } else {
      document.getElementById("typing2").style.display = "none";
      document.getElementById("typing3").innerHTML = "|";
        setTimeout(typeWriter3, 1000);
    }
    }

function typeWriter3() {
    if (k < txt3.length) {
      document.getElementById("text3").innerHTML += txt3.charAt(k);
      k++;
      setTimeout(typeWriter3, 200);
    } else {
      document.getElementById("typing3").style.display = "none";
    }
}