import React, { useState } from 'react'
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import useStyles from '../theme'
import MoreDetail from "./MoreDetail"

const Cards = ({ card }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false);

  return (
    <>
      <MoreDetail open={open} closeDetails={() => setOpen(false)} card={card} />
      {/* {
          card.map((data) => (

        <MoreDetail open={open} closeDetails={() => setOpen(false)} />
          ))
        } */}
      <Grid container spacing={3}>

        {
          card.map((data) => (

           
            <Grid item xs={12} sm={6} lg={3} md={4} style={{ marginBottom: "14" }} key={data.id}>
              <Card sx={{ maxWidth: 350, marginLeft: "25px", marginRight: "1px", p:"2" }} className={classes.card}>
                <div
                  style={{ margin: "10px" }}
                >
                  <CardMedia
                    component="img"
                    alt="items on shop"
                    height="140"
                    image={data.image}
                  />
                </div>
                <CardContent>

                  <Typography gutterBottom variant="h5" className={classes.multiLineEllipsis2}>
                    {data.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" className={classes.multiLineEllipsis}>
                    {data.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button onClick={() => setOpen(true)} size="small">Details</Button>
                  <Button size="small">Delete</Button>

                </CardActions>
              </Card>
            </Grid>

          ))
        } 



      </Grid>
    </>
  )
}

export default Cards