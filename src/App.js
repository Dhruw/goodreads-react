import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchResults from './Components/SearchResults/SearchResults';
import BookDetails from './Components/BookDetails/BookDetails';

import { Navbar, FormGroup, InputGroup, FormControl, Button, Grid, Row, Col } from 'react-bootstrap';

class App extends Component {

	constructor() {
		super();

		this.state = {
			bookName: "x",
			searchResults: "",
			resultStatus: false,
			detailBook: false
		}
	}

	updateBookName = (event) => {
		this.setState({ bookName: event.target.value })
	}

	searchBooks = () => {
		axios.get('http://localhost:3001/search/' + this.state.bookName)
			.then(response => {
				this.setState({
					searchResults: response.data,
					resultStatus: true
				})
			})
			.catch(error => {
				console.log(error)
			})
	}

	showDetails = (book) => {
		this.setState({
			detailBook: book,
			resultStatus: false,
		})
	}

	hideDetails = () => {
		this.setState({
			detailBook: false,
			resultStatus: true,
		})
	}
	componentDidMount = () => {
		this.searchBooks();
	}

	render() {
		return (
			<React.Fragment>

				<Navbar fixedTop>
					<Navbar.Header>
						<Navbar.Brand>
							GoodReads World
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Navbar.Form pullRight>
							<FormGroup>
								<InputGroup>
									<FormControl type="text" onChange={this.updateBookName} />
									<InputGroup.Button>
										<Button onClick={this.searchBooks} >
											<i className="fa fa-search"></i>
										</Button>
									</InputGroup.Button>
								</InputGroup>
							</FormGroup>

						</Navbar.Form>
					</Navbar.Collapse>
				</Navbar>

				<Grid className="main-area">
					<Row>
						<Col xs={12}>
							{
								this.state.resultStatus ?
									<SearchResults
										searchResults={this.state.searchResults}
										showDetails={this.showDetails}
									/>
									:
									null
							}
						</Col>
					</Row>
					<hr />

					{
						this.state.detailBook ?
							<BookDetails
								book={this.state.detailBook}
								hideDetails={this.hideDetails}
							/>
							:
							null
					}
				</Grid>
			</React.Fragment>
		);
	}
}

export default App;
