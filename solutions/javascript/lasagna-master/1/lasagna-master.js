/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(time) {
  if(time === null || time === undefined) return 'You forgot to set the timer.';
  if(time === 0) return 'Lasagna is done.';
  else if(time !== 0) return 'Not done, please wait.';
}

export function preparationTime(layers, time) {
  if(time === null || time === undefined) return layers.length * 2;
  return layers.length * time;
}

export function quantities(layers) {
  const ingredients = {
    noodles: 0,
    sauce: 0
  }
  for(let i=0;i<layers.length;i++) {
    if(layers[i]==='noodles') ingredients.noodles+=50;
    if(layers[i]==='sauce') ingredients.sauce+=0.2;
  }
  return ingredients;
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length-1]);
}

export function scaleRecipe(recipe, portion) {
  res = { ...recipe };
  Object.keys(res).forEach(key => {
    res[key]*=portion/2;
  });
  return res;
}