import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    typography: {
      fontFamily: string;
      sansSerif: string;
    };
    colors: {
      mainColor: string;
      secondaryColor: string;
      backgroundColor: string;
    };
  }
}
