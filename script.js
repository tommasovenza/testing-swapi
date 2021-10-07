// this goes before endpoint
const baseURL = "https://swapi.dev/api/planets/"

const planetList = document.querySelector(".planet-list")
const planetAttr = planetList.querySelector("[data-planet-created]")
// search parameters
// https://swapi.dev/api/people/?search=r2

// ROOT??
// http https://swapi.dev/api/

// async function getData(URL) {
//   const response = await fetch(URL)
//   const data = await response.json()
//   console.log(data)
// }

// getData(baseURL)

getData(baseURL)

function getData(URL) {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const planets = data.results

      planets.forEach((planet) => {
        const planetName = planet.name
        const planetCreated = planet.created
        const planetDom = document.createElement("div")
        planetDom.classList.add("planet")
        planetDom.innerHTML = planetName
        planetDom.dataset.planetCreated = planetCreated
        planetList.appendChild(planetDom)
      })
    })
}
