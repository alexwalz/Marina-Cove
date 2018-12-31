import React from 'react'
import {Image} from 'semantic-ui-react'
import Navbar from '../../../global/navigation/View'
import bannerImage from '../../../../images/banner_boat.jpg'
import servicesDivider from '../../../../images/marina-cove-services_divider_alpha.png'

const BoatStorage =()=>{
    return(
        <div>
            <Navbar/>
            <Image src={bannerImage} centered style={{paddingTop: "120px"}}/>
            <Image src={servicesDivider} centered style={{padding: "20px 0px 0px 0px"}}/>
            
        </div>
    )
}

export default BoatStorage