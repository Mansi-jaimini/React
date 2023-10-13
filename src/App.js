
import './App.css';
import React from 'react';
//import mansi from "./Components/mansi";

//function App(props) {
  //console.log("props value:" +props.color)
    /*let firstVariable=3;
    console.log("firstVariable:"+firstVariable)
    firstVariable=5;
    console.log("firstVariable:"+firstVariable)
  
    var secondVariable=8;
    console.log("secondVariable:"+secondVariable)
    secondVariable=9;
    console.log("secondVariable:"+secondVariable)
  
    const thirdVariable=7;
    console.log("thirdVariable:"+thirdVariable)
  //  thirdVariable=4;
   // console.log("firstVariable:"+thirdVariable)
  
   let sayhello=()=>console.log("hello,how are you")
   console.log(sayhello());
   setTimeout(sayhello,2000)*/
    /*class Student{
     Name
     Id
     Branch
     constructor(Name,Id,Branch){
       this.Name=Name
       this.Id=Id
       this.Branch=Branch
      // this.print()
     }
   // print(){
    // console.log("Name" +this.name)
    //}
      
     //let N=new Student();
     //N.Name="mansi jaimini"
     //console.log("name:" +N.Name)
    //N.print()
   
    printStudent(){
     console.log("name is "+this.Name);
     console.log("id is "+this.Id);
     console.log("branch is "+this.Branch);
    }
   }
   
    class Moniter extends Student{
     Batch
     College
     constructor(Name,Id,Branch,College,Batch){
       super(Name,Id,Branch)
       this.Batch=Batch
       this.College=College
     }
     printMoniter(){
       super.printStudent()
       console.log("batch is "+this.Batch);
       console.log("college is "+this.College);
     }
    }
    let moniter = new Moniter("mansi",1,"csit","ips","react")
    moniter.printMoniter()*/


    /* const myComponent = () => {
       return <h1>Hello SSI Digital</h1>
     }
     return myComponent();*/

   /* class MyClassComponent extends React.Component {
      render() {
        return <h1>The render function is Called</h1>
      }
    }
    const classcomponent = new MyClassComponent();
    return classcomponent.render();*/


    /*return React.createElement (
    "div",
    null,
    React.createElement("h1", null, "This is a heading "),
    React.createElement("ul", null, "This is unordered list"),
    React.createElement("p", null, "This is paragraph"),
    React.createElement("li", null, "This is ordered list")
    );*/



   /* return(
    <div>
      <button onClick={props.ClickEvent} >click me</button>
    </div>
    );*/
    class App extends React.Component{
      state={counter:0}
      constructor(props) {
        super(props)
        console.log("i am inside constructor")
      }
      static getDerivedStateFromProps(){
        console.log("i am inside getDrivedStateFromProps")
        return true
      }
      incrementCounter = () =>
    {
      this.setState({counter:this.state.counter+1})
    }
      render() 
      {
        console.log("inside render ")
        console.log(this.props)
        return(
        <div>
     <button onClick={this.incrementCounter} >click me</button>
          <br/>
          counter:{this.state.counter} 
          </div>     
        )
  }
  componentDidMount(){
    console.log("i am inside componenetDidMount")
  }
}

export default App;
