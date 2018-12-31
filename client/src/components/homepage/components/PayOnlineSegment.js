import React from 'react'
import { Button, Header, Icon, Segment, Container } from 'semantic-ui-react'

const PayOnlineSegment =()=>{
    return(
        <Container style={{marginTop: "50px", marginBottom: "50px"}}>

            <Segment placeholder style={{backgroundColor: "#F0F0F0"}}>
                <Header icon>
                <Icon name='money' />
                    You Can Now Pay Your Bill Online!
                </Header>
                <br/>

                <Button animated  href='https://emove.com/login/' target='_blank' primary style={{paddingTop: "10px"}}>
                  <Button.Content visible>Pay Online</Button.Content>
                  <Button.Content hidden>
                      <Icon name='dollar sign' />
                  </Button.Content>
              </Button>

            </Segment>

        </Container>
    )
}

export default PayOnlineSegment