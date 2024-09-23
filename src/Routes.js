import React from "react";
import { Routes, Route } from "react-router-dom";
import {
FundingRoundCreate, FundingRoundEdit, FundingRoundView, 
FundingRoundTiles, 
StartupCreate, StartupEdit, StartupView, 
Startups
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
                                                        <Route path="FundingRounds/view/:id" element={<FundingRoundView {...props} title={'View FundingRound'} />} />
                        <Route path="FundingRounds/edit/:id" element={<FundingRoundEdit {...props} title={'Edit FundingRound'} />} />
                        <Route path="FundingRounds/create" element={<FundingRoundCreate {...props} title={'Create FundingRound'} />} />
                                            <Route path="Startups/view/:id" element={<StartupView {...props} title={'View Startup'} />} />
                        <Route path="Startups/edit/:id" element={<StartupEdit {...props} title={'Edit Startup'} />} />
                        <Route path="Startups/create" element={<StartupCreate {...props} title={'Create Startup'} />} />
                                                                        <Route path="/" element={<Startups {...props} title={'Startups'} nolistbar={true} />} />

                <Route path="/rounds/tiles" element={<FundingRoundTiles {...props} title={'FundingLabs'} />} />
                <Route path="/startups" element={<Startups {...props} title={'Startups'} />} />
        </Routes>
    )

};

export default Component;