import { ComponentBuilder } from '../../../../utils/testHelpers';

import Alert from './Alert';

const defaultProps = () => ({
  message: 'This is the message.',
  type: 'primary',
});

const builder = new ComponentBuilder(Alert, defaultProps());

describe('Alert', () => {
  let component;

  test('matches the snapshot', () => {
    component = builder.shallowGetComponent();
    expect(component).toMatchSnapshot();
  });

  test('renders correctly as an "info" alert', () => {
    component = builder.shallowGetComponent({ type: 'info' });
    expect(component.hasClass('alert-info')).toBeTruthy();
  });

  test('renders correctly as an "danger" alert', () => {
    component = builder.shallowGetComponent({ type: 'danger' });
    expect(component.hasClass('alert-danger')).toBeTruthy();
  });
});
