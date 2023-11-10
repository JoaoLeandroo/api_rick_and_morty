const URL_API_RICK_MORTY = "https://rickandmortyapi.com/api/character"
const persons = document.querySelector(".persons")

function loadToApi() {
    fetch(URL_API_RICK_MORTY)
    .then((response) => response.json())
    .then((json) => {
        console.log(json.results[0].location.url) 
        const x = json.results[0].location.url
        const a = json.results[0].name

        fetch(x)
        .then((resp) => resp.json())
        .then((newJson) => {
            console.log(newJson.residents[0])
            const y = newJson.residents[0]

            fetch(y)
            .then((log) => log.json())
            .then((img) => {
                let imagem = document.createElement('img')
                imagem.src = img.image
                persons.appendChild(imagem)

                persons.innerHTML += `<p>${a}</p>`
            })
        })
    })
}


loadToApi()
