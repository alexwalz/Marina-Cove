import React, {Component} from 'react'
import { Icon, Header, Grid, Button, Message, Form } from 'semantic-ui-react'
import './styles.css'
import axios from 'axios'
import CustomerPurchaseHistory from './CustomerPurchaseHistory'
import UserVehicles from '../vehicles/ProfileVehicles'
import background from '../../images/grey.png'

class UserProfile extends Component {
    
	constructor(props) {
        super(props);
		this.state={
            myProfile: false,
            update: false,
            error: false,
            color: 'red',
            authenticatedUser: {
                role: "customer"
            }
        }
    }

    componentDidMount=(props)=>{

        var currentComponent = this
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        var _id = this.props.match.params.id
        axios.get('/api/users/authenticate').then(function(response){

            currentComponent.setState({authenticatedUser: response.data.authenticatedUser})

            if(response.data.authenticatedUser.id === _id){
                currentComponent.setState({myProfile: true})
            }

            if(response.data.authenticatedUser.role !== 'admin'){
                window.location = '/401'

            }else{
                axios.get('/api/users/profile/'+_id).then(function(response){

                    console.log(response)

                    if(response.status === 200){

                        if(response.data.success === false){
                            if(response.data.errMessage === 'unable to find user'){
                                window.location='/404'
                            }else{
                                window.location ='/401'
                            }
                        }else{
                            currentComponent.setState({user: response.data, update: true}, function(response){
                                if(this.state.user.active){
                                    currentComponent.setState({color: "green"})
                                }
                            })
                        }
                        
                    }

                }).catch(function(err){console.log(err)})
            }

        }).catch(function(err){console.log(err)})

    }

enableCaptainsClub=()=>{

    let currentComponent = this
    axios.put('/api/users/'+this.props.match.params.id, {captainsClub: true}).then(function(response){
        if(response.status === 200){
            currentComponent.setState((prevState, props) => ({
                user: {
                    ...prevState.user,
                    captainsClub: true,
                },
            }));
        }
    })
}

updateRole=(event, {value})=>{

    let currentComponent = this
    axios.put('/api/users/'+this.props.match.params.id, {role: value}).then(function(response){
        if(response.status === 200){
            currentComponent.setState((prevState, props) => ({
                user: {
                    ...prevState.user,
                    role: value,
                },
            }));
        }
    })
}

disableCaptainsClub=()=>{

    let currentComponent = this
    axios.put('/api/users/'+this.props.match.params.id, {captainsClub: false}).then(function(response){
        if(response.status === 200){
            currentComponent.setState((prevState, props) => ({
                user: {
                    ...prevState.user,
                    captainsClub: false,
                },
            }));
        }
    })
}


deleteUser =()=>{

    let _id = this.props.match.params.id

    axios.delete('/api/users/'+_id).then(function(response){
        if(response.status === 200){
            axios.delete(`/api/vehicles/${_id}/all`).then(function(response){
                if(response.status === 200){
                    window.location = '/profile/admin/users'
                }
            }).catch(function(error){console.log(error)})
        }
    }).catch(function(error){console.log(error)})
}


    errorMessage = () => {
        return(
           <Message negative>
           <Message.Header>Error Updating Profile</Message.Header>
               <p>We were not able to update your profile.  Please try again.</p>
               <p>If you are still having issues, please contact our team to let us know.</p>
           </Message>
        )
   }

  
    

    render() {

        const roleOptions = [
            { key: 'customer', text: 'Customer', value: 'customer' },
            { key: 'employee', text: 'Employee', value: 'employee' },
            { key: 'admin', text: 'Admin', value: 'admin' },
          ]

        return(
            <div>
                {this.state.update ? 
                    
                    <div>

                        <div style={{padding: "0 0 80px 0", background: `url(${background})`, padding: "15px",  borderTop: '3px solid lightgrey', borderRight: '3px solid lightgrey', borderLeft: '3px solid lightgrey'}}>

                            <Button.Group>

                                <Button icon labelPosition='left' style={{backgroundColor: "#EF1B36", color: "white"}} href='/profile/admin/users'>
                                    <Icon name='arrow left' />
                                    Go Back
                                </Button>
                                
                                {!this.state.user.captainsClub ?  
                                    <Button icon labelPosition='left' onClick={this.enableCaptainsClub} style={{backgroundColor: "#EF1B36", color: "white"}}><Icon name='star'/>Enable Captains Club</Button> 
                                    : null
                                }

                            </Button.Group>

                            <Button.Group floated='right'>

                                {this.state.user.captainsClub ?  
                                        <Button floated='right' icon labelPosition='left' onClick={this.disableCaptainsClub}><Icon name='star'/>Disable Captains Club</Button>
                                        :null
                                    }

                                {this.state.myProfile ? null :
                                    this.state.authenticatedUser.role === 'admin' ?
                                        <Button icon labelPosition='left' onClick={this.deleteUser} floated='right'>
                                            Delete User
                                            <Icon name='trash' />
                                        </Button>
                                    : null
                                }

                            </Button.Group>

                            {this.state.myProfile ? null :
                                <Form style={{width: "340px", marginTop: "20px"}}>
                                    <Form.Select fluid label='Account Role' options={roleOptions} placeholder={this.state.user.role} onChange={this.updateRole}/>
                                </Form>
                            }

                        </div>

                        <div>
                            <div style={{background: `url(${background})`, paddingBottom: "25px", borderBottom: '3px solid lightgrey', borderRight: '3px solid lightgrey', borderLeft: '3px solid lightgrey'}}>
                                <Header as='h2' icon textAlign='center'>
                                    <Icon name='user' circular style={{color: "#EF1B36"}}/>
                                    <Header.Content>{this.state.user.firstName + ' ' + this.state.user.lastName}</Header.Content>
                                    {this.state.user.captainsClub ? <Header.Content style={{color: "#EF1B36"}}>Captains Club Member</Header.Content> : null}
                                </Header>
                            </div>

                            <Grid columns={4} centered divided style={{marginTop: "60px"}}>
                                <Grid.Row> 

                                    <Grid.Column>
                                        <Header as='h2'>
                                            <Icon name='building' />
                                            <Header.Content>
                                                Address
                                            <Header.Subheader>{this.state.user.address}</Header.Subheader>
                                            <Header.Subheader>{this.state.user.city + ' ' + this.state.user.state + ', ' + this.state.user.zip }</Header.Subheader>
                                            </Header.Content>
                                        </Header>
                                    </Grid.Column>

                                    <Grid.Column >
                                        <Header as='h2'>
                                            <Icon name='phone' />
                                            <Header.Content>
                                                Phone Number
                                            <Header.Subheader>{this.state.user.phoneNumber}</Header.Subheader>
                                            </Header.Content>
                                        </Header>
                                    </Grid.Column>

                                    <Grid.Column>
                                        <Header as='h2'>
                                            <Icon name='mail' />
                                            <Header.Content>
                                                Email
                                            <Header.Subheader style={{color: this.state.color}}>{this.state.user.email}</Header.Subheader>
                                            </Header.Content>
                                        </Header>
                                    </Grid.Column>

                                    <Grid.Column>
                                        <Header as='h2'>
                                            <Icon name='user' />
                                            <Header.Content>
                                                Username
                                            <Header.Subheader>{this.state.user.username}</Header.Subheader>
                                            </Header.Content>
                                        </Header>
                                    </Grid.Column>

                                </Grid.Row>
                            </Grid>
                        </div>

                        <div style={{marginTop: "80px"}}>
                            <CustomerPurchaseHistory id={this.props.match.params.id} />
                        </div>

                        <div style={{marginTop: "80px"}}>
                            <UserVehicles id={this.props.match.params.id}/>
                        </div>


                    </div>
                    : null
                }
            </div>
        )
    }
}

export default UserProfile