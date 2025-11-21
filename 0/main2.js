const rectangle = {
    x1: 1, 
    y1: 5,
    x2: 6,
    y2: 1
};

function printRectangleInfo(rect) {
    console.log(`ліва верхня точка - (${rect.x1}, ${rect.y1})`);
    console.log(`права нижня точка - (${rect.x2}, ${rect.y2})`);
}

function getWidth(rect) {
    return Math.abs(rect.x2 - rect.x1);
}

function getHeight(rect) {
    return Math.abs(rect.y1 - rect.y2);
}

function getArea(rect) {
    return getWidth(rect) * getHeight(rect);
}

function getPerimeter(rect) {
    return 2 * (getWidth(rect) + getHeight(rect));
}

function changeWidth(rect, delta) {
    rect.x2 += delta;
}

function changeHeight(rect, delta) {
    rect.y2 -= delta;
}

function changeSize(rect, dWidth, dHeight) {
    rect.x2 += dWidth;
    rect.y2 -= dHeight;
}

function moveX(rect, dx) {
    rect.x1 += dx;
    rect.x2 += dx;
}

function moveY(rect, dy) {
    rect.y1 += dy;
    rect.y2 += dy;
}

printRectangleInfo(rectangle);

console.log("ширина:", getWidth(rectangle));
console.log("Висота:", getHeight(rectangle));
console.log("площа", getArea(rectangle));
console.log("Периметр:", getPerimeter(rectangle));

changeWidth(rectangle, 3);
changeHeight(rectangle, 2);
changeSize(rectangle, -1, 1);
moveX(rectangle, 4);
moveY(rectangle, -2);

console.log("\nпісля змін:");
printRectangleInfo(rectangle);