import {Component} from 'react'
import ImgItem from '../ThumbnailItem';
import './index.css'
const imagesList = [
    {
      id: 0,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
      imageAltText: 'nature mountain with pond',
      thumbnailAltText: 'nature mountain with pond thumbnail',
    },
    {
      id: 1,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
      imageAltText: 'nature sunset',
      thumbnailAltText: 'nature sunset thumbnail',
    },
    {
      id: 2,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
      imageAltText: 'nature mountain with ocean',
      thumbnailAltText: 'nature mountain with ocean thumbnail',
    },
    {
      id: 3,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
      imageAltText: 'nature mountain with forest',
      thumbnailAltText: 'nature mountain with forest thumbnail',
    },
    {
      id: 4,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png',
      imageAltText: 'nature leaves',
      thumbnailAltText: 'nature leaves thumbnail',
    },
    {
      id: 5,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-tree-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png',
      imageAltText: 'nature tree',
      thumbnailAltText: 'nature tree thumbnail',
    },
    {
      id: 6,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png',
      thumbnailUrl:
        '   ',
      imageAltText: 'nature waterfall',
      thumbnailAltText: 'nature waterfall thumbnail',
    }
  
  ]
  
class Gallery extends Component{
    state={displayUrl:imagesList[0]}
    setDisplayUrl=id=>{
        const url=imagesList.find(item=>item.id===id)
        this.setState({displayUrl:url})
      
        
    }
    render()
    {
        const {displayUrl}=this.state
        return(
            <div>
             
                <img  className="gallery-item"src={displayUrl.imageUrl} alt={displayUrl.imageAltText}/>
                <ul>
                    {
                        imagesList.map((item)=>(<ImgItem details={item} key={item.id} setDisplayUrl={this.setDisplayUrl} isActive={displayUrl.id===item.id}/>))
                    }
                </ul>

            </div>
        )
    }
}
export default Gallery;