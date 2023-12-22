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
