/**
 * Normalizes a string by removing accents and diacritics.
 * * It uses Unicode Normalization Form D (NFD) to separate characters from 
 * their accents and then removes the combining diacritical marks using regex.
 *
 * @param {string} text - The string to be normalized.
 * @returns {string} The normalized string without accents.
 */
export function textNormalizer(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}