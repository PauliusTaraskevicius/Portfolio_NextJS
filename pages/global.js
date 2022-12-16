import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
    }

    .textColorChange {
        color: ${({ theme }) => theme.textColorChange}
    }

    .textTermsPrivacy {
        color: ${({ theme }) => theme.textTermsPrivacy}
    }

    .btnColorChange {
        background: ${({ theme }) => theme.btnColorChange}
    }
`;
