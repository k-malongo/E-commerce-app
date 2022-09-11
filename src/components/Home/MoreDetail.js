import React from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
// import { Close as CloseIcon } from "@material-ui/icons";
export default function ViewJob({ open, closeDetails,card }) {
  return (
    <div onClick={closeDetails}>
    

    <Dialog open={open} fullWidth >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          HEllo
        </Box>
      </DialogTitle>
      <DialogContent>HEllo</DialogContent>
      <DialogActions>Add to cart</DialogActions>
    </Dialog>
  </div>
  );
}