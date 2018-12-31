/* eslint-disable no-undef */
import { Message, Accordion, Icon, Header} from 'semantic-ui-react'
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
            search: "",
            schedule: {},
            activeIndex: 1
		}
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
    
        this.setState({ activeIndex: newIndex })
      }

    componentDidMount=()=>{

        let currentComponent = this
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('/api/users/authenticate').then(function(response){

            currentComponent.setState({user: response.data.authenticatedUser.id}, function(){

                axios.get('/api/purchases').then(function(response){
                    currentComponent.setState({schedule: response.data, update: true})
                }).catch(function(err){
                    console.log(err)
                })

            })

        }).catch(function(err){
            window.location = '/'
            console.log(err)
        })

    }

    updateSearch=(event)=>{
        this.setState({search: event.target.value.substr(0,20).toLowerCase()})
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

        const { activeIndex } = this.state

        let filteredEvents;

        if(this.state.update){

            filteredEvents = this.state.schedule.filter(
                (event)=>{
                    let fullName = event.firstName + ' ' + event.lastName
                    console.log(fullName)
                    return(
                        fullName.toLowerCase().indexOf(this.state.search) !== -1
                    )
                }
            )
        }

      return ( 
        
            <div>


                {this.state.update ?

                this.state.schedule.map(event=>{
                    return(
                        !event.complete ?
                        <Accordion.Content active={activeIndex === 0}>
                            <CalendarEvent event = {event} />
                        </Accordion.Content>

                        : null
                    )
                })


                :null }

                <Accordion style={{marginTop: "20px"}}>
                    <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                    <Icon name='check' circular/>
                        <span style={{fontSize: '1.5rem', paddingLeft: "5px", color: "#1CB4AC"}}>Completed Events</span>
                    </Accordion.Title>

                    {/* <Accordion.Content> */}
                        {this.state.activeIndex === 0 ?
                        <div style={{position: "relative", padding: "20px 0px 30px 0px"}}><input style={{border: "1px solid #1CB4AC"}} placeholder='Customer Name' className='user-search-bar' type='text' value={this.state.search} onChange={this.updateSearch.bind(this)} /> <Icon disabled name='search' className='searchIcon' /></div>
                        : null }
                        {/* </Accordion.Content> */}

                    {this.state.update ?

                    filteredEvents.map(event=>{
                            return(
                                event.complete ?
                                <Accordion.Content active={activeIndex === 0}>
                                    <CalendarEvent event = {event} />
                                </Accordion.Content>

                                : null
                            )
                        })


                        :null }

                </Accordion>


            </div>
        )
    }
  }
  
  export default ScheduleView;