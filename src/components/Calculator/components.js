import styled from "styled-components";

export const CalculatorContainer = styled.div`
    max-width: 1300px;
    margin: auto;
    display: grid;
    grid-template-columns: 5fr 1fr;
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
    &:first-child {
        text-align: right;
    }
`

export const HistoryControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-x: auto;
`