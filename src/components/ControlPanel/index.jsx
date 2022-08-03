import React from "react";
import PropTypes from 'prop-types'
import { ButtonSHHistory } from "./components";

const ControlPanel = ({ showHistory, setShowHistory }) => {
    const handleClick = () => {
        setShowHistory(!showHistory)
    }

    return (
        <div>
            <ButtonSHHistory onClick={ handleClick }>
                { showHistory ? 'Hide History' : 'Show History' }
            </ButtonSHHistory>
        </div>
    )
}

ControlPanel.propTypes = {
    showHistory: PropTypes.bool,
    setShowHistory: PropTypes.func
}

export default ControlPanel;