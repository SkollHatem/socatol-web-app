const styles = theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: theme.drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: theme.drawerWidth,
    padding: '3px 0',
    // backgroundColor: '#2a3e52',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${theme.drawerWidth}px)`
    }
  },
  list: {
    padding: 15
  },
  listItemActive: {
    margin: '8px 0',
    backgroundColor: theme.palette.primary.main,
    borderRadius: 8,
    boxShadow: `0 3px 0 0 ${theme.palette.primary.main}, 0 2px 8px 0 ${
      theme.palette.primary.main
    }, 0 4px 10px 0 rgba(33,7,77,.5)`
  },
  listItemIcon: {
    color: '#fff',
    margin: '0 8px'
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  navLink: {
    textDecoration: 'none'
  },
  navLinkText: {
    height: '100%'
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: theme.drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    marginTop: 24
  }
});
export default styles;