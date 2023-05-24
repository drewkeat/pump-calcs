import {Button, Typography, Container, Card, TextField } from "@mui/material"
import { useState, useEffect } from "react"
import Challenge from "../models/Challenge"

export default function ChallengeCard({style}){
  const [challenge, setChallenge] = useState(new Challenge())
  const [time, setTime] = useState()
  const [submissionValue, setSubmissionValue] = useState('')
  const [challengeStatus, setChallengeStatus] = useState("pending")

  const statusStyles = {
    "failure" : {background: "red", color: "white"},
    "success" : {background: "#00800087", color: "#fbce03de"}
  }

  const displaySubmissionMessage = () => {
    switch(challengeStatus){
      case "success":
        return (
          `Correct!  The exact PDP was ${challenge.pdp}`
        )
        break;
      case "failure":
        return (
          `Too bad!  The exact PDP was ${challenge.pdp}`
        )
        break;
      default:
        null;
      break;
    }
  }
  
  const handleSubmit = () => {
    if (Math.abs(submissionValue - challenge.pdp) < 10){
      console.log(`Great work!\n exact PDP was ${challenge.pdp}.`)
      setChallengeStatus("success")
    } else {
      console.log(`Your submission was not accurate enough.\n  The exact PDP was ${challenge.pdp}.`)
      setChallengeStatus("failure")
    }
  }
  
  const restartChallenge =()=>{
    setSubmissionValue("")
    setChallenge(new Challenge())
    setChallengeStatus("pending")
  }

  return (
      <>
        <Container sx={style}>
          <Card raised sx={[{...statusStyles[challengeStatus]},{display: "flex", flexFlow: "column", gap: "1rem", padding: "1rem"}]}>
            <Typography variant="h3">Challenge: {displaySubmissionMessage()} </Typography>
            <TextField disabled variant="outlined" label="Hose Diameter" value={challenge.hoseType.type}/>
            <TextField disabled variant="outlined" label="Length" value={challenge.hoseLength}/>
            <TextField disabled variant="outlined" label="Volume" value={`${challenge.volume} GPM`} />
            <TextField disabled variant="outlined" label="Nozzle" value={challenge.nozzle.name} />
            <TextField variant="outlined" type="number" label="Discharge Presure" placeholder="Enter the correct Pump Discharge Pressure"  value={submissionValue} onChange={(e)=>{setSubmissionValue(e.target.value)}} />
            <Container no-gutters sx={{display: "flex", justifyContent: "end", gap: "1rem"}}>
              {challengeStatus !== "pending" && <Button color="success" variant="contained" size="medium" sx={{width: "fit-content", alignSelf: "end"}} onClick={restartChallenge}>New Challenge</Button>}
            <Button color="primary" variant="contained" size="medium" sx={{width: "15%", alignSelf: "end"}} onClick={handleSubmit}>Submit</Button>
            </Container>
          </Card>
        </Container>
      </>
  )
}