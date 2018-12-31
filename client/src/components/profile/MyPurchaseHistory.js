import React, {Component} from 'react'
import './styles.css'
import axios from 'axios'
import { Segment, Icon, Header, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class LeftSidebar extends Component {
    
	constructor(props) {
        super(props);
		this.state={
            authUser: {},
            update: false
		}
    }

    componentDidMount=()=>{

        let currentComponent = this
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('/api/users/authenticate').then(function(response){

            currentComponent.setState({authUser: response.data.authenticatedUser}, function(){
                    axios.get('/api/purchases/user/' + this.state.authUser.id).then(function(response){
                        currentComponent.setState({purchases: response.data, update: true})
                    })
            })

        }).catch(function(err){
            window.location = '/404'
            console.log(err)
        })

    }


    render() {

        return(
            <div>
                <h1 style={{fontSize: "2rem", color: "#EF1B36"}}>Purchase History</h1>

                <div style={{marginTop: ""}}>
                    {this.state.update ?

                        this.state.purchases.length > 0 ?

                            this.state.purchases.map(purchase=>{

                                return(
                                    <Segment color='blue' tertiary style={{backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)'}}> 
                                    
                                        <h3>{purchase.serviceName}</h3>
                                        <p style={{color: "white", fontWeight: "bold"}}><Icon name='calendar' />Purchase Date: {purchase.purchaseDate.slice(0,10)}</p>
                                        <p style={{color: "white", fontWeight: "bold"}}><Icon name='calendar' />Drop-Off Date: {purchase.scheduledDate.slice(0,10)}</p>
                                        <p style={{color: "white", fontWeight: "bold"}}><Icon name='dollar sign' />{purchase.price}</p>
                                    
                                    </Segment>
                                )


                            })

                            :

                            <Segment placeholder color='blue' tertiary style={{textAlign:"center", padding: "20px", backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)'}}>
                                <Header icon>
                                <Icon name='dollar sign' />
                                    You do not have any purchases to list here.
                                </Header>
                                <br/>
                                <Link to='/profile/services'><Button color='green'>Schedule Services</Button></Link>
                          </Segment>


                        :null
                    }
                </div>

            </div>
        )
    }
}

export default LeftSidebar