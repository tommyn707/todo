import React, {useState, useEffect} from "react";
import NewTodo from "./NewTodo";
import AllTodos from "./AllTodos";

const PageWrapper = () =>{
    const [state, setState] = useState({
        newTask : "",
        allTasks : [['do home work',false],['not do homework', true]],
        input: "",
    })

    const onChangeHandler = event =>{
        event.preventDefault();
        setState({
            ...state,
            [event.target.name] : [event.target.value]
        })
    }


    const submitHandler = event =>{
        event.preventDefault();
        let curTasks = state.allTasks;
        let curTask = [state.input,false];
        curTasks.push(curTask);
        setState({
            ...state,
            allTasks : curTasks,
            input: ""
        })
    }

    const deleteTodo = (passing) => {
        let thisID;
        thisID = Object.values(passing)[0];
        let theseTodos = [];
        let everything = state.allTasks;
        delete everything[thisID];
        for (let i=0; i < everything.length; i++){
            if(state.allTasks[i] !== undefined)
            theseTodos[i] = state.allTasks[i]
        }
        setState({
            ...state,
            allTasks : theseTodos,
        })
    }

    const checkbox = (content) =>{
        let thisID;
        thisID = Object.values(content)[0];
        let everything = state.allTasks;
        if(everything[thisID][1] === true){
           everything[thisID][1] = false;
        } else if (everything[thisID][1] === false){
            everything[thisID][1] = true;
        }
        setState({
            ...state,
            allTasks: everything
        })
        console.log(state.allTasks)
    }

    return(
        <div>
            <NewTodo onChange={onChangeHandler} value={state.input} submit={submitHandler}/>
            <AllTodos allTasks={state.allTasks} checkbox={checkbox} setTask={setState.allTasks} del={deleteTodo} />
        </div>
    )
}
export default PageWrapper