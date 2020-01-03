import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';

class Home extends Component {
  render() {
    return(
      <div style={{width:'100%' , margin:'auto'}}>
        <Grid className="home-grid">
            <Cell col={12}>
                <img
                src="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.0-9/33183935_213988526073373_9012287408007282688_n.jpg?_nc_cat=103&_nc_ohc=GRG2lDuIpvMAQlY2zG91Fdc7WxnGr_lWW48TENjLWtrNcctFzCM8AbxmA&_nc_ht=scontent.fktm10-1.fna&oh=5a528ee24a0adbe2d17f366f7784ae94&oe=5E94DF16"
                alt="Gajendra"
                className="profile"
                />
                <div className="banner-text">
                    <h1>React and Django Web Developer</h1>
                    <hr/>
                  <p> Html/Css | Javascript | Django | React js | PHP | C/C++ | Wordpress | Laravel | Bootstrap</p>
                  
                  <div className="social-links">
                    <a href="https://www.google.com" target="_blank" rel ="noopener noreferrer">
                    <i class="fa fa-google-plus-square" aria-hidden="true"></i>
                    </a>
                    
                    <a href="https://www.github.com" target="_blank" rel ="noopener noreferrer">
                    <i class="fa fa-git-square" aria-hidden="true"></i>
                    </a>

                    <a href="https://www.facebook.com" target="_blank" rel ="noopener noreferrer">
                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                    </a>

                    <a href="https://www.youtube.com" target="_blank" rel ="noopener noreferrer">
                    <i class="fa fa-youtube-square" aria-hidden="true"></i>
                    </a>
                </div>
                </div>
            </Cell>
        </Grid>
      </div>
    )
  }
}

export default Home;
