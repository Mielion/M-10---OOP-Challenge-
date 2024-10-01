const {Triangle, Square, Circle} = require("./shapes.js");

describe("Triangle", () => {
    test("triangle test for color", () => {
        const triangle = new Triangle();
        const color = "green";
        triangle.setColor(color);
        expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}"></polygon>`);
    })
})


describe("Circle", () => {
    test("Circle test for color", () => {
        const circle = new Circle();
        const color = "green";
        circle.setColor(color);
        expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill=${this.circle} />`);
    })
})

describe("Square", () => {
    test("Square test for color", () => {
        const square = new Square();
        const color = "green";
        square.setColor(color);
        expect(square.render()).toEqual(`<rect x="70" y="40" width="100%" height="160" fill="${color}"/>`);
    })
})