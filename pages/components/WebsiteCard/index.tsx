import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import { Fragment } from "react";

interface CardProps {
  data: Metadata | null
}

export const WebsiteCard = (props: CardProps) => {
  const { data } = props
  if (!data) return <Fragment />
  return (
    <Card sx={{ width: '600px' }}>
      <CardHeader
        avatar={
          <Avatar src={data.logo}>
          </Avatar>
        }
        title={data.author || data.publisher}
      />
      {data.image && <CardMedia
        component="img"
        height="200"
        image={data.image}
        sx={{ objectFit: 'contain' }}
      />}
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