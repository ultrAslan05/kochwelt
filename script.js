let recipes = {
    curryBowlIngredients: {
        ingredient: ["Basmatireis", "Salz und Pfeffer", "Zwiebel", "ÖL", "rote Currypaste", "Kokosmilch", "TK-Gemüsemischung (z.B. Asia-Mix)", "Zitronensaft"],
        amount: ["50", "", "0.25", "0.5", "1", "106", "125", "0.25"],
        unit: ["g", "", "", "EL", "TL", "ml", "g", ""],
    },
    lahmacunIngredients: {
        ingredient: ["Mehl", "Trockenhefe", "Olivenöl", "Zucker", "Salz", "Wasser", "Hackfleisch", "Zwiebel", "Tomatenmark", "Petersilie", "Knoblauch", "Tomaten", "Pfeffer"],
        amount: ["125", "0.25", "0.25", "0.25", "0.25", "0.25", "125", "0.5", "0.25", "0.5", "1", "0.5", "0.25"],
        unit: ["g", "Packung", " EL", "TL", "TL", "Tasse", "g", "ganze", "EL", "Bund", "Zehe/n", "", "TL"],
    },
    bulgursalatIngredients: {
        ingredient: [],
        amount: [],
        unit: [],
    },
};

function showIngredients(recipe) {
    // get data for the specified recipe which is given by the html on click
    let ingredientData = recipes[recipe];
    // get the html elements
    let portion = document.getElementById("ingredient-table");
    let portionSize = document.getElementById("amount").value;
    // clear previous content
    portion.innerHTML = "";

    for (let i = 0; i < ingredientData["ingredient"].length; i++) {
        // get information about current ingredient
        const ingredient = ingredientData["ingredient"][i];
        const amount = ingredientData["amount"][i];
        const unit = ingredientData["unit"][i];
        // calculate new amount based on portion size selected
        let newAmount = amount * portionSize;
        // create new row in the table
        if (amount == "") {
            portion.innerHTML += `
                <tr>
                    <td> ${unit} ${ingredient}</td>
                </tr>
        `;
        } else {
            portion.innerHTML += `
                <tr>
                    <td>${newAmount} ${unit} ${ingredient}</td>
                </tr>
        `;
        }
    }
}

//make the link "rezept des tages" open a random recipe on click
function randomRecipe() {
    let randomLink = document.getElementById("random");
    let randomLinkDropdown = document.getElementById('randomDropdownLink');
    let links = ["./lahmacun.html", "./currybowl.html", "./bulgursalat.html", "./rezept4.html"];

    // get the current href from localstorage if href is stored there OR from the element itself if nothing is saved in localstorage yet
    let currentHref = localStorage.getItem("currentHref") || randomLink.getAttribute("href");
    // execute loop until current href is different than the new generated one
    do {
        // create random number so it can be used for the index of the files array
        currentIndex = Math.floor(Math.random() * links.length);
    } while (currentHref === links[currentIndex]);
    // set the href of the link to the new href
    randomLink.setAttribute("href", links[currentIndex]);
    randomLinkDropdown.setAttribute("href", links[currentIndex]);
    // save the updated href in the localStorage
    localStorage.setItem("currentHref", randomLink.getAttribute("href"));
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


function myFunction() {
    document.getElementById("dropdown").classList.toggle("show");
  }
