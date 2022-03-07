import { useContext,  useState } from "react";
import ForumContext from "./ForumContext";
const ForumForm = (props) => {
    let [Forum, setForums] = useState("")
    let [status, setStatus] = useState("user1")
    let { dispatch } = useContext(ForumContext)
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const addForum = () => {
        document.getElementById("inputID").value.length > 0 ? dispatch({ type: 'add', Forum: Forum, status: status, time: props.time, date:props.date, month:props.month, year:props.year }) : alert("Give Forum")
    }
    const clearAllForums = () => {
        dispatch({ type: 'delAll' });
    }
    return (
        <div className="form">
            <form onSubmit={handleSubmit} >
                <textarea
                    id="inputID"
                    placeholder="Enter Comment"
                    rows="4"
                    cols="50"
                    onInput={(e) => {
                        setForums(e.target.value)
                    }}
                ></textarea> 
                < br />
                <select onChange={(e) => {
                    setStatus(e.target.value)
                }} >
                    <option value='user1' >User 1</option>
                    <option value='user2' >User 2</option>
                    <option value='user3' >User 3</option>
                </select>
                <br />
                <button className="btn btn-primary"  onClick={addForum} >Add Forum</button>
                <button  className="btn btn-warning" onClick={clearAllForums}  >Delete forums created within 15 Min</button>
            </form>
            <div>{ForumList()}</div>
        </div>
    )
}

const ForumList = () => {
    let valuesAll = useContext(ForumContext)
    console.log(valuesAll)
    if(valuesAll !==  undefined){
        return (
            <div>
                {
                    valuesAll.state.map((val, index) => {
                      if(val.Forum !== undefined)  {
                            return (
                                <div className="list" style={{visibility: "visible"}}>
                                    <h2 className={val.status}>{val.status}</h2>
                                    <h3  >{val.Forum}</h3>
                                    <p>Date: {val.date} / {val.month} / {val.year}</p>
                                    <button className="btn btn-danger" onClick={() => {
                                        if(window.confirm("Sure to delete ?") == true){
                                            valuesAll.dispatch({type:'deleteThisForum', indexToDel:index});

                                        }
                                        }} >Delete</button>
                                </div>
                            )
                        }

                    })
                }
            </div>

        )
    }
    
}

export default ForumForm;