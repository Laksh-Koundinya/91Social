import React from "react";


import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoutes";
import { HomePage } from "../Components/Login";
import MainDashBoard from "../Components/MainDashBoard";




const Routes=()=> {
  return (
    <React.Fragment>
      <Switch>

      <Route exact path="/">
          <HomePage />
        </Route>
      
        <PrivateRoute exact path="/dashboard">
         <MainDashBoard />
        </PrivateRoute>
        <Route render={() => <div>Error 404</div>} />
      </Switch>
    </React.Fragment>
  );
}

export default Routes;
