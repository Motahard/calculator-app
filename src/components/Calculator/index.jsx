import React, { useState } from 'react'

import PropTypes from 'prop-types'

import Display from '@/components/Display'
import Keypad from '@/components/Keypad'
import History from '@/components/History'
import ControlPanel from '@/components/ControlPanel'

import { CalculatorContainer, KeypadDisplayContainer, HistoryControlContainer } from '@/components/Calculator/components'

const Calculator = ({ expression, setExpression, result, setResult, history, setHistory }) => {
    const [showHistory, setShowHistory] = useState(true);
    return (
        <CalculatorContainer>
            <KeypadDisplayContainer>
                <Display expression={ expression } />
                <Keypad
                    expression={ expression }
                    setExpression={ setExpression }
                    result={ result }
                    setResult={ setResult }
                    history={ history }
                    setHistory={ setHistory }
                />
            </KeypadDisplayContainer>
            <HistoryControlContainer>
                <History history={ history } showHistory={ showHistory } />
                <ControlPanel showHistory={ showHistory } setShowHistory={ setShowHistory } />
            </HistoryControlContainer>
        </CalculatorContainer>
    )
}

Calculator.propTypes = {
    expression: PropTypes.string,
    setExpression: PropTypes.func,
    result: PropTypes.string,
    setResult: PropTypes.func,
    histrory: PropTypes.array,
    setHistory: PropTypes.func
}

export default Calculator;