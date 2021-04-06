import reset from "react-style-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ${reset};
    a{
        text-decoration: none;
        color: inherit;
    }
    body{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
    }
    *{
        box-sizing: border-box;
    }
`;

export default GlobalStyles;
