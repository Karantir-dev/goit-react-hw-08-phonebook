import { connect } from 'react-redux';
import { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import AppBar from './Components/AppBar/AppBar';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

import authOperations from './Redux/auth/auth-operations';

import s from './App.module.css';

const HomeView = lazy(() => import('./Views/HomeView/HomeView'));
const RegisterView = lazy(() => import('./Views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('./Views/LoginView/LoginView'));
const ContactsView = lazy(() => import('./Views/ContactsView/ContactsView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <div className={s.container}>
        <AppBar />

        <Suspense fallback={<p>Загружаем...</p>}>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <PublicRoute
              restricted
              path="/register"
              redirectTo="/"
              component={RegisterView}
            />
            <PublicRoute
              restricted
              path="/login"
              redirectTo="/"
              component={LoginView}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={ContactsView}
            />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
