import { CustomThemeProvider } from "../providers/ThemeProvider";
import GlobalStyle from "../styles/globalstyles";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
        <ToastContainer position="bottom-center" theme="light" />
      </CustomThemeProvider>
    </>
  );
}
