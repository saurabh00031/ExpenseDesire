import React from 'react'
import '../ComponentsStyling/DashboardPage.css'

const DashboardPage = () => {
  return (
    <div className="container-fluid mt-5">
      
      <h5><strong>Dashboard</strong></h5>
      <hr/>


{/* Row for budget */}
      <div className="row">
        
        <div className="col-sm-5 offset-1">
          <img src="https://cdn-icons-png.flaticon.com/128/10243/10243547.png" alt="Saurabh Icon" />
          New Expense
        </div>

        <div className="col-sm-5 offset-1">
          <img src="https://cdn-icons-png.flaticon.com/128/1420/1420341.png" alt="Patil Icon" />
          Budget
        </div>

          
      </div>

      <hr/>

      {/* Row for filters and categories */}

      <div className="row mt-5">
        
        <div className="col-sm-5 offset-1">
                <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Select Category
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#option1">
                  Income
                </a>
                <a className="dropdown-item" href="#option2">
                  Expense
                </a>
                <a className="dropdown-item" href="#option3">
                  None
                </a>
              </div>
            </div>
        </div>

        <div className="col-sm-5 offset-1">

              <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>

          
      </div>


    </div>

    <hr/>




    
    
    </div>
    
    
    
  )
}

export default DashboardPage