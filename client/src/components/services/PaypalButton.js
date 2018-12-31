/* eslint-disable no-undef */
import {Message} from 'semantic-ui-react'
import React, { Component} from 'react'
import './styles.css'
import axios from 'axios'
import PaypalExpressBtn from 'react-paypal-express-checkout';


class PaypalButton extends Component {
	constructor(props) {
        super(props);
		this.state={
            update: false,
            error: false,
            success: false,
            cancel: false
		}
    }

    componentDidMount=(props)=>{
        var currentComponent = this
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('/api/users/authenticate').then(function(response){
            currentComponent.setState({authenticatedUser: response.data.authenticatedUser})
        }).catch(function(err){console.log(err)})
    }

    clearErrors=()=>{
        this.setState({
            error: false,
            success: false,
            cancel: false
        })
    }

    error=()=>{
        return(
            <div style={{padding: "10px 5px 20px 5px"}}>
            <Message negative>
                <Message.Header>Error!</Message.Header>
                <p>Looks like there is an error with Paypal.  Your transaction did not go through.</p>
            </Message>
            </div>
        )
    }

    success=()=>{
        return(
            <div style={{padding: "10px 5px 20px 5px"}}>
                  <Message
                    success
                    header='Service Purchased!'
                    content='Thank you for scheduling your service.  Someone from our team will be in contact with you soon!'
                />
            </div>
        )
    }

    cancel=()=>{
        return(
            <div style={{padding: "10px 5px 20px 5px"}}>
            <Message warning>
                <Message.Header>Cancelled Transaction</Message.Header>
                <p>Looks like you cancelled your transaction.  Your payment did not go through.</p>
            </Message>
            </div>
        )
    }


    render() {

        const onSuccess = (payment) => {

            this.setState((prevState, props) => ({
                authenticatedUser: {
                    ...prevState.authenticatedUser,
                },
                payment: payment,
                success: true,
                failsed: false,
                error: false,

            }));

            this.setState({payment: payment}, function(){

                const payload = {
                    userId: this.state.authenticatedUser.id,
                    email: this.state.authenticatedUser.email,
                    firstName: this.state.authenticatedUser.firstName,
                    lastName: this.state.authenticatedUser.lastName,
                    state: this.state.authenticatedUser.state,
                    zip: this.state.authenticatedUser.zip,
                    paid: this.state.payment.paid,
                    payerId: this.state.payment.payerId,
                    paymentId: this.state.payment.paymentId,
                    paymentToken: this.state.payment.paymentToken,
                    scheduledDate: this.props.date,
                    purchaseDate: Date.now(),
                    vehicleId: this.props.vehicleId,
                    serviceId: this.props.service._id,
                    serviceName: this.props.service.serviceName,
                    price: this.props.service.discount ? this.props.service.discountPrice : this.props.service.price

                }

                axios.post('/api/purchases', payload).then(function(response){
                    console.log(response)
                })
            });
        }
 
        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
            this.setState({cancel: true, success: false, error: false})
        }
 
        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
            this.setState({error: true, success: false, cancel: false})
        }
 
        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
        let total = this.props.service.discount ? this.props.service.discountPrice : this.props.service.price; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
 
        const client = {
            sandbox:    'Af7r4dcqK_YPD3NvADi3Jzx7RUytrSxzPrMPcGaXPZ1g9Daqn3IKsPLX8Dn1QRzFbg29v_WgSce3qi7f',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
          

        
        // In order to get production's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/
 
        // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
        return (
            <div>

                {this.state.error ? this.error() : null}
                {this.state.cancel ? this.cancel() : null}
                {this.state.success ? this.success() : null}

                <PaypalExpressBtn  shipping={1} env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} style={{color: "silver", shape: "rect", size: "medium", label: "buynow"}}/>
            
            </div>
        );
    }
  }
  
  export default PaypalButton;