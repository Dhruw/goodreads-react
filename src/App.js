import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchResults from './Components/SearchResults/SearchResults';
import BookDetails from './Components/BookDetails/BookDetails';

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
		// console.log(book)
		this.setState({
			detailBook: book
		})
	}

	render() {
		return (
			<div>
				<input type="text" onChange={this.updateBookName} value="x" />
				<button onClick={this.searchBooks} > Search </button>

				{
					this.state.resultStatus ?
					<SearchResults 
						searchResults={this.state.searchResults.results.work}
						showDetails={this.showDetails}
					 />
					:
					null
				}

				<hr/>

				{
					this.state.detailBook ? 
					<BookDetails
						book={this.state.detailBook}
					/>
					:
					null
				}
			</div>
		);
	}
}

export default App;
