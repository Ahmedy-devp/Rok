const database = [
  { name: "Hermione", id: "80801585", kp: "639,990,630", deaths: "5,098,974" },
  {
    name: "Chandler bing",
    id: "80849948",
    kp: "813,598,608",
    deaths: "5,098,974",
  },
  { name: "彡Rebell", id: "81406724", kp: "813,598,608", deaths: "5,098,974" },
  {
    name: "芈Erwin芈DGAF",
    id: "80837757",
    kp: "2,232,507,747",
    deaths: "10,845,649",
  },
  {
    name: "亗Havabi DoGAF",
    id: "81347964",
    kp: "2,210,362,240",
    deaths: "7,972,491",
  },
  {
    name: "CutéPanda DGAF",
    id: "42984963",
    kp: "1,223,736,439",
    deaths: "6,396,039",
  },
  {
    name: "ᵇᵗ Dog",
    id: "99395032",
    kp: "791,107,802",
    deaths: "6,934,919",
  },
  {
    name: "Luffy DGAF",
    id: "81555340",
    kp: "1,938,574,474",
    deaths: "6,158,317",
  },
  {
    name: "Kylywon",
    id: "80536012",
    kp: "599,235,870",
    deaths: "4,194,322",
  },
];
//select elements
function selectElement(selector) {
  return document.querySelector(selector);
}
//clear clearresults
function clearResults() {
  selectElement(".search-results").innerHTML = "";
}
function getResults() {
  const search = selectElement(".searchbar").value;
  clearResults();
  if (search.length > 0) {
    for (let i = 0; i < database.length; i++) {
      if (
        database[i].name.toLocaleLowerCase().includes(search.toLowerCase()) ||
        database[i].id.includes(search)
      ) {
        selectElement(".search-results").innerHTML += `
                <div class="search-results-item">
                <span class="search-item"><span class="colored">Name:</span> ${database[i].name}</span>
                <span class="search-item"><span class="colored">ID:</span> ${database[i].id}</span>
                <span class="search-item"><span class="colored">Kp:</span> ${database[i].kp}</span>
                <span class="search-item"><span class="colored">Deaths:</span> ${database[i].deaths}</span>
                </div>
                `;
      }
    }
  }
}

selectElement(".searchbar").addEventListener("keyup", getResults);
