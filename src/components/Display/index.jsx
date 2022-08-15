import React from 'react'
import PropTypes from 'prop-types'

import { DisplayExpression, DisplayValue } from '@/components/Display/components'

const Display = ({ value, result, operator }) => {
    return (
        <DisplayExpression>
            <DisplayValue>
                { value.toString() !== '' && value.toString() + operator }
            </DisplayValue>
            <p id='display'>
                { result }
            </p>
        </DisplayExpression>
    )
}

Display.propTypes = {
    value: PropTypes.string,
    result: PropTypes.string,
    operator: PropTypes.string
}

export default Display;