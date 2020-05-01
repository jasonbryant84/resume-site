import { PureComponent } from 'react'
import StackCTA from '../components/StackCTA'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {colors, Content, Grouping, LeftColumn, Middle, Right} from '../assets/css/style.js'

export default class StackModal extends PureComponent {
    clickHandler() {
        // passed function as property to component
        this.props.closeClickHandler()
    }

    render() {
        let open = this.props.show
        
        return (
            <Modal className={`modal ${open ? 'open' : ''}`}>
                <StackCTA cta="close" ctaClickHandler={this.clickHandler.bind(this)} />
                <h3>Tech Stack for this site</h3>
                <ul>
                    <li>Amazon S3</li>
                    <li>ReactJS</li>
                    <ul>
                        <li>Style Components</li>
                    </ul>
                    <li>Express</li>
                    <li>Heroku App</li>
                    <li>Github</li>
                </ul>
            </Modal>
        )
    }
}

StackModal.propTypes = {
    show: PropTypes.bool,
    closeClickHandler: PropTypes.func
}

StackModal.defaultProps = {
    show: false,
    closeClickHandler: () => {

    }
}

const Modal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    background: white;
    width: 46vw;
    height: 100vh;
    padding: 3vw 3vw 3vw 54vw;
    transition: all .3s;

    transform: translateX(104vw);

    &.open {
        transform: translateX(0vw);
    }

    span {
        color: ${colors.pink};
    }
`
