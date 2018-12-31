import React, { Component } from 'react'
import { Menu, Label, Button, Icon, Dropdown } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import logo from '../../../images/Marina_Cove_Logo_Main-75x75.png'

export default class Navigation extends Component {

  state = {
      update: false,
      authenticated: false
  }

  componentDidMount=()=>{

    var currentComponent = this

    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');

    axios.get('/api/users/authenticate').then(function(response){
      currentComponent.setState({authUser: response.data.authenticatedUser, update: true, authenticated: true}, function(response){
        console.log(this.state)
      })
    }).catch(function(err){
      console.log(err)
      
    })
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable fixed='top' style={{width: "100%", backgroundColor: "#F0F0F0"}}>
        <Menu.Item href='/'>
          <img alt='label' src={logo}/>
        </Menu.Item>

        <Menu.Item
          name='features'
          active={activeItem === 'features'}
          onClick={this.handleItemClick}
        >
          Blog
        </Menu.Item>

        <Dropdown item simple text='Services' name='testimonials' active={activeItem === 'testimonials'} onClick={this.handleItemClick}>
          <Dropdown.Menu>
            <Dropdown.Item><Link to='/self-storage'>Self Storage</Link></Dropdown.Item>
            <Dropdown.Item><Link to='/boat-storage'>Boat Storage</Link></Dropdown.Item>
            <Dropdown.Item><Link to='/rv-storage'>RV Storage</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
          href='/about'
        >
          About Us
        </Menu.Item>

        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        >
          Contact Us
        </Menu.Item>


        {this.state.authenticated ? null :
        <Menu.Item position='right'>
                <Button icon labelPosition='left' href='/login'  style={{backgroundColor: "#18547F", color: "white"}}>
                    <Icon name='arrow right' />
                    Login
                </Button>
        </Menu.Item>
        }

        {this.state.authenticated ? 
            <Menu.Item  position='right'>
                <Label as='a' style={{backgroundColor: "lightgrey", color: "#EF1B36"}} image href='/profile'>
                    <img alt='label user' src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
                    {this.state.authUser.firstName} {this.state.authUser.lastName}
                    <Label.Detail>{this.state.authUser.role}</Label.Detail>
                </Label>
            </Menu.Item>
          
        : null}

        {this.state.authenticated ? 
            <Menu.Item name='Logout' >
                <Button icon labelPosition='left' onClick={this.logout} style={{backgroundColor: "#EF1B36", color: "white"}}>
                    <Icon name='arrow left' />
                    Logout
                </Button>
            </Menu.Item>
            
        : null}

      </Menu>
    )
  }
}