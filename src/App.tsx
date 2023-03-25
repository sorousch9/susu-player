import Discover from "./pages/Discover";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppBar, Drawer, makeStyles } from "@material-ui/core";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      marginLeft: drawerWidth,
    },
  },
}));
function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Header />
        </AppBar>
        <Drawer
          variant="permanent"
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Sidebar />
        </Drawer>
        <main className={classes.content}>
          <Routes>
            <Route path="/" element={<Discover />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
