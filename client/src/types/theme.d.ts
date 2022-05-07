import 'styled-components';
import {} from 'styled-components/cssprop';

declare module 'styled-components' {
  export type ThemeIconPath = string;
  export interface DefaultTheme {
    fonts: {
      font: string;
    };
  }
}
