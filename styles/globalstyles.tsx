import { createGlobalStyle } from "styled-components";

export const brandingDark = "#281E30";
export const brandingAccent = "#2ACDEA";
export const brandingNeutral = "#D8E8E7";
export const brandingNeutralLight = "#EAF2F2";
export const brandingNeutralStrong = "#B3CCD0";
export const brandingLight = "#FFFFFF";

export const textColor = "#000000";
export const bgColor = "#e8e8e8";
// const fontFamilyMain = "Poppins";
export const fontFamilyMain = "Inter-Regular";
// export const fontFamilySecondary = 'SpaceMono';
export const fontFamilySecondary = "SpaceMono-Regular";

const GlobalStyle = createGlobalStyle`
 body {
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  form,
  fieldset,
  legend,
  input,
  button,
  textarea,
  select,
  p,
  blockquote,
  th,
  td {
    margin: 0;
    padding: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  fieldset,
  img {
    border: 0;
  }

  address,
  button,
  caption,
  cite,
  code,
  dfn,
  em,
  input,
  optgroup,
  option,
  select,
  strong,
  textarea,
  th,
  var {
      font:inherit;
  }

  del,
  ins {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  caption,
  th {
    text-align: left;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  q:before,
  q:after {
    content: '';
  }

  abbr,
  acronym {
    border: 0;
    font-variant: normal;
  }

  sup {
    vertical-align: baseline;
  }

  sub {
    vertical-align: baseline;
  }

  /*because legend doesn't inherit in IE */
  legend {
    color: #000;
  }
  // ant-d fix
  .ant-form-item-label>label {
     width: 150px;
  }

  input[type=number]::-webkit-inner-spin-button {
    opacity: 1
  }
  /* Inter */
  @font-face {
    font-family: 'Inter-Black';
    src: url('/fonts/Inter-Black.ttf') format('truetype');
    font-style: normal;
    font-weight: 900;
    font-display: swap;
  }
  @font-face {
    font-family: 'Inter-Bold';
    src: url('/fonts/Inter-Bold.ttf') format('truetype');
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: 'Inter-ExtraBold';
    src: url('/fonts/Inter-ExtraBold.ttf') format('truetype');
    font-style: normal;
    font-weight: 800;
    font-display: swap;
  }
  @font-face {
    font-family: 'Inter-ExtraLight';
    src: url('/fonts/Inter-ExtraLight.ttf') format('truetype');
    font-weight: 200;
    font-display: swap;
  }
  @font-face {
    font-family: 'Inter-Light';
    src: url('/fonts/Inter-Light.ttf') format('truetype');
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: 'Inter-Medium';
    src: url('/fonts/Inter-Medium.ttf') format('truetype');
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: 'Inter-Regular';
    src: url('/fonts/Inter-Regular.ttf') format('truetype');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Inter-SemiBold';
    src: url('/fonts/Inter-SemiBold.ttf') format('truetype');
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }
  @font-face {
    font-family: 'Inter-Thin';
    src: url('/fonts/Inter-Thin.ttf') format('truetype');
    font-style: normal;
    font-weight: 100;
    font-display: swap;
  }
  /* Space Mono */
  @font-face {
    font-family: 'SpaceMono-Regular';
    src: url('/fonts/SpaceMono-Regular.ttf') format('truetype');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'SpaceMono-BoldItalic';
    src: url('/fonts/SpaceMono-BoldItalic.ttf') format('truetype');
    font-style: italic;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: 'SpaceMono-Italic';
    src: url('/fonts/SpaceMono-Italic.ttf') format('truetype');
    font-style: italic;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'SpaceMono-Bold';
    src: url('/fonts/SpaceMono-Bold.ttf') format('truetype');
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
  /* PPTelegraf */
  @font-face {
    font-family: 'PPTelegraf-Regular';
    src: url('/fonts/PPTelegraf-Regular.ttf') format('truetype');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'PPTelegraf-RegularSlanted';
    src: url('/fonts/PPTelegraf-RegularSlanted.ttf') format('truetype');
    font-style: italic;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'PPTelegraf-Bold';
    src: url('/fonts/PPTelegraf-Bold.ttf') format('truetype');
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: 'PPTelegraf-BoldSlanted';
    src: url('/fonts/PPTelegraf-BoldSlanted.ttf') format('truetype');
    font-style: italic;
    font-weight: 700;
    font-display: swap;
  }
`;

export default GlobalStyle;
