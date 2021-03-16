import { Component } from 'react';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ name: '', email: '', password: '' });
  };

  onChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className="">
        <h2>Registration page</h2>

        <form onSubmit={this.onSubmit}>
          <label>
            Name
            <input
              type="name"
              name="name"
              value={name}
              onChange={this.onChange}
            />
          </label>

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
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default RegisterView;
