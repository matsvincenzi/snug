import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', 'Arial', sans-serif;
    }

    button {
        cursor: pointer;
    }
    
    :root {

        --greyDefault: #808080;
        --grey1: #212121;
        --grey2: #424242;
        --grey3: #616161;
        --grey4: #757575;
        --grey5: #9E9E9E;
        --grey6: #BDBDBD;
        --grey7: #E0E0E0;
        --grey8: #EEEEEE;
        --grey9: #F5F5F5;
        --grey10: #FAFAFA;

        --whiteDefault: #FFFFFF;
        --white1: #E8E8E8;

        --blackDefault: #000000;
        --black1: #080808;

        --erro: #CD2B31;
    }
`

export default GlobalStyled
