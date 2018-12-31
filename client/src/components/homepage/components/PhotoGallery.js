import React from 'react';
import Gallery from 'react-grid-gallery';
import image1 from '../../../images/banner_image.jpg'
import image2 from '../../../images/DSC08758-1024x575.jpg'
import image3 from '../../../images/DSC08774-1-e1521563489744.jpg'
import image4 from '../../../images/DSC08785-1024x575.jpg'
import image5 from '../../../images/DSC08791-1024x575.jpg'
import image6 from '../../../images/DSC08792-1024x575.jpg'
import image7 from '../../../images/DSC08794-1024x575.jpg'
import image8 from '../../../images/DSC08796-1024x575.jpg'
import image9 from '../../../images/DSC08802-1024x575.jpg'
import image10 from '../../../images/DSC08813-1024x575.jpg'
import image11 from '../../../images/experience_the_good_life_at_marina_cove_2.jpg'
import image12 from '../../../images/MARINA-COVE-5.png'


const PhotoGallery =()=>{


    const IMAGES =
    [{
            src: image1,
            thumbnail: image1,
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            isSelected: true,
    },
    {
            src: image2,
            thumbnail: image2,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
    },
    {
        src: image3,
        thumbnail: image3,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
},
{
    src: image4,
    thumbnail: image4,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
},
{
    src: image5,
    thumbnail: image5,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
},
{
    src: image6,
    thumbnail: image6,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
},
{
    src: image7,
    thumbnail: image7,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
},
{
    src: image8,
    thumbnail: image8,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
},
{
    src: image9,
    thumbnail: image9,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
},
{
    src: image10,
    thumbnail: image10,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
},
{
    src: image11,
    thumbnail: image11,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
},
{
    src: image12,
    thumbnail: image12,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
}
]


    return(
        <Gallery images={IMAGES}/>

    )
}

export default PhotoGallery
