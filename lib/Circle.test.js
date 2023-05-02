const Circle = require('./Circle')

describe('Circle', () => { 

    describe('Shape and Color', () => {
      it('Function should construct SVG points for a circle, and a color', () => {
        const shape = new Circle("blue"); 
        expect(shape.render()).toEqual(`<circle cx="150" cy="105" r="95" fill="blue" />`);
  
      });
    }); 

  });