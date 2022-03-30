import { Input, message } from 'antd';
import { ChangeEvent, useEffect, useState } from "react"

const { Search } = Input;

interface MetaDataProps {
  updateData: (data: Metadata) => void
  loading: boolean
  setLoading: (loading: boolean) => void
}

export const MetaDataComp = (props: MetaDataProps) => {
  const { updateData, loading, setLoading } = props;
  const [url, setUrl] = useState('https://github.com/xdlrt/website-card')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value)
  }

  const fetchMetadata = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/fetchMetadata?url=${url}`)
      const json = await res.json()
      updateData(json)
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      message.error(error?.message || 'Failed to fetch metadata');
    }
  }

  useEffect(() => {
    fetchMetadata();
  }, [])

  return (
    <Search placeholder="enter your website url" enterButton="generate now!" size="large" loading={loading} value={url} onPressEnter={fetchMetadata} onSearch={fetchMetadata} onChange={handleChange} />
  )
}

export default MetaDataComp