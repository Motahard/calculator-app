import React from 'react'
import PropTypes from 'prop-types'

import { KeypadContainer, KeypadButton } from './components'

import { operationsAndNumbers, calculate, setHistoryLS } from '@/utils'

import {
    CalculatorFunc,
    AddCommand,
    SubCommand,
    DivCommand,
    MulCommand,
    ModCommand
} from '@/utils/command'

const Keypad = ({
    expression,
    setExpression,
    result,
    setResult,
    setHistory,
    history,
    value,
    setValue,
    operator,
    setOperator
}) => {
    const calculator = new CalculatorFunc();

    const handleClick = e => {
        const val = e.target.value;
        const resArr = result.toString().split('');
        const lastChar = resArr[resArr.length - 1];

        if (val === '+/-') {
            if (expression) return;
            let numToggle = result;
            +result > 0 ?
                numToggle = -Math.abs(result)
                :
                numToggle = Math.abs(result)
            setResult(numToggle.toString());
            return;
        }
        else if (val === '.') {
            if (lastChar !== '.' && lastChar !== '(' && !lastChar.match(/[*+\-%/]/)) {
                const resArr = result.toString().split('');
                let str = '';
                for (let i = resArr.length - 1; i > 0; i--) {
                    if (resArr[i].toString().match(/[*+\-%/]/)) break;
                    str = resArr[i] + str;
                }
                if (str.indexOf('.') === -1) setResult(result + val)
            }
        }
        else if (val === '(') {
            if (expression || result > 0 || lastChar === '.') return;
            setExpression(true);
            if (result === '0') setResult(val);
            else setResult(result + val);
            return;
        }
        else if (val === ')') {
            if (result.toString().indexOf('(') === -1) return
            else if (result.toString().indexOf(')') === -1 && result.match(/[*+\-%/]/) && lastChar >= 0) {
                setResult(result + val);
            }
        }
        else if (val.match(/[*+\-%/]/)) {
            if (expression) {
                if (lastChar >= 0) {
                    setResult(result + val);
                }
                else if (lastChar.match(/[*+\-%/]/)) {
                    const sliced = result.toString().substring(0, result.toString().length - 1);
                    setResult(sliced + val);
                }
                else if (lastChar.match(/[)]/) && val.match(/[*+\-%/]/)) {
                    setResult(result + val)
                }
                return;
            }
            if (!operator) {
                setResult('0');
                setValue(result);
            }
            setOperator(val);
        }
        else if (val === '=') {
            if (expression && result.toString().indexOf(')') === -1 || lastChar.match(/[*+\-%/]/)) {
                return;
            }
            else if (expression) {
                let calculatedExpVal = 0;
                if (value && value !== 0) {
                    calculatedExpVal = calculate(value);
                }
                const calculatedExpRes = calculate(result).toString();
                if (value === 0 || !value) {
                    setResult(calculatedExpRes);
                    setExpression(false);
                    const strHistory = value + operator + result;
                    setHistory([...history, strHistory]);
                    setHistoryLS(strHistory);
                    return;
                }
                setExpression(false);
                calculateRes(calculatedExpVal, calculatedExpRes);
                const strHistory = value + operator + result;
                setHistory([...history, strHistory])
                setHistoryLS(strHistory)
                return;
            }
            if (!operator) return;
            if (result === '0' && operator === '/') {
                setResult('0');
                alert('Cannot divide by zero')
                return;
            }
            calculateRes(value, result)
            const strHistory = value + operator + result;

            setHistory([...history, strHistory])
            setHistoryLS(strHistory)
        }
        else if (val === 'CE') {
            setResult('0');
            setValue('');
            setOperator('');
            setExpression(false)
        }
        else if (val === 'C') {
            if (result.toString().length === 1) {
                setResult('0');
                setExpression(false)
            }
            else {
                const sliced = result.toString().substring(0, result.toString().length - 1);
                setResult(sliced);
            }
            return;
        }
        else {
            if (result === '0') {
                setResult(val)
            } else if (!lastChar.match(/[)]/)) setResult(result + val)
        }
    }

    const calculateRes = (val, ress) => {
        calculator.setInitValue(val);
        switch (operator) {
            case '-': {
                calculator.execute(new SubCommand(ress))
                const res = calculator.getCurrentValue().toString();
                setResult(res);
                setValue('');
                setOperator('');
                return;
            }
            case '+': {
                calculator.execute(new AddCommand(ress))
                const res = calculator.getCurrentValue().toString();
                setResult(res);
                setValue('');
                setOperator('');
                return;
            }
            case '/': {
                calculator.execute(new DivCommand(ress))
                const res = calculator.getCurrentValue().toString();
                setResult(res);
                setValue('');
                setOperator('');
                return;
            }
            case '%': {
                calculator.execute(new ModCommand(ress))
                const res = calculator.getCurrentValue().toString();
                setResult(res);
                setValue('');
                setOperator('');
                return;
            }
            case '*': {
                calculator.execute(new MulCommand(ress))
                const res = calculator.getCurrentValue().toString();
                setResult(res);
                setValue('');
                setOperator('');
                return;
            }
        }
    }

    return (
        <KeypadContainer id='keypad'>
            { operationsAndNumbers.map(i =>
                <KeypadButton
                    key={ i }
                    id={ i.trim() }
                    value={ i.trim() }
                    type='button'
                    onClick={ handleClick }
                />) }
        </KeypadContainer>
    )
}

Keypad.propTypes = {
    expression: PropTypes.bool,
    setExpression: PropTypes.func,
    result: PropTypes.string,
    setResult: PropTypes.func,
    history: PropTypes.array,
    setHistory: PropTypes.func,
    value: PropTypes.string,
    setValue: PropTypes.func,
    operator: PropTypes.string,
    setOperator: PropTypes.func
}

export default Keypad;