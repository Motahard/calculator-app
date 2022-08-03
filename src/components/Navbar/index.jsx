import React from 'react'

import { Navbar, NavTitle, NavList, NavItem } from '@/components/Navbar/components'

import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'

export default () => {
    return (
        <Navbar>
            <NavTitle>Calculator App</NavTitle>
            <NavList>
                <NavItem id='homepage' to={ HOME_PAGE_ROUTE } exact>Home</NavItem>
                <NavItem id='settingspage' to={ SETTINGS_PAGE_ROUTE }>Settings</NavItem>
            </NavList>
        </Navbar>
    )
}
