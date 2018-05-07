import { ComponentBuilder } from '../../../../utils/testHelpers';

import App from './App';

const defaultProps = () => ({
  actions: {
    setInitialized: jest.fn(),
  },
});

const builder = new ComponentBuilder(App, defaultProps());

describe('App', () => {
  let component;

  test('matches the snapshot', () => {
    component = builder.shallowGetComponent();
    expect(component).toMatchSnapshot();
  });

  test('renders correctly', () => {
    component = builder.shallowGetComponent();
  });
});
