import React from "react";
import ReactDOM from "react-dom";
import './style.scss';
import 'semantic-ui-css/semantic.min.css';
import { Container, Segment } from 'semantic-ui-react'


const Index = () => {
    return <Container><Segment><div className="hello">hello</div></Segment></Container>
};

ReactDOM.render(<Index />, document.getElementById("index"));

