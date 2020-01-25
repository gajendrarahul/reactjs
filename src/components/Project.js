import React,{Component} from 'react';
import {Tab,Tabs,Grid,Cell,CardTitle,Card,CardText,CardActions,Button,CardMenu} from 'react-mdl';

class Project extends Component{
    constructor(props){
        super(props)
        this.state = {activeTab:0};
    }
   togleCategory(){
       if(this.state.activeTab===0){
        return(
            <div><h3>There is no React js project yet !!!</h3></div>
            
        )
       }else if(this.state.activeTab===1){
           return(
            <div className="project-grid">
            {/* project 1*/}
            <Card shadow={0} style={{width: '350px', height: '350px', margin: 'auto', paddig: 'auto'}}>
                <CardTitle expand style={{color: '#ffff', background: 'url(https://cdn.auth0.com/blog/react-js/react.png) bottom right 15% no-repeat #46B6AC'}}>Learning Management system(LMS)</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored>Open</Button>
                    <Button colored>Github</Button>
                    <Button colored>sharee it</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <iconButton name="Share"/>
                </CardMenu>
        </Card>
        {/* project 2*/}
        <Card shadow={0} style={{width: '350px', height: '350px', margin: 'auto',padding: 'auto'}}>
                <CardTitle expand style={{color: '#ffff', background: 'url(https://cdn.auth0.com/blog/react-js/react.png) bottom right 15% no-repeat #46B6AC'}}>Eassy Jobportal</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored>Open</Button>
                    <Button colored>Github</Button>
                    <Button colored>sharee it</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <iconButton name="Share"/>
                </CardMenu>
        </Card>
        {/* project 3*/}
        <Card shadow={0} style={{width: '350px', height: '350px', margin: 'auto', padding: 'auto'}}>
                <CardTitle expand style={{color: '#ffff', background: 'url(https://cdn.auth0.com/blog/react-js/react.png) bottom right 15% no-repeat #46B6AC'}}>Result Management System</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored>Open</Button>
                    <Button colored>Github</Button>
                    <Button colored>sharee it</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <iconButton name="Share"/>
                </CardMenu>
        </Card>
        </div>
           )
       }else if(this.state.activeTab===2){
           return(
               <div><h3>There is no PHP project yet !!!</h3></div>
           )
       }
       else{
           return(
               <div><h3>NO Laravel project made yet !!!</h3></div>
           )
       }
   }
    render(){
        return(
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>React js</Tab>
                <Tab>Django</Tab>
                <Tab>PHP</Tab>
                <Tab>Laravel</Tab>
            </Tabs>
            <section >
                <Grid >
                    <Cell col={12} className="projects-grid">
        <div class="content">{this.togleCategory()}</div>
                    </Cell>
                </Grid>
            </section>   
        </div>
        );
    }
}

export default Project;