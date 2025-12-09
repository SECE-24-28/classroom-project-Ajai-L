import Son from "./Son.js"
import "./App.css"

const Father = ({myWill}) => {
    return(
        <div className="Container">
        <h2>Father Component</h2>
        <Father as={myWill}></Father>
        </div>
    );
};

export default Father;