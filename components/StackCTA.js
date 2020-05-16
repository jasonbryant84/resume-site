import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {colors, breakpoints} from '../assets/css/style.js'

export default class StackCTA extends PureComponent {
    constructor(props) {
        super(props)
    }

    clickHandler() {
        // passed function as property to component
        this.props.ctaClickHandler()
    }

    render() {
        console.log(this.props.color)
        return (
            <CTA onClick={this.clickHandler.bind(this)}>
                <span>{this.props.cta}</span>
            </CTA>
        )
    }
}

StackCTA.propTypes = {
    cta: PropTypes.string,
    color: PropTypes.string,
    ctaClickHandler: PropTypes.func
}

StackCTA.defaultProps = {
    cta: 'cta here',
    color: colors.grape,
    ctaClickHandler: () => {
        console.log('CTA onClick default')
    }
}

const CTA = styled.div`
    position: absolute;
    display: block;
    height: 25px;
    width: 90px;
    top: 8vh;
    right: -3vw;
    transform: rotate(90deg);
    z-index: 1;


	@media (min-width: ${breakpoints.tabletPortrait}px) and (max-width: ${breakpoints.tabletLandscape - 1}px) {
        right: -1vw;
    }

    @media (min-width: ${breakpoints.tabletLandscape}px) {
        top: 7vh;
        right: 0;
    }

    span {  
        display: inline-block;  
        color: white;
        font-size: 1.2em;
        font-weight: 500;

        &:hover {
            cursor: pointer;
            color: ${colors.grape};
            transition: all .3s;
        }
    }
`
