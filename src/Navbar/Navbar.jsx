import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ArrowDropDown";
import "./Navbar.css";

export default function Navbar() {
  const arr = [
    "agriculture",
    "food",
    "revenue",
    "education",
    "health",
    "transport",
    "small scale industry",
    "women and child empowerement",
    "railway",
    "finance",
    "large scale industry",
    "defence"
  ];
  const items = [
    {
      heading: "Departments",
      lists: [
        "agriculture",
        "food",
        "revenue",
        "education",
        "health",
        "transport",
        "small scale industry",
        "women and child empowerement",
        "railway",
        "finance",
        "large scale industry",
        "defence"
      ]
    },
    {
      heading: "Issue status",
      lists: ["solved", "unsolved"]
    },
    {
      heading: "Issue status",
      lists: ["solved", "unsolved"]
    },
    {
      heading: "Issue status",
      lists: ["solved", "unsolved"]
    },
    {
      heading: "Issue status",
      lists: ["solved", "unsolved"]
    },
    {
      heading: "Issue status",
      lists: ["solved", "unsolved"]
    }
  ];

  return (
    <div id="navbar-container">
      <ul>
        <li>
          <h2>Manjukrishna</h2>
          <div className="profile-dept">Agriculture department</div>
        </li>
        <hr />
        <div id="sidebar-container-item-list">
          {items.map((item, index) => {
            return (
              <div>
                <table style={{marginTop:"20px",marginLeft:"10px"}}>
                  <tr>
                    <td>
                      <ExpandMoreIcon />
                    </td>
                    <td></td>
                    <h3>{item.heading}</h3>
                  </tr>
                </table>
                <div id="sidebar-item-list">
                  {item.lists.map((it, index) => {
                    return (
                      <li id="items">
                        <table>
                          <tr>
                            <td>#</td>
                            <td>
                              <div className="dept-sidebar">{it}</div>
                            </td>
                          </tr>
                        </table>
                      </li>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
}
