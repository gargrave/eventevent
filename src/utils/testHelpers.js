import React from 'react';
import { mount, shallow } from 'enzyme';

export class ComponentBuilder {
  constructor(component, defaultProps) {
    this.component = component;
    this.defaultProps = { ...defaultProps };
  }

  shallowGetComponent(extraProps = {}) {
    const props = {
      ...this.defaultProps,
      ...extraProps,
    };
    return shallow(<this.component {...props} />);
  }

  mountComponent(extraProps = {}) {
    const props = {
      ...this.defaultProps,
      ...extraProps,
    };
    return mount(<this.component {...props} />);
  }
}
