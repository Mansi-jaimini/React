import { useNavigate } from "react-router-dom"
function Login(){
    const navigate = useNavigate();

    function handleSubmitOrCancel(pathName) {
        console.log(" -- pathName :- ", pathName)
        // e.preventDefault()
        // navigate("/home");
        navigate("/" + pathName);
    }

    return(
    <div className="App">
        <h1>Login page</h1>
        <input type="text" placeholder="Enter Name" ></input><br></br>
        <input type="password" placeholder="Enter Password" ></input>
        <div>
            <button onClick={
                () => handleSubmitOrCancel("home")
            }>Submit</button>
            <button onClick={
                () => handleSubmitOrCancel("registration")
            }>Cancel</button>
            {/* <button onClick={
                () => handleSubmitOrCancel("update")
            }>Submit</button> */}
        </div>
    </div>
    )
}
export default Login