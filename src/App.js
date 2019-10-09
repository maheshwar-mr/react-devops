import React, {Component} from "react"
import {BrowserRouter} from "react-router-dom"
import { Switch, Route, Redirect } from 'react-router-dom';
import ViewBook from "./ViewBook"
import Header from "./Header"
import AddBook from "./AddBook"


class App extends Component {
  constructor() {
      super()
      this.state = {
          name: "Sally",
          age: 13
      }
  }
    
  render() {
    const view=() =>{
      return (<ViewBook />)}
      function add()
      {
        return(<AddBook/>)
      }

    return (
      <div>
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route path="/viewbook" component={view}/>
            <Route path="/addbook" component={add}/>
            <Redirect to="/viewbook" />
          </Switch>
        </div>
      </BrowserRouter>
      </div>
    )    
  }
}

export default App
