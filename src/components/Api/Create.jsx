import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate()
  const [users, setusers] = useState([]);
  const [title, settitle] = useState("");
  const [userId, setuserId] = useState(0);
  const [completed, setcompleted] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => setusers(res))
      .catch(error => console.log(error))
  }, []);
  const send = (event) => {
    event.preventDefault()
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        userId: parseInt(userId),
        completed: completed
      })
    })
    .then(res => res.json())
    .then(res =>{
      console.log(res)
      navigate("/")
    })
    .catch (error => console.log(error))

  }
  return (
    <div>
      <h1>create new todo</h1>
      <form onSubmit={(event) => send(event)}>
        <div className="item">
          <input type="text" placeholder="title" onChange={(event) => settitle(event.target.value)} />
        </div>
        <div className="item">
          <select onChange={(event) => setuserId(event.target.value)}>
            <option value="">choose user name</option>
            {users.map((element, index) => {
              return (
                <option key={index} value={element.id}>{element.name}</option>
              )
            })}
          </select>
        </div>
        <div className="item">
          <label htmlFor="completed">completed</label>
          <input type="checkbox" id="completed" onChange={(event) => setcompleted(event.target.checked)} />
        </div>
        <div className="item">
          <input type="submit" value="send" />
        </div>
      </form>
    </div>
  )
}

export default Create