import { Component } from "react";
import './index.css'
class ImgItem extends Component{
    render(){
        const{details, setDisplayUrl,isActive}=this.props
        const{thumbnailUrl,thumbnailUrlAltText,id}=details
        return(
            <li className={isActive?"selected-img":"not-selected-img"}>
                <img  src={thumbnailUrl} alt={thumbnailUrlAltText} onClick={()=> setDisplayUrl(id)}/>
            </li>
        )
    }
}
export default ImgItem