import React,{Component} from 'react';
import {Button,CardMenu,CardText,Card,CardTitle,CardActions} from 'react-mdl';

class Contact extends Component{
    render(){
        return( 
            <div className="contact">
                 <Card shadow={0} style={{width: '600px', height: '350px', margin: 'auto', padding: 'auto'}}>
                     <div style={{backgroundColor:'grey'}}><h3 style={{textAlign:'center',fontWeight:'bold'}}>Contacts</h3></div>
                <div className="contact-content">
                    <h4><strong>Phone number: </strong> <em> 9823244139</em></h4>
                    <h4><strong>Email: </strong><em> mahatogajen123@gmail.com</em></h4>
                    <h4><strong>Address: </strong><em> Gongabu,Kathmandu,Nepal</em></h4>
                    </div> 

                <CardActions border>
                    <Button colored>Facebook</Button>
                    <Button colored>Twitter</Button>
                    <Button colored>Instagram</Button>
                    <Button colored>WhatsApp</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <iconButton name="Share"/>
                </CardMenu>
        </Card>
            </div>

        );
    }
}

export default Contact;