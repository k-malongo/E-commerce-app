import React from 'react'
import { Box,  makeStyles, FilledInput } from '@material-ui/core'

 const useStyles =  makeStyles(
  {
    wrapper: {
      backgroundColor: "#fff",
      display : "flex",
      boxShadow : "0px 1px 5px rgba(0, 0, 0, 0.1)",
      borderRadius : "2px",
      marginLeft : "150px",
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
    <Box p={2} mt={-5} mb={2} ml={4} className={classes.wrapper} width={750} >

      <FilledInput 
      placeholder='Search for product'
      onChange={(e)=> searchFunction(e.target.value)}
      />
        
       
    </Box>
  )
}