import { PureComponent } from 'react'
import content from '../content/text'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {colors, breakpoints, mobile, Content, Grouping, LeftColumn, Middle, Right} from '../assets/css/style.js'

export default class Experience extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }

    printOtherExperiences() {
        return this.props.content.other_experience.map((exp, index) => {
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
            <ExperienceSection>
                <h2>Other Coding Experience</h2>
                {this.printOtherExperiences()}
            </ExperienceSection>
        )
    }
}

Experience.propTypes = {
  content: PropTypes.object
}

Experience.defaultProps = {
  content: {}
}

const ExperienceSection = styled.section`
	flex-grow: 1;

	@media only screen and (min-width: 600px) {
		flex-grow: 3;
	}
`