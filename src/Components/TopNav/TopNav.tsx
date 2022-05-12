import { Item, TopNavStyles } from "./TopNav.styles";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const TopNav = () => {
  return (
    <TopNavStyles>
      <Grid container spacing={2}>
        <Grid item xs={24}>
          <Item>
            {" "}
            <Typography className="title" variant="h5">
              Emumba Logo{" "}
            </Typography>{" "}
          </Item>
        </Grid>
      </Grid>
    </TopNavStyles>
  );
};

export default TopNav;
