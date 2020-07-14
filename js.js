const divs = document.querySelectorAll("div");
const popUp = document.querySelector("div.popUp");
let counter = 0;
const table = document.getElementById("table");
popUp.addEventListener("dblclick", function () {
  popUp.style.zIndex = "-2";
});
const end = () => {
  table.classList.add("disabled");
  if (counter % 2 == 1) {
    setTimeout(function () {
      popUp.textContent = "wygrało Kółko";
      popUp.style.zIndex = "2";
    }, 250);
  } else {
    setTimeout(function () {
      popUp.textContent = "wygrał Krzyżyk";
      popUp.style.zIndex = "2";
    }, 250);
  }
};

function move(divs) {
  if (counter % 2 == 0) {
    this.innerHTML = "<img src='images/shape_circle.png' class='foto'>";
    this.removeEventListener("click", move);
  } else {
    this.innerHTML = "<img src='images/X.jpg' class='foto'>";
    this.removeEventListener("click", move);
  }
  counter++;
  let flag = 0;
  //sprawdzanie warunków
  if (counter > 4) {
    if (
      document.querySelector("div:nth-of-type(1)").innerHTML ==
        document.querySelector("div:nth-of-type(2)").innerHTML &&
      document.querySelector("div:nth-of-type(3)").innerHTML ==
        document.querySelector("div:nth-of-type(2)").innerHTML &&
      document.querySelector("div:nth-of-type(1)").innerHTML ==
        document.querySelector("div:nth-of-type(3)").innerHTML
    ) {
      if (document.querySelector("div:nth-of-type(1)").innerHTML != "") {
        document.querySelector("div:nth-of-type(1)").style.backgroundColor =
          "#999";
        document.querySelector("div:nth-of-type(2)").style.backgroundColor =
          "#999";
        document.querySelector("div:nth-of-type(3)").style.backgroundColor =
          "#999";
        setTimeout(end(), 500);
        setTimeout(function () {
          location.reload();
        }, 1000);
      }
    } else if (
      document.querySelector("div:nth-of-type(4)").innerHTML ==
        document.querySelector("div:nth-of-type(5)").innerHTML &&
      document.querySelector("div:nth-of-type(5)").innerHTML ==
        document.querySelector("div:nth-of-type(6)").innerHTML &&
      document.querySelector("div:nth-of-type(4)").innerHTML ==
        document.querySelector("div:nth-of-type(6)").innerHTML
    ) {
      if (document.querySelector("div:nth-of-type(4)").innerHTML != "") {
        document.querySelector("div:nth-of-type(4)").style.backgroundColor =
          "#999";
        document.querySelector("div:nth-of-type(5)").style.backgroundColor =
          "#999";
        document.querySelector("div:nth-of-type(6)").style.backgroundColor =
          "#999";
        setTimeout(end(), 500);
        setTimeout(function () {
          location.reload();
        }, 1000);
      }
    } else if (
      document.querySelector("div:nth-of-type(7)").innerHTML ==
        document.querySelector("div:nth-of-type(8)").innerHTML &&
      document.querySelector("div:nth-of-type(8)").innerHTML ==
        document.querySelector("div:nth-of-type(9)").innerHTML &&
      document.querySelector("div:nth-of-type(7)").innerHTML ==
        document.querySelector("div:nth-of-type(9)").innerHTML
    ) {
      if (document.querySelector("div:nth-of-type(7)").innerHTML != "") {
        document.querySelector("div:nth-of-type(7)").style.backgroundColor =
          "#999";
        document.querySelector("div:nth-of-type(8)").style.backgroundColor =
          "#999";
        document.querySelector("div:nth-of-type(9)").style.backgroundColor =
          "#999";
        setTimeout(end(), 500);
        setTimeout(function () {
          location.reload();
        }, 1000);
      }
    } else if (
      document.querySelector("div:nth-of-type(1)").innerHTML ==
        document.querySelector("div:nth-of-type(4)").innerHTML &&
      document.querySelector("div:nth-of-type(4)").innerHTML ==
        document.querySelector("div:nth-of-type(7)").innerHTML &&
      document.querySelector("div:nth-of-type(1)").innerHTML ==
        document.querySelector("div:nth-of-type(7)").innerHTML
    ) {
      if (document.querySelector("div:nth-of-type(1)").innerHTML != "") {
        document.querySelector("div:nth-of-type(4)").style.backgroundColor =
          "#999";
        document.querySelector("div:nth-of-type(1)").style.backgroundColor =
          "#999";
        document.querySelector("div:nth-of-type(7)").style.backgroundColor =
          "#999";
        setTimeout(end(), 500);
        setTimeout(function () {
          location.reload();
        }, 1000);
      }
    } else if (
      document.querySelector("div:nth-of-type(2)").innerHTML ==
        document.querySelector("div:nth-of-type(5)").innerHTML &&
      document.querySelector("div:nth-of-type(5)").innerHTML ==
        document.querySelector("div:nth-of-type(8)").innerHTML &&
      document.querySelector("div:nth-of-type(2)").innerHTML ==
        document.querySelector("div:nth-of-type(8)").innerHTML
    ) {
      if (document.querySelector("div:nth-of-type(2)").innerHTML != "") {
        document.querySelector("div:nth-of-type(2)").style.backgroundColor =
          "#999";
        document.querySelector("div:nth-of-type(5)").style.backgroundColor =
          "#999";
        document.querySelector("div:nth-of-type(8)").style.backgroundColor =
          "#999";
        setTimeout(end(), 500);
        setTimeout(function () {
          location.reload();
        }, 1000);
      }
    } else if (
      document.querySelector("div:nth-of-type(3)").innerHTML ==
        document.querySelector("div:nth-of-type(6)").innerHTML &&
      document.querySelector("div:nth-of-type(6)").innerHTML ==
        document.querySelector("div:nth-of-type(9)").innerHTML &&
      document.querySelector("div:nth-of-type(9)").innerHTML ==
        document.querySelector("div:nth-of-type(3)").innerHTML
    ) {
      if (document.querySelector("div:nth-of-type(3)").innerHTML != "") {
        document.querySelector("div:nth-of-type(3)").style.backgroundColor =
          "#999";
        document.querySelector("div:nth-of-type(6)").style.backgroundColor =
          "#999";
        document.querySelector("div:nth-of-type(9)").style.backgroundColor =
          "#999";
        setTimeout(end(), 500);
        setTimeout(function () {
          location.reload();
        }, 1000);
      }
    } else if (
      document.querySelector("div:nth-of-type(1)").innerHTML ==
        document.querySelector("div:nth-of-type(5)").innerHTML &&
      document.querySelector("div:nth-of-type(5)").innerHTML ==
        document.querySelector("div:nth-of-type(9)").innerHTML &&
      document.querySelector("div:nth-of-type(1)").innerHTML ==
        document.querySelector("div:nth-of-type(9)").innerHTML
    ) {
      if (document.querySelector("div:nth-of-type(1)").innerHTML != "") {
        document.querySelector("div:nth-of-type(4)").style.backgroundColor =
          "#999";
        document.querySelector("div:nth-of-type(5)").style.backgroundColor =
          "#999";
        document.querySelector("div:nth-of-type(9)").style.backgroundColor =
          "#999";
        setTimeout(end(), 500);
        setTimeout(function () {
          location.reload();
        }, 1000);
      }
    } else if (
      document.querySelector("div:nth-of-type(3)").innerHTML ==
        document.querySelector("div:nth-of-type(5)").innerHTML &&
      document.querySelector("div:nth-of-type(5)").innerHTML ==
        document.querySelector("div:nth-of-type(7)").innerHTML &&
      document.querySelector("div:nth-of-type(7)").innerHTML ==
        document.querySelector("div:nth-of-type(3)").innerHTML
    ) {
      if (document.querySelector("div:nth-of-type(3)").innerHTML != "") {
        document.querySelector("div:nth-of-type(3)").style.backgroundColor =
          "#999";
        document.querySelector("div:nth-of-type(5)").style.backgroundColor =
          "#999";
        document.querySelector("div:nth-of-type(7)").style.backgroundColor =
          "#999";
        setTimeout(end(), 500);
        setTimeout(function () {
          location.reload();
        }, 1000);
      }
    } else {
      flag = 1;
    }
  }

  //koniec sprawdzania warunków
  if (counter == 9 && flag == 1) {
    setTimeout(function () {
      popUp.textContent = "Remis";
      popUp.style.zIndex = "2";
    }, 250);
  }
}
divs.forEach((div) => {
  div.addEventListener("click", move);
});
