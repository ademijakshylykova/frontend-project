// Словарь для перевода слов (в обе стороны)
const dictionary = {
    "hello": "здравствуйте",
    "world": "мир",
    "friend": "друг",
    "good": "хорошо",
    "day": "день",
    "night": "ночь",
    "love": "любовь",
    "peace": "мир",
    "cat": "кот",
    "dog": "собака",
    "water": "вода",
    "fire": "огонь",
    "earth": "земля",
    "wind": "ветер",
    "sun": "солнце",
    "moon": "луна",
    "tree": "дерево",
    "flower": "цветок",
    "book": "книга",
    "computer": "компьютер",

    // Добавляем переводы с русского на английский
    "здравствуйте": "hello",
    "мир": "world",
    "друг": "friend",
    "хорошо": "good",
    "день": "day",
    "ночь": "night",
    "любовь": "love",
    "кот": "cat",
    "собака": "dog",
    "вода": "water",
    "огонь": "fire",
    "земля": "earth",
    "ветер": "wind",
    "солнце": "sun",
    "луна": "moon",
    "дерево": "tree",
    "цветок": "flower",
    "книга": "book",
    "компьютер": "computer"
};

// Функция, имитирующая перевод с задержкой
function fakeTranslate(word) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const lowerCaseWord = word.trim().toLowerCase();
            let translation = dictionary[lowerCaseWord];

            // Если не найден перевод, пытаемся найти значение, поменяв ключ и значение местами
            if (!translation) {
                // Ищем ключ по значению в словаре
                translation = Object.keys(dictionary).find(key => dictionary[key] === lowerCaseWord);
            }

            if (translation) {
                resolve(translation);
            } else {
                reject("Перевод не найден");
            }
        }, 1000);
    });
}