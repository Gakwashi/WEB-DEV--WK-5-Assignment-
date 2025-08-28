
function checkName() {
  let name = document.getElementById("nameInput").value;
  let output = document.getElementById("nameOutput");

  if (name === "") {
    output.textContent = "Oops, you forgot to type your name!";
  } else {
    output.textContent = "Hey " + name + ", nice to meet you!";
  }
}

// Function
function sayHi() {
  document.getElementById("functionOutput").textContent = "Hi there!";
}

function getTotal() {
  let price = 10;
  let quantity = 2;
  let total = price * quantity;
  document.getElementById("functionOutput").textContent = "Total is Ksh" + total;
}

// Loop 
function showMovies() {
  let movies = ["Love, Death & Robots", "Squid Game", "The Blue Samurai"];
  let list = document.getElementById("movieList");
  list.innerHTML = ""; 

  for (let i = 0; i < movies.length; i++) {
    let li = document.createElement("li");
    li.textContent = movies[i];
    list.appendChild(li);
  }
}

//Toggle
let darkMode = false;

function toggleTheme() {
  darkMode = !darkMode;
  document.body.style.backgroundColor = darkMode ? "#333" : "#eee";
  document.body.style.color = darkMode ? "#fff" : "#000";
  document.getElementById("themeStatus").textContent = darkMode ? "Dark Mode" : "Light Mode";
}
