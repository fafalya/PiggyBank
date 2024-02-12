import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
//import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { UrlUploadImages } from "../../urls/urlList";


const ImagesGetAll = () => {
    const [images, setImages] = useState([]);  

    useEffect(
        () => { (async () => await GetAllImages())() }
        , []);

    async function GetAllImages() {
        const fetchData = async () => {
            const result = await axios.get(UrlUploadImages);
            setImages(result.data);
            console.log(result.data);
        };
        fetchData();
    }
    console.log("ðåçóòüòàò GET çàïðîñà");
    console.log(images);


    return (
        <>                     
            <Container>
                <Row>                      
                    <Col xs={6} md={4}>
                        
                    </Col>
                </Row>
            </Container>
            
        </>
    );

}
export default ImagesGetAll;