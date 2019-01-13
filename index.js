const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('draw')
    }
}
//Factory FUnction
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw')
        }
    }
}
const circle1 = createCircle(1)
console.log(circle1)
const circle2 = createCircle(2)
console.log(circle2)

//Constructor Function
//Pascal Notation

function Circle(radius) {
    this.radius = radius
    this.draw = () => {
        console.log('draw')
    }
}
const circle = new Circle(3);