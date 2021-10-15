import React, { useContext, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShareIcon from '@mui/icons-material/Share';
import Search from '../Search'
import {Link} from 'react-router-dom'

const ExpandMore = styled((props) => {
  console.log(props)
const { expand, ...other } = props;
return <IconButton {...other} />;
})(({ theme, expand }) => ({
transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
marginLeft: 'auto',
transition: theme.transitions.create('transform', {
  duration: theme.transitions.duration.shortest,
}),
}));

const ProductCard = (props) => {

  const val = props.info

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="container-list">  

      <Card sx={{ maxWidth: 345 }}  className="card" >
        <CardHeader className="cardHeader"
          title={val.list_title}
          subheader={val.list_company}
        />
        <div>
          <img src={val.list_productImage} width="100px" />
        </div>
        <CardContent className="cardContent">
            <p className="icon">{val.list_rating}/5</p>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="share" >
          <p className="icon">{val.list_price}€</p>
          <Link to="/cart">
        <i className="fas fa-shopping-cart"></i>
      </Link>
          </IconButton> 
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className="cardContent">
            <Typography paragraph>Descripción</Typography>
            <Typography paragraph>
            {val.list_description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div> 
  )
}

export default ProductCard
