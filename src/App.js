import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { Init } from "./store/reducers";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./component/home";
import Meeting from "./component/meeting"

const store = Init();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/meeting/:building'} component={Meeting} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
