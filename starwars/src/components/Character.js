import React from 'react';
import "../App.css";
import {CardText, CardBody, CardTitle, CardSubtitle, Card, Row, Col, Container} from 'reactstrap';

const Character = props => {
    return (
        <Container className="container"> 
            <Row>
                <Col xs="6">
                    <div>
                        <Card body inverse style={{ margin: 'auto', marginTop: '10px', padding:'10px', color:'#fff', backgroundColor: '#333', width: '60%', borderColor: '#333' }}>
                            <CardBody className="card">
                                    <CardTitle className="character-name" style={{padding:'10px', fontSize:'1.5em'}}>{props.name}</CardTitle>
                                    <CardSubtitle>Character Biography</CardSubtitle>
                                    <CardText>
                                        Birth Year: {props.birth_year}
                                    </CardText>
                                    <CardText>
                                        Height: {props.height} 
                                    </CardText>
                                    <CardText>
                                        Mass: {props.mass}
                                    </CardText>
                                    <CardText>
                                        Gender: {props.gender}
                                    </CardText>
                                    <CardText>
                                        Eye Color: {props.eye_color}
                                    </CardText>
                                    <CardText>
                                        Hair Color: {props.hair_color}
                                    </CardText>
                                    

                            </CardBody>
                        </Card>
                    </div>
                </Col>
            </Row>
            
        </Container>
    )

}

export default Character;