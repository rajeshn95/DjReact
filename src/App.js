import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import BaseRouter from './routes';
import { CookiesProvider } from 'react-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';

class App extends Component {
// learn more
  render() {
    return (
      <BrowserRouter>
        <CookiesProvider>
          <div className="App">
            <Layout />
            <BaseRouter />
          </div>
        </CookiesProvider>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
