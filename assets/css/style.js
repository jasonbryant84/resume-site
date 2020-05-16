import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
	margin: 0;
	overflow-x: hidden;
	
	&.modal-open {
		overflow-y: hidden;
	}
  }
`

export const 
	colors = {
		peach: '#F8B195',
		pink: '#F67280',
		fuschia: '#C06C84',
		grape: '#6C5B7B',
		blue: '#355C7D'
	},
	breakpoints = {
		iPhone5: 320,
		mobile: 375,
		tabletPortrait: 600,
		tabletLandscape: 900,
		desktop: 1200
	},
	mobile = {
		'minWidth': '667px'
	},
	Content = styled.section`
		& > * {
			margin-left: auto;
			margin-right: auto;
			width: 75vw;
			max-width: 1000px;
		}

		&.header {
			background: ${colors.fuschia};
			color: white;
			margin-bottom: 10vh;
		}
	`,
  	Grouping = styled.section`
		display: block;

		@media (min-width: 667px) {
			display: flex;
			flex-direction: row;
		}

		h2 {
			border-bottom: 1px black solid;
			text-transform: lowercase;
			padding-bottom: 10px;
			font-weight: 400;
		}
	`,
	LeftColumn = styled.section`

		@media (min-width: 667px) {
			padding-right: 4vw;
		}

		section {
			width: 100%;

			@media (min-width: 667px) {
				display: block;
				width: 200px;
			}
		}
	`,
	Middle = styled.div`
		align-self: flex-end;

		@media (min-width: 667px) {
			padding-right: 4vw;
		}
	`,
	Right = styled.div`
		align-self: flex-end;
	`


// export default GlobalStyle
// Pallette from - https://digitalsynopsis.com/design/minimal-web-color-palettes-combination-hex-code/