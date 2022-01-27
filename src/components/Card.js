import React from 'react';
import styled from 'styled-components'
export default function Card(props) {
    
  return (
    <CardEl>
        <img src={process.env.PUBLIC_URL + `/img/${props.img}`} alt={props.title} className='card-img'/>
        <div className='card-info'>
            <div className='card-info-head'>
                <img src={process.env.PUBLIC_URL +"./img/location.png"}  alt="" />
                <p>{props.location}</p>
                <a href={props.link}>view on Google Maps</a>
            </div>
            <h2>{props.title}</h2>
            <p className='info-date'>{props.date}</p>
            <p className='info-desc'>{props.description}</p>
        </div>
    </CardEl>
  
  );
}
const CardEl = styled.main`
display: flex;
width:60%;
margin:2em auto;
.card-info-head{
    display: flex;
    align-items: center;
}
.card-info-head p{
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 0 .5em;
}
.card-info-head a{
    color:var(--font-gray);
    padding-left: 1em;
}
.card-img{
    width:200px;
    object-fit: cover;
    margin-right: 1em;
}
h2{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 700;
    font-size:1.8rem;
    margin: 0;
    color:var(--main-black)
}
.info-date{
    font-size: .8rem;
    font-weight: bold;
}
.info-desc{
    font-size:.8rem;
    color:var(--main-black);
    max-width:400px;
}





`