// URL before endpoint
const baseURL = "https://swapi.dev/api/planets/"

// get things I need
const planetListLeft = document.querySelector(".planet-list-left")
const planetListRight = document.querySelector(".planet-list-right")
// const planetAttr = planetList.querySelector("[data-planet-created]")
const buttonSearch = document.querySelector("#search")
const button = document.querySelector("#makeCall")
const changeOrder = document.querySelector("#change-order")
const firstDate = document.querySelector("#firstDate")
const secondDate = document.querySelector("#secondDate")
const error = document.querySelector("#error")

// click event for research
buttonSearch.addEventListener("click", () => {
  console.log(firstDate.value)
  console.log(secondDate.value)
  if (firstDate.value === "") {
    alert("ricontrolla i campi di ricerca")
  } else if (
    firstDate.value <= "2014-12-09" &&
    secondDate.value >= "2014-12-10"
  ) {
    getData(baseURL)
  } else {
    dateResearch(firstDate, baseURL)
  }
})
// click event to get all the data
button.addEventListener("click", () => {
  getData(baseURL)
})
// click event to see all the data reverted
changeOrder.addEventListener("click", () => {
  // dataInverse(baseURL)
  getData(baseURL, "inverse")
})

function dateResearch(date, URL) {
  let dateToReasearch = date.value

  // clean canvas
  error.innerHTML = ""
  planetListLeft.innerHTML = ""
  planetListRight.innerHTML = ""

  // API Request
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      // get planets' data from API
      const planets = data.results

      const rightOrLeft = [
        "left",
        "right",
        "left",
        "right",
        "left",
        "right",
        "left",
        "right",
        "left",
        "right",
      ]

      const allPlanet = []

      planets.forEach((planet, index) => {
        let stringCreated = planet.created
        // adding this class you can print item left or right
        const classToPrint = rightOrLeft[index]

        if (stringCreated.includes(dateToReasearch)) {
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
          planetDom.classList.add(classToPrint)
          planetDom.classList.add("animation")
          planetDom.innerHTML = planetName
          planetDate.innerHTML = dayCreated + " " + hourCreated
          console.log(planetDom)
          if (planetDom.classList.contains("left")) {
            planetDate.classList.add("left")
            planetListLeft.appendChild(planetDom)
            planetDom.appendChild(planetDate)
          } else {
            planetDate.classList.add("right")
            planetListRight.appendChild(planetDom)
            planetDom.appendChild(planetDate)
          }
        }
      })
      if (allPlanet.length === 0) {
        error.innerHTML = "no data found for this date"
      }
    })
}

function getData(URL, inverse) {
  // clean canvas
  error.innerHTML = ""
  planetListLeft.innerHTML = ""
  planetListRight.innerHTML = ""

  // API REQUEST
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const planets = data.results

      const rightOrLeft = [
        "left",
        "right",
        "left",
        "right",
        "left",
        "right",
        "left",
        "right",
        "left",
        "right",
      ]
      // get data from last values
      if (inverse === "inverse") {
        planets
          .slice()
          .reverse()
          .forEach((planet, index) => {
            const allPlanet = []
            const planetName = planet.name
            const planetCreated = planet.created

            const classToPrint = rightOrLeft[index]

            const hourCreated = planetCreated.slice(11, 19)
            const dayCreated = planetCreated.slice(0, 10)
            console.log(dayCreated)
            const planetDom = document.createElement("li")
            // push every planet in array
            allPlanet.push(planetCreated)
            // create a span
            const planetDate = document.createElement("span")
            planetDom.classList.add("planet")
            planetDom.classList.add(classToPrint)
            planetDom.classList.add("animation")

            planetDom.innerHTML = planetName
            planetDate.innerHTML = dayCreated + " " + hourCreated

            if (planetDom.classList.contains("left")) {
              planetDate.classList.add("left")
              planetListLeft.appendChild(planetDom)
              planetDom.appendChild(planetDate)
            } else {
              planetDate.classList.add("right")
              planetListRight.appendChild(planetDom)
              planetDom.appendChild(planetDate)
            }
          })
      } else {
        // get all data
        planets.forEach((planet, index) => {
          const classToPrint = rightOrLeft[index]
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
          planetDom.classList.add(classToPrint)
          planetDom.classList.add("animation")
          planetDom.innerHTML = planetName
          planetDate.innerHTML = dayCreated + " " + hourCreated
          console.log(planetDom)
          if (planetDom.classList.contains("left")) {
            planetDate.classList.add("left")
            planetListLeft.appendChild(planetDom)
            planetDom.appendChild(planetDate)
          } else {
            planetDate.classList.add("right")
            planetListRight.appendChild(planetDom)
            planetDom.appendChild(planetDate)
          }
        })
      }
    })
}
