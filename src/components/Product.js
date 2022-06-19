import { useState } from 'react';
import {Modal, Button, Nav} from 'react-bootstrap';
import '../style/Product.css';
import Navigation2 from './Navigation2.js';

function Product() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Navigation2 />
            <div>
                <body className='border-product'>
                    <h3 className='mb-4' style={{ color: 'white'}}>List Product</h3>
                    <table class="table table-dark table-striped border-bottom">
                        <thead>
                            <tr>
                                <th className='pt-3 pb-4' scope="col">No&emsp;</th>
                                <th className='pt-3 pb-4' scope="col">Photo&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>
                                <th className='pt-3 pb-4' scope="col">Product Name&emsp;&emsp;</th>
                                <th className='pt-3 pb-4' scope="col">Product Desc</th>
                                <th className='pt-3 pb-4' scope="col">Price&emsp;&emsp;&emsp;&emsp;</th>
                                <th className='pt-3 pb-4' scope="col">Qty&emsp;</th>
                                <th className='pt-3 pb-4' scope="col">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className='pt-3'>1</td>
                                <td className='pt-3'><u>Mouse.jpg</u></td>
                                <td className='pt-3'>Mouse</td>
                                <td className='pt-3'>lorem ipsum mouse ...</td>
                                <td className='pt-3'>500.000</td>
                                <td className='pt-3'>600</td>
                                <td>
                                    <a className="btn rounded ps-5 pe-5 me-2 w-40 submit-button" href="/edit2" style={{ color: 'white', backgroundColor: '#56C05A'}}>Edit</a>
                                    <a className="btn rounded ps-5 pe-5 w-40 submit-button" onClick={handleShow} style={{ color: 'white', backgroundColor: '#F74D4D'}}>Delete</a>
                                </td>
                            </tr>

                            <tr>
                                <td className='pt-3'>2</td>
                                <td className='pt-3'><u>Keyboard.jpg</u></td>
                                <td className='pt-3'>Keyboard</td>
                                <td className='pt-3'>lorem ipsum keyboarrd ...</td>
                                <td className='pt-3'>700.000</td>
                                <td className='pt-3'>600</td>
                                <td>
                                    <a className="btn rounded ps-5 pe-5 me-2 w-40 submit-button" href="/edit2" style={{ color: 'white', backgroundColor: '#56C05A'}}>Edit</a>
                                    <a className="btn rounded ps-5 pe-5 w-40 submit-button" onClick={handleShow} style={{ color: 'white', backgroundColor: '#F74D4D'}}>Delete</a>
                                </td>
                            </tr>

                            <tr>
                                <td className='pt-3'>3</td>
                                <td className='pt-3'><u>Bag.jpg</u></td>
                                <td className='pt-3'>Bag</td>
                                <td className='pt-3'>lorem ipsum bag ...</td>
                                <td className='pt-3'>300.000</td>
                                <td className='pt-3'>600</td>
                                <td>
                                    <a className="btn rounded ps-5 pe-5 me-2 w-40 submit-button" href="/edit2" style={{ color: 'white', backgroundColor: '#56C05A'}}>Edit</a>
                                    <a className="btn rounded ps-5 pe-5 w-40 submit-button" onClick={handleShow} style={{ color: 'white', backgroundColor: '#F74D4D'}}>Delete</a>
                                </td>
                            </tr>

                            <tr>
                                <td className='pt-3'>4</td>
                                <td className='pt-3'><u>Stationary.jpg</u></td>
                                <td className='pt-3'>Stationary</td>
                                <td className='pt-3'>lorem ipsum stationary ...</td>
                                <td className='pt-3'>25.000</td>
                                <td className='pt-3'>600</td>
                                <td>
                                    <a className="btn rounded ps-5 pe-5 me-2 w-40 submit-button" href="/edit2" style={{ color: 'white', backgroundColor: '#56C05A'}}>Edit</a>
                                    <a className="btn rounded ps-5 pe-5 w-40 submit-button" onClick={handleShow} style={{ color: 'white', backgroundColor: '#F74D4D'}}>Delete</a>
                                </td>
                            </tr>

                            <tr>
                                <td className='pt-3'>5</td>
                                <td className='pt-3'><u>Doll.jpg</u></td>
                                <td className='pt-3'>Doll</td>
                                <td className='pt-3'>lorem ipsum doll ...</td>
                                <td className='pt-3'>125.000</td>
                                <td className='pt-3'>600</td>
                                <td>
                                    <a className="btn rounded ps-5 pe-5 me-2 w-40 submit-button" href="/edit2" style={{ color: 'white', backgroundColor: '#56C05A'}}>Edit</a>
                                    <a className="btn rounded ps-5 pe-5 w-40 submit-button" onClick={handleShow} style={{ color: 'white', backgroundColor: '#F74D4D'}}>Delete</a>
                                </td>
                            </tr>

                            <tr>
                                <td className='pt-3'>6</td>
                                <td className='pt-3'><u>Pillow.jpg</u></td>
                                <td className='pt-3'>Pillow</td>
                                <td className='pt-3'>lorem ipsum pillow ...</td>
                                <td className='pt-3'>300.000</td>
                                <td className='pt-3'>600</td>
                                <td>
                                    <a className="btn rounded ps-5 pe-5 me-2 w-40 submit-button" href="/edit" style={{ color: 'white', backgroundColor: '#56C05A'}}>Edit</a>
                                    <a className="btn rounded ps-5 pe-5 w-40 submit-button" onClick={handleShow} style={{ color: 'white', backgroundColor: '#F74D4D'}}>Delete</a>
                                </td>
                            </tr>                           
                        </tbody>
                    </table>

                    <Modal show={show} onHide={handleClose} style={{ paddingTop: '15%' }}>
                        <Modal.Body>
                            <h4 className='pb-2'>Delete Data</h4>
                            <h5>Are you sure you want to delete this data?</h5>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary ps-5 pe-5 me-2" onClick={handleClose} style={{ color: 'white', backgroundColor: '#56C05A', border: 'none'}}>
                                Yes
                            </Button>
                            <Button variant="primary ps-5 pe-5" onClick={handleClose} style={{ color: 'white', backgroundColor: '#F74D4D', border: 'none'}}>
                                No
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </body>
            </div>
        </>
    )
}

export default Product