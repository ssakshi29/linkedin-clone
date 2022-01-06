import React, { useState } from 'react'

const navlink = {
    textAlign: 'center', 
    fontSize: 12,
    minWidth: 60,
    padding: 6,
    marginLeft: 10,
    marginRight: 10,
}

const selected = {
    textAlign: 'center', 
    fontSize: 12,
    minWidth: 60,
    padding: 6,
    marginLeft: 10,
    marginRight: 10,
    borderBottom: '1.5px solid black'
}

function Navbar(props) {
    const [text, setText] = useState("");


    return (
        <div style={{
            backgroundColor: 'white', 
            position: 'fixed', 
            height: 52, 
            width: '100%', 
            top: 0
            
        }}>

            <div style={{
                display: 'flex',
                justifyContent: 'center', 
                alignItems: 'center',
                maxWidth: 900,
                margin: 'auto'
            }}
            >
                <div>
                    <img src="https://th.bing.com/th/id/R.f08c524d147f46398cb54013ee7013ee?rik=XucknZ7zN1helQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fc%2fca%2fLinkedIn_logo_initials.png&ehk=scTd2jipFfRIzE9KFbs%2bxU64%2b0Ovsy%2b7c5tLUd%2fUYAw%3d&risl=&pid=ImgRaw&r=0  " alt="logo" height="32"/>
                </div>
                <div style={{flex: 1}}>

                    <input placeholder="Search" style={{
                        height: 32,
                        width: 280,
                        paddingLeft: 20,
                        border: '0px',
                        borderRadius: 5,
                        backgroundColor: '#EEF3F8',
                        marginLeft: 10
                    }}
                        value = {text}
                        onChange= {(e)=> setText(e.target.value)}
                    />
                </div>
                <div style={props.content==='Home' ? selected : navlink} onClick={() => props.setContent('Home')}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOFJREFUSEvtld0RQTEQhb/bgRZUgApQCSpBJXSCDqhACzpgjrm5E0nuzY/JE/uYbM63u3N20lA5msr65ABGwKktaAk8UopLBRjxaSt6BZIgqYAjsHIq1tkm1kUKICRudKOQGGAHbCNV7gHlBWMIsAYOsRG09xqVuvGiD5AjbkSDkBBATpEd5ZyckG3lLDmsCxdQKm4EPYgNUMX3gsrdLgUZm0W0AWptkjOTgVxpzXRfC3AD3lvf56JnYSee3m8B3G5DY/xqRH/AhzHPwNw6uQALx7opOVl/ctFqxD6cIlH70Qtl2ysZugObfgAAAABJRU5ErkJggg==" alt="" height="20"/>
                    <br/>
                    Home
                </div>
                <div style={props.content==='My Network' ? selected : navlink}  onClick={() => props.setContent('My Network')}>
                    <img src="" alt="" height="20"/>
                    <br/>
                    My Network
                </div>
                <div style={props.content==='Jobs' ? selected : navlink}  onClick={() => props.setContent('Jobs')}>
                    <img src="" alt="" height="20"/>
                    <br/>
                    Jobs
                </div>
                <div style={navlink} onClick={() => props.setContent('Messaging')}>
                    <img src="" alt="" height="20"/>
                    <br/>
                    Messaging
                </div>
                <div style={navlink}  onClick={() => props.setContent('Notifications')}>
                    <img src="" alt="" height="20"/>
                    <br/>
                    Notifications
                </div>
            </div>
        </div>
    )
}

export default Navbar

//  <img alt="" />
//    <img src="" alt="logo" height="35"/>