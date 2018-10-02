import React from 'react';

const Paginations = (props) => {

	return (
		<Pagination>
			<Pagination.First
				onClick={() => this.updatePage(1, true)}
			/>
			<Pagination.Prev
				onClick={() => this.updatePage(-1)}
			/>
			<Pagination.Ellipsis />

			<Pagination.Item>{1}</Pagination.Item>
			<Pagination.Item>{10}</Pagination.Item>
			<Pagination.Item>{11}</Pagination.Item>
			<Pagination.Item active>{12}</Pagination.Item>
			<Pagination.Item>{13}</Pagination.Item>
			<Pagination.Item disabled>{14}</Pagination.Item>

			<Pagination.Ellipsis />

			{/* <Pagination.Item>{20}</Pagination.Item> */}
			<Pagination.Next
				onClick={() => this.updatePage(1)}
			/>
			<Pagination.Last
				onClick={() => this.updatePage(this.state.searchResults['total-results'])}
			/>
		</Pagination>
	)

}

export default Paginations;

{/* <Pager>
	<Pager.Item 
		previous 
		disabled={ this.state.page <= 1}  
		onClick={() => this.updatePage(-1)} 
	>
		&larr; Previous Page
	  </Pager.Item>

	<Pager.Item 
		next 
		onClick={() => this.updatePage(+1)}
		disabled={ this.state.page >= this.state.searchResults['total-results']}
	>
		Next Page &rarr;
	  </Pager.Item>
</Pager> */}
