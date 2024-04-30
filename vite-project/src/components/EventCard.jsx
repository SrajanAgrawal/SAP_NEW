import React from 'react'

const EventCard = ({event}) => {
  return (
    <>
        <div className='event-card flex flex-col justify-center items-center'>
            <img src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?size=626&ext=jpg" alt={event.title} className='w-[200px] h-[200px]'/>
            <h1>{event.title}</h1>
            <p>{event.description}</p>
            <p>{event.city}</p>
            <p>{event.state}</p>

        </div>
    </>
  )
}

export default EventCard