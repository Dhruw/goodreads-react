import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchResults from './Components/SearchResults/SearchResults';
import BookDetails from './Components/BookDetails/BookDetails';
import Header from './Components/Header/Header';
import Welcome from './Components/Welcome/Welcome';
import Message from './Components/Common/Message/Message';

import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {

	constructor() {
		super();

		this.state = {
			bookName: "",
			searchResults: "",
			resultStatus: 0,
			detailBook: false,
			currentPage: 1,
			totalPages: 1
		}
	}

	updateBookName = (event) => {
		this.setState({ bookName: event.target.value })
	}

	searchBooks = () => {
		this.setState({ resultStatus: 1 })
		// axios.get('http://localhost:3001/search/' + this.state.bookName + '/' + this.state.currentPage)
		axios.get('https://goodreads-dhruw-node.herokuapp.com/search/' + this.state.bookName + '/' + this.state.currentPage)
			.then(response => {

				// 0 : Welcome
				// 1 : Loading
				// 2 : Show Results
				// 4 : No Result

				if (response.data.results === "") {
					this.setState({
						resultStatus: 4
					})
					return;
				}

				if (response.data.results.work.length > 0)
					this.setState({
						searchResults: response.data,
						resultStatus: 2,
						totalPages: parseInt((response.data['total-results'] / 20), 10)
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
			resultStatus: 2,
		})
	}

	updatePage = (num, reset = false) => {
		if (((num < 0) && (this.state.currentPage === 1)) || ((num > 0) && (this.state.currentPage === this.state.totalPages)) || (num == this.state.currentPage))
			return;

		let newPage = 1;
		if (reset) {
			newPage = num
		}
		else {
			newPage = this.state.currentPage + num;
		}
		this.setState({ currentPage: newPage }, this.searchBooks)
	}

	// componentDidMount = () => {
	// 	this.searchBooks();
	// }

	render() {
		return (
			<React.Fragment>
				<Header
					bookName={this.state.bookName}
					updateBookName={this.updateBookName}
					searchBooks={this.searchBooks}
				/>

				<Grid className="main-area">
					<Row>
						<Col xs={12}>

							{this.state.resultStatus === 0 ? <Welcome /> : null}
							{this.state.resultStatus === 1 ? <Message
										classes="fa fa-spinner fa-spin"
										message="Loading"
										/>  
										: null
							}
							{
								this.state.resultStatus === 2 ?
									<SearchResults
										searchResults={this.state.searchResults}
										currentPage={this.state.currentPage}
										totalPages={this.state.totalPages}
										showDetails={this.showDetails}
										updatePage={this.updatePage}
									/>
									:
									null
							}
							{
								this.state.resultStatus === 4 ?
									<Message 
										classes="fa fa-exclamation"
										message="No Result Found"
									/>
									: null
							}
							{
								this.state.detailBook ?
									<BookDetails
										book={this.state.detailBook}
										hideDetails={this.hideDetails}
									/>
									:
									null
							}

						</Col>
					</Row>
				</Grid>
			</React.Fragment>
		);
	}
}

export default App;
