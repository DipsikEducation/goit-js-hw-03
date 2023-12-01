/*
1.Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale,
 і повертає результат перевірки.

2.
- Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
-Якщо в рядку відсутні заборонені слова, функція повертає буль false

step 1: привести все сообщение к одному регистру
step2: проверить на наличие слов из ЧС
step3: вернуть результат

*/

function checkForSpam(message) {
    let checkSpam = message.toLowerCase();
    if (checkSpam.includes('spam') || checkSpam.includes ('sale')) {
        return true;
    } else {
        return false;
    }
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true