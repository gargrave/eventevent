// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { func, shape } from 'prop-types';

import type { LoginErrors, LoginUser } from '../../flowtypes';

import { loginUserModel } from '../../models';
import { loginHasAllFields, validateLogin } from '../../validators';

import LoginForm from '../LoginForm/LoginForm';

type Props = {
  actions: Object,
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
      // TODO: need to update this to show errors on form
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
        const res = await this.props.actions.login(loginUser);
        console.log('%csuccessfully logged in!', 'color: pink;font-size: 12px;background:#454;padding:2px 4px;');
        console.log({ res });
        // this.props.history.push(localUrls.account);
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
      <div>
        <h2>LoginPage</h2>

        <LoginForm
          onChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />

        <Link to='/'>Go to Home Page</Link>
      </div>
    );
  }
}

export default LoginPage;
