import { PureComponent } from 'react'
import content from '../content/text'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {colors, breakpoints, mobile, Content, Grouping, LeftColumn, Middle, Right} from '../assets/css/style.js'

export default class Education extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const courseraClasses = this.props.content ? this.props.content.education.online.coursera : []
        
        return (
            <EducationSection>
                <h2>Education</h2>
                <p>{this.props.content.education.school.years}</p>
                <h3>{this.props.content.education.school.university}</h3>
                <h4>{this.props.content.education.school.degree}</h4>

                <h5>Coursera</h5>
                {<p className="description">{this.props.printArrayContent(courseraClasses)}</p>}
            </EducationSection>
        )
    }
}

Education.propTypes = {
  content: PropTypes.object,
  printArrayContent: PropTypes.func
}

Education.defaultProps = {
  content: {},
  printArrayContent: () => {}
}

const EducationSection = styled.section`
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