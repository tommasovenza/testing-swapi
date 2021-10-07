// this goes before endpoint
const baseURL = "https://swapi.dev/api/planets/"

const planetList = document.querySelector(".planet-list")
const planetAttr = planetList.querySelector("[data-planet-created]")

getData(baseURL)

function getData(URL) {
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

function reverseString(string) {
  var result = ""
  for (var i = string.length - 1; i >= 0; i--) result += string[i]
  return result
}

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
