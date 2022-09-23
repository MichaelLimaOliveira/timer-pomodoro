import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";
import { BrowserRouter } from "react-router-dom";
import { CyclesContextProvider } from "./contexts/CyclesContext";

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <CyclesContextProvider>
                    <Router />
                </CyclesContextProvider>
            </BrowserRouter>
            <GlobalStyle />
        </ThemeProvider>
    );
}
