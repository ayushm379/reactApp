import { Card } from 'react-bootstrap';
import './Carousel/Carousel.css';

const Mycard = ({title, img, text, subtext}) => {
    return (
        <div>
            <Card border="light" style={{borderRadius:"10px"}} className = "mx-4 shadow">
                <Card.Img 
                    src=  {process.env.PUBLIC_URL + 'images/' + img}
                    width = "100%"
                />
                <Card.Body>
                    <Card.Title className="text-weight-bold">{title}</Card.Title>
                    <Card.Text>
                        {text}<br/>
                        {subtext}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Mycard;