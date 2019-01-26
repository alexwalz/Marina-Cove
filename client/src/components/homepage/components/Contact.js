import React, { Component} from 'react'
import axios from 'axios'
import Navbar from '../../global/navigation/View'
import Footer from '../../global/navigation/Footer'
import { Button, Form, Loader, Input, TextArea, Container, Header } from 'semantic-ui-react'


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
            <div className='contact-form-container' style={{height: '100vh'}}>

                <Navbar/>

                <Container style={{marginTop: "150px", paddingBottom: "195px"}}>

                    <Header>Contact Us</Header>

                    <Form>

                        <Form.Group widths='equal'>

                        <Form.Field
                        onChange={this.handleInputChange}
                            id='form-input-control-first-name'
                            control={Input}
                            label='First name'
                            placeholder='First name'
                            name='firstName'
                        />
                        <Form.Field
                        onChange={this.handleInputChange}
                            id='form-input-control-last-name'
                            control={Input}
                            label='Last name'
                            placeholder='Last name'
                            name='lastName'
                        />

                        <Form.Field
                        onChange={this.handleInputChange}
                            id='form-input-control-phone'
                            control={Input}
                            label='Phone Number'
                            name='phoneNumber'
                        />

                        <Form.Field
                        onChange={this.handleInputChange}
                            id='form-input-control-last-email'
                            control={Input}
                            label='Email'
                            name='email'
                        />

                        </Form.Group>

                        <Form.Field
                        onChange={this.handleInputChange}
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        label='Question'
                        placeholder='Question'
                        name='body'
                        />

                    </Form>

                    <Button onClick={this.handleSubmit}>Submit</Button>

                </Container>

                <Footer/>

            </div>
                
        )
    }
  }
  
  export default ContactForm;