import React from "react";

const AllTodos = (props) => {

    const todoList = () => {
        let views = [];
        let checked;
        for (let i = 0; i < props.allTasks.length; i++) {
            if (props.allTasks[i][1] === false) {
                checked = <input className="form-check-input" id={i} onChange={() => props.checkbox({i})}
                                 type="checkbox"/>;
            } else if (props.allTasks[i][1] === true){
                checked = <input className="form-check-input" type="checkbox" onChange={() => props.checkbox({i})}
                                  id={i} checked/>;
            }

            views[i] = (<div className="form-check">
                {checked}
                <label className="form-check-label" id={i} htmlFor="defaultCheck1">
                    {props.allTasks[i]}
                </label>
                <button type="button" className="btn btn-primary" id={i} onClick={() => props.del({i})}>Delete Task</button>
            </div>)
        }

        return (views)
    }

    return (
        <div>
            <h1>All List</h1>
            {todoList()}
        </div>

    )
}

export default AllTodos