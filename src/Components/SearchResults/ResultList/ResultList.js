import React from 'react';
import { Panel, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import RatingStar from '../../Common/RatingStar/RatingStar';

class ResultList extends React.Component {

	render() {

		return (
			<Panel>
				<ListGroup>
					{
						this.props.searchResults.map(result => {
							return (
								<ListGroupItem
									key={result.id['$t']}
									onClick={() => this.props.showDetails(result)}
								>
									<Image src={result.best_book.small_image_url} thumbnail />
									<big>
										{result.best_book.title}
									</big>
									
									<small> By: {result.best_book.author.name} </small>
									<span className="pull-right">
										<RatingStar rating={result.average_rating} />
										{result.average_rating}
										<br/>
										<small>
											Based on {result.ratings_count.$t} ratings
										</small>
									</span>
								</ListGroupItem>
							)
						})
					}
				</ListGroup>
			</Panel>
		)
	}
}

export default ResultList;