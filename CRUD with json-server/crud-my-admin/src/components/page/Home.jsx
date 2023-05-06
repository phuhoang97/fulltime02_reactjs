import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function Home() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:8000/users");
    setData(result.data);
  };
  useEffect(() => {
    loadUser();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8000/users/${id}`);
    loadUser();
  };

  return (
    <div>
      <h2>Home Page</h2>
      <div className='container'>
        <Table striped bordered hover>
          <thead>
            <tr className='bg-dark text-white'>
              <th>#</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th colSpan={3}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => {
              return (
                <tr>
                  <th scope='row'>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link>
                      <Button variant='outline-secondary' onClick={handleShow}>
                        <i class='fa-solid fa-eye'></i>
                      </Button>

                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          Woohoo, you're reading this text in a modal!
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant='secondary' onClick={handleClose}>
                            Close
                          </Button>
                          <Button variant='primary' onClick={handleClose}>
                            Save Changes
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </Link>
                  </td>
                  <td>
                    <Link to={`/user/edit/${user.id}`}>
                      <Button variant='outline-warning'>Edit</Button>
                    </Link>
                  </td>
                  <td>
                    <Link>
                      <Button
                        variant='outline-danger'
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Home;
