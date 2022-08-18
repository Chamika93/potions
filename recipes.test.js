const recipes = require('./recipes');

const rules =  [{
    "item": "Red apple",
    "before_violation": ["Green apple"],
    "after_violation": []
},
{
    "item": "Green apple",
    "before_violation": [],
    "after_violation": ["Squid ink"]
},
{
    "item": "Tree sap",
    "before_violation": [],
    "after_violation": []
},
{
    "item": "Squid ink",
    "before_violation": [],
    "after_violation": []
}];

describe('recipes', () => {
    it('return empty array when there is no ingredients',() => {
        expect(recipes([], rules)).toStrictEqual([[]]);
    })
    it('does not return potions where Red apple go before Green apple',() => {
        expect(recipes(["Red apple","Green apple", "Tree sap"], rules)).toStrictEqual([
            [],
            [ 'Tree sap' ],
            [ 'Green apple' ],
            [ 'Green apple', 'Tree sap' ],
            [ 'Tree sap', 'Green apple' ],
            [ 'Red apple' ],
            [ 'Red apple', 'Tree sap' ],
            [ 'Tree sap', 'Red apple' ],
            [ 'Green apple', 'Red apple' ],
            [ 'Green apple', 'Red apple', 'Tree sap' ],
            [ 'Green apple', 'Tree sap', 'Red apple' ],
            [ 'Tree sap', 'Green apple', 'Red apple' ]
          ])
    })
    it('does not return potions where Green apple go after Squid ink',() => {
        expect(recipes(["Green apple","Squid ink", "Tree sap"], rules)).toStrictEqual([
            [],
            [ 'Tree sap' ],
            [ 'Squid ink' ],
            [ 'Squid ink', 'Tree sap' ],
            [ 'Tree sap', 'Squid ink' ],
            [ 'Green apple' ],
            [ 'Green apple', 'Tree sap' ],
            [ 'Tree sap', 'Green apple' ],
            [ 'Green apple', 'Squid ink' ],
            [ 'Green apple', 'Squid ink', 'Tree sap' ],
            [ 'Green apple', 'Tree sap', 'Squid ink' ],
            [ 'Tree sap', 'Green apple', 'Squid ink' ]
          ])
    })
})

