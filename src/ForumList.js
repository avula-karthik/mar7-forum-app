import ForumReducerContext from "./ForumReducerContext";
import ForumTopic from "./ForumTopic";
import { useContext } from "react";
const ForumList = () => {
    const reducerValue = useContext(ForumReducerContext);
    return (
        <div>
            {reducerValue.state.map((val, index) => {
                return (
                    <div className="eachForum">
                        <h2>Forum Detail {index + 1}</h2>
                        <ForumTopic topic={val.topic} />
                        <b>User : </b>{val.user} <br />
                        <b>Time : </b>{val.time}<br />
                        <button onClick={() => {
                            if (window.confirm('Do you wish to delete the detail?') == true) {
                                reducerValue.dispatch({
                                    type: "delete", payload: index
                                })
                            }
                        }
                        }><b>Delete</b>
                        </button>
                    </div>
                )
            })}
        </div>
    )
};
export default ForumList;