let recipes = {
    test: {
        ingredient: ['test',],
        amount: ['890'],
    },
    lahmacunIngredients: {
        ingredient: ['Mehl', 'Trockenhefe', 'Olivenöl', 'Zucker', 'Salz', 'Wasser', 'Hackfleisch', 'Zwiebel', 'Tomatenmark', 'Petersilie', 'Knoblauch', 'Tomaten', 'Pfeffer'],
        amount: ['500', '1', '1', '1', '1', '1', '500', '2', '2', '1', '4', '2', '1',],
        unit: ['g', ' Packung', ' EL', ' TL', ' TL', ' Tasse', 'g', ' ganze', ' EL', ' Bund', ' Zehe/n', '', ' TL']
    },
};

function calculator(recipe) {
    let ingredientData = recipes[recipe];
    let portion = document.getElementById('ingredient-table');
    let portionSize = document.getElementById('amount').value;
    portion.innerHTML = '';

    for (let i = 0; i < ingredientData['ingredient'].length; i++) {
        const ingredient = ingredientData['ingredient'][i];
        let amount = ingredientData['amount'][i];
        let unit = ingredientData['unit'][i];
        

        newAmount = amount * portionSize;
        console.log(newAmount)
        portion.innerHTML += `
            <tbody>
                <tr>
                    <td>${amount}${unit} ${ingredient}</td>
                </tr>
            </tbody>
        `
    }
}


// include template
async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}