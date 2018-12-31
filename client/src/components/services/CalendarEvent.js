import React, { Component} from 'react'
import { Segment, Icon, Statistic, Button} from 'semantic-ui-react'
import axios from 'axios'


class Event extends Component {
	constructor(props) {
        super(props);
		this.state={
            user: "",
            update: false,
            error: false,
            vehicle: {},
		}
    }

    componentDidMount=()=>{

        let currentComponent = this
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('/api/users/authenticate').then(function(response){

            currentComponent.setState({user: response.data.authenticatedUser.id}, function(){

                axios.get('/api/vehicles/purchase/'+ this.props.event.vehicleId ).then(function(response){
                    currentComponent.setState({vehicle: response.data, update: true},function(){console.log(this.state)})
                }).catch(function(err){
                    console.log(err)
                })

            })

        }).catch(function(err){
            window.location = '/'
            console.log(err)
        })

    }

   update=()=>{
       this.setState({update: true})
   }

   completeEvent=()=>{

        axios.put('/api/purchases/'+ this.props.event._id, {complete: true, completed_by: this.state.user} ).then(function(response){
            console.log(response)

            if(response.status === 200){
                window.location.reload()
            }

        }).catch(function(err){
            console.log(err)
        })

   }



    render(props) {

      return ( 
        <div style={{padding: "10px"}}>
            {this.state.update ? 

            <Segment>
                <Statistic.Group>

                    <Statistic>
                        <Statistic.Value>
                            <Icon name='calendar' inline style={{color: "#1CB4AC"}}/>
                        </Statistic.Value>
                        <Statistic.Label>{this.props.event.scheduledDate.slice(0,10)}</Statistic.Label>
                    </Statistic>


                    <Statistic>
                        <Statistic.Value text>
                            Service<br />
                            Purchased
                        </Statistic.Value>
                        <Statistic.Label>{this.props.event.serviceName}</Statistic.Label>
                    </Statistic>

                    <Statistic>
                        <Statistic.Value>
                            <Icon name='dollar sign' style={{color: "#1CB4AC"}}/>
                            {this.props.event.price}
                        </Statistic.Value>
                    </Statistic>

                    <Statistic>
                        <Statistic.Value>
                            <Icon name='user' inline style={{color: "#1CB4AC"}}/>
                        </Statistic.Value>
                        <Statistic.Label>{this.props.event.firstName} {this.props.event.lastName}</Statistic.Label>
                    </Statistic>

                    <Statistic>
                        <Statistic.Value text>
                            License<br />
                            Plate
                        </Statistic.Value>
                        <Statistic.Label>{this.state.vehicle.license}</Statistic.Label>
                    </Statistic>

                    <Statistic>
                        <Statistic.Value>
                            <Icon name='car' inline style={{color: "#1CB4AC"}}/>
                        </Statistic.Value>
                        <Statistic.Label>{this.state.vehicle.make} {this.state.vehicle.model}</Statistic.Label>
                    </Statistic>

                </Statistic.Group>

                {!this.props.event.complete ? 

                    <Button floated='right' style={{marginTop: "-60px"}} onClick={this.completeEvent}>Complete</Button>
                    : 
                    <Button floated='right' circular icon='check' color='green' style={{marginTop: "-60px"}}/>
                }

            </Segment>

            :null }

        </div>
        )
    }
  }
  
  export default Event;