import React, {Component} from 'react';
import{Switch,Route} from 'react-router-dom'
import './App.css';
import Header from './components/header/header-component'
import HomePage from './pages/homepage/homepage.component'
import SignInAndSignUpPage from './pages/sigh-in-and-sign-up/sigh-in-and-sign-up.component'
import ShopPage from './pages/shop/shop.comopnent'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'


class App extends Component{
  constructor(){
    super()
    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async user=>{
     createUserProfileDocument(user)
      // this.setState({currentUser:user})
      // console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    )}
}

export default App;
