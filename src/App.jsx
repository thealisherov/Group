import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Chart } from "chart.js";
import React from "react";
import Statistics from "./Statistics"
const App = () => {
const fetchUsers= async()=>{
const response = await axios.get('https://jsonplaceholder.typicode.com/users')
return response.data
}
  const {data,isLoading,error} = useQuery({
    queryKey:["users"],
    queryFn:fetchUsers

  });
  if(isLoading)return <div>Loading...</div> 
  if (error) return <div>Sorry something went wrong</div>
  return (
    <div>
     {data.map((user)=>(
      <div key={user.id} >
<p>{user.name}</p>
      </div>
     ))}

<div style={{ width: "600px", margin: "40px auto" }}>
<Statistics/>
</div>


    </div>
  );
};

export default App;
