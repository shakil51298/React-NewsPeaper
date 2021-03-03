import React from 'react';
import { Card, Button } from 'react-bootstrap';

const News = (props) => {
    const {content,description,publishedAt,title} = props.news;
    console.log(props.news);
    return (
            <Card className="m-3">
                <Card.Header>publishedAt : {publishedAt}</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
    );
};

export default News;