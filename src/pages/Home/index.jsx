import React from 'react'

import PropTypes from 'prop-types'

import Calculator from '@/components/Calculator'

const HomePage = ({
  expression,
  setExpression,
  result,
  setResult,
  history,
  setHistory,
  value,
  setValue,
  operator,
  setOperator
}) => {
  return (
    <Calculator
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
  )
}

// HomePage.propTypes = {
//   expression: PropTypes.string,
//   setExpression: PropTypes.func,
//   result: PropTypes.number,
//   setResult: PropTypes.func,
//   history: PropTypes.array,
//   setHistory: PropTypes.func,
//   value: PropTypes.number,
//   setValue: PropTypes.func,
//   operator: PropTypes.string,
//   setOperator: PropTypes.func
// }


export default HomePage;