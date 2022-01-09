import React from 'react';
import Line from '../../icons/line.png'

import "./PlayerProfile.css";

export default function PlayerProfile(props) {
  return(
    <div>
		<h1 style={{textAlign:'center',paddingTop:50}}>Welcome back, {props.playername}</h1>

        <img style={{display:'block',marginLeft:'auto',marginRight:'auto', paddingBottom:80, width:400 }} src={Line} alt=""/>

        <div id="container">
            <div id="wrapper">
                <div id="content">
                    <div className="month">
                        <ul>
                            <li className="prev">&#10094;~</li>
                            <li className="next">~&#10095;</li>
                            <li>
                            January<br/>
                            <span>2022</span>
                            </li>
                        </ul>
                    </div>

                    <ul className="weekdays">
                    <li>Mo</li>
                    <li>Tu</li>
                    <li>We</li>
                    <li>Th</li>
                    <li>Fr</li>
                    <li>Sa</li>
                    <li>Su</li>
                    </ul>

                    <ul className="days">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li><span className="active">12</span></li>
                    <li><span className="active">13</span></li>
                    <li><span className="active">14</span></li>
                    <li>15</li>
                    <li>16</li>
                    <li>17</li>
                    <li>18</li>
                    <li>19</li>
                    <li>20</li>
                    <li>21</li>
                    <li>22</li>
                    <li>23</li>
                    <li>24</li>
                    <li>25</li>
                    <li>26</li>
                    <li>27</li>
                    <li>28</li>
                    <li>29</li>
                    <li>30</li>
                    </ul>
                </div>
            </div>
            <div id="nameicon">
                <p style={{fontFamily:'initials',fontSize:'130px'}}>{props.playername.charAt(0).toUpperCase()}</p>
                <h1>{props.playername}</h1>
                {
                    props.currentchar?[
                        <div key="char">
                            <h2 style={{textAlign:'center'}}>playing as</h2>
                            <h1 style={{color:props.currentchar.color,paddingBottom:30}}>{props.currentchar.name}</h1>
                        </div>
                    ]:[]
                }
                

            </div>
            <div id="extra">

                <p>Stat 1</p>
                <div className="container">
                <div className="stat one">90%</div>
                </div>

                <p>Stat 2</p>
                <div className="container">
                <div className="stat two">30%</div>
                </div>

                <p>Stat 3</p>
                <div className="container">
                <div className="stat three">65%</div>
                </div>

                <p>Stat 4</p>
                <div className="container">
                <div className="stat four">60%</div>
                </div>
            </div>
        </div>

        
	</div>
  );
}