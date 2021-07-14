import React from "react";
import { AppRoutes } from "./route/AppRoutes";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import store from "./store/configureStore";
import { BrowserRouter as Router } from "react-router-dom";
import History from "./route/History";
// import Login from "./page/Login";
// const { store, persistor } = configureStore();
// import Header from '../src/base/Header';
// import Sidebar from '../src/base/Sidebar';

function App() {
  
  return (
        <Router history={History}>
          <AppRoutes />
          {/* <Login />
          <Header />
          <Sidebar />
          <div className="main-comman-wrapping">
            <AppRoutes />
          </div> */}
        </Router>
  );
}

export default App;

