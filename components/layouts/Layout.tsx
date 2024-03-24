import * as Router from "next/router";
import Head from "next/head";
import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { ScreenClassProvider } from "react-grid-system";
import { CONTAINER_MAX_WIDTH, Device } from "../../constants/breakpoints";
import Header from "../headers/Header";
// import Sticky from '../footers/Sticky';
import { fontFamilyMain } from "../../styles/globalstyles";
// import Footer from "../footer/Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Body = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  font-family: -apple-system, ${fontFamilyMain}, sans-serif;
  color: ${(p) => p.theme.colors.text};
  background: white;
  align-items: center;
  display: flex;
  flex-flow: wrap column;
  overflow-y: overlay;
  overflow-x: hidden;
  position: relative;
`;

export const mainLinkCss = css`
  background: transparent;
  text-transform: uppercase;
  border-radius: 10px;
  cursor: pointer;
  color: ${(p) => p.theme.colors.text};
  font-weight: ${(p) => p.theme.fontWeights.bold};
`;
const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  max-width: ${CONTAINER_MAX_WIDTH}px;
  align-items: center;
  background: #ffff;
  @media screen and ${Device.mobileL} {
    width: 100%;
  }
  @media screen and ${Device.mobileM} {
    width: 100%;
  }
`;

/* 
   // background: ${(p) =>
  //   useRouter().pathname === "/joinus"
  //     ? p.theme.colors.lightBackground
  //   useRouter().pathname === "/incubation"
  //     ? p.theme.colors.backgroundWhite
  //     : p.theme.colors.background};
*/
/* const Divider = styled.hr`
  height: 1px;
  width: 100%;
  background: #ffffff;
  opacity: 0.1;
`; */
const Layout = ({ children, title = "In Visual" }: Props): JSX.Element => {
  // const description = "Squat is life";

  return (
    <>
      <ScreenClassProvider>
        <Head>
          <title>{title}</title>
          {/* PP Telegraf */}
          <link
            rel="preload"
            href="/fonts/PPTelegraf-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/PPTelegraf-BoldSlanted.ttf"
            type="font/ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/PPTelegraf-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/PPTelegraf-RegularSlanted.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
          />
          {/* Inter */}
          <link
            rel="preload"
            href="/fonts/Inter-Black.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Inter-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Inter-ExtraBold.ttf"
            type="font/ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Inter-ExtraLight.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Inter-Light.ttf"
            type="font/ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Inter-Medium.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Inter-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
          />
          {/* SpaceMono */}
          {/* <link
            rel="preload"
            href="/fonts/SpaceMono-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/SpaceMono-BoldItalic.ttf"
            type="font/ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/SpaceMono-Italic.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/SpaceMono-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
          /> */}
          <link
            rel="shortcut icon"
            href="/images/invisual/InVisual-white.svg"
          />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Header />
        <Body>
          {/* <Divider /> */}
          <Container>{children}</Container>
        </Body>
        {/* <Sticky /> */}
      </ScreenClassProvider>
    </>
  );
};

export default Layout;
