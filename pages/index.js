import React from 'react'
import { PureComponent } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import content from '../content/text'
import {colors, GlobalStyle} from '../assets/css/style.js'
import Header from '../components/Header'
import StackCTA from '../components/StackCTA'
import StackModal from '../components/StackModal'

export default class Index extends PureComponent {
  constructor(props) {
	super(props)

	this.state = {
		name: content.name,
		role: content.role,
		modalOpen: false
	}
  }

  stackCTAClicked(){
	const body = document.getElementsByTagName("body")[0]
	
	this.setState({
		modalOpen: !this.state.modalOpen
	}, ()=> {
		console.log("modalOpen", this.state.modalOpen)
		this.state.modalOpen ? body.classList.add('modal-open') : body.classList.remove('modal-open')
	})
  }

  printJobs() {
  	return content.work.map((job, index) => {
  		const hasLink = job.comapnyLink != undefined
  		return( 
  			<article key={index}>
     			<p>{job.startdate} to {job.enddate}</p>
     			{
     				hasLink ?
     				<h4><a href={job.comapnyLink} rel="nofollow" target="_blank">{job.company}</a></h4> :
     				<h4>{job.company}</h4>
     			}
     			<h3>{job.position}</h3>
     			<p className="description">{job.description}</p>
     		</article>
	     )
  	})
  }

  printArrayContent(array) {
  	return array.map((element, index) => {
  		const comma = (index != array.length - 1) ? ', ' : ''
  		return element.concat(comma)
  	})
  }

  printOtherExperiences() {
  	return content.other_experience.map((exp, index) => {
  		return( 
  			<article key={index}>
     			<h3>{exp.heading}</h3>
	     		<p>{exp.sub_heading}</p>
	     		<p>{exp.startdate} to {content.other_experience[0].enddate}</p>
	     		<p>{exp.description}</p>
     		</article>
	     )
  	})
  }

  render() {
    return (
    	<Container>
    		<Head>
	          <title>{content.firstname} {content.lastname} | {content.role}</title>

	          <script type="text/javascript" async="" src="http://localhost:3000/assets/js/geolocation.js"></script>
	          <link
	            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Lora:400,700|Raleway:300,400,500|Mrs+Saint+Delafield|Oswald:400,500,600,700|Montserrat:400,500,600,700,800,900"
	            rel="stylesheet"
	          />
	          <meta
	            name="viewport"
	            content="initial-scale=1.0, width=device-width"
	          />
	          <meta name="google" value="notranslate" />
	        </Head>

			<Wrapper>
				<StackCTA cta="see stack" color={"white"} ctaClickHandler={this.stackCTAClicked.bind(this)} />
				<StackModal show={this.state.modalOpen} closeClickHandler={this.stackCTAClicked.bind(this)}/>
				<Header/>

				<Content>
					<Grouping className="grouping">
						<LeftColumn className="leftColumn">
							<About>
								<h2>About</h2>
								<p>{content.about}</p>
							</About>
							<Education>
								<h2>Education</h2>
								<p>{content.education.school.years}</p>
								<h3>{content.education.school.university}</h3>
								<h4>{content.education.school.degree}</h4>

								<h5>Coursera</h5>
								<p className="description">{this.printArrayContent(content.education.online["coursera"])}</p>
							</Education>
						</LeftColumn>
						<Work>
							<h2>Work Experience</h2>
							{this.printJobs()}
						</Work>
					</Grouping>
				</Content>

				<Content>
					<Grouping className="grouping">
						<LeftColumn className="leftColumn">
							<Skills>
								<h2>Skills</h2>
								<h3>Programming</h3>
								{this.printArrayContent(content.skills.programming)}
								<h3>Languages</h3>
								{this.printArrayContent(content.skills.languages)}
							</Skills>
						</LeftColumn>
						<OtherExperience>
							<h2>Other Coding Experience</h2>
							{this.printOtherExperiences()}
						</OtherExperience>
					</Grouping>
				</Content>
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
`
const Content = styled.section`
	& > * {
		margin-left: auto;
		margin-right: auto;
		width: 75vw;
		max-width: 1000px;
	}
`
const Middle = styled.div`
	flex-grow: 1;
	align-self: flex-end;

	@media (min-width: 667px) {
		padding-right: 4vw;
	}
`
const Right = styled.div`
	flex-grow: 1;
	align-self: flex-end;
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
const About = styled.section`
`
const Education = styled.section`
	h3, h4 {
		padding: 0;
		margin: 0;
	}
	h3 {
		font-weight: 500;
	}
	h4 {
		font-weight: initial;
		font-style: italic;
	}
	h5 {
		font-size: 1.17em;
	}
	p {
		&:not(.description) {
			font-style: italic;
			margin: 0;
		}
		&.description {
			margin-bottom: 8vh;
		}
	}
`
const Work = styled.section`
	flex-grow: 1;

	@media only screen and (min-width: 600px) {
		flex-grow: 3;
	}

	h3 {
		font-size: 1.7em;
		font-weight: 500;
		margin: 1vh 0;
	}
	h4 {
		margin: 0;
	}
	p {
		margin-top: 0;

		&:not(.description) {
			font-style: italic;
			margin: 0;
		}
		&.description {
			margin-bottom: 8vh;
		}
	}

	&:last {
		p.description {
			margin-bottom: 0;
		}
	}
`
const Skills = styled.section`
	flex-grow: 1;

	section {
    	margin-bottom: 10vh;
    }
`
const OtherExperience = styled.section`
	flex-grow: 1;

	@media only screen and (min-width: 600px) {
		flex-grow: 3;
	}
`