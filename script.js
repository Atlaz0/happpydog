const list = document.getElementById("list");
let workers = [];

async function loadWorkers() {
  try {
    const response = await fetch("./workers.json");
    if (!response.ok) {
      throw new Error("Failed to fetch workers.json");
    }

    workers = await response.json();
    // for loop to create a new div for each worker and append it to the list
    for (let worker of workers) {
      const newItem = document.createElement("div");
      let picture = document.createElement("div");
      let name = document.createElement("h2");
      let raiting = document.createElement("p");
      let avalibility = document.createElement("p");
      let location = document.createElement("p");
      let favorite = document.createElement("div");
      let pay = document.createElement("h1");
      let perhour = document.createElement("p");

      newItem.className = "worker";
      name.textContent = "hello";
      
      newItem.appendChild(name);
      list.appendChild(newItem);
    }
  } catch (error) {
    console.error("Could not load workers:", error);
  }
}

function addItem() {
  const newItem = document.createElement("div");
  newItem.className = "worker";
  newItem.textContent = "New Item";
  list.appendChild(newItem);
}

loadWorkers();


const date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const day = date.getDate();

const getOrdinal = (n) => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

document.querySelector('.calenderDate').innerText = `${months[date.getMonth()]} ${getOrdinal(day)}`;


const start = document.getElementById("start");
const end = document.getElementById("end");

function fill(select) {
  for (let m = 0; m < 24 * 60; m += 30) {
    const h = String(Math.floor(m / 60)).padStart(2, "0");
    const min = String(m % 60).padStart(2, "0");
    select.add(new Option(`${h}:${min}`, `${h}:${min}`));
  }
}
fill(start);
fill(end);

start.value = "09:00";
end.value = "10:30";

start.addEventListener("change", () => {
  if (end.value <= start.value) {
    end.selectedIndex = Math.min(start.selectedIndex + 1, end.options.length - 1);
  }
});
