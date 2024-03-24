import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      dark: string;
      light: string;
      accent: string;
      neutral: string;
      neutralStrong: string;
      neutralLight: string;
      black: string;
      darker: string;
      white: string;
      text: string;
      textSecond: string;
      textNeutral: string;
      inverseText: string;
      background: string;
      lightBackground: string;
      backgroundWhite: string;
      backgroundCard: string;
      danger: string;
      success: string;
      grey900: string;
      grey800: string;
      grey700: string;
      grey600: string;
      grey500: string;
      grey400: string;
      grey300: string;
      grey200: string;
      grey100: string;
      grey50: string;
      grey20: string;
      grey10: string;
    };
    fontSizes: {
      big: string;
      medium: string;
      small: string;
      tiny: string;
    };
    fontWeights: {
      // black: number;
      bold: number;
      regular: number;
      // extraLight: number;
    };
    fontFamilies: {
      main: string;
      secondary: string;
    };
  }
}
