// App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/store';
import { LearnFormik } from './Components/LearnFormik';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <PostsList /> */}
        <LearnFormik />
      </div>
    </Provider>
  );
};

export default App;
