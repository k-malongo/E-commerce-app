import React from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
// import { Close as CloseIcon } from "@material-ui/icons";
export default function ViewJob({ open, closeDetails,card }) {
  return (
    <div onClick={closeDetails}>
    

    <Dialog open={open} fullWidth >
      <DialogTitle>
        <Box  justifyContent="space-between" alignItems="center">
       
             
             <Card sx={{ width: 500, marginLeft: "25px", marginRight: "1px", p:"2" }}>
               
               <CardContent>

                 <Typography gutterBottom variant="body2" >
                   Name
                 </Typography>

                 <Typography variant="h5" color="text.secondary" >
                   Comment
                 </Typography>
               </CardContent>
               <CardActions>
                
                 <Button size="small">Delete</Button>
                 <Button size="small">Edit</Button>


               </CardActions>
             </Card>
        </Box>
      </DialogTitle>
      <DialogActions>Submit</DialogActions>
    </Dialog>
  </div>
  );
}