import React, {Component} from "react"
import {BrowserRouter} from "react-router-dom"
import { Switch, Route, Redirect } from 'react-router-dom';
import {Input,Card,CardBody,CardTitle,FormGroup,Label,Table,Button,Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
import axios from 'axios';

class Header extends Component
{
  state={
    Books:[] ,
    search:"",
    newBookData:{
      
      title:'',author:'',isbn:'',publicationDate:'',publisher:'',price:'',genre:'',format:''
    },
    editBookData:{
      id:'',title:'',author:'',isbn:'',publicationDate:'',publisher:'',price:'',genre:'',format:''
    },
    newBookModal: false,
    editBookModal: false
    
  }

  componentWillMount(){
    axios.get('http://localhost:3000/productData').then((response)=>{
      this.setState({
        Books:response.data
      })
    })
  }
  
  toggleNewBookModal() {
    this.setState({newBookModal:!this.state.newBookModal});
  }
  toggleeditBookModal() {
    this.setState({editBookModal:!this.state.editBookModal});
  }
  addBook(){
  
    axios.post('http://localhost:3000/productData', this.state.newBookData).then((response)=>{
    let{Books}=this.state;
    Books.push(response.data);
    this.setState({Books,newBookModal:false,
      newBookData:{
      
        title:'',
        author:'',
        isbn:'',
        publicationDate:'',
        publisher:'',
        price:'',
        genre:'',
        format:''
      },});
  }
    );
  }
  deleteBook(id){
    axios.delete('http://localhost:3000/productData' +id).then((response)=>{
      this._refreshBooks();
    })
  }
  updateBook(){
    let{title,author,isbn,publicationDate,publisher,price,genre,format}=this.state.editBookData;
    axios.put('http://localhost:3000/productData' +this.state.editBookData.id,{title,author,isbn,publicationDate,publisher,price,genre,format}).then((response)=>{
    
      this._refreshBooks();
      this.setState({editBookModal:false,editBookData:{id:'', title:'',
      author:'',
      isbn:'',
      publicationDate:'',
      publisher:'',
      price:'',
      genre:'',
      format:''}})
  }
    );
  }
    
  
  editBook(id,title, author,isbn,publicationDate,publisher,price,genre,format){
      this.setState({
       editBookData : {
          id,title,author,isbn,publicationDate,publisher,price,genre,format

        },editBookModal:!this.state.editBookModal}
      );

    }
    _refreshBooks(){
      axios.get('http://localhost:3000/productData').then((response)=>{
      this.setState({
        Books:response.data
      })
    })
    }
  render()
  {
  return(
    <div>
      <nav className="navbar navbar-dark navbar-expand-sm fixed-top">
        <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="Navbar">
                    <a className="navbar-brand mr-auto" href="#"><span class="fa fa-user-circle"></span>  React Book Library</a>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><a class="nav-link" href="/viewbook"><span class="fa fa-home fa-lg"></span> View Book</a></li>
                        
                        <li className="nav-item active"><a class="nav-link" href="/addbook"><span class="fa fa-user"></span> Add</a></li>
                        
                        
                    </ul>
            </div>
        </div>
    </nav>
    <div id="myBox">
      
        </div>
          


    <div className="App Container">
      
      
       
        <Modal isOpen={this.state.newBookModal} toggle={this.toggleNewBookModal.bind(this)} >
          <ModalHeader toggle={this.toggleNewBookModal.bind(this)}>Add a New Book</ModalHeader>
          <ModalBody>
            <FormGroup>      
                  <Label for="title">title </Label>
                  <Input id="title" value={this.state.newBookData.title} onChange={(e)=>{
                    let {newBookData}=this.state;
                    newBookData.title=e.target.value;
                    this.setState({newBookData});
                  }}/>
                  <Label for="author">author </Label>
                  <Input id="author" value={this.state.newBookData.author} onChange={(e)=>{
                    let {newBookData}=this.state;
                    newBookData.author=e.target.value;
                    this.setState({newBookData});
                  }}/>
                  <Label for="isbn">isbn</Label>
                  <Input id="isbn"value={this.state.newBookData.isbn} onChange={(e)=>{
                    let {newBookData}=this.state;
                    newBookData.isbn=e.target.value;
                    this.setState({newBookData});
                  }}/>
                  <Label for="publicationDate">publicationDate </Label>
                  <Input id="publicationDate"value={this.state.newBookData.publicationDate} onChange={(e)=>{
                    let {newBookData}=this.state;
                    newBookData.publicationDate=e.target.value;
                    this.setState({newBookData});
                  }}/>
                   <Label for="publisher">publisher </Label>
                  <Input id="publisher"value={this.state.newBookData.publisher} onChange={(e)=>{
                    let {newBookData}=this.state;
                    newBookData.publisher=e.target.value;
                    this.setState({newBookData});
                  }}/>
                  <Label for="price">price</Label>
                  <Input id="price"value={this.state.newBookData.price} onChange={(e)=>{
                    let {newBookData}=this.state;
                    newBookData.price=e.target.value;
                    this.setState({newBookData});
                  }}/>
                  <Label for="genre">genre </Label>
                  <Input id="genre"value={this.state.newBookData.genre} onChange={(e)=>{
                    let {newBookData}=this.state;
                    newBookData.genre=e.target.value;
                    this.setState({newBookData});
                  }}/>
                  <Label for="format">format</Label>
                  <Input id="format"value={this.state.newBookData.format} onChange={(e)=>{
                    let {newBookData}=this.state;
                    newBookData.format=e.target.value;
                    this.setState({newBookData});
                  }}/>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addBook.bind(this)}>Add Book</Button>{' '}
            <Button color="secondary" onClick={this.toggleNewBookModal.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>
   
      </div>
    </div>
  )
  }
}

export default Header;