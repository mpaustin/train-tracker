import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/index';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

const theme = createMuiTheme();

ReactDOM.render(
  <Auth0Provider
    domain="mpaustin.us.auth0.com"
    clientId="UjDu5lV6rCJaL6Ss7sOwLZbkyI4TdFO1"
    redirectUri={window.location.origin}
  >
    <ThemeProvider theme={theme} >
      <Provider store={store}>
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </Provider>
    </ThemeProvider>
  </Auth0Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
