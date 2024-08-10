function getElementWidth(content, padding, border) {
    let contentNumber = parseInt(content);
    let paddingNumber = parseInt(padding);
    let borderNumber = parseInt(border);
    let sum = contentNumber + paddingNumber + borderNumber;
    
    return `${sum} `;
    
}
console.log("Task3:");
console.log(getElementWidth("50px", "8px", "4px")); // 62
console.log(getElementWidth("60px", "12px", "8.5px")); // 80
console.log(getElementWidth("200px", "0px", "0px")); // 200
