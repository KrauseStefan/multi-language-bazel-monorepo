import Calculator from './calculator';
import CalculatorMul from './calculator_mul';
import * as express from 'express';

const calculator = new Calculator();
const calculatorMul = new CalculatorMul();
const num1: number = 1;
const num2: number = 2;

const result = calculator.add(num1, num2);
console.log(`${num1} + ${num2} = ${result}`);

const result2 = calculatorMul.mul(num1, num2);
console.log(`${num1} * ${num2} = ${result}`);

const app = express();

const port = 10005;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});