import { ComponentBuilder } from '../../../../utils/testHelpers';

import Alert from '../Alert/Alert';
import Button from '../Button/Button';
import Form from './Form';

const defaultProps = () => ({
  cancelBtnText: 'Cancel',
  children: [],
  disabled: false,
  onCancel: jest.fn(),
  onSubmit: jest.fn(),
  submitBtnText: 'Submit',
  submitDisabled: false,
  topLevelError: '',
});

const builder = new ComponentBuilder(Form, defaultProps());

describe('Form', () => {
  let component;

  test('matches the snapshot', () => {
    component = builder.shallowGetComponent();
    expect(component).toMatchSnapshot();
  });

  describe('basic rendering', () => {
    test('renders  correctly', () => {
      component = builder.shallowGetComponent();
      expect(component.find(Alert)).toHaveLength(0);
      expect(component.find(Button)).toHaveLength(2);
    });

    test('does not render "cancel" button if prop is empty', () => {
      component = builder.shallowGetComponent({ onCancel: null });
      expect(component.find(Button)).toHaveLength(1);
    });

    test('renders an Alert if the prop is present', () => {
      component = builder.shallowGetComponent({ topLevelError: 'OMFG' });
      expect(component.find(Alert)).toHaveLength(1);
    });
  });
});
