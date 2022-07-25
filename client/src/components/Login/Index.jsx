import React, { useState, useEffect, useCallback } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import jwt_decode from "jwt-decode"
export default function HelperTextMisaligned() {
  const clientId =
    "95479789917-f8hm3rhot8q2075e3qp31ulu1k3uqju8.apps.googleusercontent.com"
  const style = {
    display: "flex",
    alignText: "center",
    justifyContent: "center",
    width: "100%",
  }
  // hard coded state for now until initalized redux state is available
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))


  function handleCallbackResponse(response) {
    let userObject = jwt_decode(response.credential)
    window.localStorage.setItem("user", JSON.stringify(userObject))
    if (userObject) {
      window.location.href = "/"
    } else {
      console.log("error")
    }
  }
  useEffect(() => {
    const token = user?.token
    if (token) {
      const decoded = jwt_decode(token)

      if (decoded.exp * 1000 < new Date().getTime()) {
        console.log("token expired")
      }
    }
    setUser(JSON.parse(localStorage.getItem("user")))
  }, [user?.token])

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCallbackResponse,
    })

    google.accounts.id.renderButton(document.getElementById("google-signin"), {
      theme: "outline",
      size: "large",
    })
  }, [])
  return (
    <>
      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          "& > :not(style)": { m: 1 },
        }}
      >
        <TextField
          helperText="Please enter your email"
          id="demo-helper-text-misaligned"
          label="Email"
          sx={style}
        />
        <TextField
          helperText="Please enter your password"
          id="demo-helper-text-misaligned"
          label="Password"
          type={"password"}
          sx={style}
        />
      </Box>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10vh",
        }}
      >
        or
      </h1> */}
      <div
        id="google-signin"
        style={{ display: "flex", justifyContent: "center" }}
      ></div>
    </>
  )
}
