import React,{Component} from 'react';
import {Tab,Tabs} from 'react-mdl';

class Project extends Component{
    constructor(props){
        super(props)
        this.state = {activetab:0};
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
            <section>
                <div className="content">Content for the tab: {this.state.activeTab}</div>
            </section>
        </div>    

        );
    }
}

export default Project;