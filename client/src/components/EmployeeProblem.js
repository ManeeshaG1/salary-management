import React from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import '../css/IT19197760.css';
import Header from './eHeader';

export default class EmployeeProblem extends React.Component{
 constructor(props){
        super(props);
    this.state={
        posts:[]
    };
 }

 componentDidMount(){
     this.retrivePost();
 }

 retrivePost(){
     axios.get("http://localhost:5000/employeeProblem/display").then(res=>{
         this.setState({
             posts:res.data
         });
         console.log(this.state.posts)
     });
 }
    render(){

        
        return(

            
            <div className="container">

            < Header />

            
                <div>
                   <h1 style={{marginLeft : 500 ,fontSize: 25, }}>Employee Problems</h1>
                   <Link className="btn" to={"/addC/" } >+ Add Problem</Link>
                    <table style={{fontSize: 15}} className="table">
                        <thead>
                            <th scope="col">#</th>
                            <th scope="col">EmployeeId</th>
                            <th scope="col">Problem They Have</th>
                            <th scope="col">Solution</th>
                        
                            <th scope="col">Action</th>


                        </thead>
                        <tbody>
                            {this.state.posts.map((posts,index)=>(
                                    <tr>
                                        <th scope="row">{index+1}</th>


                                        <td>
                                            
                                            
                                            {posts.EmployeeId}</td>
                                        <td>{posts.ProblemTheyHave}</td>
                                        <td>{posts.Solution}</td>
                                       
                                        <td>
                                            <a className="btn1" href={'/update/${posts.id}'}>
                                                <i className="fas fa-edit"></i>&nbsp;Edit
                                             </a>   
                                        </td>
                                        &nbsp;
                                        <td>
                                            <a className="btn2" href="{'/delete/:Id'}">
                                                <i className="far fa-trash-alt"></i>&nbsp;Delete
                                             </a>   
                                        </td>

                                    </tr>






                            ))}
                        </tbody>

                    </table>

                </div>

            

            </div>

        )
    }

}