import React from 'react';
import { ThemeProvider } from 'styled-components';
import DefaultTheme from './themes/default.json';

interface IThemeLayerProps {
  theme?: Record<string, string | number>;
  className?: string;
  children: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ThemeLayer = ({ children }: IThemeLayerProps) => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <>{children}</>
    </ThemeProvider>
  );
};

export default ThemeLayer;
