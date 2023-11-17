function getElementWidth(content, padding, border) {
    const x = Number.parseFloat(content);
    const y = Number.parseFloat(padding);
    const z = Number.parseFloat(border);
    return x + 2*(y+z);
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200