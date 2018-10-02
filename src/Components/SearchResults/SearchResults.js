import React from 'react';

class SearchResults extends React.Component {

	render() {
		console.log(this.props.searchResults)
		return (
			<div>
				Test
				{
					this.props.searchResults.map(result => {
						return (
							<div
								key={result.id['$t']}
								onClick={() => this.props.showDetails(result)}
							> {result.best_book.title} </div>
						)
					})
				}

			</div>
		)
	}
}

export default SearchResults;