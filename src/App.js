import { connect } from 'react-redux';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import AppBar from './Components/AppBar/AppBar';
import HomeView from './Views/HomeView';
import RegisterView from './Views/RegisterView';
import LoginView from './Views/LoginView';
import ContactsView from './Views/ContactsView/ContactsView';

import operations from './Redux/operations';

import s from './App.module.css';

class App extends Component {
  // componentDidMount() {
  //   this.props.fetchContacts();
  // }

  render() {
    return (
      <div className={s.container}>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={ContactsView} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(App);
