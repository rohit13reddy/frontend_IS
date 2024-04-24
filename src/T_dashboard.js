import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const T_dashboard = () => {
  const [tests, setTests] = useState(0);
  const [students, setStudents] = useState(0);
  const [classes, setClasses] = useState(0);
  const [perf, setPerf] = useState(['Neeraj', 'Ananya', 'Rohit']);
  const [point, setPoint] = useState([85, 92, 78]);

  useEffect(() => {
    // Fetch data from backend
    fetch('your-backend-api-endpoint')
      .then(response => response.json())
      .then(data => {
        setTests(data.tests || 0);
        setStudents(data.students || 0);
        setClasses(data.classes || 0);
        setPerf(data.perf || []);
        setPoint(data.point || []);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div>
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">Teacher Dashboard</a>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>

      <div style={{ display: "flex", minHeight: "100vh" }}>
      <div style={{ borderRight: "1px solid #ccc", padding: "30px" }}>
                    <ul class="nav flex-column">
                        <li class="nav-item" style={{margin: "10px 0px"}}>
                            <Link to="../teacher_dashboard" style={{ textDecoration: "None"}}>Dashboard</Link>
                        </li>
                        <li class="nav-item" style={{margin: "10px 0px"}}>
                            <Link to="../ttest" style={{ textDecoration: "None"}}>Test</Link>
                        </li>
                        <li class="nav-item" style={{margin: "10px 0px"}}>
                            <Link to="../tcalender" style={{ textDecoration: "None"}}>Calender</Link>
                        </li>
                    </ul>
                </div>

        <div>

          <div>
            <h1> Overview</h1>
          </div>


          <div style={{ display: "flex", margin: "40px 0px" }}>
            {/* Here some of the graphs have to be added */}

            <div style={{ margin: "0px 40px", backgroundColor: "#ADD8E6", width: "300px", height: "150px", paddingTop: "25px" }}>
              <h3>Total Tests made</h3>
              <br></br>
              {tests}
            </div>
            <div style={{ margin: "0px 40px", backgroundColor: "#FFD580", width: "300px", height: "150px", paddingTop: "25px" }}>
              <h3>Total Students</h3>
              <br></br>
              {students}
            </div>
            <div style={{ margin: "0px 40px", backgroundColor: "lightgreen", width: "300px", height: "150px", paddingTop: "25px" }}>
              <h3>Total Classes</h3>
              <br></br>
              {classes}
            </div>
          </div>

          <div>
            <h3>Top Performers</h3>
            <div>
              <table className="table" style={{ margin: "0px 50px" }}>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Student</th>
                    <th scope="col">Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>{perf[0]}</td>
                    <td>{point[0]}</td>
                  </tr>
                  <tr>
                  <th scope="row">2</th>
                    <td>{perf[1]}</td>
                    <td>{point[1]}</td>
                  </tr>
                  <tr>
                  <th scope="row">3</th>
                    <td>{perf[2]}</td>
                    <td>{point[2]}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <div style={{ margin: "40px 0px" }}>
              <h3>Recent Completions</h3>
            </div>
            <div>
              <table className="table" style={{ margin: "0px 50px" }}>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Task</th>
                    <th scope="col">Student</th>
                    <th scope="col">Date submitted</th>
                    <th scope="col">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>test1</td>
                    <td>Neeraj</td>
                    <td>21/4/2024</td>
                    <td>73</td>
                  </tr>
                  <tr>
                  <th scope="row">2</th>
                    <td>test1</td>
                    <td>Ananya</td>
                    <td>20/4/2024</td>
                    <td>89</td>
                  </tr>
                  <tr>
                  <th scope="row">3</th>
                    <td>test1</td>
                    <td>Tharun</td>
                    <td>20/4/2024</td>
                    <td>23</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>



      </div>

    </div>
  )
}

export default T_dashboard