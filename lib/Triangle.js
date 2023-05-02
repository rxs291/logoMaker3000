


class Triangle {
    constructor(setColor){
        this.color = setColor;
    }
    render() {
        return `<polygon points="150, 10 244, 190 56, 190" fill="${this.color}" />`
    }

}
 


 
module.exports = Triangle;
