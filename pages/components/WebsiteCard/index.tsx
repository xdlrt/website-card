import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import { Fragment } from "react";

interface CardProps {
  data: Metadata | null
}

export const WebsiteCard = (props: CardProps) => {
  const { data } = props
  if (!data) return <Fragment />
  return (
    <Card sx={{ maxWidth: '60%' }}>
      <CardHeader
        avatar={
          <Avatar src={data.logo}>
          </Avatar>
        }
        title={data.author}
        subheader={data.date}
      />
      <CardMedia
        component="img"
        height="140"
        image={data.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default WebsiteCard