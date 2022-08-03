import styled from "styled-components";

export const HistoryContainer = styled.div`
    padding: 1rem;
    padding-top: 0;
    border-left: 2px solid ${props => props.theme.secondaryBackColor};
    overflow-y: auto;
`

export const HistoryName = styled.p`
    text-align: center;
    margin-bottom: 1.5rem;
`

export const HistoryElement = styled.p`
    word-wrap: break-word;
    margin-bottom: 1rem;
`