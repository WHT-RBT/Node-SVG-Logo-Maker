const fs = require('fs');
const { writeToFile } = require('../index');

test('generates the logo SVG file', () => {
  const fileName = 'logo.svg';
  const answers = {
    text: 'Test',
    textColor: 'black',
    shape: ['Square'],
    shapeBackgroundColor: 'blue',
    shapeBorderColor: 'red',
    shapeBorderWidth: '2',
  };

  const shapeChoice = {
    render: jest.fn().mockReturnValue('<rect></rect>'),
    setColor: jest.fn(),
    setBorderColor: jest.fn(),
    setBorderWidth: jest.fn(),
  };

  writeToFile(fileName, answers, shapeChoice);

  const expectedSvgString =
    '<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><g><rect></rect><text x="150" y="120" text-anchor="middle" dominant-baseline="middle" font-size="40" fill="black">Test</text></g></svg>';

  expect(fs.writeFile).toHaveBeenCalledWith(
    fileName,
    expectedSvgString,
    expect.any(Function)
  );
});