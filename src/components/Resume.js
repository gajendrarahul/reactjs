import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class Resume extends Component{
    render(){
        return(
            <div>
            {/* left grid  cell */}
               <Grid className="resume-grid">
                   <Cell className="resume-left-col"col={4}>
                        <div style={{textAlign:'center'}}>
                            <img
                                src="https://scontent.fbom26-1.fna.fbcdn.net/v/t31.0-8/s960x960/27368655_726020777588462_5898261841260616709_o.jpg?_nc_cat=108&_nc_ohc=ln9AmwlVmJIAQnnJy0gr7wYDapDYUtDA8IzYEus3ieONF3o-jD17w3rlg&_nc_ht=scontent.fbom26-1.fna&oh=a981752fe27c0bdcb2af9ba94d7c5974&oe=5EAC5549"
                                alt="avtar"
                                className="resume-image"
                            />
                        </div>
                        <h2 style={{fontWeight:'bold'}}>Rahul Raj singh</h2>
                        <h3 style={{paddingtop:'2em'}}>Programmar</h3>
                        <hr className="style-one"/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <hr className="style-one"/>
                        <h4>Email</h4>
                        <p><span>mahatogajen123@gmail.com</span></p>
                        <h4>Address</h4>
                        <p><span>Janakpur-24,Basahiya,Dhanusha,Nepal</span></p>
                        <h4>Contact</h4>
                        <p><span>(+977) 9823244139 , 9840802401</span></p>
                        <h4>Website</h4>
                        <p><span>www.rahulsinghlife.com.np</span></p>
                        <hr className="style-one"/>
                   </Cell>
                   {/* grid right cell */}
                   <Cell className="resume-right-col"col={8}>
                       <h3>Summary</h3>
                       <p>Proactive and personable job seeker currently pursuing a Computer science and information technology at kathmandu Bernhardt college . Excellent written and oral communication skills. I believe my enthusiasm and specialized experience would make me an asset to your team.</p>
                       <h3>Experience</h3>
                       <p>Currently pursuing a Computer science and information technology at kathmandu Bernhardt college but have handled some projects in python django </p>
                       <h3>Qualification</h3>
                       <h4 style={{fontSize:'20px',}}>+2 Degree at : <span style={{fontSize:'15px', paddingLeft:'10px'}}>Canvas international college, Basundhara, Kathmandu  (<em>Science</em>)</span></h4>
                       <h4 style={{fontSize:'20px',}}>Bachlor Degree at : <span style={{fontSize:'15px', paddingLeft:'10px',marginTop:'0px'}}>Kathmamndu Bernhardt college, Bafal, Kathmandu  (<span>CSIT</span>)</span></h4>
                       <h3>Professional Skills</h3>
                       <p style={{backgroundColor:'purple',fontSize:'20px',height:'auto'}}>
                       Basic knowledge of operation tools<br/>
                       Microsoft office <br/>
                       Programming:<br/>
                       <ol>
                           <li>Python Django</li>
                           <li>React Js</li>
                           <li>C/C++</li>
                           <li>Html/Css/Bootstrap/Wordpress</li>
                       </ol>
                       <span style={{fontSize:'15px' ,marginTop:'0px'}}>(<em>intermediate in all these courses</em>)</span>
                       </p>
                       <h3>Speaking Language</h3>
                       <ol>
                           <li>English</li>
                           <li>Nepali</li>
                           <li>Hindi</li>
                           <li>Maithili</li>
                           <li>Bhojpuri</li>
                       </ol>
                       <p style={{textAlign:'center',textDecoration:'underline'}}><em >Currently no any further details</em></p>
                   </Cell>
               </Grid>
            </div>

        );
    }
}

export default Resume;