import { PureComponent } from 'react'
import StackCTA from '../components/StackCTA'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import gsap from "gsap"
import {colors, breakpoints, LeftColumn, Middle, Right} from '../assets/css/style.js'

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

        gsap.to(".tool", {
            duration: .15, 
            x: '0',
            opacity: 1.0,
            stagger: {
                each: 0.1
            }
        });

        gsap.to(".description", {
            duration: .25, 
            x: '0',
            opacity: 1.0,
            stagger: {
                each: 0.1
            }
        });

        gsap.to(".description ul", {
            duration: .35, 
            x: '0',
            opacity: 1.0,
            stagger: {
                each: 0.1
            }
        });
    }

    printDescription(text) {
        return(
            <div className="description"
                dangerouslySetInnerHTML={{
                    __html: text,
                }}
            />
        )
    }

    printStacks(stack) {
        if (!stack) return

        return stack.map((tool, index) => {
            return( 
                <div key={index} class="tool">
                    <h5>{tool["tool"]}</h5>
                    {this.printDescription(tool["description"])}
                </div>
            )
        })
    }

    render() {
        if (!this.props.content) return

        let open = this.props.show

        if (open && !this.state.openedOnce) 
            this.animateCreds()
        
        return (
            <Modal className={`modal ${open ? 'open' : ''}`}>
                <ModalPadder>
                    <StackCTA cta="close" ctaClickHandler={this.clickHandler.bind(this)} />
                    <h3>Site Tech Stack</h3>
                    <List>
                        <Column>{this.printStacks(this.props.content.stack[0])}</Column>
                        <Column>{this.printStacks(this.props.content.stack[1])}</Column>
                    </List>
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
    overflow-y: scroll;

    transform: translateX(104vw);

    &.open {
        transform: translateX(0vw);
    }

    span {
        color: ${colors.pink};
    }

    h3 {
        margin: 0 0 6vh 0;
        font-size: 2em;
        line-height: 1;
    }

    h5 {
        border-bottom: 1px black solid;
        text-transform: lowercase;
        padding-bottom: 10px;
        font-weight: 400;
        font-size: 1.5em;
        margin: 0;
    }
`

const ModalPadder = styled.div`
    padding: 4vh 0;

    width: 75vw;
    height: 100vh;
    max-width: 1000px;
    margin: 0 auto;
    
`

const List = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${breakpoints.tabletLandscape}px) {
        flex-direction: row;
    }
`

const Column = styled.div`
    margin: 0;
    flex-grow: 1;
    flex-basis: 0;

    &:last-child {
        padding-left: 0;

        @media (min-width: ${breakpoints.tabletLandscape}px) {
            padding-left: 3vw;
        }
    }

    .tool {
        margin: 0 0 7vh 0;
        opacity: 0;
        transform: translate(30vw, 0px);

        .description{
            opacity: 0;
            transform: translate(60vw, 0px);

            ul{
                list-style: initial;
                padding-left: 20px;

                li {
                    margin-bottom: 2vh;

                    ul {
                        margin: 2vh 0 3vh;
                    }
                }
            }
        }
    }
`
