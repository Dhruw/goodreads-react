import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

	constructor(){
		super();

		this.state = {
			bookName: "",
		}
	}

	updateBookName = (event) => {
		this.setState({ bookName: event.target.value })
	}

	searchBooks = () => {
		axios.get('http://localhost:3001/search/' + this.state.bookName )
		.then(response => {
			console.log(response)
		})
		.catch(error => {

		})
	}

	render() {
		return (
			<div>
				<input type="text" onChange={this.updateBookName} />
				<button onClick={this.searchBooks} > Search </button>
			</div>
		);
	}
}

export default App;
