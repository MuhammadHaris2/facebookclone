import React from 'react';
import SidebarRow from './SidebarRow';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
 
const Sidebar=()=>{
    return(
        <div className="sidebar">
            <SidebarRow src="https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-1/p240x240/102981840_3280599295498964_5955365528490904221_o.jpg?_nc_cat=101&_nc_sid=dbb9e7&_nc_ohc=aLkaq6IBpaYAX8elrcn&_nc_ht=scontent.fkhi2-1.fna&tp=6&oh=83edaa990c934e23784be6ffb0eef29e&oe=5F80F3A1" title="Muhammad Haris"/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreIcon} title="See More"/>
            
        </div>
    )
}

export default Sidebar;