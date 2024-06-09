import Link from "next/link";
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { usePathname } from "next/navigation";

import { alpha } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useState } from "react";
import Iconify from "../iconify";

function NavItems({ items }) {
  const pathname = usePathname();
  const [openItems, setOpenItems] = useState({});

  const handleClick = (title) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [title]: prevState[title] === undefined ? true : !prevState[title],
    }));
  };

  const renderListItem = (item) => {
    const { title, path, icon: Icon, childrens } = item;
    const isOpen = openItems[title] || false;
    const active = item.path === pathname;

    return (
      <div key={title}>
        {!childrens && (
          <ListItemButton
            component={Link}
            href={item.path}
            sx={{
              minHeight: 44,
              borderRadius: 0.75,
              typography: "body2",
              color: "text.secondary",
              textTransform: "capitalize",
              fontWeight: "fontWeightMedium",
              ...(active && {
                color: "primary.main",
                fontWeight: "fontWeightSemiBold",
                bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                "&:hover": {
                  bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
                },
              }),
            }}
          >
            <Box component="span">{item.title} </Box>
          </ListItemButton>
        )}
        {childrens && (
          <Box
            onMouseEnter={() => handleClick(item.title)}
            onMouseLeave={() => handleClick(item.title)}
          >
            <ListItemButton
              sx={{
                minHeight: 44,
                borderRadius: 0.75,
                typography: "body2",
                color: "text.secondary",
                textTransform: "capitalize",
                fontWeight: "fontWeightMedium",
                ...(active && {
                  color: "primary.main",
                  fontWeight: "fontWeightSemiBold",
                  bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                  "&:hover": {
                    bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
                  },
                }),
              }}
            >
              <ListItemText component="box">{item.title} </ListItemText>
              {isOpen ? (
                <Iconify icon={"fe:arrow-up"} />
              ) : (
                <Iconify icon={"fe:arrow-down"} />
              )}
            </ListItemButton>
            <Collapse
              sx={{ position: "absolute" }}
              in={isOpen}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {childrens.map((child) => renderListItem(child))}
              </List>
            </Collapse>
          </Box>
        )}
      </div>
    );
  };

  return (
    <List component="nav" spacing={0.5} sx={{ display: "flex", px: 2 }}>
      {items.map((item) => renderListItem(item))}
    </List>
  );
}

NavItems.propTypes = {
  items: PropTypes.any,
};

export default NavItems;
