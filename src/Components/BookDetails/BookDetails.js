import React from 'react';

class BookDetails extends React.Component {

	render(){
		return (
			<div>
				
				<br/> ID			 				{this.props.book.id.$t}
				<br/> Count			 				{this.props.book.books_count.$t}
				<br/> Ratings Count					{this.props.book.ratings_count.$t}
				<br/> text_reviews_count			{this.props.book.text_reviews_count.$t}
				<br/> original_publication_year		{this.props.book.original_publication_year.$t}
				<br/> original_publication_month	{this.props.book.original_publication_month.$t}
				<br/> original_publication_day		{this.props.book.original_publication_day.$t}
				<br/> average_rating			 	{this.props.book.average_rating	}
				<br/> type			 				{this.props.book.best_book.type}
				<br/> id			 				{this.props.book.best_book.id.$t}
				<br/> Title			 				{this.props.book.best_book.title}
				<br/> Author Name					{this.props.book.best_book.author.name}
				<br/> Image 						{this.props.book.best_book.image_url}
				<br/> Small Image					{this.props.book.best_book.small_image_url}
				
			</div>
		)
	}

}

export default BookDetails;