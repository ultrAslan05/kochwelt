let recipes = {
    test: {
        ingredient: ["test"],
        amount: ["890"],
    },
    lahmacunIngredients: {
        ingredient: ["Mehl", "Trockenhefe", "Olivenöl", "Zucker", "Salz", "Wasser", "Hackfleisch", "Zwiebel", "Tomatenmark", "Petersilie", "Knoblauch", "Tomaten", "Pfeffer"],
        amount: ["125", "0.25", "0.25", "0.25", "0.25", "0.25", "125", "0.5", "0.25", "0.5", "1", "0.5", "0.25"],
        unit: ["g", "Packung", " EL", "TL", "TL", "Tasse", "g", "ganze", "EL", "Bund", "Zehe/n", "", "TL"],
    },
};

function showIngredients(recipe) {
    let ingredientData = recipes[recipe];
    let portion = document.getElementById("ingredient-table");
    let portionSize = document.getElementById("amount").value;
    portion.innerHTML = "";

    for (let i = 0; i < ingredientData["ingredient"].length; i++) {
        const ingredient = ingredientData["ingredient"][i];
        const amount = ingredientData["amount"][i];
        const unit = ingredientData["unit"][i];

        let newAmount = amount * portionSize;
        portion.innerHTML += `
                <tr>
                    <td>${newAmount} ${unit} ${ingredient}</td>
                </tr>
        `;
    }
}

//make "rezept des tages" open a random recipe on click
function randomRecipe() {
    let randomLink = document.getElementById('random');
    let files = ['./lahmacun.html', './currybowl.html', './bulgursalat.html', './rezept4.html'];
    
    // get the current href from localstore if href is stored there OR from the element itself
    let currentHref = localStorage.getItem('currentHref') || randomLink.getAttribute("href");
    // loop until current href and is different than the new generated one
    do {
        // create random number so it can be used for the index of the files array
        currentIndex = Math.floor(Math.random() * files.length);
    } while (currentHref === files[currentIndex]);
    // set the href of the link to the new href 
    randomLink.setAttribute("href", files[currentIndex]);
    // save the updated href in the localStorage 
    localStorage.setItem('currentHref', randomLink.getAttribute("href"));

}


// include template
async function includeHTML() {
    let includeElements = document.querySelectorAll("[w3-include-html]");
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = "Page not found";
        }
    }
}
