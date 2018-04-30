import { ComponentBuilder } from '../../../../utils/testHelpers';

import AppComponent from './AppComponent';

const defaultProps = {
  actions: {
    setInitialized: jest.fn(),
  },
};

const builder = new ComponentBuilder(
  AppComponent,
  defaultProps,
);

describe('AppComponent', () => {
  let component;

  test('matches the snapshot', () => {
    component = builder.shallowGetComponent();
    expect(component).toMatchSnapshot();
  });

  test('renders correctly', () => {
    component = builder.shallowGetComponent();
  });
});
