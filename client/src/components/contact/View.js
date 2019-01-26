/* eslint-disable no-undef */
import { Button, Form, Loader } from 'semantic-ui-react'
import React, { Component} from 'react'
import './styles.css'
import axios from 'axios'



class ContactForm extends Component {
	constructor(props) {
        super(props);
		this.state={
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            body: "",
            submitting: false,
            message: ""
		}
    }

    componentDidMount=()=>{
        
    }
    

    handleInputChange = (event) => {
		const value = event.target.value;
		const name = event.target.name;
		this.setState({
			[name]: value
        });
    }

    handleSubmit=(e)=>{

        this.setState({submitting: true})

        e.preventDefault()

        axios.post('api/communications/contact', this.state)

            .then((result) => {
                console.log(result)
            })

            .catch((error) => {
                console.log(error)
            });

    }


    render() {

      return ( 
            <div className='contact-form-container'>

                <Form>

                    <Form.Group widths='equal'>

                    <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        label='First name'
                        placeholder='First name'
                        name='firstName'
                    />
                    <Form.Field
                        id='form-input-control-last-name'
                        control={Input}
                        label='Last name'
                        placeholder='Last name'
                        name='lastName'
                    />

                    <Form.Field
                        id='form-input-control-phone'
                        control={Input}
                        label='Phone Number'
                        name='phoneNumber'
                    />

<                   Form.Field
                        id='form-input-control-last-email'
                        control={Input}
                        label='Email'
                        name='email'
                    />

                    </Form.Group>

                    <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Question'
                    placeholder='Question'
                    name='body'
                    />

                    <Button onClick={this.handleSubmit}>Submit</Button>
                    
                </Form>

                

            </div>
                
        )
    }
  }
  
  export default ContactForm;