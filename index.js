window.addEventListener("load", event => {
  let img = document.querySelector("img")
  let btnStop = document.querySelector(".btnStop")
  let btnAccept = document.querySelector(".btnAccept")
  let namePokemon = document.querySelector(".namePokemon")
  let capturedIndex = 0
  let pokemon = ["Pikachu", "Squirtle", "Bulbasaur", "Charmander"]
  let root = "./resources"
  let pokemonPath = [`${root}/Pikachu.png`, `${root}/Squirtle.png`, `${root}/Bulbasaur.png`, `${root}/Charmander.png`]
  let intents = 0
  

  let intervalID
  let loop = true

  let index = 0

  let victory = intents => {
    alert("Felicidades, has ganado")
    alert(`Has necesitado: ${intents} intentos para ganar`)
  }

  let setImg = () => {
    capturedIndex = index
    img.src = pokemonPath[index]

    if(index >= pokemon.length - 1) {
      index = 0
    } else {
      index++
    }

  }

  let startLoop = () => {
    index = 0
    intervalID = setInterval(setImg, 100)
  }
  
  startLoop()

  btnStop.addEventListener("click", event => {
    clearInterval(intervalID)
    loop = false
  })

  btnAccept.addEventListener("click", event => {
    if(loop) {
      alert("Debes pulsar el botón de parar primero")
    } else if(pokemon.length === 0) {
      victory(intents)
      return
    } else {
      let nameInputUser = namePokemon.value.toLowerCase().trim()
      let correctPokemon = pokemon[capturedIndex].toLowerCase()
      intents++
      if(correctPokemon === nameInputUser) {
        alert("Has acertado")
        pokemon.splice(capturedIndex, 1)
        pokemonPath.splice(capturedIndex, 1)
        namePokemon.value = ""
        if(pokemon.length > 0) {
          startLoop()
        } else {
          victory(intents)
          clearInterval(intervalID)
        }

      } else {
        alert("No has acertado")
        startLoop()
        namePokemon.value = ""
      }
      if(pokemon.length > 1) {
        loop = true
      }
    }
  })
  

})