import {Card, CardBody, CardTitle, CardText} from 'reactstrap';
import {FaEnvelope,FaMapMarkedAlt,FaPhone} from 'react-icons/fa';

const Cards = ({details})=>{
    return(
        <Card className='text-center'>
            <CardBody >
                <img height = '150' width = '150' 
                className ='rounded-circle img-thumbnail border-danger'
                src = {details.picture?.large}
                alt ='there should be some image here'/>
            </CardBody>
            <CardTitle className = 'text-primary'>
                <h1><span className='pe-2'>{details.name?.title }</span>
                <span className='pe-2'>{details.name?.first }</span>
                <span>{details.name?.last }</span></h1>
            </CardTitle>
            <CardText >
                <FaMapMarkedAlt/>
                {details.location?.city}
                <p><FaPhone/>{details.phone}</p>
                <h6><FaEnvelope/>{details.email}</h6>
            </CardText>
        </Card>
    )
}

export default Cards;