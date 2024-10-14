import logo from './logo.svg';
import './App.css';
import Headder from './components/Headder';
import Content from './components/Content';
import { useEffect, useState } from 'react';
import Additem from './components/Additem';
import Search from './components/Search';


function App() {
  const API_URL = 'http://localhost:3500/items'
  const [todos,setTodo] = useState([])

  const [newItem , setNewItem] = useState('')

useEffect(() => {
  //console.log('rendering') 
  //JSON.parse(localStorage.getItem('todo_list'))
  const fetchItems = async () =>{
    try{
      const response = await fetch(API_URL)
      const listItems = await response.json()
      setTodo(listItems)

    }catch(err){
      console.log(err.stack)

    }
  }

  (async () => await fetchItems()) ()


},[])

const addItem = (todoitem) =>{
  const id = todos.length ? todos[todos.length - 1].id +1 : 1;  
  const addNewItem = {id,checked:false, todo:todoitem}
  const listItems = [...todos,addNewItem]
  setTodo(listItems)
  localStorage.setItem('todo_list',JSON.stringify(listItems))
}

//search 

const [search,setSearch] = useState('')

const handleCheck = (id) =>{
  const listCheck  = todos.map((item)=>item.id === id ? {... item ,checked:!item.checked} : item)
  setTodo(listCheck)
  localStorage.setItem('todo_list',JSON.stringify(listCheck))
     
}
const handleDelete = (id)=>{
  const listDelete = todos.filter((item) => item.id !==id)
  setTodo(listDelete)
  localStorage.setItem('todo_list',JSON.stringify(listDelete))
   
}

const handleSubmit = (e) =>{
  e.preventDefault()
  if(!newItem) return // if input field empty means return nothinf
  console.log(newItem)
  addItem(newItem)
  setNewItem('')
}


  return (
    <div className="App">
      <Headder title='Todo List'/>
      <Additem newItem = {newItem} setNewItem ={setNewItem} handleSubmit ={handleSubmit}   />
      <Search search={search} setSearch = {setSearch}/>
      <Content 
  todos={todos.filter(to => 
    to.todo && search ? to.todo.toLowerCase().includes(search.toLowerCase()) : true
  )}
  setTodo={setTodo}
  handleCheck={handleCheck}
  handleDelete={handleDelete}
/>
  </div>
  );
}

export default App;
