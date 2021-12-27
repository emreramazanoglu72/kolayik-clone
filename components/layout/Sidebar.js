import classNames from "classnames";
import React, { useContext, useState } from "react";
import { FiCalendar, FiLogOut, FiUsers } from "react-icons/fi";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiOutlineLike,
} from "react-icons/ai";
import { RiAddCircleFill, RiApps2Line, RiDashboardLine } from "react-icons/ri";
import { MdOutlineNotificationsNone, MdHelpOutline } from "react-icons/md";
import Link from "next/link";
import { AppContext } from "/context/AppProvider";
import { useRouter } from "next/router";
import ProfilePopover from "./profilePopover";
import { OverlayTrigger } from "react-bootstrap";

const Sidebar = () => {
  const { userInfo, logout } = useContext(AppContext);
  const router = useRouter();

  const company = userInfo?.company;
  const [bigMenu, setBigMenu] = useState(true);
  return (
    <div
      className={classNames("draver", bigMenu ? "col-sm-2" : "col-sm-1 mini")}
    >
      <a href="#" className="logoLink">
        <img src={company?.logo} className="logo" alt={company?.name} />
      </a>
      <a
        className={"collapse-sidebar"}
        href="#"
        onClick={() => setBigMenu(!bigMenu)}
      >
        {bigMenu ? <AiFillCaretLeft /> : <AiFillCaretRight />}
      </a>
      <ul className="menuList">
        {[
          {
            icon: <RiAddCircleFill />,
            label: "Talep",
            active: true,
            href: "/",
          },
          { icon: <RiDashboardLine />, label: "Ana Sayfa", href: "/app/" },
          {
            icon: <FiUsers />,
            label: "Çalısanlar",
            href: "/app/employee-list",
          },
          { icon: <FiCalendar />, label: "Takvim", href: "/app/calendar" },
          { icon: <RiApps2Line />, label: "Uygulamalar", href: "/app/apps" },
        ].map((item, key) => (
          <Link href={item.href}>
            <li
              className={classNames(
                "menuItem",
                item.href == router.route && "active-menu"
              )}
              key={key}
            >
              <a
                href={item.href}
                className={item.href == router.route && "active"}
              >
                {item.icon}
                <span> {bigMenu && item.label}</span>
              </a>
            </li>
          </Link>
        ))}
      </ul>

      <div className="footer">
        <ul className="menuList">
          {[
            {
              icon: <MdOutlineNotificationsNone />,
              label: "Bildirim",
              href: "/app/apps/notifications",
            },
            { icon: <MdHelpOutline />, label: "Destek" },
          ].map((item, key) => (
            <li
              className={classNames("menuItem", item.active && "active")}
              key={key}
            >
              <a href="" className={item.active && "active"}>
                {item.icon}
                <span> {bigMenu && item.label}</span>
              </a>
            </li>
          ))}
          <li className={classNames("menuItem")}>
            <OverlayTrigger
              trigger="click"
              placement="right"
              overlay={() => (
                <div
                  className={classNames(
                    "popovers",
                    !bigMenu && "popovers-mini"
                  )}
                >
                  <div className="profile-card">
                    <div className="img">
                      <img src={userInfo?.user.avatarFile.url} alt="" />
                    </div>
                    <div class="txt">
                      <div class="name">Emre Ramazanoğlu</div>
                      <div class="profile-button"> Profili Görüntüle </div>
                    </div>
                  </div>
                  <li class="list-item">
                    <a>
                      <AiOutlineLike />
                      <span>Tavsiye edin</span>
                    </a>
                  </li>
                  <li onClick={logout} class="list-item">
                    <a>
                      <FiLogOut />
                      <span>Çıkış Yap</span>
                    </a>
                  </li>
                </div>
              )}
            >
              <a>
                <img src={userInfo?.user.avatarFile.url} className="avatar" />
                {bigMenu && <span> Hesabım</span>}
              </a>
            </OverlayTrigger>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
