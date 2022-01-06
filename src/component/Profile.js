import React from 'react'
import "./sidebar.css";

function Profile() {
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
          <span className="sidebar__hash"></span>#<p>{topic}</p>
        </div>
      );

    return (
            <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://t4.ftcdn.net/jpg/04/24/15/73/360_F_424157378_2jNl1im7DAT0rNDQvLuyISYNwBsstX8m.jpg"
          alt=""
        />
      
        <h2>Sakshi Singh</h2>
        <h4>ssakshi9929@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">29</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on Post</p>
          <p className="sidebar__statNumber">1000</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>

        // </div>
    )
}

export default Profile