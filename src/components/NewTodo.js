import React from "react";

const NewTodo = (props) =>{

    return(
        <div>
            <h1>New Item</h1>
            <form>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <input type="text" name="input" onChange={props.onChange} value={props.value} className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" onClick={props.submit} className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        </div>
)
}


export default NewTodo;