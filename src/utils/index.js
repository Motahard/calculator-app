export const operationsAndNumbers = ['C', '7', '8', '9', '*', '-', '4', '5', '6', '/', '+', '1', '2', '3', '=', '.', '(', '0', ')', 'CE'];

const calculate = s => {
    const values = [];
    const ops = [];
    let negNumber = '';
    if (s[0] === '-') {
        negNumber += s[0];
        s = '' + s.substring(1);
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            continue;
        }

        if (s[i] >= '0' && s[i] <= '9') {
            let buffer = '' + negNumber;
            negNumber = '';
            while (i < s.length && s[i] >= '0' && s[i] <= '9' || s[i] === '.') {
                buffer += s[i++];
            }
            values.push(parseFloat(buffer));
            i--;
        }
        else if (s[i] === '(') {
            ops.push(s[i]);
        }
        else if (s[i] === ')') {
            while (ops[ops.length - 1] !== '(') {
                values.push(applyOp(ops.pop(), values.pop(), values.pop()));
            }
            ops.pop();
        }
        else if (s[i] === '+' || s[i] === '-' || s[i] === '*' || s[i] === '/') {
            while (ops.length && hasPrecedence(s[i], ops[ops.length - 1])) {
                values.push(applyOp(ops.pop(), values.pop(), values.pop()));
            }
            ops.push(s[i]);
        }
    }
    while (ops.length) {
        values.push(applyOp(ops.pop(), values.pop(), values.pop()));
    }
    return values.pop();
};

const hasPrecedence = (op1, op2) => {
    if (op2 === '(' || op2 === ')') {
        return false;
    }
    if ((op1 === '*' || op1 === '/') && (op2 === '+' || op2 === '-')) {
        return false;
    }
    return true;
};

const applyOp = (op, b, a) => {
    if (!a) {
        return 0;
    }
    switch (op) {
        case '+':
            return parseFloat((a + b).toFixed(3));
        case '-':
            return parseFloat((a - b).toFixed(3));
        case '*':
            return parseFloat((a * b).toFixed(3));
        case '/':
            if (b === 0) {
                throw 'Cannot divide by zero';
            }
            return parseFloat((a / b).toFixed(3));
    }
    return 0;
};

export { calculate };