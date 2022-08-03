import React from 'react'
import PropTypes from 'prop-types'

import { DisplayExpression } from '@/components/Display/components'

const Display = ({ expression }) => {
    return (
        <DisplayExpression id='display'>
            { expression }
        </DisplayExpression>
    )
}

Display.propTypes = {
    expression: PropTypes.string
}

export default Display;