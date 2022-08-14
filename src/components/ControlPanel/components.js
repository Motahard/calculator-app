import styled from "styled-components";
import { Button } from "@/pages/Settings/components";


export const ButtonArrowRight = styled.i`
    position: absolute;
    left: 98%;
    top: 50%;
    cursor: pointer;
    border: solid ${props => props.theme.primaryColor};
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
`
export const ButtonArrowLeft = styled.i`
    position: absolute;
    left: 100%;
    top: 50%;
    cursor: pointer;
    border: solid ${props => props.theme.primaryColor};
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
`