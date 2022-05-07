import React from 'react';
import ThemeLayer from 'modules/ThemeModule/Theme';
// import I18NLayer from 'modules/i18n';
import { render } from '@testing-library/react';
// import FullScreenLoader from 'components/GlobalLoader';
interface ILighContainerProps {
  children: React.ReactNode;
}

const LightContainer = ({ children }: ILighContainerProps) => {
  return (
    <ThemeLayer>
      <div>
        {children}
      </div>
    </ThemeLayer >
  );
};

const customRenderUnit = (ui: any, options: any = {}) => render(ui, { wrapper: LightContainer, ...options });

export default customRenderUnit;
