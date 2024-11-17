import React from "react";
import { Box, Container } from "@mui/material";
import { Header, Footer } from "../components/ui";
import { Outlet } from "react-router-dom";

const Page = () => {
  return (
    <Box>
      <Header />
      <Container maxWidth="xl" sx={{ minHeight: "90vh", py: 2 }}>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export default Page;
