import { ComponentBuilder } from '../../../utils/testHelpers';

import COMPONENT_NAME from './COMPONENT_NAME';

const defaultProps = {
};

const builder = new ComponentBuilder(
  COMPONENT_NAME,
  defaultProps,
);

describe('COMPONENT_NAME', () => {
  let component;

  test('matches the snapshot', () => {
    component = builder.shallowGetComponent();
    expect(component).toMatchSnapshot();
  });

  test('renders correctly', () => {
    component = builder.shallowGetComponent();
  });
});
