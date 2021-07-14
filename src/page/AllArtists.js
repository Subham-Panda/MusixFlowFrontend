import React, { useEffect, useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import SweetAlert from 'react-bootstrap-sweetalert';
import Axios from 'axios';
import Loader from '../component/Loader';

const AllArtists = () => {
	const [artists, setartists] = useState([])
	const [loading, setloading] = useState(false)
	const [mid, setmid] = useState('')
	const [mfirstname, setmfirstname] = useState('')
	const [mlastname, setmlastname] = useState('')
	const [maddress, setmaddress] = useState('')
	const [mcity, setmcity] = useState('')
	const [mcountry, setmcountry] = useState('')
	const [memail, setmemail] = useState('')
	const [mphone, setmphone] = useState('')
	const [mpincode, setmpincode] = useState('')
	const [modal, setmodal] = useState(false)
	const [artistupdate, setartistupdate] = useState(false);



	useEffect(() => {
		getArtists();
	}, [])

	const getArtists = async () => {
		setloading(true)
		const { data } = await Axios.get(`${process.env.REACT_APP_SERVER_URL}/v1/artist/getall`)
		setartists(data.artists)
		setloading(false);
	}

	const openEditModal = (e) => {
		const id = e.target.id;
		const artist = artists.find(artist => artist._id === id)
		setmid(artist._id)
		setmfirstname(artist.first_name)
		setmlastname(artist.last_name)
		setmcity(artist.city)
		setmcountry(artist.country)
		setmemail(artist.email)
		setmphone(artist.phone)
		setmpincode(artist.pin_code)
		setmaddress(artist.address)
		setmodal(true);
	}

	const displayArtists = () => {
		return artists.map(artist => {
			return (
				<tr>
					<td>{artist.social_token_id}</td>
					<td>{artist.social_token_symbol}</td>
					<td>{`${artist.first_name ? artist.first_name : ''} ${artist.last_name ? artist.last_name : ''}`}</td>
					<td><Button variant="primary" id={artist._id} onClick={openEditModal}>EDIT</Button></td>
				</tr>
			)
		})
	}

	const updateDetails = async () => {
		const data = {
			id: mid,
			first_name: mfirstname,
			last_name: mlastname,
			address: maddress,
			city: mcity,
			country: mcountry,
			email: memail,
			phone: mphone,
			pin_code: mpincode,
		}
		setloading(true)
		await Axios.patch(`${process.env.REACT_APP_SERVER_URL}/v1/artist/update`, data)
		await getArtists();
		setmodal(false)
		setartistupdate(true)
		setloading(false)

	}

	if (loading) {
		return <Loader />
	}
	return (
		<div className="dashboard-wrapper-main vw-100" style={{ minHeight: "100vh" }}>
			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						<th>
							Token
						</th>
						<th>
							Token Symbol
						</th>
						<th>
							Artist
						</th>
						<th>

						</th>
					</tr>
				</thead>
				<tbody>
					{displayArtists()}
				</tbody>
			</Table>
			<Modal show={modal} onHide={() => setmodal(modal => !modal)}>
				<Modal.Header closeButton>
					<Modal.Title>Edit Artist Details</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group>
							<Form.Label>First Name</Form.Label>
							<Form.Control type="text" value={mfirstname} onChange={e => setmfirstname(e.target.value)} />
						</Form.Group>
						<Form.Group>
							<Form.Label>Last Name</Form.Label>
							<Form.Control type="text" value={mlastname} onChange={e => setmlastname(e.target.value)} />
						</Form.Group>
						<Form.Group>
							<Form.Label>Address</Form.Label>
							<Form.Control type="text" value={maddress} onChange={e => setmaddress(e.target.value)} />
						</Form.Group>
						<Form.Group>
							<Form.Label>City</Form.Label>
							<Form.Control type="text" value={mcity} onChange={e => setmcity(e.target.value)} />
						</Form.Group>
						<Form.Group>
							<Form.Label>Country</Form.Label>
							<Form.Control type="text" value={mcountry} onChange={e => setmcountry(e.target.value)} />
						</Form.Group>
						<Form.Group>
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" value={memail} onChange={e => setmemail(e.target.value)} />
						</Form.Group>
						<Form.Group>
							<Form.Label>Phone</Form.Label>
							<Form.Control type="text" value={mphone} onChange={e => setmphone(e.target.value)} />
						</Form.Group>
						<Form.Group>
							<Form.Label>Pin code</Form.Label>
							<Form.Control type="text" value={mpincode} onChange={e => setmpincode(e.target.value)} />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setmodal(modal => !modal)}>
						Close
					</Button>
					<Button variant="primary" onClick={updateDetails}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
			<SweetAlert
				success
				show={artistupdate}
				title="Artist Data Updated Succesfully"
				style={{ color: '#000' }}
				onConfirm={() => { setartistupdate(artistupdate => !artistupdate) }}
				onCancel={() => { setartistupdate(artistupdate => !artistupdate) }}
			/>
		</div>
	)
}

export default AllArtists;