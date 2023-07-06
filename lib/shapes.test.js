const { Triangle, Square, Circle } = require('./shapes');

test('render method should return the expected SVG string for Triangle', () => {
  const shape = new Triangle();
  shape.setColor("blue");
  shape.setBorderColor("red");
  shape.setBorderWidth("2");
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" stroke="red" stroke-width="2" />');
});

test('render method should return the expected SVG string for Square', () => {
  const shape = new Square();
  shape.setColor("green");
  shape.setBorderColor("purple");
  shape.setBorderWidth("4");
  expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="green" stroke="purple" stroke-width="4" />');
});

test('render method should return the expected SVG string for Circle', () => {
  const shape = new Circle();
  shape.setColor("yellow");
  shape.setBorderColor("orange");
  shape.setBorderWidth("3");
  expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="yellow" stroke="orange" stroke-width="3" />');
});