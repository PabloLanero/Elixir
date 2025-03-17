let URL_cubata = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="


// Cuando cargue la pagina
window.addEventListener('DOMContentLoaded', async (event) => {
    detallesCocktail()
    obtenerDetalleCocktail()
});


// Asociamos el id  de cada cocktail con el enlace y posteriormente 
// se recupera al clicar en cada cocktail

const detallesCocktail = async () => {
    let parametrosURL = new URLSearchParams(document.location.search)
    let id = parametrosURL.get("idCubata")

    URL_cubata += id;
}

const obtenerDetalleCocktail = async () => {
    const resultadoAPI = await fetch(URL_cubata);
    console.log('resultado de la API', resultadoAPI)
    const datos = await resultadoAPI.json()
    console.log('datos de la API', datos)


    // Pintamos el cocktail en el html
    const resultado = datos.drinks[0]
    console.log('resultado', resultado)
    let listaCockteles = document.getElementById('cocktail-text')
    
    let ingredientes = [
        resultado.strIngredient1, 
        resultado.strIngredient2, 
        resultado.strIngredient3,
        resultado.strIngredient4,
        resultado.strIngredient5,
        resultado.strIngredient6,
        resultado.strIngredient7,
        resultado.strIngredient8,
        resultado.strIngredient9,
        resultado.strIngredient10,
        resultado.strIngredient11,
        resultado.strIngredient12,
        resultado.strIngredient13,
        resultado.strIngredient14,
        resultado.strIngredient15
       
    ].filter(Boolean).join(', '); // Filtra valores nulos y los une con ", "
    
    listaCockteles.innerHTML = `
    
        <p class="title">${resultado.strDrink}</p>
        <p class="ingredients">INGREDIENTES</p>
        <p>${ingredientes}</p>
        <p class="ingredients">CATEGORIA</p> 
        <p>${resultado.strCategory}</p>
        
    `;
    let imgCocktail=document.getElementById('cocktail-image')

    imgCocktail.innerHTML = `
    <img class="detail-image" src="${resultado.strDrinkThumb}" alt="cocktail">
    `

}









