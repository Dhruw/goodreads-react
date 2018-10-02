import React from 'react';

const Stars = (props) => {

	let renderArray = [];

	for( let i = 0; i < 5; i++)
	{
		if( i < Math.floor(props.rating) )
			renderArray.push( <i className="fa fa-star" key={i}></i> )
		else
			renderArray.push( <i className="fa fa-star-o" key={i}></i> )
	}

	return renderArray;

}

export default Stars;