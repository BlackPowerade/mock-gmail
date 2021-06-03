import { Component } from 'react'
import Container from '@material-ui/core/Container';
import './App.css';
import SearchAndNav from './Components/SearchAndNav'
import Emails from './Components/Emails'

class App extends Component {

  

  render() {
    return (
      <>
        <Container maxWidth="lg">
          <SearchAndNav />
          <Emails />

        </Container>
          
      </>
    );
  }
}

export default App;
