import styled from 'styled-components';
import {darken, transparentize} from 'polished'

export const Container = styled.form`
    h2 {
        font-size: 2.5rem;
        color: var(--color-text-title);
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        height: 4rem;
        padding: 0 1.5rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-size: 1rem;
        font-weight: 400;

        &::placeholder { // input placeholder
            color: var(--color-body);
        }

        & + input { // todos os inputs que estão após o primeiro input
            margin-top: 1rem;
        }
    }
    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--color-green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: filter 0.2s;
        font-weight: 600;

        &:hover {
          filter: brightness(0.9);
    }
    }
`
export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5rem;
`
type RadialBoxProps = {
    isActive: boolean;
    actveColor: "green" | "red";
}

const colors = {
    green: '#33CC95',
    red: '#e52e4d'
}

export const RadialBox = styled.button<RadialBoxProps>`
        height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;

        background: ${props => props.isActive
         ? transparentize(0.8, colors[props.actveColor])
          : 'transparent'};

        display: flex;
        align-items: center;
        justify-content: center;

        transition: border-color 0.2s;

        &:hover {
            border-color: ${darken(0.1, '#d7d7d7')};
        }

        img {
            width: 20px;
            height: 20px;
        }
        span{
            font-size: 1rem;
            display: inline-block;
            margin-left: 1rem;
            color: var(--color-text-title);
        }
`