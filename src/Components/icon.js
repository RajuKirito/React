import React from 'react';
import {FaTimes,FaPen,FaRegCircle} from 'react-icons/fa/index';

const Icon = ({name}) =>{
    switch (name) {
        case "circle":
            return(<FaRegCircle />);
            break;
        case "cross":
            return(<FaTimes />);
            break;
        default :
            return(<FaPen />);
            break;
    } 
    
};
//<FaRegCircle className = 'icon'/>
export default Icon