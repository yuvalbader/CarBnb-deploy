import React from "react"
import Avatar from "@mui/material/Avatar"

export default function BadgeAvatars({ name }) {
  return (
    <Avatar
      sx={{ width: "70px", height: "70px" }}
      alt={name}
      src="/static/images/avatar/1.jpg"
    />
  )
}
