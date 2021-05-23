import React, { Component } from 'react'
import{BrowserRouter,Route,Switch} from 'react-router-dom'
 import Home from './Home'
import Canvass from './Canvass'

// import Measurements from './Measurements'
import GetImages from './GetImages'
 class Router extends Component {
    render() {
        return (
            <BrowserRouter>
            <Switch>
            
            <Route path='/'exact  component={Home}/>
            <Route path='/GetImages'  component={GetImages}/>
            <Route path='/Canvass'  component={Canvass}/>
           
            </Switch>
                
            </BrowserRouter>
        )
    }
}
export default Router