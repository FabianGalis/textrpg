import React from "react";
import {Link} from "react-router-dom";

import Keys from '../../icons/keys.png';

export default function Navbar({setPlayerdata}){
    return (
        <div>
            <ul style={{overflow:"hidden"}}>
                <li style={{float:"left",paddingLeft:20}}>
                    <button onClick={() => setPlayerdata(null)}>
                        Sign out
                        <img style={{width:30,display: "inline-block",verticalAlign:"middle",padding:5}} src={Keys} alt=""/>
                    </button>
                </li>
                <li><h1 style={{float:"left",padding:10,paddingLeft:20}}>UniversalTextRpg</h1></li>
                <li style={{float:"right",padding:7}}><Link to="/storytest"><button>StoryTest</button></Link></li>
                <li style={{float:"right",padding:7}}><Link to="/browsestories"><button>Stories</button></Link></li>
                <li style={{float:"right",padding:7}}><Link to="/characters"><button>Characters</button></Link></li>
                <li style={{float:"right",padding:7}}><Link to="/"><button>Profile</button></Link></li>
            </ul>
            
            <hr style={{opacity:"20%"}}/>
        </div>
    );
}