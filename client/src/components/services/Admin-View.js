/* eslint-disable no-undef */
import { Message, Grid} from 'semantic-ui-react'
import React, { Component} from 'react'
import './styles.css'
import axios from 'axios'
import NewServiceButton from './Admin-NewServiceButton';
import Service from './Admin-Service'


class ServicesView extends Component {
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
                    currentComponent.setState({services: response.data, update: true},function(){console.log(this.state)})
                }).catch(function(err){
                    console.log(err)
                })
            })

        }).catch(function(err){
            window.location = '/'
            console.log(err)
        })

    }

    errorMessage = () => {
        return(
           <Message negative>
           <Message.Header>Error Loading Services</Message.Header>
               <p>{this.state.errorMessage}</p>
           </Message>
        )
   }

   update=()=>{
       this.setState({update: true})
   }



    render() {

      return ( 
        
            <div>
                <NewServiceButton update={this.update.bind(this)}/>

                    <div style={{marginTop: "30px"}}>
                        <Grid columns={3}>
                            <Grid.Row>
                                {this.state.update ? this.state.services.map(service=>{
                                    console.log(service)
                                    return(
                                        <Grid.Column style={{paddingTop: "20px"}} >
                                            <Service service={service} serviceName={service.serviceName} price={service.price} discounted={service.discount} discountedPrice={service.discountPrice} _id={service._id}/>
                                        </Grid.Column>
                                    )

                                }) :null}
                            </Grid.Row>
                        </Grid>
                    </div>

            </div>
        )
    }
  }
  
  export default ServicesView;