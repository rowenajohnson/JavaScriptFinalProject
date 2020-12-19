import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from './index';
import New from './New';
import Destroy from './Destroy';
import Edit from './Edit';

const Routes = () => {
    const {user} = useContext(UserContext);
  return (
    <Switch>
      <Route exact path="/" component={Index}/>
      <Route exact path="/new" component={New}/>
      <Route exact path="/destroy/:id" component={Destroy}/>
      <Route exact path="/edit/:id" component={Edit}/>
      
    </Switch>
  );
}
 
export default Routes;