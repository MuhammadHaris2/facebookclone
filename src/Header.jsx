import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Avatar from '@material-ui/core/Avatar';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Header = ()=>{
    return(
        <div className="header">
            <div className="header_left">
              <img className="hl_images" src="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19754.png" alt="fb"/>
            
            <div className="h_input">
            <SearchIcon/>
            <input type="text" className="hi_imput" placeholder="Search Facebook"/>
            </div>
            </div>

            <div className="header_middle">
            <div className="hm_icons hm_icons--active">
            <HomeIcon fontSize="Large"/>
            </div> 
            <div className="hm_icons hm_icons--active">
            <FlagIcon fontSize="Large"/>
            </div>

            <div className="hm_icons hm_icons--active">
            <SubscriptionsIcon fontSize="Large"/>
            </div>

            <div className="hm_icons hm_icons--active">
            <StorefrontIcon fontSize="Large"/>
            </div>

            <div className="hm_icons hm_icons--active">
            <SupervisedUserCircleIcon fontSize="Large"/>
            </div> 

                
            </div>
            
            <div className="header_right">
            <div className="h_info">
            <Avatar />
            <h4>Muhammad Haris</h4>
            </div>
          
            
            <IconButton>
                <AddIcon/>
            </IconButton>

            <IconButton>
                <ForumIcon/>
            </IconButton>

            <IconButton>
                <NotificationsIcon/>
            </IconButton>
            
            <IconButton>
                <ExpandMoreIcon/>
            </IconButton>
            

            
            </div>
            
            
        </div>
        
    )
}

export default Header;