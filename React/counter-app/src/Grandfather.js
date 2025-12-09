import Father from "./Father.js";
import "./App.css"

const Grandfather = ({ myWill}) => {
    return(
        <div className="Container">
            <h2>Grandfather Component</h2>
            <Father as={myWill}></Father>
        </div>
    );
};

export default Grandfather;