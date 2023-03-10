import Link from 'next/link'
import Image from 'next/image'
import React from 'react'


const MainHomePage = ({ data }) => {
  return (
    <div className="home_body">
    {data?.map((ev) => (
      <Link key={ev.id} href={`/events/${ev.id}`} className="card" passHref>
          <div className="image">
            <Image className='image' width={400} height={400} alt={ev.title} src={"/" + ev.image} />
          </div>
          <div className="content">
            <h2> {ev.title} </h2>
            <p> {ev.description} </p>
          </div>
      </Link>
    ))}
  </div>
  )
}

export default MainHomePage

