export function isNumeric (num) {
    return (typeof(num) === 'number' || typeof(num) === "string" && num.trim() !== '') && !isNaN(num);
}