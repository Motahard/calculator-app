import styled from "styled-components";

export const KeypadContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.5rem 4rem;
    padding: 1rem;
    border-top: 2px solid ${props => props.theme.secondaryBackColor};
    height: 100%;
    & > input:last-of-type {
        grid-column: 2 / -1;
    }
    @media (max-width: 1000px) {
        & {
            gap: 1.5rem 2rem;
        }
    }
    @media (max-width: 800px) {
        & {
            gap: 0.75rem 1rem;
        }
    }
    @media (max-width: 500px) {
        & {
            gap: 0.5rem;
        }
    }
`

export const KeypadButton = styled.input`
    padding: 1rem;
    align-text: center;
    font-size: 30px;
    border-radius: 10px;
    border: 3px solid ${props => props.theme.secondaryBackColor};
    background-color: ${props => props.theme.secondaryBackColor};
    color: ${props => props.theme.secondaryFontColor};
    cursor: pointer;
`