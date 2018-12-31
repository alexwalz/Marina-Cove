/* eslint-disable no-undef */
import { Message} from 'semantic-ui-react'
import React, { Component} from 'react'
import './styles.css'
import axios from 'axios'
import CalendarEvent from './CalendarEvent'


class ScheduleView extends Component {
	constructor(props) {
        super(props);
		this.state={
            user: "",
            update: false,
            error: false,
            schedule: {},
		}
    }

    componentDidMount=()=>{

        let currentComponent = this
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('/api/users/authenticate').then(function(response){

            currentComponent.setState({user: response.data.authenticatedUser.id}, function(){

                axios.get('/api/purchases').then(function(response){
                    console.log(response.data)
                    currentComponent.setState({schedule: response.data, update: true},function(){console.log(this.state)})
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

                {this.state.update ?

                this.state.schedule.map(event=>{
                    return(

                        <CalendarEvent event = {event} />
                    )
                })
                

                :null }

            </div>
        )
    }
  }
  
  export default ScheduleView;