import { ComponentBuilder } from '../../../../utils/testHelpers';
import InputField from './InputField';

const defaultProps = () => ({
  boundValue: '',
  disabled: false,
  error: '',
  label: 'Whatever',
  name: 'text',
  onInputChange: jest.fn(),
  placeholder: '',
  type: 'text',
});

const builder = new ComponentBuilder(InputField, defaultProps());

describe('InputField', () => {
  let component;

  it('matches the snapshot', () => {
    component = builder.shallowGetComponent();
    expect(component).toMatchSnapshot();
  });

  describe('label display', () => {
    it('renders the correct label text', () => {
      const props = { label: 'test_label' };
      component = builder.shallowGetComponent(props);
      const label = component.find('label');
      expect(label).toHaveLength(1);
      expect(label.text()).toMatch(new RegExp(props.label));
    });

    it('does not render a label if prop is empty', () => {
      component = builder.shallowGetComponent({ label: '' });
      expect(component.find('label')).toHaveLength(0);
    });
  });

  describe('error display', () => {
    const errClass = '.error';

    it('renders the error correctly when one is present', () => {
      const errMsg = 'error_message';
      component = builder.shallowGetComponent({ error: errMsg });
      const err = component.find('p');
      expect(err).toHaveLength(1);
      expect(err.text()).toMatch(new RegExp(errMsg));
    });

    it('does not render an error if prop is empty', () => {
      component = builder.shallowGetComponent();
      expect(component.find(errClass)).toHaveLength(0);
    });
  });

  describe('"text" type input field', () => {
    it('renders a text input correctly', () => {
      component = builder.shallowGetComponent();
      expect(component.find('input[type="email"]')).toHaveLength(0);
      expect(component.find('input[type="text"]')).toHaveLength(1);
      expect(component.find('input[type="password"]')).toHaveLength(0);
    });
  });

  describe('"password" type input field', () => {
    it('renders a password input correctly', () => {
      component = builder.shallowGetComponent({ type: 'password' });
      expect(component.find('input[type="email"]')).toHaveLength(0);
      expect(component.find('input[type="text"]')).toHaveLength(0);
      expect(component.find('input[type="password"]')).toHaveLength(1);
    });
  });

  describe('"email" type input field', () => {
    it('renders an email input correctly', () => {
      component = builder.shallowGetComponent({ type: 'email' });
      expect(component.find('input[type="email"]')).toHaveLength(1);
      expect(component.find('input[type="password"]')).toHaveLength(0);
      expect(component.find('input[type="text"]')).toHaveLength(0);
    });
  });

  describe('maxLength', () => {
    it('has a default "maxlength" when none is supplied', () => {
      component = builder.shallowGetComponent();
      const input = component.find('input');
      expect(input.prop('maxLength')).toEqual(255);
    });

    it('correctly applies the "maxLength" attirbute', () => {
      component = builder.shallowGetComponent({ maxLength: 50 });
      const input = component.find('input');
      expect(input.prop('maxLength')).toEqual(50);
    });

    it('clamps min "maxLength" with zero value', () => {
      component = builder.shallowGetComponent({ maxLength: 0 });
      const input = component.find('input');
      expect(input.prop('maxLength')).toEqual(1);
    });

    it('clamps min "maxLength" with negative value', () => {
      component = builder.shallowGetComponent({ maxLength: -10 });
      const input = component.find('input');
      expect(input.prop('maxLength')).toEqual(1);
    });

    it('clamps max "maxLength"', () => {
      component = builder.shallowGetComponent({ maxLength: 256 });
      const input = component.find('input');
      expect(input.prop('maxLength')).toEqual(255);
    });
  });
});
