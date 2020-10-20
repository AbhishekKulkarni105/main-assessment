import React from 'react';
import { Route,  BrowserRouter, Switch,} from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Classroom from './Container/Classroom/Classroom';
import ModulesPage from './Container/ModulesPage/ModulePage';

import classes from './App.module.css';
import TopBar from './Components/TopBar/TopBar';
import Dsa from './Components/Dsa/Dsa';


class App extends React.Component{


  render(){ 
  return(
    <BrowserRouter>
    <div className="App">
      <TopBar/>
      <Switch>
      
     <Route  path="/Classroom" component={Classroom} />
      <Route  path="/modules/RB-020420" component={ModulesPage} />
     <Route  path="/modules/DSA-130720" component={Dsa} />
      
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
    
  );
  }
}

export default App;