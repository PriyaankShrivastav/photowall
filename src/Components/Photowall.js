import React from 'react';
import Photo from './Photo'
import PrompType from 'prop-types'
import {Link} from 'react-router-dom';

function PhotoWall(pp){
    console.log('photoWall.js')
    return <div>
           <Link className='addIcon' to='addPhoto' ></Link>
           <div className='photo-grid'>
              {pp.posts
              .sort(function(x,y){
                  return y.id-x.id
              })
              .map((post, index) => <Photo key ={index} post={post} {...pp} index={index}/>)}
           </div>
           </div>
}

PhotoWall.PrompType = {
    posts : PrompType.array.isRequired,
    onRemovePhoto : PrompType.func.isRequired
}
// class PhotoWall extends Component{
//     render(){
//         return <div className='photo-grid'>
//             {this.props.posts.map((post, index) => <Photo key ={index} post={post}/>)}
//         </div>
//     }
// }
export default PhotoWall