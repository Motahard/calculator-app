export const operationsAndNumbers = ['C', '7', '8', '9', '*', '-', '4', '5', '6', '/', '+', '1', '2', '3', '+/-', '.', '(', '0', ')', 'CE', '%', '='];

const calculate = s => {
    if (!Number.isNaN(parseFloat(s))) return s;
    const values = [];
    const ops = [];
    let negNumber = '';
    if (s[1] === '-') {
        negNumber += s[1];
        s = '' + s.substring(0, 1) + s.substring(2, s.length);
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
        else if (s[i] === '+' || s[i] === '-' || s[i] === '*' || s[i] === '/' || s[i] === '%') {
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
    if ((op1 === '*' || op1 === '/' || op1 === '%') && (op2 === '+' || op2 === '-')) {
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
        case '%':
            return parseFloat((a % b).toFixed(3));
    }
    return 0;
};


const setHistoryLS = history => {
    const historyLS = getHistoryLS();
    if (!historyLS) {
        localStorage.setItem('history', JSON.stringify([history]))
    } else {
        const ls = JSON.parse(historyLS)
        localStorage.setItem('history', JSON.stringify([...ls, history]))
    }
}

const clearHistoryLS = () => {
    localStorage.setItem('history', JSON.stringify([]))
}
const getHistoryLS = () => {
    const history = localStorage.getItem('history')
    return history;
}
const setThemeLS = theme => {
    const toStore = JSON.stringify(theme);
    localStorage.setItem('theme', toStore)
}

const getThemeLS = () => {
    const theme = localStorage.getItem('theme');
    return JSON.parse(theme)
}

export { calculate, setThemeLS, setHistoryLS, getThemeLS, getHistoryLS, clearHistoryLS };

