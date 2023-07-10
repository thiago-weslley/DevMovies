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
`