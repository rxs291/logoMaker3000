


class Square {
    constructor(setColor){
        this.color = setColor;
    }
    render() {
        return `<rect x="55" y="15" width="180" height="180" fill="${this.color}"/>`
    }

}

 
 
module.exports = Square;