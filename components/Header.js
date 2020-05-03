import { PureComponent } from 'react'
import Link from 'next/link'
import content from '../content/text'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {colors, mobile, Content, Grouping, LeftColumn, Middle, Right} from '../assets/css/style.js'
// import headshot from '../assets/img/headshot.jpg'

export default class Header extends PureComponent {
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
        const copy = {
            firstname: this.props.content ? this.props.content.firstname : content.firstname,
            lastname: this.props.content ? this.props.content.lastname : content.lastname,
            roles: this.props.content ? this.props.content.roles : content.roles,
            role: this.props.content ? this.props.content.role : content.role,
            hobby: this.props.content ? this.props.content.hobby : content.hobby,
            phone: {
                us: this.props.content ? this.props.content.phone.us : content.phone.us,
                pt: this.props.content ? this.props.content.phone.pt : content.phone.pt
            },
            email: this.props.content ? this.props.content.email : content.email,
            linkedin: this.props.content ? this.props.content.linkedin : content.linkedin
        }

        return (
            <Content className="header">
                <CustomHeader>
                    <Grouping className="grouping">
                        <Image>
                            <Text>
                                <h2 id="overlay">{copy.firstname} {copy.lastname}</h2>
                                <p>{this.printArrayContent(copy.roles)}</p>
                            </Text>
                        </Image>
                        <LeftColumn className="leftColumn">
                            <section>
                                <h1>{copy.firstname}</h1>
                                <h1>{copy.lastname}</h1>
                            </section>
                        </LeftColumn>
                        <Middle className="middleColumn">
                            <section>
                                <h2>{copy.role}</h2>
                                <h2>& {copy.hobby}</h2>
                            </section>
                        </Middle>
                        <Right>
                            <section>
                                <p>{copy.phone.us} (us)</p>
                                <p>{copy.phone.pt} (pt)</p>
                                <p>{copy.email}</p>
                                <p>{copy.linkedin}</p>
                            </section>
                        </Right>
                    </Grouping>
                </CustomHeader>
            </Content>
        )
    }
}

Header.propTypes = {
  className: PropTypes.string,
  content: PropTypes.object
}

Header.defaultProps = {
  className: 'footer',
  content: {}
}

const CustomHeader = styled.header`
	display: block;
	padding: 3vh 0 3vh;

	@media (min-width: ${mobile.minWidth}) {
		display: flex;
        flex-direction: row;
        height: 80vh;

        .leftColumn {
            display: none;
        }
        .middleColumn {
            padding-left: 3vw;
        }
	}

	section {
		h1, h2 {	
			padding: 0;
			margin: 0;
		}
		h1 {
			font-weight: bold;
			letter-spacing: -.075em;
			line-height: .8;
			font-size: 4em;
		}
		h2 {
			font-weight: 300;
			font-size: 1.2em;
			border: 0;

			&:first-child {
				font-weight: bold;
			}
		}
		p {
			margin: 0;
		}
    }
    
    img#headshot {
        height: 90vh;
    }
`

const Image = styled.div`
    position: relative;
    max-width: 580px;

    height: 90vh;
    width: 45vw;
    background: url("./assets/img/headshot.jpg") no-repeat center center scroll; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    transition: all .3s;

    &:hover {
        box-shadow: 5px 10px 5px rgba(0,0,0,.2);
        transform: scale(1.025)
    }
`
const Text = styled.div`
    position: absolute;
    width: 100%;
    bottom: 9%;

    h2, p {
        text-align: center;
    }
    h2#overlay {
        text-transform: capitalize;
        font-weight: 600;
        font-size: 3.5em;
        padding-bottom: 5%;
        letter-spacing: -.05em;
    }
    p {
        color: ${colors.fuschia};
        padding: 0 10%;
    }
`