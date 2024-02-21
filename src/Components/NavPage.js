import React, { useEffect } from 'react'
import '../ComponentsStyling/NavPage.css'


const Nav = () => {

    return(
   <div>
    <div class="page-wrapper chiller-theme toggled">
  <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
    <i class="fas fa-bars"></i>
  </a>
  
  <nav id="sidebar" class="sidebar-wrapper">
    <div class="sidebar-content">
      <div class="sidebar-brand">
        <div id="close-sidebar"><i class="fas fa-times"></i></div>
      </div>
      <div class="sidebar-header">
        
        <div class="user-info">

        <h6>Expense-Desire<img src="https://cdn-icons-png.flaticon.com/128/781/781831.png" 
        style={{
                width: '25px',
                height: '25px',
                marginLeft: '10px'
                }}/>
         </h6>

        </div>
      </div>
    
      <div class="sidebar-menu">

        <ul>

          <li class="sidebar-dropdown">
            <a href="/dashboard"><i class="fa fa-tachometer-alt"></i><span>Dashboard</span></a>
            <div class="sidebar-submenu">
            
            </div>
          </li>

          <li class="sidebar-dropdown">
            <a href="/all_expenses"><i class="fa fa-shopping-cart"></i><span>All Expenses</span></a>
            <div class="sidebar-submenu">
            </div>
          </li>

          <li class="sidebar-dropdown">
            <a href="/about_team"><i class="fa fa-shopping-cart"></i><span>User Manual</span></a>
            <div class="sidebar-submenu">
            </div>
          </li>
          
          <li class="sidebar-dropdown">
            <a href="/about_team"><i class="fa fa-shopping-cart"></i><span>About Team</span></a>
            <div class="sidebar-submenu">
            </div>
          </li>
        
          
          
        
        </ul>
      </div>

    </div>

    <p style={{color:'grey'}}><center> Made by Avengers ❤️    </center></p>
    
  </nav>
    
  <main class="page-content">
    <div class="container-fluid">
      <hr/>
    </div>
  </main>
</div>
    
     </div>
  )
}

export default Nav


