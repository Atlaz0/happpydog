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
      let name = document.createElement("h2");
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