import { Card, ProgressBar } from 'react-bootstrap';
import './Carousel.css';
import step1 from '../../images/step1.png';
import step2 from '../../images/step2.png';
import step3 from '../../images/step3.png';
import step4 from '../../images/step4.png';

import {useState} from 'react';

const data = [
    {
        step:"1", 
        title:"Upload 2D image", 
        text:"At vision3D, we build 3D house models with exterior and interior 3D elevations.We have been working in this field for 10+ years.Order now to get your dream house or scroll to explore more.",
        image: {step1}
    },
    {
        step:"2", 
        title:"Construct your model", 
        text:"At vision3D, we build 3D house models with exterior and interior 3D elevations.We have been working in this field for 10+ years.Order now to get your dream house or scroll to explore more.",
        image: {step2}
    },
    {
        step:"3", 
        title:"It's revision time", 
        text:"At vision3D, we build 3D house models with exterior and interior 3D elevations.We have been working in this field for 10+ years.Order now to get your dream house or scroll to explore more.",
        image: {step3}
    },
    {
        step:"4", 
        title:"Final delivery", 
        text:"At vision3D, we build 3D house models with exterior and interior 3D elevations.We have been working in this field for 10+ years.Order now to get your dream house or scroll to explore more.",
        image: {step4}
    }
];


const Step = ({ step, title, text, image }) => {
    return (
        <div className="d-flex justify-content-start mb-4">
            <Card border="light" style={{ width: '40%' }} className="mr-4 mt-4">
                <Card.Body>
                    <Card.Text>
                        <h4 className="text-warning">Step {step}</h4>
                        <h3 className="text-primary">{title}</h3>
                        <p style={{marginTop:"20px"}}>{text}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <div style={{ width: '50%' }} className="ml-4">
                <img 
                    alt= {"Step " + step}
                    src={image}
                    height = "80%"
                />
            </div>
        </div>
    )
}

const Progress = ({setStep}) => {
    let [now, setNow] = useState(0);
    return (
        <div>
            <div style={{width:'75%'}} className="ml-auto mr-auto">
                <ProgressBar variant="primary" now={now} />
            </div>
            <div style={{marginTop: '-23px'}} className="d-flex justify-content-around">
                <button 
                    className="btn btn-primary button p2"
                    onClick={()=>{
                        setNow(0);
                        setStep(1);
                    }}
                >1</button>
                <button 
                    className="btn btn-primary button p2"
                    onClick={()=>{
                        setNow(35);
                        setStep(2);
                    }}
                >2</button>
                <button 
                    className="btn btn-primary button p2"
                    onClick={()=>{
                        setNow(65);
                        setStep(3);
                    }}
                >3</button>
                <button 
                    className="btn btn-primary button p2"
                    onClick={()=>{
                        setNow(100);
                        setStep(4);
                    }}
                >4</button>
            </div>
        </div>
    )
}

const Carousel = () => {
    let [step, setStep] = useState(1);
    return (
        <div>
            {step===1
            ?<Step 
                step={data[0].step}
                title={data[0].title}
                text={data[0].text}
                image={step1}
            />
            :null
            }
            {step===2
            ?<Step 
                step={data[1].step}
                title={data[1].title}
                text={data[1].text}
                image={step2}
            />
            :null
            }
            {step===3
            ?<Step 
                step={data[2].step}
                title={data[2].title}
                text={data[2].text}
                image={step3}
            />
            :null
            }
            {step===4
            ?<Step 
                step={data[3].step}
                title={data[3].title}
                text={data[3].text}
                image={step4}
            />
            :null
            }
            <Progress setStep={setStep} />
        </div>
    )
}

export default Carousel;