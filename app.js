// Tu códgigo aquí
let btn = document.querySelector("#get-joke");
let displayJoke = document.querySelector("#display-joke");

btn.addEventListener("click", updateJoke);

// function updateJoke() {
//   let xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       let jokes = JSON.parse(this.response);
//       displayJoke.innerHTML = jokes.value;
//     }
//   };
//   xhttp.open("GET", "https://api.chucknorris.io/jokes/random", true);
//   xhttp.send();
// }

//This does exactly the same as on top
function updateJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    //Same as parsing JSON
    .then((response) => response.json())
    //Same as what the function does on top,
    .then((data) => updateDOM(data))
    //error call out
    .catch((error) => console.log(error));
}

function updateDOM(e) {
  displayJoke.innerHTML = e.value;
}
