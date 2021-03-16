import { Component } from 'react';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  onChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="">
        <h2>LogIn page</h2>

        <form onSubmit={this.onSubmit}>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.onChange}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.onChange}
            />
          </label>
          <button type="submit">LogIn</button>
        </form>
      </div>
    );
  }
}

export default LoginView;
