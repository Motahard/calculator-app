import React from 'react'
import PropTypes from 'prop-types'

import { Container, SettingsTitle, SettingTheme, SelectTheme, OptionTheme, ButtonClearHistory } from '@/pages/Settings/components';
import { clearHistoryLS, setThemeLS } from '@/utils';

class SettingsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            themeValue: this.props.themeValue
        }
    }

    handleChange = (event) => {
        const { value } = event.target;
        this.setState({ themeValue: value }, () => {
            setThemeLS(value)
            this.props.changeThemeValue(value)
        })
    }

    handleClearHistory = () => {
        this.props.setHistory([]);
        clearHistoryLS()
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
                    <ButtonClearHistory onClick={ this.handleClearHistory }>Clear All History</ButtonClearHistory>
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