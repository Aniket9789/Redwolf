import { Box, Stack } from "@mui/material";
import React from "react";



const CardSection = () => {
  return (
    <Box 
    
    ><Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        height={{xs:'100%',md:'80vh'}}
        maxWidth={'100%'}
        paddingTop={'10px'}
        // sx={{}}
      >
        <div className="card-conainer">
          <div className="box-shadow bs-T">
            <h3 className="colorH">OUR VISION</h3>
            <p className='colorP'>Honesty, Quality, Reliability, Trust, and Teamwork are at the core of how we operate, and we acknowledge the significance of every team member's role in our company.</p>
          </div>
          </div>
          <div className="card-conainer bs-C">
          <div className="box-shadow">
            <h3 className="colorH">OUR VISION</h3>
            <p className='colorP'>Honesty, Quality, Reliability, Trust, and Teamwork are at the core of how we operate, and we acknowledge the significance of every team member's role in our company.</p>
          </div>
          </div>
          <div className="card-conainer bs-T">
          <div className="box-shadow">
            <h3 className="colorH">OUR VISION</h3>
            <p className='colorP'>Honesty, Quality, Reliability, Trust, and Teamwork are at the core of how we operate, and we acknowledge the significance of every team member's role in our company.</p>
          </div>
          </div>
      </Stack>
    </Box>
  );
};

export default CardSection;
