import React, { PropTypes } from "react"

import "../uikit/css/header.css"

const Header = ( props ) => (
	<header className='uikit-header uikit-header--dark' role='banner'>
		<div className="container">
			{ props.children }
		</div>
	</header>
)

Header.propTypes = {
	children: PropTypes.node,
}

export default Header
