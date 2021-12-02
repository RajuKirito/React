import {useState,useEffect} from 'react'
import Axios from 'axios'
import {random,commerce} from 'faker'
import {Container,Col,Row} from 'reactstrap'
import CartItem from './Cartitem'

const apiKey = 'INSERT THE KEY HERE';

const url = 'https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1';
const localurl = 'https://myjson.dit.upm.es/api/bins/4ymv'

const BuyPage = ({addInCart})=>{
    const [product,setProduct] = useState([]);
    /* const fetch_photos = async()=>{
        const response = await Axios.get(url,{
            header:{
                Authorization: apiKey
            }
        })
    } */
    const fetch_photos = async()=>{
        const {data} = await Axios.get(localurl,{})  

        const {photos} = data;

        const allProducts = photos.map(photo=>({
            smallImage : photo.src.medium,
            tinyImage : photo.src.tiny,
            productName : random.word(),
            productPrice : commerce.price(),
            id:random.uuid()
        }));

        setProduct(allProducts);
    };

    useEffect(()=>{fetch_photos()},[]);

    return(
        <Container fluid>
            <h1 className = 'text-success text-center'>
                Buy Page
            </h1>
            <Row>
                {product.map(product=>(
                    <Col md={4} key = {product.id}>
                        <CartItem product = {product} addInCart={addInCart}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default BuyPage;