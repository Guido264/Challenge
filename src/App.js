import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import ImageGallery from './containers/ImageGallery';
import PersonalContent from './containers/PersonalContent';
import Products from './containers/Products';

const routes = [
  { route: "/", 
    content: "Personal Content", 
    component: <PersonalContent />
  },
  { route: "/imagegallery", 
    content: "Image Gallery",
    component: <ImageGallery />
  },
  { route: "/products", 
    content: "Products",
    component: <Products />
  }
];

function App() {

  const renderLinks = (route, index) => {

    return(
      <div className="title" key={index}>
        <NavLink to={route.route} exact activeStyle={{fontWeight: "bold", color: "#efb6b2"}}>
          {route.content}
        </NavLink>
      </div>
    )
  }

  const renderRoutes = (route, index) => {

    return(
      <Switch key={index}>
            <Route path={route.route} exact>
              {route.component}
            </Route>
      </Switch>
    )
  }

  return (
    <div>
      <Router>
        <div>
          {routes.map(renderLinks)}
          <hr />
          {routes.map(renderRoutes)}
        </div>
      </Router>
    </div>
  );
}

export default App;
