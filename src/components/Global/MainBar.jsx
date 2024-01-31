import React from "react";
import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { Box, Typography, IconButton } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TodayIcon from "@mui/icons-material/Today";
import GroupsIcon from "@mui/icons-material/Groups";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import SettingsIcon from "@mui/icons-material/Settings";
import mainLogo from "../../assets/images/main_logo.png";
import toggleLogo from "../../assets/images/toggle_logo.png";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const menuItemStyle = {
    color: selected === title ? "#FF5151" : "#686868",
  };
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      style={menuItemStyle}
    >
      <Typography fontSize={16}>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const MainBar = ({ isCollapsed, setIsCollapsed }) => {
  //   const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box>
      <Sidebar
        collapsed={isCollapsed}
        width="245px"
        collapsedWidth="80px"
        style={{
          height: "100%",
        }}
      >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          {/* <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: "#686868",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem> */}
          <MenuItem
            // onClick={() => setIsCollapsed(!isCollapsed)}
            style={{
              margin: "30px 0 20px 0",
              color: "#686868",
            }}
          >
            {!isCollapsed ? (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="143px"
                    height="38px"
                    src={mainLogo}
                    style={{ cursor: "pointer" }}
                  />
                </Box>
              </Box>
            ) : (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="37px"
                    height="37x"
                    src={toggleLogo}
                    style={{ cursor: "pointer" }}
                  />
                </Box>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Typography
              variant="h6"
              fontSize={isCollapsed ? "10px" : "12px"}
              m={isCollapsed ? "35px 0 5px 10px" : "15px 0 5px 20px"}
              color="#686868"
              sx={{
                opacity: 0.5,
              }}
            >
              MAIN MENU
            </Typography>
            <Item
              title="Dashboard"
              to="/"
              icon={<DashboardIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Recuitment"
              to="/recuitment"
              icon={<PersonAddIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Sechedule"
              to="/sechedule"
              icon={<TodayIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Employee"
              to="/employee"
              icon={<GroupsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Department"
              to="/department"
              icon={<GroupWorkIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              m={isCollapsed ? "35px 0 5px 20px" : "15px 0 5px 20px"}
              fontSize={isCollapsed ? "10px" : "12px"}
              color="#686868"
              sx={{
                opacity: 0.5,
              }}
            >
              OTHER
            </Typography>
            <Item
              title="Support"
              to="/support"
              icon={<HeadsetMicIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Settings"
              to="/settings"
              icon={<SettingsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MainBar;
