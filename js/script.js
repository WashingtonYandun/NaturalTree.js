const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const container = document.getElementById("container");
const btn = document.getElementById("btn");

const MAX_ITERATIONS = 4;
let currentIteration = 0;
let axiom = "F";
let stringSystem = axiom;
const rules = [
    {
        a: "F",
        b: "FF+[+F-F-F]-[-F+F+F]",
    },
];

const drawLine = (x1, y1, x2, y2, color, width) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
    ctx.closePath();
};

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

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.strokeColor = "white";
    ctx.translate(canvas.width / 2, canvas.height);
    ctx.moveTo(0, 0);
    for (let i = 0; i < stringSystem.length; i++) {
        let current = stringSystem[i];
        if (current === "F") {
            drawLine(0, 0, 0, -5, "#ffffff", 1);
            ctx.translate(0, -5);
        } else if (current === "+") {
            ctx.rotate((Math.PI * 25) / 180);
        } else if (current === "-") {
            ctx.rotate(-(Math.PI * 25) / 180);
        } else if (current === "[") {
            ctx.save();
        } else if (current === "]") {
            ctx.restore();
        }
    }
    ctx.stroke();
};

const main = () => {
    for (let i = 0; i < MAX_ITERATIONS; i++) {
        generate();
    }
    container.textContent = stringSystem;
    draw();
};

main();
// button need to be functional
