import React, { Component } from 'react'
import Todoitem from './Todoitem'
import Todopodaci from './Todojson'
import '../Css/Todo.css'
import shortid from 'shortid';

// https://www.youtube.com/watch?v=o_Ni4Cqh4XA   za refresh

class Todo extends Component {
  constructor(){
    super();
    this.state = {
      uStatePodaci: Todopodaci,
      zadatak: '',
      todos: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(broj){
    this.setState(prethodnoStanje => {
      const updatePodaci = prethodnoStanje.uStatePodaci.map(el => {
        if(el.broj === broj){
            el.completed = !el.completed;
        }
        return el;
      })
      return {
        uStatePodaci: updatePodaci
      }
    })
  }

  onChange(event){
      this.setState({
         [event.target.name]: event.target.value
      });

  }

  addTodo = (todo) => {
    const newTodos = [todo,...this.state.todos];
    this.setState({
        todos: newTodos
    });
  }

  onSubmit(e){
    e.preventDefault();
   this.addTodo({
      zadatak: this.state.zadatak,
      complete: false,
     id: shortid.generate()
   })
   /*const ispis = document.getElementById('ispis');
   ispis.innerHTML = this.state.zadatak;*/
    this.setState({
      zadatak: ''
    })
  }

  toggleComplete(id){
    this.setState({
      todos: this.state.todos.map(todo =>{
        if(todo.id === id){
           return{
             ...todo,
             complete: !todo.complete
           }
        } else {
          return todo
        }
      })
    });
  }

  obrisiUradjeno = () =>{
    this.setState({
      todos: this.state.todos.filter(todo => !todo.complete)
    })
  }

render(){
  const podaci = this.state.uStatePodaci.map(el => <Todoitem key={el.broj} objekat={el} 
  handleChange={this.handleChange}/>)

  return(
    <div className="apptodoitem">
        <h1>Todo</h1>
       {podaci}

       <form  onSubmit={this.onSubmit} id="todoform">
         <h2 style={{textAlign: 'center'}}>Another Todo</h2>
         <p>Click on the items to check them as finished, then you can delete
           them.
         </p>
       <input type="text" name="zadatak" placeholder="upisi" 
       onChange={this.onChange} value={this.state.zadatak}>

       </input>
        <button>Unesi zadatak</button>
       </form>

       <p>{this.state.zadatak}</p>

       {this.state.todos.map(todo => (
         <div key={todo.id} onClick={() => this.toggleComplete(todo.id)} 
         style={{textDecoration: todo.complete ? 'line-through' : ''}}>{todo.zadatak}</div>
       ))}
      
      <div>
        <button onClick={this.obrisiUradjeno}>Obrisi ispunjen zadatak</button>
      </div>
    </div>
  )
}

}
export default Todo

/*
 <p id="ispis"></p>
*/