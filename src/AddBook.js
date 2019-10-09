import React,{Component} from 'react';
import {Input,Card,CardBody,CardTitle,FormGroup,Label,Table,Button,Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
import axios from 'axios';
import Header from "./Header.js"
import "./style.css"



class ViewBook extends Component{
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
  /*renderBooks = books => {
    const { search } = this.state.search;

    var name = books.title.toLowerCase();

    /*if( search !== "" && books.title.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
        return null
    }
    return (
      <div className="col-md-3" style={{ marginTop: "20px" }}>
        <Card>
          <CardBody>
            <CardTitle title={books.name}>
              {books.title.substring(0, 15)}
              {books.title.length > 15 && "..."}
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  }

 */
  componentWillMount(){
    axios.get('http://localhost:3003/Books').then((response)=>{
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
  
    axios.post('http://localhost:3003/Books', this.state.newBookData).then((response)=>{
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
    axios.delete('http://localhost:3003/Books/' +id).then((response)=>{
      this._refreshBooks();
    })
  }
  updateBook(){
    let{title,author,isbn,publicationDate,publisher,price,genre,format}=this.state.editBookData;
    axios.put('http://localhost:3003/Books/' +this.state.editBookData.id,{title,author,isbn,publicationDate,publisher,price,genre,format}).then((response)=>{
    
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
      axios.get('http://localhost:3003/Books').then((response)=>{
      this.setState({
        Books:response.data
      })
    })
    }
    
  render(){
   

    let Bookss=this.state.Books.map((x)=>{

      return(
        
        <tr key={x.id}>
        
         
        <td>{x.title}</td>
        <td>{x.author}</td>
        <td>{x.isbn }</td>
        <td>{x.publicationDate  }</td>
        <td>{x.publisher  }</td>
        <td>{x.price}  </td>
        <td>{x.genre} </td>
        <td>{x.format}</td>
        <td>
          <Button color="success" size="sm" className="mr-2" onClick={this.editBook.bind(this,x.id,x.title,x.author,x.isbn,x.publicationDate,x.publisher,x.price,x.genre,x.format)}>Update</Button>
          <Button color="danger" size="sm" onClick={this.deleteBook.bind(this,x.id)}>Delete</Button>
        </td>
        
      </tr>
      )

    }
    );
     /*const { search } = this.state.search;
    const B = Bookss.filter(b => {
      return b.title.indexOf(search) !== -1;
    });*/
    return(
      <div>
      
      <div id="myBox">
      <Button color="primary" onClick={this.toggleNewBookModal.bind(this)}>Add book</Button>
        </div>
          


    <div className="App Container">
      
      
       
        
        <Modal isOpen={this.state.editBookModal} toggle={this.toggleeditBookModal.bind(this)} >
          <ModalHeader toggle={this.toggleeditBookModal.bind(this)}>Edit Book data</ModalHeader>
          <ModalBody>
            <FormGroup>      
                  
                  <Label for="title">title </Label>
                  <Input id="title" value={this.state.editBookData.title} onChange={(e)=>{
                    let {editBookData}=this.state;
                    editBookData.title=e.target.value;
                    this.setState({editBookData});
                  }}/>
                  <Label for="author">author </Label>
                  <Input id="author" value={this.state.editBookData.author} onChange={(e)=>{
                    let {editBookData}=this.state;
                    editBookData.author=e.target.value;
                    this.setState({editBookData});
                  }}/>
                  <Label for="isbn">isbn</Label>
                  <Input id="isbn"value={this.state.editBookData.isbn} onChange={(e)=>{
                    let {editBookData}=this.state;
                    editBookData.isbn=e.target.value;
                    this.setState({editBookData});
                  }}/>
                  <Label for="publicationDate">publicationDate </Label>
                  <Input id="publicationDate"value={this.state.editBookData.publicationDate} onChange={(e)=>{
                    let {editBookData}=this.state;
                    editBookData.publicationDate=e.target.value;
                    this.setState({editBookData});
                  }}/>
                   <Label for="publisher">publisher </Label>
                  <Input id="publisher"value={this.state.editBookData.publisher} onChange={(e)=>{
                    let {editBookData}=this.state;
                    editBookData.publisher=e.target.value;
                    this.setState({editBookData});
                  }}/>
                  <Label for="price">price</Label>
                  <Input id="price"value={this.state.editBookData.price} onChange={(e)=>{
                    let {editBookData}=this.state;
                    editBookData.price=e.target.value;
                    this.setState({editBookData});
                  }}/>
                  <Label for="genre">genre </Label>
                  <Input id="genre"value={this.state.editBookData.genre} onChange={(e)=>{
                    let {editBookData}=this.state;
                    editBookData.genre=e.target.value;
                    this.setState({editBookData});
                  }}/>
                  <Label for="format">format</Label>
                  <Input id="format"value={this.state.editBookData.format} onChange={(e)=>{
                    let {editBookData}=this.state;
                    editBookData.format=e.target.value;
                    this.setState({editBookData});
                  }}/>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.updateBook.bind(this)}>Update Book</Button>{' '}
            <Button color="secondary" onClick={this.toggleeditBookModal.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>
     
      </div></div>);
  }
}
export default ViewBook;
