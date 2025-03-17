
// Cuando cargue la pagina
window.addEventListener('DOMContentLoaded', async (event) => {
    obtenerListadoCockatils('Alcoholic')
});

// Obtiene la lista de Cocktails alcohólicos (100)

obtenerListadoCockatils = async (tipo) => {
    // Hemos cogido la URL que filtra los cocteles por alcohólicos porque la API no tiene un endpoint con una lista de todos los cocteles
    // Sin embargo, el problema de este filtrado es que tan solo muestra tres datos, la imagen, el nombre y el id
    // Por lo que no podemos mostrar más información en la pagina principal

    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${tipo}`
    const resultadoAPI = await fetch(url);
    console.log('resultado de la API', resultadoAPI)
    const datos = await resultadoAPI.json()
    console.log('datos de la API', datos)


    // Pintamos el cocktail en el html
    
    let listaCockteles = document.getElementById('cocktail_container')
    
    listaCockteles.innerHTML=''; // limpia el buffer
    

    datos.drinks.forEach(element => {
        // Crea un div para cada cocktail
        const cocktail = document.createElement('div')
        cocktail.classList.add('cocktail')
        cocktail.id = element.strDrink

        // Rellenamos el cocktail
        cocktail.innerHTML = `
        <a href="./detail.html?idCubata=${element.idDrink}">
            <img href="./detail.html" src="${element.strDrinkThumb}">
            <p>${element.strDrink}</p>
             
        </a>
        `

        listaCockteles.appendChild(cocktail) //añade el contenido definitivamente en el html
    });

    
}

document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('not-alcoholic');
    if (boton) {
        boton.onclick = function () {
            obtenerListadoCockatils('Non_Alcoholic');
        };
    } else {
        console.error("El botón 'not-alcoholic' no existe en el DOM.");
    }
});


// Filtra los cocktails por nombre
// Añade un evento al input de búsqueda para filtrar los cocktails por nombre
document.addEventListener('keyup', e => {
    if (e.target.matches('#search')) {
        document.querySelectorAll('.cocktail').forEach(cocktail => {
            cocktail.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? cocktail.classList.remove('hidden')
                : cocktail.classList.add('hidden');
        })
    }
});

