import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import Modal from 'react-responsive-modal';
import PaypalButton from './PaypalButton'
import './styles.css'
import axios from 'axios'

export default class ServiceModal extends Component {

    state = {
        open: false,
        vehicleUpdate: false,
        vehicles: [],
        date: "",
      };

    componentDidMount=(props)=>{

        var currentComponent = this;
        currentComponent.setState({service: this.props.service})

        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('/api/users/authenticate').then(function(response){

            currentComponent.setState({user: response.data.authenticatedUser.id}, function(){
                axios.get('/api/vehicles/'+this.state.user).then(function(response){

                    // var options = []

                    // response.data.map(vehicle=>{
                    //     var option = {key: vehicle._id, text: vehicle.year + " " + vehicle.make + " " + vehicle.model, value: vehicle._id, name: vehicle._id}
                    //     options.push(option)
                    // })

                    currentComponent.setState({vehicles: response.data, vehicleUpdate: true})

                }).catch(function(err){
                    console.log(err)
                })
            })

        }).catch(function(err){
            console.log(err)
        })

    }



    onOpenModal = () => {
    this.setState({ open: true });
    };
    onCloseModal = () => {
    this.setState({ open: false });
    };

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState((prevState, props) => ({
                ...prevState.newService,
                [name]: value,
        }));
    }
      
    
      render(props) {
        const { open } = this.state;

        return (
          <div>
            <Button onClick={this.onOpenModal} positive>Schedule Service</Button>
            <Modal open={open} onClose={this.onCloseModal} center style={{width: "700px", height: "600px"}} closeIconSize={16}>
              <h2 style={{color: "#EC213C", marginTop: "15px", textAlign: "center", fontSize: "2.5rem"}}>{this.props.service.serviceName}</h2>
              <hr/>
              <Form style={{padding: "20px 0px 20px 0px"}}>

              <label><strong>Please Select A Vehicle</strong></label><br/>
              
               {this.state.vehicleUpdate ?
                    <select onChange={this.handleInputChange} name='selectedVehicle' className='ui selection dropdown' placeholder='Please Select A Vehicle'>
                        <option></option>
                        {this.state.vehicles.map(vehicle=>{
                            return(
                                <option value={vehicle._id} name='selectedVehicle' className='item'>{vehicle.year + " " + vehicle.make + " " + vehicle.model}</option>
                            )
                        })}
                    </select>
                    : null
               }
               <p>If you do not see your vehicle listed in the drop down, please add the vehicle in your personal profile</p>

               <br/>
               <br/>
               
                <Form.Field error={false}>
                    <label>Drop Off Date</label>
                    <input placeholder='Service Date' type='date' name='date' onChange={this.handleInputChange}/>
                </Form.Field>
              </Form>

              <PaypalButton service={this.state.service} date={this.state.date} vehicleId={this.state.selectedVehicle}/>

            </Modal>

          </div>
        );
      }
}