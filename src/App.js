import React, { Component } from 'react';
import './App.css';
import {Navigation,Header,Layout,Drawer,Content} from 'react-mdl';
import Main from './components/Main';

class App extends Component{
  render(){
    return(
      <div className="demo-big-content">
    <Layout>
        <Header className='header-color' title="My Personal-Site" scroll>
            <Navigation>
                <a href="/Home">Home</a>
                <a href="/Resume">Resume</a>
                <a href="/Profile">Profile</a>
                <a href="/Contact">Contact</a>
                <a href="/About">About Me</a>
            </Navigation>
        </Header>
        <Drawer title="Drop-Down">
            <Navigation>
            <a href="/Resume">Resume</a>
            <a href="/Profile">Profile</a>
            <a href="/Contact">Contact</a>
            <a href="/About">About Me</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}
export default App;