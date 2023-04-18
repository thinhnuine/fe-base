import React from 'react'
export const AppHomeContainer = () => {
  return (
    <>
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
