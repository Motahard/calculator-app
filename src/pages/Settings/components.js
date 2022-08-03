import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1600px;
    margin: auto;
    padding: 5rem;
    margin-top: 5rem;
    border-radius: 10px;
    background-color: ${props => props.theme.primaryBackColor};
    color:  ${props => props.theme.primaryFontColor};
`

export const SettingsTitle = styled.h1`
    font-weight: normal;
    font-size: 44px;
    margin: 2rem 0;
`

export const SettingTheme = styled.legend`
    margin: 0.5rem 0;
`
export const SelectTheme = styled.select`
    padding: 1rem;
    border-radius: 5px;
    width: 300px;
    font-size: 20px;
    margin-bottom: 1rem;
    background: ${props => props.theme.secondaryBackColor};
    color: ${props => props.theme.secondaryFontColor};
    border: 2px solid black;
`

export const OptionTheme = styled.option`
`

export const Button = styled.button`
    padding: 1rem;
    border-radius: 5px;
    width: 300px;
    font-size: 20px;
    cursor: pointer;
    background: ${props => props.theme.secondaryBackColor};
    color: ${props => props.theme.secondaryFontColor};
    border: 2px solid black;
`

export const ButtonClearHistory = styled(Button)``