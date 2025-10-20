function cakes(recipe, available) {
  const availableIngredientsQuant = Object.entries(recipe).map((entry) => {
    const [ingredient, amountNeeded] = entry;
    const match = ingredient in available;
    if (!match) return 0;

    const currentIngredientQuant = available[ingredient];
    return Math.floor(currentIngredientQuant / amountNeeded);
  });

  const cakesQuant = Math.min(...availableIngredientsQuant);
  return cakesQuant;
}

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
); // must return 2

console.log(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
); // must return 0
