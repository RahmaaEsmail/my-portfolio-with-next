"use client";
import Link from "next/link";
import styles from "./Sidebar.module.css";
import { useSelectedLayoutSegment } from "next/navigation";
import SidebarDynamicIcon from "./SidebarDynamicIcon";

function Sidebar() {
  const activeSegment = useSelectedLayoutSegment();

  const links = [
    {
      label: "FaHome",
      path: "/",
      targetSegment: null,
    },
    {
      label: "FaUser",
      path: "/about",
      targetSegment: "about",
    },
    {
      label: "FaBriefcase",
      path: "/projects",
      targetSegment: "projects",
    },
    {
      label: "FaEnvelopeOpen",
      path: "/contact",
      targetSegment: "contact",
    },
  ];

  return (
    <aside className={styles.sidebarContainer}>
      {links.map((link) => {
        return (
          <Link
            key={link.label}
            className={`${styles.link} ${
              link.targetSegment === activeSegment ? `${styles.focus}` : ""
            }`}
            href={link.path}
          >
            <SidebarDynamicIcon type={link.label} />
          </Link>
        );
      })}
    </aside>
  );
}

export default Sidebar;
