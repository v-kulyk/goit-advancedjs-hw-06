let some: unknown;
some = 'Text';
let str: string;

// Перевірка типу значення
if (typeof some === 'string') {
    str = some;
} else {
    // Можна додати код для обробки випадку, коли значення не є строкою
    console.error('some не є строкою');
}
