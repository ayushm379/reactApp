import { Card } from 'react-bootstrap';
import './Home.css';
import { Facebook, Twitter, Mail, AndroidOutlined, Apple } from '@material-ui/icons';
import director from '../../images/director.png'
import choose from '../../images/choose.png'
import mobile from '../../images/mobile.png';
import interior from '../../images/interior.png';
import exterior from '../../images/exterior.png';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import Mycard from '../../components/Mycard';
import Spots from '../../components/Spots';

let interiorData = [
    {
        title: "3BHK House for company",
        text: "We have been working in this industry for 10 years and have worked on various projects",
        subtext: "",
        img: 'interior.png'
    },
    {
        title: "3BHK House for company",
        text: "We have been working in this industry for 10 years and have worked on various projects",
        subtext: "",
        img: 'exterior.png'
    },
    {
        title: "3BHK House for company",
        text: "We have been working in this industry for 10 years and have worked on various projects",
        subtext: "",
        img: 'interior.png'
    },
    {
        title: "3BHK House for company",
        text: "We have been working in this industry for 10 years and have worked on various projects",
        subtext: "",
        img: 'exterior.png'
    }
];

const Home = () => {
    return (
        <div>
            <Spots
                img="orange.png"
                top={900}
                left="90%"
            />
            <Spots
                img="blue.png"
                top={1500}
                left="-15%"
            />
            <Spots
                img="orange.png"
                top={1500 + 900}
                left="90%"
            />
            <Spots
                img="blue.png"
                top={1500 + 1500 + 900}
                left="-15%"
            />
            <Spots
                img="orange.png"
                top={1500 + 1500 + 1500}
                left="90%"
            />
            <div className="homeImage d-flex justify-content-between mb-4">
                <Card className="homeImageCard ml-4 my-auto p-2 shadow">
                    <Card.Body>
                        <Card.Text>
                            <h3>We are working to build your <span className="text-primary">dream house</span></h3>
                            <p style={{ color: "grey" }} className="cardText">
                                At vision3D, we build 3D house models with exterior and interior 3D elevations.
                                We have been working in this field for 10+ years.
                                Order now to get your dream house or scroll to explore more.
                            </p>
                            <div className="d-flex justify-content-start">
                                <button className="btn btn-primary mr-4 button">ORDER NOW</button>
                                <button className="btn btn-outline-primary mr-4 button">LOGIN</button>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div className="d-flex flex-column my-auto">
                    <div className="b1">
                        <button className="btn btn-primary slider1"><Facebook />{' '}Facebook</button>
                    </div>
                    <div className="b2">
                        <button className="btn btn-primary slider2"><Twitter />{' '}Twitter</button>
                    </div>
                    <div className="b3">
                        <button className="btn btn-primary slider3"><Mail />{' '}Email</button>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: "80px", marginBottom: "80px" }} className="d-flex justify-content-around">
                <Card border="light" style={{ width: '50%' }} className="p-2 my-auto">
                    <Card.Body>
                        <Card.Text>
                            <h3>Words From Founder</h3>
                            <p style={{ fontSize: '18px' }}>
                                At vision3D, we build 3D house models with exterior and interior 3D elevations.
                                We have been working in this field for 10+ years.
                                Order now to get your dream house or scroll to explore more.
                                At vision3D, we build 3D house models with exterior and interior 3D elevations.
                                We have been working in this field for 10+ years.
                                Order now to get your dream house or scroll to explore more.
                                At vision3D, we build 3D house models with exterior and interior 3D elevations.
                                We have been working in this field for 10+ years.
                                Order now to get your dream house or scroll to explore more.
                            </p>
                            <div className="d-flex justify-content-start">
                                <button className="btn btn-primary mr-4 button">Read Mode</button>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="light" style={{ width: '27%', borderRadius: '20px' }} className="p-2 my-auto shadow">
                    <Card.Img variant="top" width="100%" src={director} />
                    <Card.Body className="text-center">
                        <Card.Title>Founder and Chairman</Card.Title>
                        <Card.Text style={{ color: "grey" }}>
                            Vision 3D Studios
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div style={{ width: '85%', marginTop: "80px", marginBottom: "80px" }} className="ml-auto mr-auto">
                <h2>Our Portfolio</h2>
                <p className="mb-4" style={{ color: "grey" }}>We have been working in the industry from last 10 years and
                have worked on various projects including exterior 3D evaluation as
                well as the interior 3D elevations.
                Trust and honesty is out moto.
                </p>

                <div className="mt-4 d-flex flex-row">
                    {interiorData.map( data => <Mycard 
                            title = {data.title} 
                            text = {data.text}
                            subtext = {data.subtext}
                            img = {data.img}
                        />
                    )}
                </div>
            </div>

            <div style={{ width: '85%', marginTop: "80px", marginBottom: "80px" }} className="ml-auto mr-auto">
                <h2>How we work</h2>
                <p style={{ color: "grey" }}>We have been working in the industry from last 10 years and
                have worked on various projects including exterior 3D evaluation as
                well as the interior 3D elevations.
                Trust and honesty is out moto.
                </p>

                <div style={{ marginTop: "80px", marginBottom: "80px" }}>
                    <Carousel />
                </div>

                <div style={{ marginTop: "80px", marginBottom: "80px" }} className="d-flex justify-content-around">
                    <img
                        className="p-2"
                        alt="image"
                        src={choose}
                        width="40%"
                    />
                    <Card border="light" style={{ width: '45%' }} className="p-2 my-auto">
                        <Card.Body>
                            <Card.Text>
                                <h3>Why Choose Vision 3D?</h3>
                                <p style={{ fontSize: '18px', color: 'grey' }}>
                                    At vision3D, we build 3D house models with exterior and interior 3D elevations.
                                    We have been working in this field for 10+ years.
                                    Order now to get your dream house or scroll to explore more.
                                    At vision3D, we build 3D house models with exterior and interior 3D elevations.
                                    We have been working in this field for 10+ years.
                                    Order now to get your dream house or scroll to explore more.
                                    At vision3D, we build 3D house models with exterior and interior 3D elevations.
                                    We have been working in this field for 10+ years.
                                    Order now to get your dream house or scroll to explore more.
                                </p>
                                <div className="d-flex justify-content-start">
                                    <button className="btn btn-primary mr-4 button">Read Mode</button>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            
            <div style={{ marginTop: "80px", marginBottom: "80px" }} className="aboutusImage shadow">
                <div className="transparentdiv shadow">    
                    <h2 style={{color:"white"}}>We are team of professionals</h2>
                    <p style={{color:"white"}} className="mt-3">
                        At vision3D, we build 3D house models with exterior and interior 3D elevations.
                        We have been working in this field for 10+ years.
                        Order now to get your dream house or scroll to explore more.
                    </p>
                    <div className="transparentButtonDiv mt-4">
                        <button className="btn transparentButton">
                            Read More
                        </button>
                    </div>
                </div>
            </div>

            <div style={{ width: '85%' }} className="ml-auto mr-auto">
                <div style={{ marginTop: "80px", marginBottom: "80px" }} className="d-flex justify-content-center">
                    <Card border="light" style={{ width: '45%', marginRight: "20px" }} className="p-2 my-auto">
                        <Card.Body>
                            <Card.Text>
                                <h3>Download Our Mobile App</h3>
                                <p style={{ fontSize: '18px', color: 'grey' }} className="mb-4">
                                    At vision3D, we build 3D house models with exterior and interior 3D elevations.
                                    We have been working in this field for 10+ years.
                                    Order now to get your dream house or scroll to explore more.
                                </p>
                                <div className="d-flex justify-content-around mt-4">
                                    <button className="btn mr-4 iconDiv">
                                        <AndroidOutlined style={{ color:'green'}} className="icons"/>
                                    </button>
                                    <button className="btn mr-4 iconDiv">
                                        <Apple style={{ color:'lightslategrey'}} className="icons"/>
                                    </button>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <img
                        className="p-2"
                        alt="image"
                        src={mobile}
                        width="65%"
                    />
                </div>
            </div>

            <div style={{ width: '85%', marginTop: "80px", marginBottom: "80px" }} className="ml-auto mr-auto">
                <h2 style={{marginLeft:"20px"}}>Pricing</h2>
                <div style={{ marginBottom: "80px" }} className="d-flex justify-content-around">
                    <img
                        className="p-2"
                        alt="image"
                        src={interior}
                        width="40%"
                    />
                    <Card border="light" style={{ width: '45%' }} className="p-2 my-auto">
                        <Card.Body>
                            <Card.Text>
                                <h3>Interior 3D pricing</h3>
                                <p style={{ fontSize: '18px', color: 'grey' }}>
                                    At vision3D, we build 3D house models with exterior and interior 3D elevations.
                                    We have been working in this field for 10+ years.
                                    Order now to get your dream house or scroll to explore more.
                                </p>
                                <div className="d-flex justify-content-start">
                                    <button className="btn btn-primary mr-4 button">Order now</button>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div style={{ marginTop: "80px", marginBottom: "80px" }} className="d-flex justify-content-around">
                    <Card border="light" style={{ width: '45%' }} className="p-2 my-auto">
                        <Card.Body>
                            <Card.Text>
                                <h3>Exterior 3D pricing</h3>
                                <p style={{ fontSize: '18px', color: 'grey' }}>
                                    At vision3D, we build 3D house models with exterior and interior 3D elevations.
                                    We have been working in this field for 10+ years.
                                    Order now to get your dream house or scroll to explore more.
                                </p>
                                <div className="d-flex justify-content-start">
                                    <button className="btn btn-primary mr-4 button">Order now</button>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <img
                        className="p-2"
                        src={exterior}
                        width="40%"
                    />
                </div>
            </div>

            <div style={{ marginTop: "80px", marginBottom: "80px" }} className="buildingImage shadow">
                <div className="transparentdiv shadow">
                    <h2 style={{color:"white"}}>Our Vision</h2>
                    <p style={{color:"white"}} className="mt-3">
                        At vision3D, we build 3D house models with exterior and interior 3D elevations.
                        We have been working in this field for 10+ years.
                        Order now to get your dream house or scroll to explore more.
                    </p>
                    <div className="transparentButtonDiv mt-4">
                        <button className="btn transparentButton">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
            
        </div >
    );
};

export default Home;