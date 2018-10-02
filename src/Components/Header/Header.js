import React from 'react';
import { Navbar, FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

const Header = (props) => {

	return (
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
							<FormControl type="text" onChange={props.updateBookName} />
							<InputGroup.Button>
								<Button onClick={props.searchBooks} >
									<i className="fa fa-search"></i>
								</Button>
							</InputGroup.Button>
						</InputGroup>
					</FormGroup>

				</Navbar.Form>
			</Navbar.Collapse>
		</Navbar>
	)

}

export default Header;