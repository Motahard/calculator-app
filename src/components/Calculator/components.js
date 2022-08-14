import styled from "styled-components";

export const CalculatorContainer = styled.div`
    max-width: 1300px;
    margin: auto;
    display: flex;
    padding: 1rem;
    height: 600px;
    background-color: ${props => props.theme.primaryBackColor};
    color: ${props => props.theme.primaryFontColor};
    margin-top: 2rem;
    border-radius: 10px;
`

export const KeypadDisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    position: relative;
`

export const HistoryControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-x: hidden;
`