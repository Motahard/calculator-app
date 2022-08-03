import React from 'react'
import PropTypes from 'prop-types'

import { Container, SettingsTitle, SettingTheme, SelectTheme, OptionTheme, ButtonClearHistory } from '@/pages/Settings/components';

class SettingsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            themeValue: this.props.themeValue
        }
    }

    handleChange = (event) => {
        this.setState({ themeValue: event.target.value },
            this.props.changeThemeValue(event.target.value))
    }
    render() {
        return (
            <Container>
                <SettingsTitle>Settings</SettingsTitle>
                <div>
                    <SettingTheme>Switch Theme</SettingTheme>
                    <SelectTheme value={ this.state.themeValue } onChange={ this.handleChange }>
                        <OptionTheme value="light">Light Theme</OptionTheme>
                        <OptionTheme value="dark">Dark Theme</OptionTheme>
                        <OptionTheme value="colored">Colored Theme</OptionTheme>
                    </SelectTheme>
                </div>
                <div>
                    <ButtonClearHistory onClick={ () => this.props.setHistory([]) }>Clear All History</ButtonClearHistory>
                </div>
            </Container>
        )
    }
}

SettingsPage.propTypes = {
    changeThemeValue: PropTypes.func,
    themeValue: PropTypes.string,
    setHistory: PropTypes.func
}

export default SettingsPage;