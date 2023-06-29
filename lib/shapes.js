class Shape {
    constructor() {
      this.color = "";
      this.borderColor = "";
      this.borderWidth = "";
    }
    setColor(colorVar) {
      this.color = colorVar;
    }
    setBorderColor(borderColorVar) {
      this.borderColor = borderColorVar;
    }
    setBorderWidth(borderWidthVar) {
      this.borderWidth = borderWidthVar;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" stroke="${this.borderColor}" stroke-width="${this.borderWidth}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" stroke="${this.borderColor}" stroke-width="${this.borderWidth}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" stroke="${this.borderColor}" stroke-width="${this.borderWidth}" />`;
    }
  }
  
  class Star extends Shape {
    render() {
      return `<path d="M150,0 L183,69 L258,79 L199,130 L221,205 L150,165 L79,205 L101,130 L42,79 L117,69 Z" fill="${this.color}" stroke="${this.borderColor}" stroke-width="${this.borderWidth}" />`;
    }
  }
  
  class Heart extends Shape {
    render() {
      return `<path d="M150,233 C150,233 41,174 41,107 C41,76 63,53 94,53 C117,53 141,71 150,85 C159,71 183,53 206,53 C237,53 259,76 259,107 C259,174 150,233 150,233 Z" fill="${this.color}" stroke="${this.borderColor}" stroke-width="${this.borderWidth}" />`;
    }
  }
  
  // export all shape classes
  module.exports = { Triangle, Square, Circle, Star, Heart };