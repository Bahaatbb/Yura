import React from 'react';
import Button from '../Button';
import customRenderUnit from 'modules/testing/Testing';

describe('<Button />', () => {
    test('Render the component', () => {
        const renderedComponent = customRenderUnit(
            <Button />
        );

        expect(renderedComponent.container).toBeTruthy();
    });
});
