const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here

const myCircle = {
    circumference: function() {
        let circ1 = Math.PI * r;
        return circ1.toFixed(2);
    },

    area: function() {
        let area1 = Math.PI * r*r;
        return area1.toFixed(2);
    }
};

console.log(`Its circumference is ${myCircle.circumference()}`);
console.log(`Its area is ${myCircle.area()}`);

