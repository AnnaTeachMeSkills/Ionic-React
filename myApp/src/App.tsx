import { Redirect, Route, Router,Switch,Link,BrowserRouter } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Apipage from './pages/Apipage';

import './App.css'; 

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useState } from 'react';


const App: React.FC = () => {

  
  
return(
  
  <div className="App">
     <BrowserRouter >
          <Route  exact path="/home" component={Home} />
          <Route exact path="/Apipage" component={Apipage} />
          <Link className="main_link" to="/Apipage">Find random activity</Link>
          <Link className="directionButton" to="/home">
                <div className="arrow arrow-left"></div>
          </Link>
      </BrowserRouter>
  </div>
)


};

export default App;
