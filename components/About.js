import { PureComponent } from 'react'
import content from '../content/text'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {colors, breakpoints, mobile, Content, Grouping, LeftColumn, Middle, Right} from '../assets/css/style.js'

export default class About extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <AboutSection>
                <h2>About <a href='/about'>more</a></h2>
                <p>{this.props.content.about}</p>
                <MobileInfo>
                    <p>{this.props.content.phone.us} (us)<br/>
                    {this.props.content.phone.pt} (pt)<br/>
                    {this.props.content.email}<br/>
                    {this.props.content.linkedin}</p>
                </MobileInfo>
            </AboutSection>
        )
    }
}

About.propTypes = {
  content: PropTypes.object
}

About.defaultProps = {
  content: {}
}

const AboutSection = styled.section`
`


const MobileInfo = styled.div`
	word-wrap: break-word;
	
	@media (min-width: ${breakpoints.tabletLandscape}px) {
		display: none;
    }
`