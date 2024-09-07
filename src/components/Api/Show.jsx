import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Show = () => {
    const params = useParams()
    const [todo, settodo] = useState();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
            .then(res => res.json())
            .then(res => settodo(res))
    }, []);
  return (
    <div>
        <p>id : {todo?.id} </p>
        <p>title : {todo?.title} </p>
        <p>completed : {(todo?.completed)? "true" : "false"} </p>
        <p>userId : {todo?.userId} </p>
    </div>
  )
}

export default Show