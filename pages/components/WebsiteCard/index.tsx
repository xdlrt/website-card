import { Fragment } from "react";

interface CardProps {
  data: Metadata | null
  loading: boolean
}

export const WebsiteCard = (props: CardProps) => {
  const { data } = props
  if (!data) return <Fragment />

  return (
    <div className="bg-white flex items-center w-120 max-w-4xl h-32 shadow-lg rounded-md overflow-hidden">
      <div className="h-full p-4 flex flex-col justify-between">
        <div className="text-base font-semibold">{data.title}</div>
        <div className="text-xs">{data.description}</div>
        <div className="flex items-center">
          <img src={data.logo} className='w-4 mr-2' />
          <div className="text-xs">{data.author || data.publisher}</div>
        </div>
      </div>
      <img src={data.image} className='max-h-full' />
    </div >
  )
}

export default WebsiteCard