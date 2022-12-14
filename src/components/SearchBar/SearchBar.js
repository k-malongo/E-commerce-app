import React from 'react'
import { Box,  makeStyles, FilledInput } from '@material-ui/core'

 const useStyles =  makeStyles(
  {
    wrapper: {
      backgroundColor: "#fff",
      display : "flex",
      boxShadow : "0px 1px 5px rgba(0, 0, 0, 0.1)",
      borderRadius : "2px",
      alignItems : "center",
      alignContent: "center",
      justifyContent: "center",

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
    <Box p={2} mt={1} mb={10} ml={4} className={classes.wrapper} width={750} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>

      <FilledInput 
      placeholder='Search for product'
      onChange={(e)=> searchFunction(e.target.value)}
      />
        
       
    </Box>
  )
}