import React from "react";
import { Routes, Route } from "react-router-dom";
import TheLayout from "./container/TheLayout";
import routes from "./routes";
import AOS from 'aos';
import "./assets/scss/styles.scss";
import 'aos/dist/aos.css';


function App() {
  React.useEffect(() => {
    AOS.init();
  }, []);
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
