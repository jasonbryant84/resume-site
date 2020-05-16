import { PureComponent } from 'react'
import content from '../content/text'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {colors, breakpoints, mobile, Content, Grouping, LeftColumn, Middle, Right} from '../assets/css/style.js'

export default class Work extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }

    printJobs() {
        return this.props.content.work.map((job, index) => {
            const hasLink = job.comapnyLink != undefined
            return( 
                <article key={index}>
                   <p>{job.startdate} to {job.enddate}</p>
                   {
                       hasLink ?
                       <h4><a href={job.comapnyLink} rel="nofollow" target="_blank">{job.company}</a></h4> :
                       <h4>{job.company}</h4>
                   }
                   <h3>{job.position}</h3>
                   <p className="description">{job.description}</p>
               </article>
           )
        })
    }

    render() {
        return (
            <WorkSection>
                <h2>Work Experience</h2>
                {this.printJobs()}
            </WorkSection>
        )
    }
}

Work.propTypes = {
  content: PropTypes.object,
  printJobs: PropTypes.func
}

Work.defaultProps = {
  content: {},
  printJobs: () => {}
}

const WorkSection = styled.section`
	flex-grow: 1;

	@media only screen and (min-width: 600px) {
		flex-grow: 3;
	}

	h3 {
		font-size: 1.7em;
		font-weight: 500;
		margin: 1vh 0;
	}
	h4 {
		margin: 0;
	}
	p {
		margin-top: 0;

		&:not(.description) {
			font-style: italic;
			margin: 0;
		}
		&.description {
			margin-bottom: 8vh;
		}
	}

	&:last {
		p.description {
			margin-bottom: 0;
		}
	}
`