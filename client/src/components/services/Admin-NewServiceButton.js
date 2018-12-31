/* eslint-disable no-undef */
import { Button, Form, Message} from 'semantic-ui-react'
import React, { Component} from 'react'
import './styles.css'
import axios from 'axios'


class NewServiceButton extends Component {
	constructor(props) {
        super(props);
		this.state={
            user: "",
            form: false,
            error: false,
            newService: {
                serviceName: "",
                price: 0,
                discount: false,
                discountPrice: 0,
            },
		}
    }

submit=(props)=>{
    let currentComponent = this
    currentComponent.setState({error: false})
    axios.post('/api/services', this.state.newService).then(function(response){
        currentComponent.setState({form: false})
        window.location.reload()
    }).catch(function(error){
        console.log("must be a number")
        currentComponent.setState({error: true})
    })
}

handleDismiss=()=>{
    this.setState({error: false})
}


error =()=>{
    return(
        <Message
        icon='x'
        header='Error Creating Service'
        content='Service price must be a numerical value only.'
        onDismiss={this.handleDismiss}
        negative
      />
    )
}

handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState((prevState, props) => ({
        newService: {
            ...prevState.newService,
            [name]: value,
        },
    }));
}

swap=()=>{
    this.setState({form: true})
}

cancel=()=>{
    this.setState({form: false})
}

returnButton=()=>{
    return(
        <div>
            <Button content='New Service' icon='plus' labelPosition='left' onClick={this.swap}/>
        </div>
    )
}

returnForm=()=>{
    return(
        <div>
              <Form>

                <Form.Field>
                    <label>Service Name</label>
                    <input name='serviceName' onChange={this.handleInputChange}/>
                </Form.Field>

                <Form.Field>
                    <label>Price</label>
                    <input name='price' onChange={this.handleInputChange}/>
                </Form.Field>

                <Button.Group>
                    <Button type='submit' onClick={this.submit}>Submit</Button>
                    <Button type='submit' onClick={this.cancel} negative>Cancel</Button>
                </Button.Group>
            </Form>

        </div>
    )
}


    render() {

      return ( 
        
            <div>
                {this.state.error ? this.error() : null}
                {this.state.form ? this.returnForm() : this.returnButton()}
            </div>
        )
    }
  }
  
  export default NewServiceButton;