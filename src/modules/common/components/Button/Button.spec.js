import { ComponentBuilder } from '../../../../utils/testHelpers';

import Button from './Button';

const defaultProps = () => ({
  onClick: jest.fn(),
  text: 'ButtonText',
  type: 'success',
});

const builder = new ComponentBuilder(
  Button,
  defaultProps(),
);

describe('Button', () => {
  let component;

  test('matches the snapshot', () => {
    component = builder.shallowGetComponent();
    expect(component).toMatchSnapshot();
  });

  test('renders as a "success" button', () => {
    component = builder.shallowGetComponent();
    expect(component.hasClass('button-success')).toBeTruthy();
  });

  test('renders as a "secondary" button', () => {
    component = builder.shallowGetComponent({ type: 'secondary' });
    expect(component.hasClass('button-secondary')).toBeTruthy();
  });

  test('renders as a "info" button', () => {
    component = builder.shallowGetComponent({ type: 'info' });
    expect(component.hasClass('button-info')).toBeTruthy();
  });

  test('renders as a "warning" button', () => {
    component = builder.shallowGetComponent({ type: 'warning' });
    expect(component.hasClass('button-warning')).toBeTruthy();
  });

  test('renders as a "danger" button', () => {
    component = builder.shallowGetComponent({ type: 'danger' });
    expect(component.hasClass('button-danger')).toBeTruthy();
  });

  test('renders as a "light" button', () => {
    component = builder.shallowGetComponent({ type: 'light' });
    expect(component.hasClass('button-light')).toBeTruthy();
  });

  test('renders as a "dark" button', () => {
    component = builder.shallowGetComponent({ type: 'dark' });
    expect(component.hasClass('button-dark')).toBeTruthy();
  });

  test('renders the correct text', () => {
    component = builder.shallowGetComponent();
    expect(component.text()).toEqual('ButtonText');
  });

  test('calls the callback as expected', () => {
    const onClick = jest.fn();
    component = builder.shallowGetComponent({ onClick });
    expect(onClick.mock.calls.length).toBe(0);
    component.simulate('click');
    expect(onClick.mock.calls.length).toBe(1);
  });
});
