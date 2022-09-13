import React from 'react'
import { Box,  makeStyles, FilledInput } from '@material-ui/core'

 const useStyles =  makeStyles(
  {
    wrapper: {
      backgroundColor: "#fff",
      display : "flex",
      boxShadow : "0px 1px 5px rgba(0, 0, 0, 0.1)",
      borderRadius : "2px",
      "& > *":{
        flex:1,
        height:"45px",
        margin: "8px"
      },
    }
  }
)
export default function SearchBar({searchFunction}) {
  const classes = useStyles()
  return (
    <Box p={2} mt={-5} mb={2} className={classes.wrapper} >

      <FilledInput 
      placeholder='Search for job'
      onChange={(e)=> searchFunction(e.target.value)}
      />
        
       
    </Box>
  )
}