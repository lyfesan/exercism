/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  if(extras.length === 0) return pizza === 'Margherita' ? 7 : pizza === 'Caprese' ? 9 : 10;
  let lastExtra = extras.pop();
  let extraPrice = lastExtra === 'ExtraSauce' ? 1 : 2;
  return extraPrice + pizzaPrice(pizza, ...extras);
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let total = 0;
  for(const order of pizzaOrders){
    total+=pizzaPrice(order.pizza, ...order.extras);
  }
  return total;
}
