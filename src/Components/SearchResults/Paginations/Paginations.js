import React from 'react';
import { Pagination } from 'react-bootstrap';

const Paginations = (props) => {

	let pageNumbers = [];
	let totalPages = props.totalPages;
	let startPage = 1;
	let endPage = 1;

	if (props.currentPage < 4) {
		startPage = 1;
		endPage = (totalPages <= 5 ? totalPages : 5)
	}
	else if (props.currentPage > (totalPages - 3)) {
		endPage = totalPages;
		startPage = (totalPages - 4) < 0 ? 1 : (totalPages - 4);
	}
	else {
		startPage = (props.currentPage - 2)
		endPage = (props.currentPage + 2)
	}

	for (let i = startPage; i <= endPage; i++)
		pageNumbers.push(i);

	return (
		<Pagination>
			<Pagination.First
				onClick={() => props.updatePage(1, true)}
			/>
			<Pagination.Prev
				onClick={() => props.updatePage(-1)}
				disabled={props.currentPage <= 1}
			/>

			{
				pageNumbers.map(num => <Pagination.Item
					key={num}
					active={num === props.currentPage}
					onClick={() => props.updatePage(num, true)}
				> {num} </Pagination.Item>)
			}

			<Pagination.Next
				onClick={() => props.updatePage(1)}
				disabled={props.currentPage >= totalPages}
			/>
			<Pagination.Last
				onClick={() => props.updatePage(totalPages, true)}
			/>
		</Pagination>
	)

}

export default Paginations;