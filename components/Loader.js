import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import gsap from "gsap"
import {colors, mobile} from '../assets/css/style.js'

export default class Loader extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        gsap.to(".bar", {
            duration: 1, 
            height: '15vh',
            stagger: {
                repeat: -1,
                each: 0.1,
                yoyo: true
            }
        });
    }

    render() {
        return (
            <Screen>
                <CenteredDiv>
                    <span>{this.props.text}</span>
                    <Bars>
                        <Bar className="bar" />
                        <Bar className="bar" />
                        <Bar className="bar" />
                        <Bar className="bar" />
                        <Bar className="bar" />
                        <Bar className="bar" />
                    </Bars>
                </CenteredDiv>
            </Screen>
        )
    }
}

Loader.propTypes = {
  text: PropTypes.string
}

Loader.defaultProps = {
  text: 'loading'
}

const Screen = styled.div`
    position: absolute; 
    top: 0;
    left: 0;
    background-color: white;
`

const CenteredDiv = styled.div`
    font-family: 'Roboto', 'Raleway', sans-serif;
    display: table-cell;
    width: 100vw;
    height: 100vh;
    text-align: center;
    vertical-align: middle;

	@media (min-width: ${mobile.minWidth}) {
		
    }	
    
    span {
        text-transform: lowercase;
        font-weight: bold;
        font-size: 5em;
        letter-spacing: -.05em;
        color: black;
    }
`

const Bars = styled.div`
    display: flex;
    justify-content: center;
    width: 50vw;
    height: 15vh;
    margin: 2vh auto 0;

    div:nth-child(1) {
        background-color: ${colors.peach};
    }
    div:nth-child(2) {
        background-color: ${colors.pink};
    }
    div:nth-child(3) {
        background-color: ${colors.fuschia};
    }
    div:nth-child(4) {
        background-color: ${colors.grape};
    }
    div:nth-child(5) {
        background-color: ${colors.blue};
    }
`

const Bar = styled.div`
    display: block;
    float: left;
    background-color: white;
    width: 20px;
    height: 4px;
    margin: 0 5px;
`