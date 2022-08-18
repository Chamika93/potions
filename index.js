const rules = require('./data/ingredients.json');
const witchData = require('./data/witch-data.json');
const recipes = require('./recipes');
const { isAllIngredientsKnown } = require('./validators/ingredient_validator');

for (let i = 0; i < witchData.length; i++ ) {
    const witch = witchData[i];
    console.log(`witch - ${witch.name}`);

    // validate the ingredients with rules
    if(!isAllIngredientsKnown(witch.ingredients, rules)) {
        console.log('Some ingredients are not known');
        continue;
    }

    // remove duplicates
    const ingredients = [...new Set(witch.ingredients)];

    const potions = recipes(ingredients, rules);
    console.log('potions', potions);
}