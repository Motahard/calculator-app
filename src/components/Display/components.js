import styled from 'styled-components'

export const DisplayExpression = styled.div`
    font-size: 40px;
    height: 60px;
    margin-right: 5rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: flex-end;
`

export const DisplayValue = styled.p`
    font-size: 16px;
    color: ${props => props.theme.primaryFontColor}
`