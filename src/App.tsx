import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Container from "@material-ui/core/Container";
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignedPage from './pages/SignedPage/SignedPage';

const App: React.FC = () => (
  <div className="App">
    <Container maxWidth='lg'>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={SignInPage}/>
          <Route path="/signup" component={SignUpPage}/>
          <Route path="/logged" component={SignedPage}/>
        </Switch>
      </Router>
    </Container>
  </div>
);

export default App;
