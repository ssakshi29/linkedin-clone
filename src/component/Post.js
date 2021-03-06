import React, { useState } from 'react'

const container = {
    backgroundColor: 'white',
    width: 650,
    borderRadius: 8,
    margin: 'auto',
    marginTop: 10,
    marginBottom: 10
}

function Post({name , title,avatar, content, imge , likeCount}) {
    const [like, setLike] = useState(false);
    
    return (
        <div style={container}>
            <div style={{display:'flex', alignItems:'center', paddingBottom: '10px'}}>
                <div style={{paddingLeft:'10px', paddingRight:"10px"}}>
                    <img src={avatar} alt="" height={50} style={{borderRadius: '50px'}}/>
                </div>
                <div>
                    <span>{name}</span>
                    <br/>
                    {title}
                    <br/>
                    {/* {time} */}
                </div>
            </div>
            <div style={{textAlign: 'justify', padding: 10}}>
                {content}
            </div>
            <div style={{padding: '10px', textAlign: 'center'}}>
                <img src={imge} width="50%" alt=""/>

            </div>
            <div style={{textAlign: 'justify', padding: 10, color: 'GrayText'}}>
                {like? (<span>You and other {likeCount} people liked this post</span>): (
                    <span>{likeCount} people liked the post</span>
                )}
                
            </div>
            <div style={{padding: '10px', textAlign: 'center', display: 'flex'}}>
                <div style={{flex: 1, cursor: 'pointer', color: (like?'blue':'black')}} onClick={() => setLike(prevLike => !prevLike)}><strong>Like</strong></div>
                <div style={{flex: 1, cursor: 'pointer'}}>Comment</div>
                <div style={{flex: 1, cursor: 'pointer'}}>Share</div>
                <div style={{flex: 1, cursor: 'pointer'}}>Send</div>
            </div>
        </div>
    )
}

export default Post