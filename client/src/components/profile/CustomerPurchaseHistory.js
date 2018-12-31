import React, {Component} from 'react'
import './styles.css'
import axios from 'axios'
import { Segment, Icon, Header } from 'semantic-ui-react'

class CustomerPurchaseHistory extends Component {
    
	constructor(props) {
        super(props);
		this.state={
            authUser: {},
            update: false
		}
    }

    componentDidMount=(props)=>{

        console.log(this.props)

        let currentComponent = this
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('/api/users/authenticate').then(function(response){

            currentComponent.setState({authUser: response.data.authenticatedUser}, function(){
                axios.get('/api/purchases/user/' + this.props.id).then(function(response){
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
                                        <p><Icon name='calendar' />Purchase Date: {purchase.purchaseDate.slice(0,10)}</p>
                                        <p><Icon name='calendar' />Drop-Off Date: {purchase.scheduledDate.slice(0,10)}</p>
                                        <p><Icon name='dollar sign' />{purchase.price}</p>
                                    
                                    </Segment>
                                )


                            })

                            :

                            <Segment placeholder color='blue' tertiary style={{textAlign:"center", padding: "20px", backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)'}}>
                                <Header icon>
                                <Icon name='dollar sign' />
                                    No Purchases are listed for this customer.
                                </Header>
                          </Segment>


                        :null
                    }

                </div>

            </div>
        )
    }
}

export default CustomerPurchaseHistory