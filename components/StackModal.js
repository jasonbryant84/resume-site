import { PureComponent } from 'react'
import StackCTA from '../components/StackCTA'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import gsap from "gsap"
import {colors, LeftColumn, Middle, Right} from '../assets/css/style.js'

export default class StackModal extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
            openedOnce: false
        }
    }

    clickHandler() {
        // passed function as property to component
        this.props.closeClickHandler()
    }

    animateCreds() {
        this.setState({
            openedOnce: true
        })

        gsap.to(".li", {
            duration: .5, 
            x: '0',
            opacity: 1.0,
            stagger: {
                each: 0.1
            }
        });
    }

    componentDidMount() { }

    printStacks(content) {
        if (!content) return

        return content.stack.map((tool, index) => {
            return( 
                <li key={index} class="li">
                    <h5>{tool["tool"]}</h5>
                    <p>{tool["description"]}</p>
                </li>
           )
        })
    }

    render() {
        let open = this.props.show

        if (open && !this.state.openedOnce) 
            this.animateCreds()
        
        return (
            <Modal className={`modal ${open ? 'open' : ''}`}>
                <ModalPadder>
                    <StackCTA cta="close" ctaClickHandler={this.clickHandler.bind(this)} />
                    <h3>Site Tech Stack</h3>
                    <ul>{this.printStacks(this.props.content)}</ul>
                </ModalPadder>
            </Modal>
        )
    }
}

StackModal.propTypes = {
    show: PropTypes.bool,
    closeClickHandler: PropTypes.func,
    content: PropTypes.object
}

StackModal.defaultProps = {
    show: false,
    content: {},
    closeClickHandler: () => {

    }
}

const Modal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    background: white;
    width: 100vw;
    height: 100vh;
    // padding: 3vw;
    transition: all .3s;
    z-index: 2;

    transform: translateX(104vw);

    &.open {
        transform: translateX(0vw);
    }

    span {
        color: ${colors.pink};
    }

    h3 {
        margin-top: 0;
        font-size: 2em;
        line-height: 1;
    }

    ul{
        list-style: none;
        padding-left: 0;

        li {
            opacity: 0;
            transform: translate(30vw, 0px);
        }
    }
`
const ModalPadder = styled.div`
    padding: 4vh 5vw;
    
`
