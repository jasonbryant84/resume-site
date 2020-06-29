import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'


import React from 'react'
import styled from 'styled-components'
import content from '../content/text' // remove me
import {colors, breakpoints, GlobalStyle} from '../assets/css/style.js'
import Link from 'next/link'

import HomeSVG from '../assets/svgs/Home.js'

import ImageBar from '../components/ImageBar'
import Loader from '../components/Loader'
import Footer from '../components/Footer'

export default class Rebuild extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
            content: null
        }
	}
	
	printText(paragraphs) {
        if (!paragraphs) return

        return paragraphs.map((paragraph, index) => {
            return( 
				<p
					dangerouslySetInnerHTML={{
						__html: paragraph,
					}}
				/>
            )
        })
    }
    
    componentDidMount() {
        // inject meta
		setTimeout(()=>{
			const meta = document.createElement('meta')
			meta.name = 'viewport'
			meta.content = 'initial-scale=1.0, width=device-width'
			document.getElementsByTagName('head')[0].appendChild(meta)
		}, 1000)

		fetch('/copy')
			.then(response => response.json())
			.then(parsedJSON => {
				if (parsedJSON) {
					this.setState({
						content: parsedJSON
					})
				} else {
					
				}
			})
			.catch(error => console.log('parsing failed', error))
  	}

	render() {
		if (!this.state.content) {
			return <Loader text="loading..." />
		}

		return (
            <Container>
                <Head>
                    <title>Helping Others Rebuild in the Algarve | {this.state.content.firstname} {this.state.content.lastname}</title>
                </Head> 
				<Wrapper>
					<Content>
                        <ImageBar name="tomatoes" top={'43%'} />
                        <Intro>
                            <h2>Helping Others Rebuild in the Algarve</h2>
                            <p>For those that would like to follow along without the need for social media this page will contain shared videos and photos that can be found on Instragram and Facebook. Since it's not any of those platforms additional photos and vidoes will be posted here as well with more in-depth information when time allwos.</p>
                            <p>If you'd like to help out you can make a donation via <a href="https://www.gofundme.com/f/help-others-rebuild-in-the-algarve" target="_blank">GoFundMe</a> or come and get dirty <a href="https://www.workaway.info/en/host/164975693893" target="_blank">by volunteering</a>.</p>
                        </Intro>

                        <Entry data-entry="4">
                            <h3>Second Shower Constructed for Volunteers</h3>
                            <p className="date">Sunday, June 28</p>

                            <p>With volunteers cmoing in just 5 days a second outdoor shower has been built. A back flow valve has also been put in place to help the pump maintain pressure and the 7,000 liter capacity water storage units have been covered to protect them from UV radiation which casuses algae to form. Still waiting on teh wifi component to arrive.</p>
                            <p>With two hot water showers and Wifi the place will be more than ready to accept the first kind souls to come help us get under way. As of today the donations are over €4,000! Thank you so much to all those who are helping from a distance and soon-to-be in person.</p>

                            <div className="iframeContainer">
                                <iframe className="video" width="100%" height="50%" src="https://youtube.com/embed/EqLGWvnHkaA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </Entry>

                        <Entry data-entry="3">
                            <h3>Water's Working</h3>
                            <p className="date">Friday, June 26</p>

                            <p>The hot water heater is working again. A melted cable has been replaced to power the water pump for teh shower and kitchen, and water from the reserve tanks has filled the main container after a cleaning out. Pressure is not constant for the pump so another trip to the hardware store is in order. At this rate next week's volunteer(s) should be able to shower and we should be able to cook and clean as needed. Fingers crossed WiFi is sorted before the first kind soul arrives.</p>

                            <div className="iframeContainer">
                                <iframe className="video" width="100%" height="50%" src="https://youtube.com/embed/aTlC0g0kKzk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </Entry>

                        <Entry data-entry="2">
                            <h3>Searching for Solar Power</h3>
                            <p className="date">Wednesday, June 24</p>

                            <p>Went to <a href="http://ffsolar.com/" target="_blank" rel="nofollow">FF Solar</a> in search of donations or discounted equipment with Thomas. They gave us the wholesale price so we took them up on the offer to at least get going with a communal wifi setup that will help get volunteers on the land as we need it for communication and movie nights! Although this was initially to be funded by the GoFundMe campain a few others and I have decided to it's better to use our own resources so more donations go to volunteer efforts directly.</p>

                            <div className="iframeContainer">
                                <iframe className="video" width="100%" height="50%" src="https://youtube.com/embed/u7ULXJWB4pY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>

                            <ImageBar name="ffsolar" top="0"/>
                        </Entry>

                        <Entry data-entry="1">
                            <h3>Returning Home</h3>
                            <p className="date">Tuesday, June 23</p>

                            <p>First day back on the land after the wildfires tore through western Algarve. Tomorrow morning Thomas and I will be going on a hunt for free or discounted solar equipment to help setup a new WiFi tower for the community. We spread word of the fire via Whatsapp and Facebook chats so we'll be needing this in place for safety and to give future volunteers a fun way to unwind after all the dirt and sweat.</p>
                            <p>Make a donation via <a href="https://www.gofundme.com/f/help-others-rebuild-in-the-algarve" target="_blank">GoFundMe</a><br/>Or get dirty <a href="https://www.workaway.info/en/host/164975693893" target="_blank">Volunteer</a></p>

                            <div className="iframeContainer">
                                <iframe className="video" width="100%" height="50%" src="https://www.youtube.com/embed/GdsiOoCT2yo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </Entry>
					</Content>
				</Wrapper>

				<GlobalStyle/>
			</Container>
		)
	}
}

Rebuild.propTypes = {

}

Rebuild.defaultProps = {

}

const Container = styled.div`
    font-family: 'Roboto', 'Raleway', sans-serif;
    letter-spacing: initial;

    // padding: 20px 30px;
`
const Wrapper = styled.div`	
	#home {
		position: absolute; 
		top: 3vh;
		left: 2vw;
		
		svg {
			width: 30px;
			height: 30px;
		}
	}

	a {
		color: ${colors.fuschia};
        text-decoration: none;
        font-weight: 500;
        transition: all .2s;

		&:hover {
			color: ${colors.blue};
		}
	}

	h2, h3 {
		padding-bottom: 10px;
		font-weight: 400;
		border-bottom: 1px solid black;
		margin: 10vh auto;
		
		a { 
			font-size: .65em;
			font-weight: bold;

			color: ${colors.grape};
	
			&:hover {
				cursor: pointer;
				color: ${colors.blue};
			}
		}
    }
    
    h3 {
        border: 0;
        font-size: 1.8em;
        margin: 0 auto;
        font-weight: 500;
        padding-bottom: 5px;
    }
`
const Content = styled.section`
	p {
        margin-bottom: 5vh;
        line-height: 2em;
        
        &.date {
            margin: 0 auto 5vh;
            font-size: 1.1em;
            font-style: italic;
            line-height: 1;
        }
	}

	& > * {
		margin-left: auto;
		margin-right: auto;
		width: 75vw;
        max-width: 1000px;
        
        @media (min-width: ${breakpoints.tabletLandscape}px) {
		    width: 55vw;
        }
    }
    
    .iframeContainer {
        position: relative;
        height: 0;
        padding-bottom: 56.25%;
        margin-bottom: 5vh;
    }
    .video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`
const Intro = styled.section`
    margin-bottom: 15vh;

    h2 {
        margin-bottom: 0;
    }
`
const Entry = styled.div`
    margin-bottom: 15vh;
`