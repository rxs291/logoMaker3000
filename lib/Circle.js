


class Circle {
    constructor(setColor){
        this.color = setColor;
    }
    render() {
        return `<circle cx="150" cy="105" r="95" fill="${this.color}" />`
    }

}
  

module.exports = Circle; 