
// Este endopint forma parte de los endpoints de la API de TheCocktailDB y muestra un coctel random
const URL_Cocktail_Random = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

window.addEventListener('DOMContentLoaded', async (event) => {
    
    let resultado = await fetch(URL_Cocktail_Random)
    let datos = await resultado.json()
    let results = datos.drinks
    let cubata = results[0]

    let random = document.getElementById('random')
    random.innerHTML = `
        
        <a href="./detail.html?idCubata=${cubata.idDrink}">
                <h3>COCTEL DEL DIA</h3>
            </a>
    `


});