import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import banner from "../../images/bannerhome1.jpg";
import growup from "../../images/growup.png";

const HeroSub = () => {
  return (
    <>
      <Box sx={{ marginLeft: "1rem", marginRight: "1rem" }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Box
            className="flex justify-center items-center"
            flex={1}
            sx={{ textAlign: "-webkit-start" }}
          >
            <Typography
              variant="h2"
              sx={{ fontSize: { sm: "3rem", md: "4rem" } }}
            >
              Protect Your Mobile Business Completely With T-Cops.
            </Typography>
          </Box>
          <Box flex={1} sx={{ width: "100%", textAlign: "-webkit-center" }}>
            <img className="max-w-[100%]" src={growup} alt="" srcset="" />
          </Box>
        </Stack>
      </Box>
      <Box sx={{ marginLeft: "1rem", marginRight: "1rem" }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Box flex={1} sx={{ width: "100%", textAlign: "-webkit-center" }}>
            <img className="max-w-[100%]" src={banner} alt="" srcset="" />
          </Box>
          <Box
            className="flex justify-center items-center"
            flex={1}
            sx={{ textAlign: "-webkit-start" }}
          >
            <Box>
              <Typography
                variant="h2"
                sx={{ fontSize: { sm: "3rem", md: "4rem" } ,color:'#ff722f'}}
              >
                WELCOME TO REDWOLF HI-TECH PVT LTD
              </Typography>
              <Typography  sx={{color:'#142b5f'}}>
                REDWOLF HI-TECH Private Limited is a specialised SALES & IT
                solution, Company based out at Noida, India. We provide high
                quality professional software services to the clients residing
                across the globe.
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default HeroSub;
