import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        outline: none;
        font-family: 'Poppins', sans-serif;
        -webkit-tap-highlight-color: transparent;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        user-select: none;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        height: 100vh;
        width: 100vw;
        overflow-x: hidden;
        font-size: 1.6rem;
        background: #000;
        color: #fff;
    }

    ::-webkit-scrollbar {
        width: 0.9rem;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        background: #797979;
        transition: all 0.5s ease-in-out;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #222224;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

`;
