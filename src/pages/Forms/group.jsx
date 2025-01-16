import React, { useState } from "react";
import { useAuth } from "../../store/auth-context";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/Sidebar/Sidebar";
import { domain,groupUrl } from "../../config";
import "./group.css"


const GROUP_URL=`http://${domain}${groupUrl}`;


function GroupForm() {
  const { authState } = useAuth();
  const [action, setAction] = useState('create'); // Default action set to 'create'
  const [company_password, setCompanypassword] = useState('');
  const [groupName, setGroupName] = useState('');
  const [status,setStatus]=useState('')

  // Function to handle radio button change
  const handleActionChange = (event) => {
    setAction(event.target.value); // Update action based on selected radio button
  };

  const handleActionSubmit= async(groupName,company_password)=>{
    try{
      const form =new FormData();
      form.append('action',action)
      form.append('company_username',authState.company_username)
      form.append('group_name',groupName)
      form.append('company_password',company_password)
  
      const response =await fetch(GROUP_URL,{
        method:'POST',
        body:form,
      })
      const data=await response.text();
      setStatus(data)
      if(!response.ok){
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  

    }catch(error){
      console.log(error)

    }
  }



  if (authState.isLoggedIn) {
    return (
      <div>
        <Navbar />
        <SideBar />
        <div className="main-content">
          <div className="center-box-group">
            <h1>Device Groups</h1>
            <h6>You can create or delete device groups here</h6>

            {/* Radio buttons for 'create' and 'delete' */}
            <div className="radio-action">
              <label>
                <input
                  type="radio"
                  name="action"
                  value="create"
                  checked={action === 'create'}
                  onChange={handleActionChange}
                />
                Create
              </label>

              <label>
                <input
                  type="radio"
                  name="action"
                  value="delete"
                  checked={action === 'delete'}
                  onChange={handleActionChange}
                />
                Delete
              </label>
            </div>

            {/* Group Name Input */}
            <div className="form-group">
              <label htmlFor="groupName">Group Name</label>
              <input
                type="text"
                id="groupName"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                placeholder="Enter group name"
                className="form-control"
              />
            </div>

            {/*Company Password*/}
            <div className="form-group">
              <label htmlFor="companyPassword">Company Password</label>
              <input
                type="password"
                id="companyPassword"
                value={company_password}
                onChange={(e) => setCompanypassword(e.target.value)}
                placeholder="Enter password"
                className="form-control"
              />
            </div>

            {/* Submit Button */}
            <button className="btn btn-primary" onClick={()=>handleActionSubmit(groupName,company_password)}>
              {action === 'create' ? 'Create Group' : 'Delete Group'}
            </button>
            {status}
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default GroupForm;
