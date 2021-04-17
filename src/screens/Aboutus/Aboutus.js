import { Card } from 'react-bootstrap';
import { Facebook, Twitter, Mail, AndroidOutlined, Apple } from '@material-ui/icons';
import director from '../../images/director.png';
import mobile from '../../images/mobile.png';
import Footer from '../../components/Footer/Footer';
import './Aboutus.css';
import Mycard from '../../components/Mycard';
import Spots from '../../components/Spots';

let teamData = [
    {
        title: "Mr. Chandan Yalali",
        text: "CEO and Founder",
        subtext: "9500077372",
        img: "director.png"
    },
    {
        title: "Mr. Chandan Yalali",
        text: "Co-Founder",
        subtext: "9500077372",
        img: "director.png"
    },
    {
        title: "Mr. Chandan Yalali",
        text: "Co-Founder",
        subtext: "9500077372",
        img: "director.png"
    },
    {
        title: "Mr. Chandan Yalali",
        text: "Co-Founder",
        subtext: "9500077372",
        img: "director.png"
    }
];

const Aboutus = () => {
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
                top={900 + 900} 
                left="90%"
            />
            <div className="aboutusHomeImage d-flex flex-column-reverse mb-4">
                <div className="bg-primary p-2 pl-4" style={{opacity:'0.5', height:'70px', width:'100%'}}>
                    <h2 className="ml-4" style={{color:'white'}}>About Us</h2>
                </div>
            </div>
            <div style={{ marginTop: "80px", marginBottom: "80px" }} className="d-flex justify-content-around">
                <Card border="light" style={{ width: '50%' }} className="p-2 my-auto">
                    <Card.Body>
                        <Card.Text style={{overflow: 'scroll'}} >
                            <h3>About Our Mission</h3>
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
                <div className="d-flex flex-column my-auto">
                    <div className="aboutusB1">
                        <button className="btn btn-primary aboutusSlider1"><Facebook />{' '}Facebook</button>
                    </div>
                    <div className="aboutusB2">
                        <button className="btn btn-primary aboutusSlider2"><Twitter />{' '}Twitter</button>
                    </div>
                    <div className="aboutusB3">
                        <button className="btn btn-primary aboutusSlider3"><Mail />{' '}Email</button>
                    </div>
                </div>
            </div>
            <div style={{ width: '85%', marginTop: "80px", marginBottom: "80px" }}  className="ml-auto mr-auto">
                <h2 className="mb-4" >Team of Vision 3D</h2>
                <div className="mt-4 d-flex flex-row">
                    {teamData.map( data => <Mycard 
                            title = {data.title} 
                            text = {data.text}
                            subtext = {data.subtext}
                            img = {data.img}
                        />
                    )}
                </div>
            </div>
            <div style={{ width: '85%', marginTop: "80px", marginBottom: "80px" }}  className="ml-auto mr-auto">
                <h2>Origin Of Vision3D</h2>
                <p>
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
            </div>
            <div style={{ width: '85%', marginTop: "80px", marginBottom: "80px" }} className="ml-auto mr-auto">
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
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Aboutus;