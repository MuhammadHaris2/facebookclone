import React from 'react';
import { Avatar } from '@material-ui/core';

const SidebarRow = ({title,src,Icon})=>{
    return(
        <div className="sidebarRow">
          {src&&<Avatar src={src}/>}
          {Icon && <Icon/>}
            <h4 className="sbr_h">{title}</h4>
        </div>
    )
}

export default SidebarRow;