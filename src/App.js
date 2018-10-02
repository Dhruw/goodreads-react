import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchResults from './Components/SearchResults/SearchResults';
import BookDetails from './Components/BookDetails/BookDetails';
import Header from './Components/Header/Header';

import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {

	constructor() {
		super();

		this.state = {
			bookName: "",
			searchResults: "",
			resultStatus: 0,
			detailBook: false,
			page: 1,
		}
	}

	updateBookName = (event) => {
		this.setState({ bookName: event.target.value })
	}

	searchBooks = () => {
		this.setState({ resultStatus: 1 })
		axios.get('http://localhost:3001/search/' + this.state.bookName + '/' + this.state.page)
			.then(response => {

				if (response.data.results === "") {
					this.setState({
						resultStatus: 4
					})
					return;
				}

				if (response.data.results.work.length > 0)
					this.setState({
						searchResults: response.data,
						resultStatus: 2
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

	updatePage = (num, reset = false) => {
		if (reset)
			this.setState({ page: num })
		else
			this.setState({ page: this.state.page + parseInt(num, 10) })
	}

	// componentDidMount = () => {
	// 	this.searchBooks();
	// }

	render() {
		return (
			<React.Fragment>
				<Header
					updateBookName={this.updateBookName}
					searchBooks={this.searchBooks}
				/>

				<Grid className="main-area">
					<Row>
						<Col xs={12}>

							{
								this.state.resultStatus === 0 ?
									<span> "Welcome" </span>
									:
									null
							}

							{this.state.resultStatus === 1 ?
								<div style={{ fontSize: '31px', marginTop: '20%', color: '#fff', textAlign: 'center' }}>
									<i className="fa fa-spinner fa-spin"></i>
									Loading . . .
								</div>
								:
								null

							}
							{
								this.state.resultStatus === 2 ?
									<SearchResults
										searchResults={this.state.searchResults}
										showDetails={this.showDetails}
									/>
									:
									null
							}

							{
								this.state.resultStatus === 4 ?
									<span> "No Result Found" </span>
									:
									null
							}

						</Col>
					</Row>

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
