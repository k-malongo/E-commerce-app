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
  const [review, setReview] = useState([]);
  const [idd, setIdd] = useState(0);


  function hanleClickReview(rev,iid){
    setOpen(true)
    setReview(rev)
    setIdd(iid)
  }

  return (
    <>
      <MoreDetail open={open} closeDetails={() => setOpen(false)} review={review} id={idd} setReview={setReview}/>
     
      <Grid container spacing={3}>

        {
          card.map((data) => (

           
            <Grid item xs={12} sm={6} lg={3} md={3} style={{ marginBottom: "14" }} key={data.id}>
              <Card sx={{ maxWidth: 350, marginLeft: "25px", marginRight: "1px", p:"2" }} className={classes.card}>
                <div
                  style={{ margin: "10px" }}
                >
                  <CardMedia
                    component="img"
                    alt="items on shop"
                    height="140px"
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
                <CardActions sx={{justifyContent:"space-between" }}>
                  <Button size="small">Share</Button>
                  <Button onClick={() => hanleClickReview(data.reviews,data.id)} size="small">Reviews</Button>
                  {/* <Button onClick={() => alert(data.id)} size="small">Reviews</Button> */}

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