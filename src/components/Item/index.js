import React from "react";
import { selectItem } from "../../state/selectors/item";
import { useRecoilValue } from "recoil";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    height: 500,
    margin: 12,
  },
  header: {
    height: 80,
    alignItems: "flex-start",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Item = ({ id }) => {
  const item = useRecoilValue(selectItem(id));
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.name}
        subheader={`${item.price}€`}
      />
      <CardMedia
        className={classes.media}
        image={item.img}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Item;
