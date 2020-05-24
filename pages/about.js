import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import React from 'react'
import styled from 'styled-components'
import content from '../content/text' // remove me
import {colors, GlobalStyle} from '../assets/css/style.js'
import Link from 'next/link'

import HomeSVG from '../assets/svgs/Home.js'

import ImageBar from '../components/ImageBar'
import Loader from '../components/Loader'
import Footer from '../components/Footer'

export default class About extends PureComponent {
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
					<title>About | {this.state.content.firstname} {this.state.content.lastname}</title>
				</Head>

				<Wrapper>
					<Link href="/">
						<a id="home"><HomeSVG /></a>
					</Link>
					<Content>
						<ImageBar name="nepal" top={'20%'} />
						<h2>About</h2>
						{this.printText(this.state.content.cv)}
						<p><Link href='/'><a>Back to Resume</a></Link></p>
						<ImageBar name="dome_interior" top={'center'}/>
						<h2>General Background</h2>
						{this.printText(this.state.content.general)}
						<p><Link href='/'><a>Back to Resume</a></Link></p>
					</Content>

					<Footer role={this.state.content.role} />
				</Wrapper>

				<GlobalStyle/>
			</Container>
		)
	}
}

About.propTypes = {

}

About.defaultProps = {

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
		color: ${colors.peach};
		text-decoration: none;

		&:hover {
			color: ${colors.fuschia};
		}
	}

	h2 {
		order-bottom: 1px black solid;
		text-transform: lowercase;
		padding-bottom: 10px;
		font-weight: 400;
		border-bottom: 1px solid black;
		margin: 10vh auto;
		
		a { 
			font-size: .65em;
			font-weight: bold;

			color: ${colors.pink};
	
			&:hover {
				cursor: pointer;
				color: ${colors.fuschia};
			}
		}
	}
`
const Content = styled.section`
	p {
		margin-bottom: 5vh;
	}

	& > * {
		margin-left: auto;
		margin-right: auto;
		width: 75vw;
		max-width: 1000px;
	}
`