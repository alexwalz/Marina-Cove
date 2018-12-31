/* eslint-disable no-undef */
import { Grid} from 'semantic-ui-react'
import React, { Component} from 'react'
import './styles.css'
import axios from 'axios'
import Service from './Customer-Service'



class CustomerView extends Component {
	constructor(props) {
        super(props);
		this.state={
            user: "",
            update: false,
            error: false,
            services: {},
		}
    }

    componentDidMount=()=>{

        let currentComponent = this
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('/api/users/authenticate').then(function(response){

            currentComponent.setState({user: response.data.authenticatedUser.id}, function(){
                axios.get('/api/services').then(function(response){
                    currentComponent.setState({services: response.data, update: true})
                }).catch(function(err){
                    console.log(err)
                })
            })

        }).catch(function(err){
            window.location = '/'
            console.log(err)
        })

    }



    render() {

      return ( 
        
            <div>
                
                <div style={{margin: "10px 10px 40px 10px"}}>
                    <h1 style={{color: "#EC213C", fontSize: "3.5rem", fontWeight: "bold"}}>Marina Cove Services</h1>
                </div>

                <Grid columns={3}>
                    <Grid.Row>
                        {this.state.update ? this.state.services.map(service=>{
                            return(
                                <Grid.Column style={{paddingTop: "20px"}} >
                                    <Service service={service} />
                                </Grid.Column>
                            )
                        }) : null }
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
  }
  
  export default CustomerView;