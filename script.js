var url =
  "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";

async function funcName() {
  const response = await fetch(url);
  var data = await response.json();
  return data;
}

let data = funcName();
console.log(data);

let userInput = document.getElementById("search-box");
userInput.addEventListener("keyup", () => {
  let userInputData = userInput.value.toUpperCase();
  let cData = document.getElementsByTagName("tr");
  for (i = 1; i < cData.length; i++) {
    if (cData) {
      let cData1 = cData[i].innerText.toUpperCase();
      if (cData1.indexOf(userInputData) > -1) {
        cData[i].style.display = "";
      } else {
        cData[i].style.display = "none";
      }
    }
  }
});

let activeClass = document.querySelectorAll(".data-row");

for (var i = 0; i < activeClass.length; i++) {
  activeClass[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
