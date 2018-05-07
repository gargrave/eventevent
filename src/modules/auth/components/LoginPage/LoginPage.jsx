// @flow
import React, { Component } from 'react';
import { func, object, shape } from 'prop-types';

import type { LoginErrors, LoginUser } from '../../flowtypes';

import { localUrls } from '../../../../globals/urls';
import { loginUserModel } from '../../models';
import { loginHasAllFields, validateLogin } from '../../validators';

import LoginForm from '../LoginForm/LoginForm';

type Props = {
  actions: Object,
  history: Object,
};

type State = {
  errors: LoginErrors,
  formDisabled: boolean,
  model: LoginUser,
  submitDisabled: boolean,
  topLevelError: string,
};

class LoginPage extends Component<Props, State> {
  static propTypes = {
    actions: shape({
      login: func.isRequired,
    }),
    history: object,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      errors: loginUserModel.emptyErrors(),
      formDisabled: false,
      model: loginUserModel.empty(),
      submitDisabled: true,
      topLevelError: '',
    };
  }

  onInputChange = (e: any) => {
    const key = e.target.name;
    if (key in this.state.model) {
      const model = this.state.model;
      model[key] = e.target.value;
      const submitDisabled = !loginHasAllFields(model);

      this.setState({ 
        model, 
        submitDisabled, 
      });
    }
  }

  onSubmit = async(e: any) => {
    e.preventDefault();
    const model = this.state.model;
    const errors = validateLogin(model);

    if (errors.found) {
      this.setState({ errors });
      return;
    }

    this.setState({
      errors: loginUserModel.emptyErrors(),
      formDisabled: true,
      topLevelError: '',
    }, async() => {
      try {
        const loginUser = loginUserModel.toAPI(model);
        await this.props.actions.login(loginUser);
        this.props.history.push(localUrls.events.myHosted);
      } catch (err) {
        this.setState({
          formDisabled: false,
          topLevelError: err,
        });
      }
    });
  }

  render() {
    return (
      <div style={{maxWidth: '600px'}}>
        <h2>LoginPage</h2>
        <LoginForm
          disabled={this.state.formDisabled}
          errors={this.state.errors}
          loginUser={this.state.model}
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
          topLevelError={this.state.topLevelError}
        />
      </div>
    );
  }
}

export default LoginPage;
