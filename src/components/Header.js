import React from 'react';
import styled from 'styled-components'
export default function Header() {
  return (
    <HeaderEl>
        <div className='header-body'>
            <img src={process.env.PUBLIC_URL + "./img/globe.png"} alt="globe-icon" />
            <h3>My Travel Journal</h3>
        </div>
    </HeaderEl>
  
  );
}
const HeaderEl = styled.header`
background-color: var(--light-red) ;
.header-body{
    display: flex;
    justify-content: center;
}
.header-body img{
    width:20px;
    object-fit: contain;
    margin-right: 0.5em;
}
h3{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: lighter;
    font-size: 1.5rem;
    color:var(--main-white);
}


`
