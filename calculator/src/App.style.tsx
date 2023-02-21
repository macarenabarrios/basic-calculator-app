import styled, { createGlobalStyle } from "styled-components";

type Theme = {
    theme: String;
}

export const Container = styled.div`
    min-width: 500px;
    max-width: 300px;
    margin: 0 auto;
    user-select: none;

    @media screen and (min-width: 450px){
        min-width: 340px;
    }
`
export const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Header = styled(Flex)`
    justify-content: space-between;
    color: var(--white-text);
    font-size: 1.2rem;
`
export const WrapperSwitch = styled(Flex)`
    width: 115px;
    font-size: 0.85rem;
    align-items: flex-end;
    justify-content: space-between;
`
export const Switch = styled.div`
    font-size: 0.9rem;
    flex: 0.75;
    justify-content: center;
    align-items: center;
    div:first-of-type {
        width: 80%;
        font-size: 0.65rem;
        font-weight: 100;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
    }
`
export const SwitcherContainer = styled.div`
    background-color: var(--toggle-background);
    width: 100%;
    min-height: 17px;
    border-radius: 2rem;
    position: relative;
    z-index: 20;
    cursor: pointer;
`
export const Switcher = styled.div<Theme>`
    width: 11px;
    height: 11px;
    min-height: 11px;
    background-color: var(--key-shadow-dark-red);
    border-radius: 2rem;
`
