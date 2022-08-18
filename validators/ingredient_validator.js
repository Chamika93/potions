const isAllIngredientsKnown = (ingredients, rules) => {
    return ingredients?.every(ingredient => Boolean(rules.find(({item}) => item === ingredient)));
}

module.exports =  {
    isAllIngredientsKnown
};
