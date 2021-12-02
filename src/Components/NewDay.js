import 'bootstrap/dist/css/bootstrap.min.css'
import {Card,CardBody,CardTitle,CardImg,CardText, Row} from 'reactstrap'
import '../App.css'
function NewDay({data}) {
    //Date
    const date = new Date(data?.dt*1000);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    //Sunrise
    const sunRiseTime = new Date(data?.sunrise*1000);
    const sunRiseHour = sunRiseTime.getHours();
    const sunRiseMin = sunRiseTime.getMinutes();
    //Sunset
    const sunSetTime = new Date(data?.sunset*1000);
    const sunSetHour = sunSetTime.getHours();
    const sunSetMin = sunSetTime.getMinutes();
    //Temp
    const temp = parseInt(data?.temp?.day) - 273;
    const tMin = data?.temp?.min - 273;
    const tMax = data?.temp?.max - 273;
    //Humidity
    const humidity = data?.humidity;
    //Description
    const desc = data?.weather[0]?.description;
    const deg = '/xb0'
    console.log(desc);
    return ( 
        <Card className='mt-5 mb-2 text-center'>
            <CardBody>
                <CardTitle>
                Date : {day}/{month}/{year}
                </CardTitle>
                <CardText>

                Sunrise : {sunRiseHour}:{sunRiseMin}
                </CardText>
                <CardText>

                Sunset : {sunSetHour}:{sunSetMin}
                </CardText>
                <CardText>

                Temperature : {temp}C
                </CardText>
                <CardText>
                    Humidity : {humidity}
                </CardText>              
                <CardText>
                    Description : {desc}    
                </CardText>    

            </CardBody>
        </Card>
     );
}

export default NewDay;