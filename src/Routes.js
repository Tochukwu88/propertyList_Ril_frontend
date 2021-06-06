import React from 'react'
import {
    BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import ListProperty from './Component/ListProperty'

import Login from './Component/Login'
import Register from './Component/Register'


 export default function Routes  () {
     return(
        <Router>
        <Switch>
            <Route path='/register' exact component={Register}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/list' exact component={ListProperty}/>
        </Switch>



        </Router>
     )
 }