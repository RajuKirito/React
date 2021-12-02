import {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col} from 'reactstrap'
import Axios from 'axios';
import NewDay from './NewDay';

//location 17.393968, 78.445423
//
const lat = 17.393968;
const lon = 78.445423;
const APIkey = `d695f4aea9552e71fac7541f92c3d7a2`;
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIkey}`;

const Weather = ()=>{
    const  [day,setDay]=useState([]);
    const fetch_data = async()=>{
        const {data} = await Axios.get(url,{});
        setDay(data.daily);
    }
    useEffect(()=>{fetch_data()},[]);
    return(<div>
        <Container fluid>
            <h1 className='text-center mt-5'>Weather Forecast</h1>
            <Row>
        {day.map(daily=>(
            <Col md={3} key = {daily?.dt}>
                <NewDay data = {daily}/>
            </Col>
        ))}
        </Row>
        </Container>
        
    </div>);

};

export default Weather;