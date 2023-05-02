const Triangle = require('./Triangle')

describe('Triangle', () => { 

    describe('Shape and Color', () => {
      it('Function should construct SVG points for a triangle, and a color', () => {
        const shape = new Triangle("blue"); 
        expect(shape.render()).toEqual(`<polygon points="150, 10 244, 190 56, 190" fill="blue" />`);
  
      });
    }); 

  });