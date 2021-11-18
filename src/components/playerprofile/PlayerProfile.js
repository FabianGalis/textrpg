import React from 'react';
import { Link } from 'react-router-dom';
import Identity from '../../icons/identity.png'
import Line from '../../icons/line.png'

import "./PlayerProfile.css";
export default function PlayerProfile() {
  return(
    <div>
		<h1 style={{textAlign:'center'}}>Welcome back, Player</h1>

        <img style={{display:'block',marginLeft:'auto',marginRight:'auto', paddingBottom:80, width:400 }} src={Line} alt=""/>

        <div id="container">
            <div id="wrapper">
                <div id="content">
                    <div class="month">      
                        <ul>
                            <li class="prev">&#10094;~</li>
                            <li class="next">~&#10095;</li>
                            <li>
                            November<br/>
                            <span>2021</span>
                            </li>
                        </ul>
                    </div>

                    <ul class="weekdays">
                    <li>Mo</li>
                    <li>Tu</li>
                    <li>We</li>
                    <li>Th</li>
                    <li>Fr</li>
                    <li>Sa</li>
                    <li>Su</li>
                    </ul>

                    <ul class="days">  
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
                    <li><span class="active">12</span></li>
                    <li><span class="active">13</span></li>
                    <li><span class="active">14</span></li>
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
                <img style={{paddingTop:10, width:200 }} src={Identity} alt=""/>
                <h1>Player name</h1>
                <p>Along with a few details</p>

                <Link to="browsestories"><button>Browse stories</button></Link>
                <Link to="characters"><button>Characters</button></Link>
            </div>
            <div id="extra">

                <p>Stat 1</p>
                <div class="container">
                <div class="stat one">90%</div>
                </div>

                <p>Stat 2</p>
                <div class="container">
                <div class="stat two">30%</div>
                </div>

                <p>Stat 3</p>
                <div class="container">
                <div class="stat three">65%</div>
                </div>

                <p>Stat 4</p>
                <div class="container">
                <div class="stat four">60%</div>
                </div>
            </div>
        </div>

        
	</div>
  );
}