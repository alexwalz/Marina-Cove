/* eslint-disable no-undef */
import { Header, Icon, Statistic, Label, Segment} from 'semantic-ui-react'
import React, { Component} from 'react'
import './styles.css'
import ServiceModal from './ServiceModal'


class CustomerView extends Component {
	constructor(props) {
        super(props);
		this.state={

		}
    }


    render() {

      return ( 
        
            <div>
                <Segment raised style={{height: "320px", minWidth: "170px"}}>
                    {this.props.service.discount ? <Label as='a' color='red' ribbon>ON SALE</Label> : <div style={{marginTop: "20px"}}></div>}
                    <div style={{margin: "auto", textAlign: "center"}}>
                        
                        <Header as='h2' icon>
                            <Icon name='barcode'  style={{color: "#EC213C"}}/>
                            <span style={{color: "darkgrey"}}>{this.props.service.serviceName}</span>
                            <Header.Subheader>
                                <Statistic>
                                    <div>{this.props.service.discount? <div style={{textDecoration: "line-through"}}><h3>${this.props.service.price}</h3></div>: <div style={{paddingTop: "15px"}}></div>}</div>
                                    <Statistic.Value>${this.props.service.discount ? this.props.service.discountPrice : this.props.service.price}</Statistic.Value>
                                </Statistic>
                            </Header.Subheader>
                        </Header>
                    </div>
                    <hr style={{backgroundColor: "lightgrey"}}/>
                    <div style={{textAlign: "center", marginTop: "10px"}}>
                       <ServiceModal service={this.props.service}/>
                    </div>
                </Segment>
                
            </div>

        )
    }
  }
  
  export default CustomerView;