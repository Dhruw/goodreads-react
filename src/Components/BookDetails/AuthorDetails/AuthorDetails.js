import React from 'react';
import { Row, Col, Image, Modal, Table, Panel } from 'react-bootstrap';

class AuthorDetails extends React.Component {

	render() {

		let {
			link,
			name,
			image_url,
			fans_count,
			works_count,
			gender,
			hometown,
			born_at,
			died_at,
			about,
			books
		} = this.props.author;

		const panelStyle = {
			'padding': '10px 5px'
		}


		return (
			<React.Fragment>
				<Modal
					bsSize="large"
					aria-labelledby="contained-modal-title-lg"
					show={this.props.showModal}
					onHide={this.props.resetAuthor}
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-lg">
							<a href={link}>
								{name}
							</a>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Row>
							<Col md={6} className="text-center">
								<Image src={image_url} />
							</Col>
							<Col md={6}>
								<Table striped hover>
									<tbody>
										<tr>
											<td>
												Fans Count
											</td>
											<td>
												{fans_count.$t}
											</td>
										</tr>
										<tr>
											<td>
												Number of Publications
											</td>
											<td>
												{works_count}
											</td>
										</tr>
										<tr>
											<td>
												Gender
											</td>
											<td>
												{gender}
											</td>
										</tr>
										<tr>
											<td>
												Hometown
											</td>
											<td>
												{(typeof hometown) === "string" ? hometown : "Unknown"}
											</td>
										</tr>
										<tr>
											<td>
												Birth
											</td>
											<td>
												{born_at}
											</td>
										</tr>
										<tr>
											<td>
												Death
											</td>
											<td>
												{(typeof died_at) === "string" ? died_at : "-"}
											</td>
										</tr>
									</tbody>
								</Table>
							</Col>
						</Row>
						<Row>
							<Col md={12}>
								<div dangerouslySetInnerHTML={{ __html: about }} />
							</Col>
						</Row>
						<Row>
							<Col md={12}>
								Books from author:
							</Col>
						</Row>
						<Row className="text-center">
							<Col md={12}>
								<div style={{
									'display': 'flex',
									'flex-wrap': 'wrap'
								}}>

									{
										books.book.map((item, index) => {

											return (
												<Panel style={{ 'width': '33.33333%' }}>
													<div style={panelStyle}>
														<Image src={item.small_image_url} />
														<h5>
															{item.title}
														</h5>
														Average Rating: {item.average_rating}   <br />
														<hr />
														<a href={item.uri} targe="_blank"> View Details </a>
													</div>
												</Panel>
											)
										})
									}
								</div>
							</Col>
						</Row>


					</Modal.Body>
				</Modal>

			</React.Fragment>
		)
	}
}

export default AuthorDetails;