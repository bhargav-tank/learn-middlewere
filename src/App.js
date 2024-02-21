// App.js

import React from 'react';
import { Provider } from 'react-redux';
// Absolute imports
import store from './Store/store';
import PostsList from './Components/PostsList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <PostsList />
      </div>
    </Provider>
  );
};

export default App;
