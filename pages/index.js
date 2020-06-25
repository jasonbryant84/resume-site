import React from 'react'
import { PureComponent } from 'react'
import styled from 'styled-components'
import content from '../content/text' // remove me
import {breakpoints, colors, GlobalStyle} from '../assets/css/style.js'

import Header from '../components/Header'
import About from '../components/About'
import Work from '../components/Work'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Footer from '../components/Footer'

import StackCTA from '../components/StackCTA'
import StackModal from '../components/StackModal'
import Loader from '../components/Loader'

export default class Index extends PureComponent {
  constructor(props) {
	super(props)

	this.state = {
		modalOpen: false,
		content: null
	}
  }

  stackCTAClicked(){
	const body = document.getElementsByTagName("body")[0]
	
	this.setState({
		modalOpen: !this.state.modalOpen
	}, ()=> {
		this.state.modalOpen ? body.classList.add('modal-open') : body.classList.remove('modal-open')
	})
  }

  printArrayContent(array) {
  	return array.map((element, index) => {
  		const comma = (index != array.length - 1) ? ', ' : ''
  		return element.concat(comma)
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
			<Wrapper>
				<StackCTA cta="see stack" color={"white"} ctaClickHandler={this.stackCTAClicked.bind(this)} />
				<StackModal show={this.state.modalOpen} content={this.state.content} closeClickHandler={this.stackCTAClicked.bind(this)}/>
				<Header content={this.state.content} />

				<Content>
					<Grouping className="grouping">
						<LeftColumn className="leftColumn">
							<About content={this.state.content} />
							<Education className={"non-mobile"} content={this.state.content} printArrayContent={this.printArrayContent.bind(this)} />
						</LeftColumn>

						<Work content={this.state.content}/>
					</Grouping>
				</Content>

				<Content>
					<Grouping className="grouping">
						<LeftColumn className="leftColumn">
							<Skills content={this.state.content} printArrayContent={this.printArrayContent.bind(this)} />
						</LeftColumn>

						<Experience content={this.state.content} />
					</Grouping>
				</Content>
				
				<Footer role={this.state.content.role} />
			</Wrapper>

			<GlobalStyle/>
      	</Container>
    )
  }
}
const Container = styled.div`
    font-family: 'Roboto', 'Raleway', sans-serif;
    letter-spacing: initial;

    // padding: 20px 30px;
`
const Wrapper = styled.div`	
	a {
		color: black;
		text-decoration: none;
	}

	h2 {
		a { 
			font-size: .65em;
			font-weight: bold;

			color: ${colors.fuschia};
	
			&:hover {
				cursor: pointer;
				color: ${colors.grape};
			}
		}
	}
`
const Content = styled.section`
	& > * {
		margin-left: auto;
		margin-right: auto;
		width: 75vw;
		max-width: 1000px;
	}
`

const Grouping = styled.section`
	display: block;

	@media (min-width: 667px) {
		display: flex;
		flex-direction: row;
	}

	h2 {
		border-bottom: 1px black solid;
    	text-transform: lowercase;
    	padding-bottom: 10px;
    	font-weight: 400;
	}
`

const LeftColumn = styled.section`
	flex-grow: 1;

	@media (min-width: 667px) {
		padding-right: 4vw;
	}

	section {
		width: 100%;

		@media (min-width: 667px) {
			display: block;
			width: 200px;
		}
    }
`