const { Triangle } = require('./shapes');

test('render method should return the expected SVG string', () => {
  const shape = new Triangle();
  shape.setColor("blue");
  shape.setBorderColor("red");
  shape.setBorderWidth("2");
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" stroke="red" stroke-width="2" />');
});