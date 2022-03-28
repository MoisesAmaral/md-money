import { createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
        --color-bg: #f0f2f5;
        --color-shape:#ffffff;
        --color-red: #e52e4d;
        --color-green: #33CC95;
        --color-blue: #5429cc;
        --color-blue-light: #6933ff;
        --color-text-title:#363f5f;
        --color-body:#969cb3;       
    }
    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    // font-size
    html {
        @media screen and (max-width: 1880px) {
            font-size: 93.75%;
        }
        @media screen and (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    body{
        background: var(--color-bg);
        -webkit-smoothing: antialiased;
    }
    body, input, button, textarea {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    
    .react-modal-overlay{
        background-color: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background-color: var(--color-bg);
        padding: 3rem;
        position: relative;
        border-radius: 0.4rem;

    }
    .react-modal-close{
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;


        &:hover{
            filter: brightness(0.8);
        }
    }   
`;