import { PureComponent } from 'react'
import content from '../content/text'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {colors, breakpoints, mobile, Content, Grouping, LeftColumn, Middle, Right} from '../assets/css/style.js'

export default class Skills extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const skills = this.props.content ? this.props.content.skills : []

        return (
            <SkillsSection>
                <h2>Skills</h2>
                <h3>Programming</h3>
                {this.props.printArrayContent(skills.programming)}
                <h3>Languages</h3>
                {this.props.printArrayContent(skills.languages)}
            </SkillsSection>
        )
    }
}

Skills.propTypes = {
  content: PropTypes.object,
  printArrayContent: PropTypes.func

}

Skills.defaultProps = {
  content: {},
  printArrayContent: () => {}
}

const SkillsSection = styled.section`
	flex-grow: 1;

	section {
    	margin-bottom: 10vh;
    }
`