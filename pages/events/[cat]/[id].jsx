import Image from 'next/image'
import React from 'react'

const EventPage = ({data}) => {
  return (
    <div className='event_single_page'>
      <h1>{data.title}</h1>
      <Image src={"/" + data.image} width={500} height={300} alt="" />
      <p>{data.description}</p>
    </div>
  )
}

export default EventPage

export const getStaticPaths = async () => {
  const { allEvents } = await import('/data/data.json')

  const allPaths = allEvents.map(path => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      }
    }
  })

  return {
    paths: allPaths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const {id} = context.params
  const {allEvents} = await import('/data/data.json')
  const showEventDetail = allEvents.find(ev => ev.id === id)
  
  return {
    props: { data: showEventDetail }
  }
}