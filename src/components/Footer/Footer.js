//import './Footer.css';
import { Card } from 'react-bootstrap';
import { Phone, Mail, LocationOn, Facebook, Instagram, LinkedIn, WhatsApp } from '@material-ui/icons';

const Footer = () => {
    return (
        <div className="body d-flex justify-content-center" style={{height: '400px'}}>
            <Card style={{ width: "50%", textAlign: "center", borderColor: "white", color: "white" }} className="p-2 bg-primary">
                <Card.Body>
                    <h2>Have a doubt? Write to us</h2>
                    <p className="mt-4 mx-4">
                        Drop your query below to let it reach us. We will revert you back as soon as possible.
                        Our motto is to build a good relationship with our customer.
                    </p>
                    <p className="d-flex flex-column mt-4">
                        <input type="text" id="email" placeholder="Email Please" className="my-1 mx-4" style={{borderRadius: "4px"}} />
                        <textarea type="textarea" id="Write Your Query Here" placeholder="Write your query here" rows="5" className="my-1 mx-4" style={{borderRadius: "4px"}} />
                        <div className="btnDiv my-2 mx-4">
                            <input type="submit" value="Submit" className="btn btn-block btn-outline-light" style={{borderRadius: "4px"}} />
                        </div>
                    </p>
                </Card.Body>
            </Card>
            <Card style={{ width: "50%", textAlign: "center", borderColor: "white", color: "white" }} className="btn p-2 bg-primary">
                <Card.Body className="mx-4">
                    <table className="mx-auto table table-sm text-light table-borderless" style={{fontSize:'20px'}}>
                        <tbody>
                            <tr className="font-weight-bold">
                                <td>Support</td>
                                <td>Connect</td>
                                <td>Follow us</td>
                            </tr>
                            <tr>
                                <td>FAQ</td>
                                <td><Phone /> +91-8937463943</td>
                                <td><Facebook fontSize="large" /><Instagram fontSize="large" /></td>
                            </tr>
                            <tr>
                                <td>Our blog</td>
                                <td><Mail /> vision3d@gmail.com</td>
                                <td><WhatsApp fontSize="large" /><LinkedIn fontSize="large" /></td>
                            </tr>
                            <tr>
                                <td>Mission</td>
                                <td><LocationOn />522 21st Washington DC 20006</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Vission</td>
                            </tr>
                        </tbody>
                    </table>

                </Card.Body>
            </Card>
        </div>
    )
}

export default Footer;