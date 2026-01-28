function slugify(title) {
  return title
    .toLowerCase() // Переводимо весь рядок у нижній регістр
    .split(' ') // Розбиваємо рядок на масив слів (роздільник — пробіл)
    .join('-'); // З'єднуємо слова в рядок за допомогою тире
}
console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
