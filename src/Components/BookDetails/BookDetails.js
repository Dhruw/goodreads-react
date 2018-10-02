import React from 'react';
import { Table, Row, Col, Panel, Button, Image } from 'react-bootstrap';
import RatingStar from '../Common/RatingStar/RatingStar';

class BookDetails extends React.Component {

	render() {

		let avg_rating = (typeof this.props.book.average_rating === "string") ? parseFloat(this.props.book.average_rating).toFixed(2) : parseFloat(this.props.book.average_rating["$t"]).toFixed(2);

		return (
			<Panel>
				<Panel.Heading>
					<h4> {this.props.book.best_book.title}
						<Button onClick={this.props.hideDetails} className="pull-right" > Back </Button>
					</h4>
				</Panel.Heading>

				<Row>
					<Col md={4}>
						<Image src={this.props.book.best_book.image_url} alt={this.props.book.best_book.title} responsive />
					</Col>
					<Col md={8}>
						<Table striped hover>
							<tbody>
								<tr>
									<td>
										ID
									</td>
									<td>
										{this.props.book.id.$t}
									</td>
								</tr>
								<tr>
									<td>
										Rating
									</td>
									<td>
										<RatingStar rating={avg_rating} />
										{avg_rating}
										<small>
											(Based on  {this.props.book.ratings_count.$t} Ratings)
									</small>
									</td>
								</tr>
								<tr>
									<td>
										Published On:
									</td>
									<td>
										{this.props.book.original_publication_month.$t}/{this.props.book.original_publication_day.$t}/{this.props.book.original_publication_year.$t}
									</td>
								</tr>
								<tr>
									<td>
										Author:
									</td>
									<td>
										{this.props.book.best_book.author.name}
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
			</Panel>
		)
	}

}

export default BookDetails;