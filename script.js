// this goes before endpoint
const baseURL = "https://swapi.dev/api/planets/"

// get things I need
const planetList = document.querySelector(".planet-list")
const planetAttr = planetList.querySelector("[data-planet-created]")
const button = document.querySelector("#makeCall")
const changeOrder = document.querySelector("#change-order")

button.addEventListener("click", () => {
  getData(baseURL)
})

changeOrder.addEventListener("click", () => {
  dataInverse(baseURL)
})

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
          console.log()
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

function getData(URL) {
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
        console.log()
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

// function reverseString(string) {
//   var result = ""
//   for (var i = string.length - 1; i >= 0; i--) result += string[i]
//   return result
// }

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
