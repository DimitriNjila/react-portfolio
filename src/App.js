import { Route, Switch } from 'react-router'
import './App.css';
import GlobalStyle from './globalStyles';
import {lightTheme, DarkTheme } from './components/Themes'
import { ThemeProvider } from 'styled-components'
import Main from './components/Main'
import AboutPage from './components/AboutPage'
import Skills from './components/Skills'
import Work from './components/Work'



function App() {
  return (
    <> 
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/work" component={Work} />
    </Switch>
    </ThemeProvider>
    </>
  );
}

export default App;
