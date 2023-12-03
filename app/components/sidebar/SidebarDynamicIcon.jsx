import { FaBriefcase, FaEnvelopeOpen, FaHome, FaUser } from "react-icons/fa";

function SidebarDynamicIcon({ type }) {
  const FaIcon = components[type];
  return <FaIcon />;
}

const components = {
  FaBriefcase,
  FaEnvelopeOpen,
  FaHome,
  FaUser,
};

export default SidebarDynamicIcon;
