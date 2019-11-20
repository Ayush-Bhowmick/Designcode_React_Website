import React from 'react'
import styled from'styled-components'
import Wave from './Wave'

const SectionGroup = styled.div`    /*NOTE: We cant pass props to css but we can to styled components */
    background: url(${props => props.image}); 
    height: 720px;
    background-size: cover;
    display: grid;
    grid-template-row: 300px auto; /* auto to take the remaining avialable space*/
    grid-gap: 20px;
    position: relative;

    @media (max-width: 640px) {
        height: 820px; /* height is increased when width is compressed, for proper positioning */
    }
`

const SectionLogo = styled.img`
    align-self: end;     /* to align the logo to the bottom of the top 300px grid */
    width: 128px;
    margin: 0 auto;  /* auto to take up remaining space in the background */
`

const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 300px auto;  /* to divide the bottom 300px of the grid into columns of 300px*/
    margin: 0 40px;
    grid-gap: 20px;
    grid-template-columns: auto 100%; /* auto to fix spacing to make site responsive, see the @media */

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const SectionTitle = styled.h3`
    color: white;
    font-size: 60px;
    margin: 0;
    line-height: 1.2;

    @media (max-width: 720px) {
        font-size: 40px;
    }
`

const SectionText = styled.p`
    color: white;
`

const WaveBottom = styled.div`
    position: absolute; /* absolute to relative SectionGroup */
    width: 100%;
    bottom: -6px;
`

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg); /* to invert top wave */
`

const Section = props => (  // note SectionGroup is use instead of div className
	<SectionGroup image={props.image}>  
        <WaveTop><Wave /></WaveTop>
        <WaveBottom><Wave /></WaveBottom>
		<SectionLogo src={props.logo} />
		<SectionTitleGroup>
			<SectionTitle>{props.title}</SectionTitle>
			<SectionText>{props.text}</SectionText>
		</SectionTitleGroup>
	</SectionGroup>
)

export default Section