import { React } from "react";
import {
  Drawer,
  CssBaseline,
  AppBar,
  Box,
  Tooltip,
  Avatar,
  createTheme,
  ThemeProvider,
  styled,
  Divider,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import TreeView from "@mui/lab/TreeView";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TreeItem from "@mui/lab/TreeItem";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import AssessmentIcon from "@mui/icons-material/Assessment";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import { treeItemClasses } from "@mui/lab/TreeItem";
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import SettingsIcon from "@mui/icons-material/Settings";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import { useNavigate  } from "react-router-dom";

const Theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: "64px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          backgroundColor: "white",
          boxShadow: "none",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          margin: "30px",
          cursor: "pointer",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#f3f5f7",
        },
      },
    },
  },
});
const drawerWidth = 200;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    paddingRight: theme.spacing(1),
    padding: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "&.Mui-expanded": {
      fontWeight: theme.typography.fontWeightRegular,
    },
    "&:hover": {
      backgroundColor: theme.palette.action.focusOpacity,
    },
    "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
      backgroundColor: "#f0f4c3",
      color: "var(--tree-view-color)",
      borderRight: "3px solid #7F961E",
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: "inherit",
      color: "inherit",
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

function StyledTreeItem(props) {
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: "flex", alignItems: "center", p: 0.5, pr: 0 }}>
          <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
          <Typography
            variant="body2"
            sx={{ fontWeight: "inherit", flexGrow: 1 }}
          >
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </Box>
      }
      style={{
        "--tree-view-color": color,
        "--tree-view-bg-color": bgColor,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

function AppDrawer(props) {
  // -----------------------------------------------------
  let navigate = useNavigate();

  const handleClick = (event, node) => {
    console.log('nodeId: ', node); 
    if(node==='2'){
      navigate("/recruitment");
    }
  };
// ---------------------------------------------------------
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ThemeProvider theme={Theme}>
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Tooltip>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </Tooltip>
        </AppBar>
      {/* </ThemeProvider> */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open="true"
      >
        <DrawerHeader />
        <Divider />
        <TreeView
          aria-label="gmail"
          defaultCollapseIcon={<ArrowDropDownIcon />}
          defaultExpandIcon={<ArrowRightIcon />}
          defaultEndIcon={<div style={{ width: 24 }} />}
          sx={{ height: 264, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
          onNodeSelect={handleClick}
          onSel
        >
          
          <StyledTreeItem
            nodeId="1"
            labelText="Dashboard"
            labelIcon={ComputerOutlinedIcon}
            color="#7F961E"
            // disabled={true}
          />
          <StyledTreeItem
          value="1"
            nodeId="2"
            labelText="Recruitment"
            labelIcon={ZoomInOutlinedIcon}
            color="#7F961E"
            
          />
          <StyledTreeItem
            nodeId="3"
            labelText="Onboarding"
            labelIcon={AssessmentIcon}
            color="#7F961E"
          />
          <StyledTreeItem
            nodeId="4"
            labelText="Requirement"
            labelIcon={WifiTetheringIcon}
            color="#7F961E"
          />
          <StyledTreeItem
            nodeId="5"
            labelText="Assignment"
            labelIcon={SwapCallsIcon}
            color="#7F961E"
          />
          <StyledTreeItem
            nodeId="6"
            labelText="Settings"
            labelIcon={SettingsIcon}
            color="#7F961E"
          >
            <StyledTreeItem
              nodeId="7"
              labelText="Configuration"
              labelIcon={SubdirectoryArrowRightIcon}
              color="#7F961E"
              bgColor="#f0f4c3"
            />
            <StyledTreeItem
              nodeId="8"
              labelText="Fellowship"
              labelIcon={SubdirectoryArrowRightIcon}
              color="#7F961E"
              // bgColor="#fcefe3"
            />
          </StyledTreeItem>
        </TreeView>
      </Drawer>
      </ThemeProvider> 
    </Box>
  );
}

export default AppDrawer;
