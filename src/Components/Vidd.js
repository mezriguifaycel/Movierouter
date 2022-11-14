
import { color } from "@mui/system";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useParams,useNavigate } from "react-router-dom";


const Vidd = ({dataMovie }) => {
  
  const navigate = useNavigate()
  const { idd } = useParams();

  const found = dataMovie.find((el) => el.id == idd);
  console.log(dataMovie);

  return (
    <div>
      <Card style={{ width: "80rem" , height: "80rem",backgroundColor:"rgb(140, 198, 233)" }}>
        <Card.Body>
          <Card.Title> {found?.title}</Card.Title>
          <iframe  style={{ width: "77rem" , height: "80"}}src={found.trailerUrl}></iframe>
          <Button onClick={()=> navigate('/')}>GO To Home</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Vidd;