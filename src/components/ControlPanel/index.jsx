import React from "react";
import PropTypes from 'prop-types'
import { ButtonArrowRight, ButtonArrowLeft } from "./components";

const ControlPanel = ({ showHistory, setShowHistory }) => {
    const handleClick = () => {
        setShowHistory(!showHistory)
    }

    return (
        <div>
            { showHistory ? <ButtonArrowRight onClick={ handleClick } /> : <ButtonArrowLeft onClick={ handleClick } /> }
        </div>
    )
}

ControlPanel.propTypes = {
    showHistory: PropTypes.bool,
    setShowHistory: PropTypes.func
}

export default ControlPanel;