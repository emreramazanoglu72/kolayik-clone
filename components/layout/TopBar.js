import React, { useContext } from "react";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { RiAddCircleFill, RiApps2Line } from "react-icons/ri";
import { AppContext } from "/context/AppProvider";

const TopBar = (props) => {
  const { userInfo } = useContext(AppContext);
  const items = {
    title: props.title || `İyi seneler ${userInfo?.user.firstName}!`,
    description: props.description || "Başarı dolu güzel bir yıl dileriz.",
    iconShow: props.iconShow || true,
  };
  const { title, description, iconShow } = items;
  return (
    <div className="d-flex justify-content-between tobar">
      <div className="w-100">
        <MdOutlineNotificationsNone className="notificationIcon" />
        <h4>{title}</h4>
        <RiAddCircleFill className="pluseIcon" />
        <p>{description}</p>
      </div>
      {iconShow && (
        <div className="appIcon">
          <RiApps2Line />
        </div>
      )}
    </div>
  );
};

export default TopBar;
