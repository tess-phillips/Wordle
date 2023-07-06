export function getRandomWord(words) {
    if (!Array.isArray(words) || words.length === 0) {
        return null; // Return null if the input is not a non-empty array
    }
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}