const Square = require('./Square')

describe('Square', () => { 

    describe('Shape and Color', () => {
      it('Function should construct SVG points for a square, and a color', () => {
        const shape = new Square("blue"); 
        expect(shape.render()).toEqual(`<rect x="55" y="15" width="180" height="180" fill="blue"/>`);
  
      });
    }); 

  });