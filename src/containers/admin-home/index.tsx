import Image from 'next/image'
import React from 'react'
export const AdminHomeContainer = () => {
  return (
    <>
      <Image src="/images/logo-156.png" alt="" width={500} height={100} />
      <p>long content</p>
      {Array.from({ length: 100 }, (_, index) => (
        <React.Fragment key={index}>
          {index % 20 === 0 && index ? 'more' : '...'}
          <br />
        </React.Fragment>
      ))}
    </>
  )
}
