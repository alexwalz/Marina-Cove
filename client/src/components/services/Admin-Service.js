import React, {Component} from 'react'
import {Header, Icon, Statistic, Button, Form, Segment, Label} from 'semantic-ui-react'
import axios from 'axios'

class Service extends Component {
	constructor(props) {
        super(props);
		this.state={
            editForm: false,
            discountForm: false,
            service:{
                discount: false
            }
		}
    }

    componentDidMount=()=>{
        let currentComponent = this
        currentComponent.setState({service: this.props.service})
    }

    edit=()=>{
        this.setState({editForm: true})
    }

    cancel=()=>{
        this.setState({editForm: false})
    }

    handleServiceChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState((prevState, props) => ({
            service: {
                ...prevState.service,
                [name]: value,
            },
        }));
    }



    update=()=>{
        axios.put('/api/services/'+this.props._id, this.state.service).then(function(response){
            console.log(response)
            window.location.reload()
        })
    }

    delete=()=>{
        axios.delete('/api/services/'+this.props._id).then(function(response){
            console.log(response)
            window.location.reload()
        })
    }

    updateDiscount=()=>{
        this.setState((prevState, props) => ({
            service: {
                ...prevState.service,
                discount: true,
            },
        }), function(){
            axios.put('/api/services/'+this.props._id, this.state.service).then(function(response){
                console.log(response)
                window.location.reload()
            })
        });
    }


    disableDiscount=()=>{
        this.setState((prevState, props) => ({
            service: {
                ...prevState.service,
                discount: false,
            },
        }), function(){
            axios.put('/api/services/'+this.props._id, this.state.service).then(function(response){
                console.log(response)
                window.location.reload()
            })
        });
    }

    details=()=>{
        return(
            <Segment raised style={{height: "320px", minWidth: "170px"}}>
                {this.props.service.discount ? <Label as='a' color='red' ribbon>ON SALE</Label> : <div style={{marginTop: "20px"}}></div>}
                <div style={{margin: "auto", textAlign: "center"}}>
                    <Header as='h2' icon>
                        <Icon name='barcode'  style={{color: "#EC213C"}}/>
                        <span style={{color: "darkgrey"}}>{this.props.serviceName}</span>
                        <Header.Subheader>
                            <Statistic>
                                <div>{this.props.service.discount? <div style={{textDecoration: "line-through"}}><h3>${this.props.service.price}</h3></div>: <div style={{paddingTop: "15px"}}></div>}</div>
                                <Statistic.Value>${this.props.discounted ? this.props.discountedPrice : this.props.price}</Statistic.Value>
                            </Statistic>
                        </Header.Subheader>
                    </Header>
                    <hr/>
                </div>

                {!this.state.service.discount ? this.fullPriceButtonSet() : this.discountedButtonSet()}

            </Segment>
        )
    }

    discountForm=()=>{

        return(
            <div>
                <Form>
                    <Form.Field>
                        <label>Discount Price</label>
                        <input name='discountPrice' placeholder={this.props.service.discountPrice}  onChange={this.handleServiceChange}/>
                    </Form.Field>

                    <Button style={{marginTop: "10px", marginBottom: "10px"}}type='submit' onClick={this.updateDiscount}>Update</Button>
                </Form>
            </div>
        )
    }

    detailsForm=()=>{
        return(
            <Form>

            <Form.Field>
                <label>Service Name</label>
                <input name='serviceName' placeholder={this.props.service.serviceName} onChange={this.handleServiceChange}/>
            </Form.Field>

            <Form.Field>
                <label>Price</label>
                <input name='price' placeholder={this.props.service.price} onChange={this.handleServiceChange}/>
            </Form.Field>
                <Button.Group>
                <Button style={{marginTop: "10px", marginBottom: "10px"}}type='submit' onClick={this.update}>Update</Button>
                <Button style={{marginTop: "10px", marginBottom: "10px"}}type='submit' onClick={this.cancel} color='yellow'>Cancel</Button>
                <Button style={{marginTop: "10px", marginBottom: "10px"}}type='submit' onClick={this.delete} negative >Delete</Button>
            </Button.Group>
        </Form>
        )
    }

    discountUpdate=()=>{
        this.setState({discountForm: true})
    }

    fullPriceButtonSet=()=>{
        return(
            this.state.discountForm ? this.discountForm() :
            <div style={{margin: "auto"}}>
                <Button.Group fluid>
                    <Button onClick={this.edit}>Edit</Button>
                    <Button.Or />
                    <Button positive onClick={this.discountUpdate}>Enable Discount</Button>
                </Button.Group>
            </div>
        )
    }

    discountedButtonSet=()=>{
        return(
            <div style={{margin: "auto"}}>
                <Button.Group fluid>
                    <Button onClick={this.edit}>Edit</Button>
                    <Button.Or />
                    <Button negative onClick={this.disableDiscount}>Disable Discount</Button>
                </Button.Group>
            </div>
        )
    }


  render(props) {
    return(
        <div style={{position: "relative"}}>

            { this.state.discountForm ? this.discountForm() : !this.state.editForm ? this.details() : this.detailsForm()}

        </div>
     )
    }
}


export default Service