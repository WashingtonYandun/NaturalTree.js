const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let axiom = "F";
let stringSystem = axiom;
let rules = [
    {
        a: "F",
        b: "FF+[+F-F-F]-[-F+F+F]",
    },
];

const generate = () => {
    let nextStringSystem = "";
    for (let i = 0; i < stringSystem.length; i++) {
        let current = stringSystem[i];
        let found = false;
        for (let j = 0; j < rules.length; j++) {
            if (current == rules[j].a) {
                found = true;
                nextStringSystem += rules[j].b;
                break;
            }
        }
        if (!found) {
            nextStringSystem += current;
        }
    }
    stringSystem = nextStringSystem;
    console.log(stringSystem);
};

const drawLine = (x1, y1, x2, y2, color, width) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
    ctx.closePath();
    ``;
};
