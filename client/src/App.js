import {React,useEffect } from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//customers
import CustomerTable from './components/Customers/customerTable/customerTable';
import AddCustomer from './components/Customers/addCustomer/addCustomer';
import UpdateCustomer from './components/Customers/updateCustomer/updateCustomer';
import CustomerLogin from './components/Customers/customerLogin/customerLogin';
import CustomerRegister from './components/Customers/customerRegister/customerRegister';
import CustomerUserProfile from './components/Customers/customerUserProfile/customerUserProfile';
import PrivateRoute from './components/Customers/privateRoute/PrivateRoute';
import PublicRoute from './components/Customers/publicRoute/PublicRoute';
import CustomerPasswordReset from './components/Customers/customerPasswordReset/customerPasswordReset';
//branches
import AddBranch from './components/Branches/addBranch';
import AllBranches from './components/Branches/allBranches';
import ViewBranches from './components/Branches/viewBranch';
import UpdateBranches from './components/Branches/updateBranch';
import DownloadBranches from './components/Branches/downloadBranch';

//employee

import Addemployee from './components/Addemployee';
import AllEmployee from './components/AllEmployee';
import editEmployee from './components/editEmployee';
import deleteEmployee from './components/deleteEmployee';
import EmployeeProblem from './components/EmployeeProblem';
import AddProblem from './components/AddProblem';

//Salary
import CreateSalary from "./components/Salaries/create-salary.component";
import EditSalary from "./components/Salaries/edit-salary.component";
import SalaryList from "./components/Salaries/salary-list.component";
import GenerateSalaryRepo from './components/Salaries/GenerateSalaryRepo';

//Vehicle
import CreateVehicle from "./components/Vehicles/create-vehicle.component";
import EditVehicle from "./components/Vehicles/edit-vehicle.component";
import VehicleList from "./components/Vehicles/vehicle-list.component";

// //stock


//constructions
import AddCustomizedReqCom from './components/AddCustomizedReq'
import findHome from './components/constructionDash';
import AddSystemizedReq from './components/AddSystemizedReq';
import editSysReq from './components/EditSystemizedReq';
import editCusReq from './components/EditCustomizedReq';
import myConsreq from './components/UserDashConstruction';
import myConsreqPrint from './components/ConsReqPrint';
import AdminConstructionDash from './components/adminDash';
import insertDesign from './components/InsertSystemizedDesigns';




function App() {

  //stock
  



  return (
    <div className = "App">
        <Router>
      {/*customers */}
      <Route exact path="/customers" component = {CustomerTable} exact></Route>
      <Route path="/customer/add" component = {AddCustomer} exact></Route>
      <Route path="/updateCustomer/:id" component = {UpdateCustomer} exact></Route>
      <PublicRoute path="/customer/login" component = {CustomerLogin} exact></PublicRoute>
      <PublicRoute path="/customer/register" component = {CustomerRegister} exact></PublicRoute>
      <PrivateRoute path="/customer/profile" component = {CustomerUserProfile} exact></PrivateRoute>
      <PrivateRoute path="/customer/profile/password-reset" component = {CustomerPasswordReset} exact></PrivateRoute>
    
      {/* branches */}
      <Route path="/view" exact component={ViewBranches}/>
      <Route path="/download" exact component={DownloadBranches}/>
      <Route path="/update" exact component={UpdateBranches}/>
      <Route path="/add" exact component={AddBranch}/>
      <Route path="/branches" exact component={AllBranches}/>

      {/*employee */}

      <Route path ="/employee/add" exact component ={Addemployee} />
      <Route path ="/employee" exact component ={AllEmployee} />
      <Route path = "/employee/update/:id" exact component ={editEmployee} />
      <Route path = "/employee/delete/:id" exact component ={deleteEmployee} />
      <Route path ="/addC" exact component ={AddProblem} />
      <Route path ="/employee/display" exact component ={EmployeeProblem} />

      {/*Salary */}
      <Route path= "/generate-salary" exact component= {GenerateSalaryRepo}/>
      <Route path="/create-salary" component={CreateSalary} />
      <Route path="/edit-salary/:id" component={EditSalary} />
      <Route path="/salary-list" component={SalaryList} />

       {/*Vehicle */}
        <Route exact path='/vehicle/' component={CreateVehicle} />
        <Route path="/create-vehicle" component={CreateVehicle} />
        <Route path="/edit-vehicle/:id" component={EditVehicle} />
        <Route path="/vehicle-list" component={VehicleList} />

      {/* stock
      
      </Switch> */}

      {/*constructions*/}
      <Route path="/Creq" exact component={AddCustomizedReqCom}/>
      <Route path="/findHome" exact component={findHome}/>
      <Route path="/AddSystemizedReq" exact component={AddSystemizedReq}/>
      <Route path="/editSreq" exact component={editSysReq}/>
      <Route path="/editCreq/:id" exact component={editCusReq}/>
      <Route path="/userDashCons" exact component={myConsreq}/>
      <Route path="/userConsPrint" exact component={myConsreqPrint}/>
      <Route path="/insertD" exact component={insertDesign}/>
      <Route path="/adminConsDash" exact component={AdminConstructionDash}/>
        




    </Router>
    </div>

  );
}

export default App;
