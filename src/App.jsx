import React from "react";
import { Routes, Route } from "react-router-dom";
import TheLayout from "./container/TheLayout";
import routes from "./routes";

import './assets/style.scss'


function App() {
  return (
    <>
      <Routes>
        <Route element={<TheLayout />}>
          {routes.map((route) => {
            return (
              route.component && (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              )
            );
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
