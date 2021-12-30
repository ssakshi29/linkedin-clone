import React from 'react'


const navlink ={
    
    textAlign:'center',
    fontSize:12,
    minWidth:60,
    padding:6,
    marginLeft: 10,
    marginRight:10      

}

// const selected ={
//     borderBottom:'1.5px solid black'
// }
function Navbar() {
    return (
        <div style={{
            height:55,
            width:'100%' ,
            position:'fixed',
            backgroundColor: 'white' ,
           
        }}>
            <div style=
            {{
            position:'fixed',
             margin:'auto',
            display:'flex' ,
            justifyContent:'center',
            alignItems: 'center' 
            }}>

            <div>
                <img src="https://th.bing.com/th/id/R.f08c524d147f46398cb54013ee7013ee?rik=XucknZ7zN1helQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fc%2fca%2fLinkedIn_logo_initials.png&ehk=scTd2jipFfRIzE9KFbs%2bxU64%2b0Ovsy%2b7c5tLUd%2fUYAw%3d&risl=&pid=ImgRaw&r=0  " alt="logo" height="35"/>
            </div>
            <div  style={{
                flex:1
            }}>
                    
                <input  placeholder="Search" style={{
                    height:32,
                    width:150,
                    paddingLeft:20,
                    border:'0px',
                    borderRadius:5,
                    backgroundColor:'#EEF3F8', 
                    marginLeft:10
                }} />
            </div>
                <div style={navlink}>
                <img alt=""src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOFJREFUSEvtld0RQTEQhb/bgRZUgApQCSpBJXSCDqhACzpgjrm5E0nuzY/JE/uYbM63u3N20lA5msr65ABGwKktaAk8UopLBRjxaSt6BZIgqYAjsHIq1tkm1kUKICRudKOQGGAHbCNV7gHlBWMIsAYOsRG09xqVuvGiD5AjbkSDkBBATpEd5ZyckG3lLDmsCxdQKm4EPYgNUMX3gsrdLgUZm0W0AWptkjOTgVxpzXRfC3AD3lvf56JnYSee3m8B3G5DY/xqRH/AhzHPwNw6uQALx7opOVl/ctFqxD6cIlH70Qtl2ysZugObfgAAAABJRU5ErkJggg=="/>
                    <br/>
                    Home
                </div>
                <div style={navlink}>
                <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOFJREFUSEvtld0RQTEQhb/bgRZUgApQCSpBJXSCDqhACzpgjrm5E0nuzY/JE/uYbM63u3N20lA5msr65ABGwKktaAk8UopLBRjxaSt6BZIgqYAjsHIq1tkm1kUKICRudKOQGGAHbCNV7gHlBWMIsAYOsRG09xqVuvGiD5AjbkSDkBBATpEd5ZyckG3lLDmsCxdQKm4EPYgNUMX3gsrdLgUZm0W0AWptkjOTgVxpzXRfC3AD3lvf56JnYSee3m8B3G5DY/xqRH/AhzHPwNw6uQALx7opOVl/ctFqxD6cIlH70Qtl2ysZugObfgAAAABJRU5ErkJggg=="/>
                    <br/>
                    My Network
                </div>
                <div style={navlink}>
                <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOFJREFUSEvtld0RQTEQhb/bgRZUgApQCSpBJXSCDqhACzpgjrm5E0nuzY/JE/uYbM63u3N20lA5msr65ABGwKktaAk8UopLBRjxaSt6BZIgqYAjsHIq1tkm1kUKICRudKOQGGAHbCNV7gHlBWMIsAYOsRG09xqVuvGiD5AjbkSDkBBATpEd5ZyckG3lLDmsCxdQKm4EPYgNUMX3gsrdLgUZm0W0AWptkjOTgVxpzXRfC3AD3lvf56JnYSee3m8B3G5DY/xqRH/AhzHPwNw6uQALx7opOVl/ctFqxD6cIlH70Qtl2ysZugObfgAAAABJRU5ErkJggg=="/>
                    <br/>
                    Jobs
                </div>
                <div style={navlink}>
                <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOFJREFUSEvtld0RQTEQhb/bgRZUgApQCSpBJXSCDqhACzpgjrm5E0nuzY/JE/uYbM63u3N20lA5msr65ABGwKktaAk8UopLBRjxaSt6BZIgqYAjsHIq1tkm1kUKICRudKOQGGAHbCNV7gHlBWMIsAYOsRG09xqVuvGiD5AjbkSDkBBATpEd5ZyckG3lLDmsCxdQKm4EPYgNUMX3gsrdLgUZm0W0AWptkjOTgVxpzXRfC3AD3lvf56JnYSee3m8B3G5DY/xqRH/AhzHPwNw6uQALx7opOVl/ctFqxD6cIlH70Qtl2ysZugObfgAAAABJRU5ErkJggg=="/>
                    <br/>
                    Messaging
                </div>
                <div style={navlink}>
                <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOFJREFUSEvtld0RQTEQhb/bgRZUgApQCSpBJXSCDqhACzpgjrm5E0nuzY/JE/uYbM63u3N20lA5msr65ABGwKktaAk8UopLBRjxaSt6BZIgqYAjsHIq1tkm1kUKICRudKOQGGAHbCNV7gHlBWMIsAYOsRG09xqVuvGiD5AjbkSDkBBATpEd5ZyckG3lLDmsCxdQKm4EPYgNUMX3gsrdLgUZm0W0AWptkjOTgVxpzXRfC3AD3lvf56JnYSee3m8B3G5DY/xqRH/AhzHPwNw6uQALx7opOVl/ctFqxD6cIlH70Qtl2ysZugObfgAAAABJRU5ErkJggg=="/>
                    <br/>
                    Notification
                </div>


            </div>
        </div>    
    )
}

export default Navbar
