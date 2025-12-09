import Grandson from "./Grandson.js"
import "./App.css"

const Son = ({myWill}) => {
    return(
        <div className="Container">
        <h2>Son Component</h2>
        <Son as={myWill}></Son>
        </div>
    );
};

export default Son;