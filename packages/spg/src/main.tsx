import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ConfigProvider } from '@ui/ConfigProvider';
import { AppQueryProvider } from '@query/AppQueryProvider';
import { store } from './store';
import App from './app/app';
import './styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <AppQueryProvider>
        <ConfigProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ConfigProvider>
      </AppQueryProvider>
    </Provider>
  </StrictMode>
);
