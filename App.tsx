import React from 'react';
import { Provider } from 'react-redux';
import AppNavigation from './src/navigation/AppNavigation';
import { store } from './src/redux/store';

const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
