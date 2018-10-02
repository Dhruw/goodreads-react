import React from 'react';
import ResultList from './ResultList/ResultList';
import { Grid } from 'react-bootstrap';

class SearchResults extends React.Component {

	render() {
		return (
			<Grid fluid>
				About {this.props.searchResults['total-results']} Results ({this.props.searchResults['query-time-seconds']} Seconds)
					<ResultList
						searchResults={this.props.searchResults.results.work}
						showDetails={this.props.showDetails}
					/>
			</Grid>
		)
	}
}

export default SearchResults;