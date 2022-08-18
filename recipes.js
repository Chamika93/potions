const recipes = (ingredients, rules) => {
    if(ingredients.length === 0) return [[]];

    const firstIngredient = ingredients[0];
    const rest = ingredients.slice(1);

    const recipesWithoutFirst = recipes(rest, rules);
    const recipesWithFirst = [];

    recipesWithoutFirst.forEach(recipe => {
        for (let i=0; i<= recipe.length; i++) {
            const recipeWithFirst = [...recipe.slice(0,i), firstIngredient, ...recipe.slice(i)];

            const rule = rules.find(({item}) => item === firstIngredient);
            if(rule.before_violation.some(ingr => recipe.slice(i).includes(ingr))) {
                continue;
            }
            if(rule.after_violation.some(ingr => recipe.slice(0,i).includes(ingr))) {
                continue;
            }
    
            recipesWithFirst.push(recipeWithFirst);
        }
    });

    return [...recipesWithoutFirst, ...recipesWithFirst];
};

module.exports = recipes;