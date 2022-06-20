import React from 'react';
import {
  HashRouter,
  Route, 
  Switch,
  Redirect
} from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Works from '../pages/works/Works';
import Contact from '../pages/contact/Contact'
import GlobalStyle from '../GlobalStyle';
import ScrollToTop from '../components/ScrollToTop'
import {Footer, NavBar, Redireccion} from '../components';

const AppRouter = () => {
  return (
    <HashRouter>
      <GlobalStyle />
      <ScrollToTop />
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/works' component={Works} />
        <Route exact path='/contact' component={Contact} />

        <Route exact path='/git' component={Redireccion}  />

        <Redirect to='/' />
      </Switch>
      <Footer />
    </HashRouter>
  )
}

export default AppRouter