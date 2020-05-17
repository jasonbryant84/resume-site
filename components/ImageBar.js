import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {colors, breakpoints} from '../assets/css/style.js'

export default class ImageBar extends PureComponent {
    constructor(props) {
        super(props)
    }

    clickHandler() {
        // passed function as property to component
        this.props.ctaClickHandler()
    }

    render() {
        const style = {
            background: `url(./assets/img/${this.props.name}.jpg) no-repeat center ${this.props.top} scroll`,
            backgroundSize: 'cover'
        }
        
        return (
            <Image style={style}/>
        )
    }
}

ImageBar.propTypes = {
    name: PropTypes.string,
    top: PropTypes.top
}

ImageBar.defaultProps = {
    name: 'dome_interior',
    top: 'center'
}

const Image = styled.section`
	width: 100% !important;
	max-width: none !important;
	height: 45vh;
	margin-bottom: 7vh;
	background-color: ${colors.fuschia};
`