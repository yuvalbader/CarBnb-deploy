import React, { useState, useEffect } from "react"
import jwt_decode from "jwt-decode"
import { useSelector, useDispatch } from "react-redux"
import { loginUser } from "../../app/actions/login-user-actions"
import LoadingSpinner from "../loadingSpinner/LoadingSpinner"
export default function HelperTextMisaligned() {
  const loading = useSelector((state) => state.viewSlice.isLoading)
  const dispatch = useDispatch()
  const clientId =
    "95479789917-f8hm3rhot8q2075e3qp31ulu1k3uqju8.apps.googleusercontent.com"
  // hard coded state for now until initalized redux state is available
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

  function handleCallbackResponse(response) {
    let userObject = jwt_decode(response.credential)
    dispatch(loginUser(userObject.email))
    // const isLoggedIn = useSelector((state) => state.userSlice.isLoggedIn);

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

  if (loading) return <LoadingSpinner />
  return (
    <>
      <div
        id="google-signin"
        style={{ display: "flex", justifyContent: "center" }}
      ></div>
    </>
  )
}
