import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 2rem 1.5rem;
    background: ${props => props.theme.primaryBackColor};
    color: ${props => props.theme.primaryFontColor};
`

export const NavTitle = styled.p`
    font-size: 22px;
`

export const NavList = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
`

export const NavItem = styled(NavLink)`
    text-decoration: none;
    color: #b9b6b6;
    font-size: 22px;
    &.active {
        border-bottom: 1px solid ${props => props.theme.primaryFontColor};
        color: ${props => props.theme.primaryFontColor};
    }
`