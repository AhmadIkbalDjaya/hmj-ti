import { AppBar, Box, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./navbar.module.css";
import { useState } from "react";
import HideOnScroll from "../utils/header";
import { Slant } from "hamburger-react";

const menus = ["Berita & Kegiatan", "Ekonomi Kreatif", "Tentang"];

export default function Navbar(props) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [toggle, setToggle] = useState(false);

    const showNav = () => {
        if (toggle !== true) {
            setToggle(true);
            return;
        }
        setToggle(false);
    };

    return (
        <>
            <HideOnScroll setToggle={setToggle} threshold={80} {...props}>
                <AppBar
                    sx={{ boxShadow: "0px 4px 22px -6px rgba(0, 0, 0, 0.12)" }}
                    position="fixed"
                >
                    <Toolbar sx={{ height: 80, bgcolor: "#fff" }}>
                        <Stack
                            direction="row"
                            width="100%"
                            justifyContent="space-between"
                            alignItems="center"
                            px={2.5}
                        >
                            <NavLink to="/">
                                <Box
                                    onClick={() => {
                                        window.scrollTo({
                                            top: 0,
                                            left: 0,
                                            behavior: "smooth",
                                        });
                                    }}
                                    component="img"
                                    src={logo}
                                    height={55}
                                />
                            </NavLink>
                            <Box
                                position="absolute"
                                display={{ xs: "block", md: "none" }}
                                zIndex={100}
                                right={16}
                            >
                                <Slant
                                    size={24}
                                    rounded
                                    color="#B20600"
                                    toggled={toggle}
                                    toggle={setToggle}
                                />
                            </Box>
                            <Stack
                                direction="row"
                                columnGap={3.8}
                                display={{ xs: "none", md: "flex" }}
                            >
                                <Link />
                            </Stack>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Stack
                direction="column"
                overflow="hidden"
                top={toggle ? "80px" : "-350px"}
                margin="0 auto"
                width="100%"
                py={5}
                textAlign="center"
                gap={6}
                zIndex={999}
                bgcolor="#ffffff"
                display={{ xs: "flex", md: "none" }}
                position="fixed"
                sx={{ transition: "all .5s" }}
            >
                <Link showNav={showNav} isMobile={isMobile} />
            </Stack>
        </>
    );
}

const Link = ({ showNav, isMobile }) => {
    const navStyle = ({ isActive }) => {
        return {
            fontSize: "15.6px",
            textDecoration: "none",
            fontWeight: isActive ? "500" : "400",
            color: isActive ? "#B20600" : "#000",
        };
    };

    return (
        <>
            <NavLink
                to="/"
                style={navStyle}
                onClick={() => {
                    isMobile && showNav();
                }}
            >
                Beranda
            </NavLink>
            {menus.map((menu, i) => (
                <NavLink
                    key={i}
                    to={
                        menu === "Berita & Kegiatan"
                            ? "berita-dan-kegiatan"
                            : menu.replace(/\s+/g, "-").toLocaleLowerCase()
                    }
                    style={navStyle}
                    onClick={() => {
                        isMobile && showNav();
                    }}
                >
                    {menu}
                </NavLink>
            ))}
        </>
    );
};
