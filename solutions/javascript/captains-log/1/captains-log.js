// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  return `NCC-${Math.floor(Math.random() * (9999-1001))+1000}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return (Math.random() * (41999.0 - 41001.0) + 41000.0);
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  let planet = ['D','H','J','K','L','M','N','R','T','Y'];
  return planet[Math.floor(Math.random() * planet.length)]
}
