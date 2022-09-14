import {Container,Typography,} from "@mui/material";
import React,{useState,useEffect} from "react";
import Cards from "./Cards"
import SearchBar from "../SearchBar/SearchBar"

const Home = ( ) => {
  const url = "https://ecommercerubyapi.herokuapp.com/products";
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setCard(data);
      });
  }, []);
  function searchFunction(searchValue) {
    const itemsSearch = card.filter(
      (item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setCard(itemsSearch);
  }

  return (
<Container style={{ marginTop: "14vh",padding: "20px 0" }} >
    <Typography sx={{ mb: 2 }} variant="h1" style={{textAlign:"center"}} color="primary" >Shopee</Typography>
      <SearchBar searchFunction={searchFunction}/>
      <Cards card={card}  />
     
</Container>

  );
};

export default Home;
