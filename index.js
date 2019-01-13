const circle = {
    radius: 1,
}
circle.color = 'Yellow'
circle.draw = function () { }

console.log(circle)

delete circle.color

console.log(circle)