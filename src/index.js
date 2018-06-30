import React from "react";
import ReactDOM from "react-dom";
import './style.scss';
import 'semantic-ui-css/semantic.min.css';
import { Container, Segment } from 'semantic-ui-react'


const Index = () => {
    return (<Container><Segment.Group>
                <Segment>Top</Segment>
                <Segment.Group>
                    <Segment>Nested Top</Segment>
                    <Segment>Nested Middle</Segment>
                    <Segment>Nested Bottom</Segment>
                </Segment.Group>
                <Segment.Group horizontal>
                    <Segment>Top</Segment>
                    <Segment>Middle</Segment>
                    <Segment>Bottom</Segment>
                </Segment.Group>
                    <Segment>Bottom</Segment>
            </Segment.Group></Container>)
};

ReactDOM.render(<Index />, document.getElementById("index"));

