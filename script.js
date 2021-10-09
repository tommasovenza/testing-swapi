// this goes before endpoint
const baseURL = "https://swapi.dev/api/planets/"

// get things I need
const planetList = document.querySelector(".planet-list")
const planetAttr = planetList.querySelector("[data-planet-created]")
const buttonSearch = document.querySelector("#search")
const button = document.querySelector("#makeCall")
const changeOrder = document.querySelector("#change-order")
const firstDate = document.querySelector("#firstDate")
const secondDate = document.querySelector("#secondDate")

buttonSearch.addEventListener("click", () => {
  if (firstDate.value === "") {
    alert("ricontrolla i campi di ricerca")
  } else {
    dateResearch(firstDate, baseURL)
  }
})

button.addEventListener("click", () => {
  getData(baseURL)
})

changeOrder.addEventListener("click", () => {
  dataInverse(baseURL)
})

function dateResearch(date, URL) {
  let dateToReasearch = date.value
  // clean canvas
  planetList.innerHTML = ""

  // API Request
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const planets = data.results

      planets.forEach((planet) => {
        let stringCreated = planet.created

        if (stringCreated.includes(dateToReasearch)) {
          const allPlanet = []
          const planetName = planet.name
          const planetCreated = planet.created

          const hourCreated = planetCreated.slice(11, 19)
          const dayCreated = planetCreated.slice(0, 10)
          const planetDom = document.createElement("li")
          // push every planet in array
          allPlanet.push(planetCreated)
          // create a span
          const planetDate = document.createElement("span")
          planetDom.classList.add("planet")
          planetDom.classList.add("animation")
          planetDom.innerHTML = planetName
          planetDate.innerHTML = dayCreated + " " + hourCreated
          planetList.appendChild(planetDom)
          planetDom.appendChild(planetDate)
        } else {
          console.log("no planet for this research")
        }
      })
    })
  // .catch((error) => console.error(error))
}

function getData(URL) {
  // clean canvas
  planetList.innerHTML = ""
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const planets = data.results

      planets.forEach((planet) => {
        const allPlanet = []
        const planetName = planet.name
        const planetCreated = planet.created

        const hourCreated = planetCreated.slice(11, 19)
        const dayCreated = planetCreated.slice(0, 10)
        // const day = planetCreated.slice(0, 10).slice(8, 10)
        // const year = planetCreated.slice(0, 10).slice(0, 4)
        // const string = dayCreated + " " + hourCreated
        // console.log(string)
        // console.log(dayCreated)
        // console.log(year)
        const planetDom = document.createElement("li")
        // push every planet in array
        allPlanet.push(planetCreated)
        // create a span
        const planetDate = document.createElement("span")
        planetDom.classList.add("planet")
        planetDom.classList.add("animation")
        planetDom.innerHTML = planetName
        planetDate.innerHTML = dayCreated + " " + hourCreated
        planetList.appendChild(planetDom)
        planetDom.appendChild(planetDate)

        // const allPlanetDom = Array.from(document.querySelectorAll(".planetDom"))
        // console.log(allPlanetDom)
        // for (let index = 0; index < allPlanet.length; index++) {
        //   const currentEl = allPlanet[index]
        //   console.log(currentEl)
        //   //   const planetDate = document.createElement("span")

        //   //   planetDate.innerHTML = currentEl.textContent
        //   //   planetDom.appendChild(planetDate)
        // }
      })
    })
}

function dataInverse(URL) {
  planetList.innerHTML = ""

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const planets = data.results

      planets
        .slice()
        .reverse()
        .forEach((planet) => {
          const allPlanet = []
          const planetName = planet.name
          const planetCreated = planet.created

          const hourCreated = planetCreated.slice(11, 19)
          const dayCreated = planetCreated.slice(0, 10)
          console.log(dayCreated)
          const planetDom = document.createElement("li")
          // push every planet in array
          allPlanet.push(planetCreated)
          // create a span
          const planetDate = document.createElement("span")
          planetDom.classList.add("planet")
          planetDom.classList.add("animation")
          planetDom.innerHTML = planetName
          planetDate.innerHTML = dayCreated + " " + hourCreated
          planetList.appendChild(planetDom)
          planetDom.appendChild(planetDate)
        })
    })
}

// search parameters
// https://swapi.dev/api/people/?search=r2

// ROOT??
// http https://swapi.dev/api/
