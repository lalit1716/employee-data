import React from "react";
import { Link, useNavigate } from "react-router-dom";
import User from "../user-data/User";

const Home = () => {

  let history = useNavigate();


  const handleEdit = (id,name,number,email) => {
    localStorage.setItem('Name',name);
    localStorage.setItem('Number',number);
    localStorage.setItem('Email',email);
    localStorage.setItem('Id',id);
    
  }





  const handleDelete = (id) => {
    var index = User.map(function (e) {
      return e.id;
    }).indexOf(id);

    User.splice(index, 1);

    history('/');
  };


  

  
  return (
    <>
      <div className="home">
        <header className="header">
          <nav className="nav-bar">
            <h1>User Management Application</h1>
          </nav>
        </header>

        <main className="main">
          <Link to="/Form" className="link">
            <div className="form-btn">
              <h2>Add User</h2>
            </div>
          </Link>

          <div className="hero-section">
            <table className="table">
              <thead>
                <tr className="thead">
                  <th>Sr no.</th>
                  <th>Name</th>
                  <th>Mobile No.</th>
                  <th>Email I'd</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {User && User.length > 0
                  ? User.map((item,index) => {
                      return (
                        <tr className="tr" key={item.id}>
                          <td>{index +1 }</td>
                          <td>{item.name}</td>
                          <td>{item.number}</td>
                          <td>{item.email}</td>
                          <td>
                           <Link to={'/edit'}>
                           <span
                              title="Edit"
                              onClick={()=> handleEdit(item.id, item.name, item.number, item.email)}
                              className="material-symbols-outlined edit"
                            >
                              edit_square
                            </span>
                           </Link>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <span
                              onClick={()=> handleDelete(item.id)}
                              title="Delete"
                              className="material-symbols-outlined"
                            >
                              delete
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  : "No data found"}
              </tbody>
            </table>
          </div>

        <div className="social-link">
          <h3>Dev : Lalit</h3>
          <a title="LinkedIn" href="https://www.linkedin.com/in/lalit-neema-3251a5256/"> LinkedIn</a>
          <a title="Instagram" href="https://www.instagram.com/lalit_1716/"> Instagram</a>
          <a title="Teitter" href="https://twitter.com/Lalit_1716" > Twitter</a>
        </div>
        </main>
      </div>
    </>
  );
};

export default Home;
