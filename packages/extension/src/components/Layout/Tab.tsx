import { makeStyles, Tabs, Tab } from "@material-ui/core";
import {
  SwapHoriz,
  AttachMoney as Money,
  Image,
  Apps,
} from "@material-ui/icons";
import { useTab } from "@200ms/recoil";
import { TAB_NFTS, TAB_APPS, TAB_BALANCES, TAB_SWAP } from "@200ms/common";

const useStyles = makeStyles((theme: any) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  tab: {
    borderTop: `solid 1pt ${theme.custom.colors.border}`,
    color: theme.custom.colors.tabIconBackground,
    height: "64px",
  },
  tabRoot: {
    height: "64px",
    minHeight: "64px",
    backgroundColor: theme.custom.colors.nav,
    display: "none",
  },
  tabIndicator: {
    color: "none",
  },
  tabSelected: {
    color: theme.custom.colors.tabIconSelected,
  },
  tabUnselected: {},
}));

export function WithTabs(props: any) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {props.children}
      <TabBar />
    </div>
  );
}

function TabBar() {
  const classes = useStyles();
  const { tab, setTab } = useTab();
  const className = (idx: string) => {
    if (idx === tab) {
      return classes.tabSelected;
    }
    return classes.tabUnselected;
  };
  return (
    <Tabs
      value={tab}
      onChange={(_e, newValue) => setTab(newValue)}
      variant="fullWidth"
      classes={{
        root: classes.tabRoot,
        indicator: classes.tabIndicator,
      }}
      TabIndicatorProps={{
        style: {
          display: "none",
        },
      }}
    >
      <Tab
        value={TAB_BALANCES}
        disableRipple
        className={classes.tab}
        icon={<Money className={className(TAB_BALANCES)} />}
      />
      <Tab
        value={TAB_NFTS}
        disableRipple
        className={classes.tab}
        icon={<Image className={className(TAB_NFTS)} />}
      />
      <Tab
        value={TAB_SWAP}
        disableRipple
        className={classes.tab}
        icon={<SwapHoriz className={className(TAB_SWAP)} />}
      />
      <Tab
        value={TAB_APPS}
        disableRipple
        className={classes.tab}
        icon={<Apps className={className(TAB_APPS)} />}
      />
    </Tabs>
  );
}
