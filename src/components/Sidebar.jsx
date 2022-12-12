import React from "react";
import style from "./style/sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faListCheck,
  faLaptop,
  faBuilding,
  faAddressBook,
  faChartSimple,
  faClock,
  faStar,
  faTrash,
  faCircleInfo,
  faGear,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const itemList = [
    { id: 1, itemName: "Inbox", active: true, icon: faEnvelope },
    { id: 2, itemName: "Tasks", active: false, icon: faListCheck },
    { id: 3, itemName: "Meetings", active: false, icon: faLaptop },
    { id: 4, itemName: "Companies", active: false, icon: faBuilding },
    { id: 5, itemName: "Contacts", active: false, icon: faAddressBook },
    { id: 6, itemName: "Opportunities", active: false, icon: faChartSimple },
    { id: 7, itemName: "Reports", active: false, icon: faClock },
    { id: 8, itemName: "Starred", active: false, icon: faStar },
    { id: 9, itemName: "Trash", active: false, icon: faTrash },
  ];
  return (
    <>
      <div className={style.sidebar}>
        <div className={style.sidebarLogo}>
          <h3>Google CRM</h3>
        </div>
        <div className={style.sidebarList}>
          <ul>
            {itemList.map((value) => (
              <li
                key={value.id}
                className={value.active === true ? style.active : ""}
              >
                <FontAwesomeIcon icon={value.icon} />
                {value.itemName}
              </li>
            ))}
          </ul>
        </div>
        <div className={style.bottomButton}>
          <div>
            <FontAwesomeIcon icon={faCircleInfo} />
          </div>
          <div>
            <FontAwesomeIcon icon={faGear} />
          </div>
          <div>
            <FontAwesomeIcon icon={faDoorOpen} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
