import { ComponentBuilder } from '../../../utils/testHelpers';

import HomePage from './HomePage';

const defaultProps = {
};

const builder = new ComponentBuilder(
  HomePage,
  defaultProps,
);

describe('HomePage', () => {
  let component;

  test('matches the snapshot', () => {
    component = builder.shallowGetComponent();
    expect(component).toMatchSnapshot();
  });

  test('renders correctly', () => {
    component = builder.shallowGetComponent();
  });
});
