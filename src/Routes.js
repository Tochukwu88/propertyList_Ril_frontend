import React from 'react'
import {
    BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import AllProperties from './Component/AllProperties'
import ListProperty from './Component/ListProperty'

import Login from './Component/Login'
import Register from './Component/Register'
import Search from './Component/Search'
import SingleProperty from './Component/SingleProperty'


 export default function Routes  () {
     return(
        <Router>
        <Switch>
            <Route path='/register' exact component={Register}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/list' exact component={ListProperty}/>
            <Route path='/properties' exact component={AllProperties}/>
            <Route path='/property/:propertyId' exact component={SingleProperty}/>
            <Route path='/search' exact component={Search}/>
        </Switch>



        </Router>
     )
 }