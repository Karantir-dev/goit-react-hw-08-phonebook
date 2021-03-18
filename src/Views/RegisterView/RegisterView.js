import { Component } from 'react';
import { connect } from 'react-redux';

import authOperations from '../../Redux/auth/auth-operations';

import s from './RegisterView.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  onChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className={s.container}>
        <h2>Registration page</h2>

        <form onSubmit={this.onSubmit}>
          <label className={s.label}>
            Name
            <input
              className={s.input}
              type="name"
              name="name"
              placeholder="Alexander Repeta"
              value={name}
              onChange={this.onChange}
            />
          </label>

          <label className={s.label}>
            Email
            <input
              className={s.input}
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={this.onChange}
            />
          </label>

          <label className={s.label}>
            Password
            <input
              className={s.input}
              type="password"
              name="password"
              value={password}
              onChange={this.onChange}
            />
          </label>
          <button className={s.btn} type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
