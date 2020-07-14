import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Biography from './Pages/Biography/Biography';



const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/biography/:id" component={Biography}/>
        </Switch>
        </BrowserRouter>
    )
}


export default Routes;