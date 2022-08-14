import React from 'react'
import PropTypes from 'prop-types'

import { HistoryContainer, HistoryName, HistoryElement } from '@/components/History/components'

const History = ({ history, showHistory }) => {
    if (!showHistory) return <div></div>;
    return (
        <HistoryContainer id='history'>
            <HistoryName>History</HistoryName>
            { history.length > 0 && [...history].reverse().map((i, ind) => <HistoryElement key={ ind }>{ i }</HistoryElement>) }
        </HistoryContainer>
    )
}

History.propTypes = {
    history: PropTypes.array,
    showHistory: PropTypes.bool
}

export default History;