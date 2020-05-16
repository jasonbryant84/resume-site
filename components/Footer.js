import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {colors, mobile, Content, Grouping, LeftColumn, Middle, Right} from '../assets/css/style.js'

export default class Footer extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }

    printArrayContent(array) {
        return array.map((element, index) => {
            const comma = (index == array.length - 1) ? '' : 
                (index == array.length - 2) ? ', & ': ', '
            return element.concat(comma)
        })
    }

    render() {
        return (
            <Content className="footer">
                <CustomFooter>
                    <Grouping className="grouping">
                        <Wide>
                            <p>Jason Bryant - {this.props.role} | {new Date().getFullYear()}</p>
                        </Wide>
                    </Grouping>
                </CustomFooter>
            </Content>
        )
    }
}

Footer.propTypes = {
  role: PropTypes.string,
  content: PropTypes.object
}

Footer.defaultProps = {
    role: 'role',
  content: {}
}

const CustomFooter = styled.footer`
	display: block;
    margin: 30vh auto 3vh;
    border-top: 1px solid black;

    transition: all .2s;
    padding: 3vh 0 3vh;

	@media (min-width: ${mobile.minWidth}) {
		display: flex;
        flex-direction: row;
	}

	.grouping {
        width: 100%;
    }
`

const Wide = styled.div`
    width: 100%;
    
    p {
        margin: 0;
        padding: 0 0 6%;
        text-align: right;
    }
`