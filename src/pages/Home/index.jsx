import React from 'react'

import PropTypes from 'prop-types'

import Calculator from '@/components/Calculator'

const HomePage = ({ expression, setExpression, result, setResult, history, setHistory }) => {
  return (
    <Calculator
      expression={ expression }
      setExpression={ setExpression }
      result={ result }
      setResult={ setResult }
      history={ history }
      setHistory={ setHistory }
    />
  )
}

HomePage.propTypes = {
  expression: PropTypes.string,
  setExpression: PropTypes.func,
  result: PropTypes.string,
  setResult: PropTypes.func,
  history: PropTypes.array,
  setHistory: PropTypes.func
}


export default HomePage;