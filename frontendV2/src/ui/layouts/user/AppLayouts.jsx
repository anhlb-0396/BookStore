import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";

function AppLayouts() {
  return (
    <Box sx={{ width: "100%" }}>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Box>
  );
}

export default AppLayouts;
