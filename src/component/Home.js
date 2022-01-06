import React from 'react'
import Post from './Post'
import Profile from './Profile'
import { proj } from './data'


function Home() {
    return (
        <div style={{display:'flex', margin: 'auto', maxWidth:1200}}>
            <div style={{padding: 10}}>
                <Profile/>
            
            </div>
            <div>
                {
        proj.map((item) => (<Post key={item.id} imge={item.imge} name={item.title} avatar={item.img} content={item.description} likeCount={item.like} />))
                } 
         
            </div>
          
        </div>
    )
}

export default Home