import React from 'react';
import { Table, Row, Col, Panel, Button, Image } from 'react-bootstrap';
import axios from 'axios';
import RatingStar from '../Common/RatingStar/RatingStar';
import AuthorDetails from './AuthorDetails/AuthorDetails';

class BookDetails extends React.Component {

	constructor() {
		super();

		this.state = {
			showModal: false,
			author: null
		}
	}

	searchAuthor = (id) => {
		// id = 1077326;
		// axios.get('http://localhost:3001/author/' + id)
		axios.get('https://goodreads-dhruw-node.herokuapp.com/author/' + id)
			.then(response => {
				this.setState({
					showModal: true,
					author: response.data
				})
			})
	}

	resetAuthor = () => {
		this.setState({
			showModal: false,
			author: null
		})

	}

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
										{this.props.book.best_book.author.name} : 
										<Button onClick={() => this.searchAuthor(this.props.book.best_book.author.id.$t)} bsStyle="info" bsSize="small">
											View Author Details
										</Button>
									</td>
								</tr>
							</tbody>
						</Table>

						{
							this.state.showModal ?
								<AuthorDetails
									author={this.state.author}
									showModal={this.state.showModal}
									resetAuthor={this.resetAuthor}
								/>
								:
								null
						}

					</Col>
				</Row>
			</Panel>
		)
	}

}

export default BookDetails;