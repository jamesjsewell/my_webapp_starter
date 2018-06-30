import React from "react";
import ReactDOM from "react-dom";
import './style.scss';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react'


const Index = () => {
    return <Container className="hello">hello</Container>
};

ReactDOM.render(<Index />, document.getElementById("index"));

