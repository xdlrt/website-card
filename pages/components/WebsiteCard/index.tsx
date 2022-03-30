import { Avatar, Card } from 'antd';
import { Fragment } from "react";

const { Meta } = Card;

interface CardProps {
  data: Metadata | null
  loading: boolean
}

export const WebsiteCard = (props: CardProps) => {
  const { data, loading } = props
  if (!data) return <Fragment />

  const renderCover = () => {
    if (loading) return null
    if (data.image) return <img style={{ objectFit: 'contain' }} src={data.image} />
    return null;
  }

  return (
    <Card
      loading={loading}
      hoverable
      cover={renderCover()}
    >
      <Meta
        avatar={<Avatar src={data.logo} />}
        title={data.author || data.publisher}
        description={data.description}
      />
    </Card>
  )
}

export default WebsiteCard