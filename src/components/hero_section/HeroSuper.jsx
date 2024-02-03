import React from "react";
import SuperDist from "../../images/SuperDist.png";
import Distributor from "../../images/Distributor.png";
import retailer from "../../images/retailer.png";
import { Box } from "@mui/material";

const HeroSuper = () => {
  return (
    <Box sx={{paddingTop:'3rem'}}>
      <div className="hero-row flex md:justify-center md:items-center" >
        <div className="hero-column">
          <div className="hero-super-card">
            <img src={SuperDist} className="hero-superdist" />
            <h3 className="hero-super-counter">+</h3>
            <p className="hero-super-countera">SuperDistributor</p>
          </div>
        </div>

        <div className="hero-column">
          <div className="hero-distributor-card">
            <img src={Distributor} className="hero-distributor" />
            <h3 className="hero-distributor-counter">+</h3>
            <p className="hero-distributor-countera">Distributor</p>
          </div>
        </div>

        <div className="hero-column">
          <div className="hero-retailer-card">
            <img src={retailer} className="hero-retailer" />
            <h1 className="hero-retailer-counter">+</h1>
            <p className="hero-retailer-countera">Retailer</p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default HeroSuper;
