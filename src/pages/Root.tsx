import { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { HiExternalLink } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";
import commonComponents from "../components/commons/CustomMui";
import SizedBox from "../components/commons/SizedBox";
import styles from "../components/commons/styles";
import Socials from "../components/elements/Socials";
import coreTheme from "../data/theme_data";
import userData from "../data/user_data";
const { Text } = commonComponents;

function Root() {
  return (
    <div style={rootStyles}>
      <Text
        style={{
          paddingLeft: "5px",
        }}
      >
        hey 👋🏻, I’m
      </Text>
      <SizedBox height="15px" />
      <Text
        style={{
          color: coreTheme.colors.primary,
          fontWeight: "700",
          fontSize: "120px",
        }}
      >
        {userData.name}
      </Text>
      <SizedBox height="20px" />

      <TypeAnimation
        sequence={userData.iAM
          .map((item) => {
            return [item, 1000];
          })
          .flat()}
        wrapper="h1"
        speed={10}
        deletionSpeed={10}
        style={{
          ...styles.baseText,
          paddingLeft: "5px",
          fontSize: "60px",
          fontWeight: "700",
          letterSpacing: "2px",
        }}
        repeat={Infinity}
      />
      <SizedBox height="20px" />

      <Box sx={{ ...styles.row, alignItems: "center" }}>
        <Box
          sx={resumeButtonStyles}
          onClick={() => {
            window.open(userData.links.resume, "_blank");
          }}
        >
          <Text
            style={{
              ...styles.baseText,
              fontSize: "14px",
              letterSpacing: "1px",
            }}
          >
            Resume
          </Text>
          <SizedBox width="5px" />
          <HiExternalLink size={"14px"} color={"white"} />
        </Box>

        <SizedBox width="20px" />
        <Socials />
      </Box>
    </div>
  );
}

export default Root;

const rootStyles: React.CSSProperties = {
  ...styles.maxSize,
  display: "flex",
  paddingLeft: "250px",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: coreTheme.colors.background,
};

const resumeButtonStyles: SxProps = {
  width: "120px",
  height: "42px",
  backgroundColor: coreTheme.colors.secondaryBackground,
  borderRadius: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transition: "background-color 0.5s ease;",
    backgroundColor: coreTheme.colors.background,
    border: `2.5px solid ${coreTheme.colors.secondaryBackground}`,
  },
};
