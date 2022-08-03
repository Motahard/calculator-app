import React from 'react'
import PropTypes from 'prop-types'

import { KeypadContainer, KeypadButton } from './components'

import { operationsAndNumbers, calculate } from '@/utils'

const Keypad = ({ expression, setExpression, result, setResult, setHistory, history }) => {

    const handleClick = e => {
        const val = e.target.value;

        if (val === '=') {
            const res = calculate(expression).toString();
            setResult(res);
            setExpression(res);
            setHistory([expression, ...history]);
            return;
        }
        else if (val === 'CE') {
            setExpression('0');
            setResult('');
            return;
        }
        else if (val === 'C') {
            setExpression(expression.substring(0, expression.length - 1));
            return;
        }
        else if (expression === '0' || expression === '') {
            if (!val.match(/[*+\/]/)) setExpression(val);
        }
        else if (val.match(/[*+\/-]/)) {
            if (expression.charAt(expression.length - 1).match(/[*+\/-]/)) {
                setExpression(expression.slice(0, -1) + val);
            } else {
                setExpression(expression + val)
            }
            return;
        }
        else {
            setExpression(expression + val);
            return;
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
    expression: PropTypes.string,
    setExpression: PropTypes.func,
    result: PropTypes.string,
    setResult: PropTypes.func,
    history: PropTypes.array,
    setHistory: PropTypes.func
}

export default Keypad;