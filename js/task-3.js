// Ширина елемента
function getElementWidth(content, padding, border) {
  const value = content;
  const value1 = padding;
  const value2 = border;
  const numerical =
    Number.parseFloat(value) +
    Number.parseFloat(value1) * 2 +
    Number.parseFloat(value2) * 2;
  return numerical;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
