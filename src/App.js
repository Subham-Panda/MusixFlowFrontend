import React from "react";
import { AppRoutes } from "./route/AppRoutes";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import store from "./store/configureStore";
import { BrowserRouter as Router } from "react-router-dom";
import History from "./route/History";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { useSelector } from "react-redux";
// import Login from "./page/Login";
// const { store, persistor } = configureStore();
// import Header from '../src/base/Header';
// import Sidebar from '../src/base/Sidebar';

function App() {
  // const clienturl = useSelector((state) => state.graphql.clienturl);
  const clienturl = 'https://api.thegraph.com/subgraphs/name/dmj16/panda2';

  const client = new ApolloClient({
    uri: clienturl,
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <Router history={History}>
        <AppRoutes />
        {/* <Login />
          <Header />
          <Sidebar />
          <div className="main-comman-wrapping">
            <AppRoutes />
          </div> */}
      </Router>
    </ApolloProvider>
  );
}

export default App;

