export const MOBILE_BREAKPOINT = 440;
export const CONTAINER_MAX_WIDTH = 1440;
// export const CONTAINER_MAX_WIDTH = 1920;
export enum Breakpoints {
  mobileS = "361px",
  mobileM = "390px",
  mobileL = "440px",
  tablet = "768px",
  laptop = "1024px",
  laptopM = "1280px",
  laptopL = "1440px",
  desktop = "2560px",
}

export const Device = {
  mobileS: `(max-width: ${Breakpoints.mobileS})`,
  mobileM: `(max-width: ${Breakpoints.mobileM})`,
  mobileL: `(max-width: ${Breakpoints.mobileL})`,
  tablet: `(max-width: ${Breakpoints.tablet})`,
  laptop: `(max-width: ${Breakpoints.tablet})`,
  laptopM: `(max-width: ${Breakpoints.laptopM})`,
  laptopL: `(max-width: ${Breakpoints.laptopL})`,
  desktop: `(max-width: ${Breakpoints.desktop})`,
  desktopL: `(max-width: ${Breakpoints.desktop})`,
};
