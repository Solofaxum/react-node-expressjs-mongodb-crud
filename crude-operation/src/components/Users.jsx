import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users] = useState([{
    Name: "Solomon", Email:"solofaxum@gmail.com", Age : 20
  }]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Make API request using Axios
        const response = await axios.get('http//');
        
      // Check if the response data is available
      if (!response.data) {
        throw new Error('No response data');
      }
        // Set the fetched data to state
        // setUsers(response.data);

      } catch (error) {
        // Set error state if there's an issue with the request
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
          <div className="w-50 bg-white rounded p-3 ">
         <Link to="create" classname='btn btn-success'>ADD +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {users.map((user, id) => {
          return <tr key={id}>
              <td>{user.Name}</td>
              <td>{user.Email}</td>
              <td>{user.Age}</td>
              <td>
                <Link to="/update" className='btn btn-success'>Update</Link>
                <button>Delete</button>
              </td>
            </tr>
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
