import { Box, Button, TextField } from "@mui/material"
import { ChangeEvent, useState } from "react"

interface MetaDataProps {
  updateData: (data) => void
}

export const MetaData = (props: MetaDataProps) => {
  const { updateData } = props;
  const [url, setUrl] = useState('')
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value)
  }
  const fetchMetadata = async () => {
    const res = await fetch(`/api/fetchMetadata?url=${url}`)
    const json = await res.json()
    updateData(json)
  }
  return (
    <Box width={'60%'} maxWidth={800}>
      <TextField fullWidth label="输入要解析的 url" variant="outlined" value={url} onChange={handleChange} />
      <Box mt={1}>
        <Button variant="contained" size="large" onClick={fetchMetadata}>立即解析</Button>
      </Box>
    </Box>
  )
}