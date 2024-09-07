import { useEffect, useState } from "react";
import './Api.css'
import { Link, useNavigate } from "react-router-dom";
const Api = () => {

    const [todos, settodos] = useState([]);
    const navigate =useNavigate()
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(res => settodos(res))
    }, []);

    const showTodo = (id) =>{
        navigate(`/show/${id}`)
    }

    const updateTodo = (id) =>{
        navigate(`/update/${id}`)
    }

    const deleteTodo = (id) =>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}` , {
            method : "DELETE"
        })
        .then(res => res.json())
        .then(res=>console.log(res))
        .catch(error =>console.log(error))
    }

    return (
        <div className="home">
            <div className="add"><Link to="/create">add</Link></div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((element, index) => {
                        return (
                            <tr key={index}>
                                <td>{element.id}</td>
                                <td>{element.title}</td>
                                <td><button onClick={()=>showTodo(element.id)}>show</button></td>
                                <td><button onClick={()=>updateTodo(element.id)}>update</button></td>
                                <td><button onClick={()=>deleteTodo(element.id)}>delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default Api