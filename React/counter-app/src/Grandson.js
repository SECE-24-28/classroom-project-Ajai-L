import "./App.css"
const Grandson = ({myWill}) => {
    return(
        <div className="Container">
        <h2>Grandson Component</h2>
        <Grandson as={myWill}></Grandson>
        </div>
    );
};

export default Grandson;