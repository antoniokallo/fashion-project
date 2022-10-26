import {Routes, Route, Link} from "react-router-dom";
import Homepage from './Homepage';
import Brandinfo from './Brandinfo';
import Clothinginfo from './Clothinginfo';
import Closet from './Closet';
import {
   Button,
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'
import './App.css';
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function App() {

  // RENDER 
  return (
    <div>
  {/* HEADER */}
  
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/globe-512.png' />
<Link to="/Homepage"> Fashion Forward </Link>
        </Menu.Item>
  
        <Menu.Item className="floated right">
          <Link to="/LoginForm">Login </Link>
        </Menu.Item>


        <Dropdown item simple text='Dropdown'>
          <Dropdown.Menu>
            <Dropdown.Header>
            <Link to="/Clothinginfo">items </Link>
            </Dropdown.Header>
            <Dropdown.Header>
            <Link to="/Brandinfo">Brands </Link>
            </Dropdown.Header>
            <Dropdown.Divider />
            <Dropdown.Header>
            <Link to="/Closet">Closet </Link>
            </Dropdown.Header>
     
          </Dropdown.Menu>
        </Dropdown>
        <button class="ui olive button">
  <i class="google icon"></i>
  google
</button>
<button class="ui vk button">
  <i class="github icon"></i>
  github
</button>


      </Container>
    </Menu>
  
{/* ROUTES */}
<Routes>
  <Route path='/Brandinfo' element={<Brandinfo />}/>
  <Route path='/Homepage' element={<Homepage />}/>
  <Route path ='/Clothinginfo' element={<Clothinginfo />}/>
  <Route path ='Closet' element={<Closet />}/>
  <Route path ='SignupForm' element={<SignupForm />}/>
  <Route path ='LoginForm' element={<LoginForm/>}/>
</Routes>

{/* FOOTER */}
<Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 1' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 2' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 3' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Footer Header' />
            <p>
              Extra space for a call to action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Image centered size='mini' src='/logo.png' />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
</div>
  );
}

export default App;