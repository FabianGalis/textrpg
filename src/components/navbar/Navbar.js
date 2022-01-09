import React from "react";
import {Link} from "react-router-dom";

import Keys from '../../icons/keys.png';

export default function Navbar(props){
    return (
        <div>
            <ul style={{overflow:"hidden"}}>
                <li key="signout" style={{float:"left",paddingLeft:20}}>
                    <button onClick={() => {props.setPlayerdata(null);props.setCurrentchar(null);}}>
                        Sign out
                        <img style={{width:30,display: "inline-block",verticalAlign:"middle",padding:5}} src={Keys} alt=""/>
                    </button>
                </li>
                <li key="title"><h1 style={{float:"left",padding:10,paddingLeft:20}}>UniversalTextRpg</h1></li>
                
                {props.currentchar?
                [
                    <li key="charactername" style={{float:"left",padding:10}}><h1>as <span style={{color:props.currentchar.color}}>{props.currentchar.name}</span></h1></li>
                ]:[]}
                
                <li key="storytest" style={{float:"right",padding:7}}><Link to="/storytest"><button>StoryTest</button></Link></li>
                <li key="stories" style={{float:"right",padding:7}}><Link to="/browsestories"><button>Stories</button></Link></li>
                <li key="characters" style={{float:"right",padding:7}}><Link to="/characters"><button>Characters</button></Link></li>
                <li key="profile" style={{float:"right",padding:7}}><Link to="/"><button>Profile</button></Link></li>
            </ul>
            
            <hr style={{opacity:"20%"}}/>
        </div>
    );
}