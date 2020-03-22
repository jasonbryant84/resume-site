import { PureComponent } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import content from '../content/text'

export default class Index extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      name: content.name,
      role: content.role,
    }
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

  componentDidMount() {
  	//don't think this fires in the base index.js file research this
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

	        <Content>
	    		{<Header>
			     	<Grouping className="grouping">
				     	<LeftColumn className="leftColumn">
				     		<section>
					      		<h1>{content.firstname}</h1>
					      		<h1>{content.lastname}</h1>
					      		<h1>{this.props.location}</h1>
				      		</section>
				      	</LeftColumn>
				      	<Middle>
				      		<section>
					     		<h2>{content.role}</h2>
					     		<h2>& {content.hobby}</h2>
				      		</section>
				     	</Middle>
				     	<Right>
				      		<section>
						     	<p>{content.phone.us} (us)</p>
						     	<p>{content.phone.pt} (pt)</p>
						     	<p>{content.email}</p>
						     	<p>{content.linkedin}</p>
				      		</section>
					    </Right>
					 </Grouping>
		     	</Header>}

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
      	</Container>
    )
  }
}
const Container = styled.div`
    font-family: 'Roboto', 'Raleway', sans-serif;
    letter-spacing: initial;

    padding: 20px 30px;
`
const Content = styled.div`
	margin-left: auto;
	margin-right: auto;
	width: 75vw;
	max-width: 1000px;	

	a {
		color: black;
		text-decoration: none;
	}
`
const Header = styled.header`
	display: block;
	border-bottom: 1px black solid;

	@media (min-width: 667px) {
		display: flex;
		flex-direction: row;
		margin: 0vh 0 7vh 0;
		padding-bottom: 3vh;
	}

	section {
		h1, h2 {	
			padding: 0;
			margin: 0;
		}
		h1 {
			font-weight: bold;
			letter-spacing: -.075em;
			line-height: .8;
			font-size: 4em;
		}
		h2 {
			font-weight: 300;
			font-size: 1.2em;
			border: 0;

			&:first-child {
				font-weight: bold;
			}
		}
		p {
			margin: 0;
		}
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