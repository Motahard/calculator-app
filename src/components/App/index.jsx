import React, { lazy, Suspense, useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'

import Loader from '@/components/Loader'
import Navbar from '@/components/Navbar'
import ErrorBoundary from '@/components/ErrorBoundary'

import { AppContainer } from './components'

import { lightTheme, darkTheme, coloredTheme } from '@/theme'
import { invertTheme } from '@/theme'
import { getThemeLS, getHistoryLS } from '@/utils/index'

const HomePage = lazy(() => import('@/pages/Home'))
const SettingsPage = lazy(() => import('@/pages/Settings'))

export default () => {
  const [value, setValue] = useState('');
  const [expression, setExpression] = useState(false);
  const [result, setResult] = useState('0');
  const [operator, setOperator] = useState('');

  const [history, setHistory] = useState([]);
  const [themeValue, setThemeValue] = useState('light');

  const changeThemeValue = (value) => {
    setThemeValue(value)
  }

  const handleTheme = () => {
    if (themeValue === 'light') {
      return lightTheme;
    } else if (themeValue === 'dark') {
      return darkTheme;
    } else if (themeValue === 'colored') {
      return coloredTheme
    }
  }

  useEffect(() => {
    const theme = getThemeLS();
    if (theme) setThemeValue(theme)
    const history = JSON.parse(getHistoryLS());
    if (history && history.length) setHistory(history)
  }, [])

  return (
    <ThemeProvider theme={ handleTheme() }>
      <ErrorBoundary>
        <Navbar />
        <AppContainer>
          <Suspense fallback={ <Loader /> }>
            <Switch>
              <Route
                exact={ true }
                path={ HOME_PAGE_ROUTE }
              >
                <HomePage
                  expression={ expression }
                  value={ value }
                  setValue={ setValue }
                  setExpression={ setExpression }
                  result={ result }
                  setResult={ setResult }
                  history={ history }
                  setHistory={ setHistory }
                  operator={ operator }
                  setOperator={ setOperator }
                />
              </Route>
              <Route path={ SETTINGS_PAGE_ROUTE } >
                <SettingsPage
                  changeThemeValue={ changeThemeValue }
                  themeValue={ themeValue }
                  setHistory={ setHistory }
                />
              </Route>
            </Switch>
          </Suspense>
        </AppContainer>
      </ErrorBoundary>
    </ThemeProvider>
  )
}
