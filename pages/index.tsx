import Head from 'next/head'
import { useState } from 'react'
import { Row, Col, Typography } from 'antd'
import { MetaDataComp } from './components/MetaData'
import { WebsiteCard } from './components/WebsiteCard'
import 'antd/dist/antd.css'

const { Title, Text } = Typography;

export default function Home() {
  const [metadata, setMetadata] = useState<Metadata | null>(null);
  const [loading, setLoading] = useState(false);
  return (
    <div style={{ padding: 24 }}>
      <Head>
        <title>website-card</title>
        <meta name="description" content="Generated url to a card" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Row justify="center">
        <Col xs={20} xl={12}>
          <Title>website-card</Title>
          <Text>解析你的网站并生成卡片。</Text>
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: 24 }}>
        <Col xs={20} xl={12}>
          <MetaDataComp updateData={setMetadata} loading={loading} setLoading={setLoading} />
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: 24 }}>
        <Col xs={20} xl={8}>
          <WebsiteCard data={metadata} loading={loading} />
        </Col>
      </Row>
    </div>
  )
}
