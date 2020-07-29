import { configure, addDecorator } from '@storybook/react';
import '../src/index.scss';
import { withInfo } from '@storybook/addon-info';
addDecorator(
    withInfo({
        header: false,
        source: true,
    })
);

const req = require.context('../src/components', true, /.stories.tsx$/);
function loadStories() {
    req.keys().forEach(req);
}
configure(loadStories, module);

