import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  useMediaQuery,
} from "@mui/material";
import vector3 from "../../assets/images/vector_3.png";
import vector2 from "../../assets/images/vector_2.png";
import frame20 from "../../assets/images/frame_20.png";
import dayjs from "dayjs";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  firstCard,
  announcementData,
  secondCard,
} from "../../utils/dummy_data";
import PushPinIcon from "@mui/icons-material/PushPin";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useTheme } from "@mui/material/styles";

const Dashboard = () => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.up("sm"));
  const isMediumDevice = useMediaQuery(
    "(min-width: 768px) and (max-width: 1023px)"
  );

  // Define flex direction based on device size
  const flexDirectionRight = isMediumDevice ? "row" : "column";
  return (
    <Box
      sx={{
        marginTop: "21px",
        marginLeft: "50px",
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"flex-start"}
        height={"auto"}
        width={"100%"}
        marginBottom={"12px"}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "24px",
            color: "#161E54",
          }}
        >
          Dashboard
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={"30px"}
        flexWrap={"wrap"}
      >
        {/* Left */}
        <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
          <Box
            display={"flex"}
            flexDirection={!isSmallDevice ? "column" : "row"}
            gap={"14px"}
          >
            {firstCard.map((item, index) => {
              return (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    width: "204px",
                    width: !isSmallDevice ? "350px" : "204px",
                    height: "136px",
                    gap: "3px",
                    borderRadius: "10px",
                    backgroundColor: `${item.bgColor}`,
                    padding: "12px 12px 12px 20px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "16px",
                      color: "#161E54",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "36px",
                      color: "#161E54",
                    }}
                  >
                    {item.noOfPosition}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "16px",
                      color: `${item.descriptionColor}`,
                      fontWeight: "normal",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          <Box
            display={"flex"}
            flexDirection={!isSmallDevice ? "column" : "row"}
            gap={"16px"}
          >
            {secondCard.map((item, index) => {
              return (
                <Box
                  key={item.id}
                  sx={{
                    backgroundColor: "#FFF",
                    width: "312px",
                    width: !isSmallDevice ? "350px" : "312px",
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "40px",
                    borderRadius: "10px",
                    border: "1px solid #E0E0E0",
                  }}
                >
                  <Box display={"flex"} flexDirection={"row"} gap={"40px"}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "16px",
                          color: "#161E54",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "36px",
                          color: "#161E54",
                        }}
                      >
                        {item.total}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "12px",
                          color: "#686868",
                          fontWeight: "normal",
                        }}
                      >
                        {item.mens} Men
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "12px",
                          color: "#686868",
                          fontWeight: "normal",
                        }}
                      >
                        {item.womens} Women
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                        height: "121px",
                        width: "100px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "12px",
                            color: "#161E54",
                            textAlign: "center",
                            verticalAlign: "top",
                            color: "#FF5151",
                            fontWeight: "bold",
                          }}
                        >
                          {item.growth}
                        </Typography>
                        <img src={frame20} />
                        <Box>
                          <img src={vector2} />
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          padding: "3px 5px",
                          borderRadius: "4px",
                          backgroundColor: "#FFEFE7",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "12px",
                            textAlign: "center",
                            color: "#000",
                          }}
                        >
                          {item.growth} Past month
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>

          <Box display={"flex"} flexDirection={"row"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              sx={{
                border: " 1px solid #E0E0E0",
                backgroundColor: "#FFF",
                width: "640px",
                width: !isSmallDevice ? "350px" : "640px",
                height: "auto",
                borderRadius: "12px",
                // padding: "20px",
                gap: "16px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                  padding: "20px 20px 0 20px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "18px",
                    color: "#161E54",
                  }}
                >
                  Announcement
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: "#FFF",
                    border: "1px solid #efefef",
                    borderRadius: "4px",
                    alignItems: "center",
                    padding: "0px 6px",
                    color: "#686868",
                    gap: "5px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "14px",
                      color: "#686868",
                      fontWeight: "normal",
                    }}
                  >
                    {`Today, ${dayjs().format("DD MMMM YYYY")}`}
                  </Typography>
                  <KeyboardArrowDownIcon
                    sx={{
                      color: "#686868",
                      fontWeight: "normal",
                    }}
                    fontSize="14px"
                  />
                </Box>
              </Box>

              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"8px"}
                padding={"0 20px 0 20px"}
              >
                {announcementData.map((item, index) => {
                  return (
                    <Box
                      key={item.id}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "12px 16px",
                        gap: "95px",
                        borderRadius: "6px",
                        border: "0.5px solid #E0E0E0",
                        backgroundColor: "FAFAFA",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                          height: "auto",
                        }}
                      >
                        <Typography
                          variant="h6"
                          fontSize={"16px"}
                          fontWeight={"normal"}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#686868",
                            fontSize: "10px",
                            fontWeight: "normal",
                          }}
                        >
                          {item.timeline}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "20px",
                        }}
                      >
                        {/* Icons */}
                        <IconButton>
                          <PushPinIcon
                            sx={{
                              rotate: "45deg",
                              color: `${item.pincolor}`,
                            }}
                          />
                        </IconButton>
                        <IconButton>
                          <MoreHorizIcon
                            sx={{
                              color: "#b2b2b2",
                            }}
                          />
                        </IconButton>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  border: "1px solid #E0E0E0",
                  borderRadius: "0 0 10px 10px",
                  backgroundColor: "#FFF",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <Typography
                  textAlign={"center"}
                  color={"#FF5151"}
                  fontWeight={"bold"}
                  fontSize={"14px"}
                >
                  See All Announcement
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Right */}
        <Box
          display={"flex"}
          // flexDirection={"column"}
          flexDirection={flexDirectionRight}
          gap={"20px"}
          // flexWrap={"wrap"}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "10px 34px 26px 24px",
              gap: "36px",
              backgroundColor: "#161E54",
              borderRadius: "10px",
              width: "427px",
              width: isMediumDevice
                ? "250px"
                : !isSmallDevice
                ? "350px"
                : "427px",
              // height: !isSmallDevice ? "auto" : "258px",
              height: isMediumDevice
                ? "319px"
                : !isSmallDevice
                ? "auto"
                : "258px",
              flexShrink: 0,
              color: "#FFF",
            }}
          >
            <Box>
              <Typography variant="h6" fontSize={"18px"} fontWeight={"normal"}>
                Recent Activity
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                fontSize={"10px"}
                fontWeight={"normal"}
                sx={{
                  opacity: "0.6",
                  mb: "5px",
                }}
              >
                {`${dayjs().format("h:mm A, dddd D MMMM YYYY")}`}
              </Typography>
              <Typography
                variant="h6"
                fontSize={"18px"}
                fontWeight={"normal"}
                mb={"5px"}
              >
                You Posted a New Job
              </Typography>
              <Typography
                variant="h6"
                fontSize={"14px"}
                fontWeight={"normal"}
                sx={{
                  opacity: "0.8",
                }}
              >
                Kindly check the requirements and terms of work and make sure
                everything is right.
              </Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mb={"10px"}
            >
              <Typography fontSize={"14px"} fontWeight={"normal"}>
                Today you makes 12 Activity
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FF5151",
                }}
              >
                See All Activity
              </Button>
            </Box>
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            sx={{
              border: " 1px solid #E0E0E0",
              backgroundColor: "#FFF",
              width: "427px",
              // width: !isSmallDevice ? "350px" : "427px",
              width: isMediumDevice
                ? "374px"
                : !isSmallDevice
                ? "350px"
                : "427px",
              height: "auto",
              borderRadius: "12px",
              marginBottom: "20px",
              // padding: "20px",
              gap: "16px",
              flexGrow: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 20px 0 20px",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "18px",
                  color: "#161E54",
                }}
              >
                Upcoming Schedule
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: "#FFF",
                  border: "1px solid #efefef",
                  borderRadius: "4px",
                  alignItems: "center",
                  padding: "0px 6px",
                  color: "#686868",
                  gap: "5px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    color: "#686868",
                    fontWeight: "normal",
                  }}
                >
                  {`Today, ${dayjs().format("DD MMMM YYYY")}`}
                </Typography>
                <KeyboardArrowDownIcon
                  sx={{
                    color: "#686868",
                    fontWeight: "normal",
                  }}
                  fontSize="14px"
                />
              </Box>
            </Box>

            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"8px"}
              padding={"0 20px 0 20px"}
            >
              <Typography
                variant="h6"
                fontSize={"12px"}
                fontWeight={"normal"}
                color={"#686868"}
              >
                Priority
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "12px 16px",
                  gap: "95px",
                  borderRadius: "6px",
                  border: "0.5px solid #E0E0E0",
                  backgroundColor: "FAFAFA",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "auto",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontSize={"16px"}
                    fontWeight={"normal"}
                  >
                    Review candidate applications
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#686868",
                      fontSize: "10px",
                      fontWeight: "normal",
                    }}
                  >
                    Today - 11.30 AM
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <IconButton>
                    <MoreHorizIcon
                      sx={{
                        color: "#b2b2b2",
                      }}
                    />
                  </IconButton>
                </Box>
              </Box>
              <Typography
                variant="h6"
                fontSize={"12px"}
                fontWeight={"normal"}
                color={"#686868"}
              >
                Other
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "12px 16px",
                  gap: "95px",
                  borderRadius: "6px",
                  border: "0.5px solid #E0E0E0",
                  backgroundColor: "FAFAFA",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "auto",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontSize={"16px"}
                    fontWeight={"normal"}
                  >
                    Interview with candidates
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#686868",
                      fontSize: "10px",
                      fontWeight: "normal",
                    }}
                  >
                    Today - 10.30 AM
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <IconButton>
                    <MoreHorizIcon
                      sx={{
                        color: "#b2b2b2",
                      }}
                    />
                  </IconButton>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "12px 16px",
                  gap: "95px",
                  borderRadius: "6px",
                  border: "0.5px solid #E0E0E0",
                  backgroundColor: "FAFAFA",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "auto",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontSize={"16px"}
                    fontWeight={"normal"}
                  >
                    Short meeting with product designer from IT Departement
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#686868",
                      fontSize: "10px",
                      fontWeight: "normal",
                    }}
                  >
                    Today - 09.15 AM
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <IconButton>
                    <MoreHorizIcon
                      sx={{
                        color: "#b2b2b2",
                      }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                border: "1px solid #E0E0E0",
                borderRadius: "0 0 10px 10px",
                backgroundColor: "#FFF",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <Typography
                textAlign={"center"}
                color={"#FF5151"}
                fontWeight={"bold"}
                fontSize={"14px"}
              >
                Creat a New Schedule
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
