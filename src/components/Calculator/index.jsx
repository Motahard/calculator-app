import React, { useState } from 'react'

import PropTypes from 'prop-types'

import Display from '@/components/Display'
import Keypad from '@/components/Keypad'
import History from '@/components/History'
import ControlPanel from '@/components/ControlPanel'

import { CalculatorContainer, KeypadDisplayContainer, HistoryControlContainer } from '@/components/Calculator/components'

const Calculator = ({ expression, setExpression, result, setResult, history, setHistory, value, setValue, operator, setOperator }) => {
    const [showHistory, setShowHistory] = useState(true);
    return (
        <CalculatorContainer>
            <KeypadDisplayContainer>
                <Display result={ result } value={ value } operator={ operator } />
                <Keypad
                    expression={ expression }
                    setExpression={ setExpression }
                    result={ result }
                    setResult={ setResult }
                    history={ history }
                    setHistory={ setHistory }
                    value={ value }
                    setValue={ setValue }
                    operator={ operator }
                    setOperator={ setOperator }
                />
                <ControlPanel showHistory={ showHistory } setShowHistory={ setShowHistory } />
            </KeypadDisplayContainer>
            { showHistory ? (
                <HistoryControlContainer>
                    <History history={ history } showHistory={ showHistory } />
                </HistoryControlContainer>
            ) : null }

        </CalculatorContainer>
    )
}

Calculator.propTypes = {
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

export default Calculator;