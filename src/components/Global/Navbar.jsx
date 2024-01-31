import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SmsIcon from "@mui/icons-material/Sms";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import notification from "../../assets/images/notification.png";
import userProfile from "../../assets/images/user_profile.png";

const Navbar = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      borderBottom={"1px solid #E0E0E0"}
    >
      {/* SEARCH BAR */}
      <Box display={"flex"} alignItems={"center"}>
        <Box mr={"1rem"}>
          <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
            <MenuOutlinedIcon />
          </IconButton>
        </Box>
        <Box
          display="flex"
          backgroundColor="#FAFAFA"
          borderRadius="4px"
          border={"1px solid #E0E0E0"}
        >
          <InputBase
            sx={{ ml: 2, flex: 1, padding: "10px 16px" }}
            placeholder="Search"
          />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton>
          <img
            src={notification}
            alt="notification"
            style={{
              borderRadius: "50%",
            }}
          />
        </IconButton>
        <IconButton>
          <SmsIcon
            sx={{
              color: "#B2B2B2",
              borderRadius: "50%",
            }}
          />
        </IconButton>
        <Box display="flex" alignItems="center" justifyContent="center">
          <IconButton>
            <img
              src={userProfile}
              alt="user-profile"
              style={{
                borderRadius: "50%",
              }}
            />
          </IconButton>
          <Typography variant="h6" fontSize={"16px"} color={"#161E54"}>
            Aditya Jain
          </Typography>
          <IconButton>
            <KeyboardArrowDownIcon
              sx={{
                color: "#737898",
              }}
              fontSize="30px"
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
