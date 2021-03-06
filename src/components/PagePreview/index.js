import React, { PropTypes } from "react"
import { Link } from "phenomic"

const PagePreview = ({ __url, title, date, description }) => {

	// check for presence of optional props
	const pageDate = date ? new Date(date) : null
	const pageDescription = description ? description : null

	return (
		<article>

			<h3 className="uikit-display-1">
				<Link to={ __url }>
					{ title }
				</Link>
			</h3>

			{
				pageDate &&
				<time key={ pageDate.toISOString() }>
					{ pageDate.toDateString() }
				</time>
			}

			<div>
				{ pageDescription }
			</div>

			<div>
				<Link to={ __url }>
					{ "Read More" }
				</Link>
			</div>

		</article>
	)
}

PagePreview.propTypes = {
	__url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	date: PropTypes.string,
	description: PropTypes.string,
}

export default PagePreview
