import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Button, Alert,Modal,ModalBody,ModalFooter } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/ModalHeader'
class App extends React.Component{
  state = {
      show: true,
      disabled:true,
      showDialog:true,
    };

  handleDismiss = () => this.setState({ show: false ,disabled:false });
  handleAppear = () => this.setState({ show: true ,disabled:true});
  closeDialog = () => this.setState({ showDialog:false});
  render (){

    return(
      <div>
      <Container>
      <Button variant="primary" disabled={this.state.disabled} onClick={this.handleAppear}>Show Alert</Button>{" "}
      <Button variant="secondary" active={true}>Secondary</Button>{" "}
      <Button variant="warning" block={true}>Warning</Button>{" "}
      <Button variant="danger" size="sm">Danger</Button>{" "}
      <Button variant="info" size="lg">Info</Button>{" "}
      <Button variant="link">Link</Button>{" "}
      
      <Alert dismissible variant="dark" show={this.state.show} onClose={this.handleDismiss} >Hi serious Im Dad</Alert>
      </Container>
      <hr/>
      <Modal show={this.state.showDialog}>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>DU:BIUGBFIULABGI:UAVUIVUILVUIASDUIGASUUAGDIUGWDU
        IGIUGWDssssssssIUG</ModalBody>
        <ModalFooter>
          <Button variant="primary" onClick={this.closeDialog}>Close</Button>
          <Button variant="secondary">Clem</Button>
        </ModalFooter>
      </Modal>
    </div>
    );
  }
}




export default App;
