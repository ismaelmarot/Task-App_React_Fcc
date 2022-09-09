import React from 'react';
import '../style/css/freeCodeCampLogo.css'
import freeCodeCampLogo from '../img/logo/FreeCodeCamp_logo.svg';

function FreeCodeCampLogo(props){
  return(
    <div className='fCC-logo-container'>
        <img src={freeCodeCampLogo} className='fCC-logo' alt='Free Code Camp Logo' />
      </div>
  );
}

export default FreeCodeCampLogo;