import React, { useState, useEffect } from "react";

import {
  Box,
  Dialog,
  DialogTitle,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  FormControl,
  InputLabel,
  Input,
} from "@mui/material";
// import { Close as CloseIcon } from "@mui/icons-material";
export default function ViewJob({ open, closeDetails, review, id, setReview }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  // console.log(id)


  function handleSubmit(e) {
    e.preventDefault();
    const newComment = {
      user_name:name,
      comment:comment,
      product_id:id
      
    };
    console.log(newComment)
    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((r) => r.json())
      .then((data) => {
        setReview([...review, data])
        setName("");
        setComment("");
      });
  }
  return (
    <div>
      <Dialog open={open} fullWidth>
        <Button size="small" onClick={closeDetails}>
          close
        </Button>

        <DialogTitle>
         { 
         review.map((data) => (
         <Box justifyContent="space-between" alignItems="center" >
          <div key={data.id}>
            <Card
            key={data.id}
              sx={{
                width: 500,
                marginLeft: "25px",
                marginRight: "1px",
                marginBotton: "5px",
                marginTop: "5px",
                p: "2",
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="body2">
                  {data.user_name}
                </Typography>

                <Typography variant="h5" color="text.secondary">
                  {data.comment}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Delete</Button>
                <Button size="small">Edit</Button>
              </CardActions>
            </Card>
            
            </div>
          </Box>
           ))
          }
          <form
              style={{
                width: "80%",
                border: "2px solid grey",
                padding: "10px",
                marginLeft: "40px",
                marginTop: "5px",
              }}
            >
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="title">Name</InputLabel>
                <Input
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="title">Comment</InputLabel>
                <Input
                  type="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                onClick={handleSubmit}
              >
                ADD
              </Button>
            </form>
        </DialogTitle>
      </Dialog>
    </div>
  );
}
