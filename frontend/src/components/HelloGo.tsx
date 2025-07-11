import React from 'react'
import { useHello } from '../hooks/useHello'

function HelloGo() {
  const { data, isPending, error } = useHello()

  if (isPending) {
    <div className="">Loading.....</div>
  }

  if (error) {
    <div className="">
      An error occured:
      {error.message}
    </div>
  }

  return (
    <div>
      {data?.greet}
    </div>
  )
}

export default HelloGo
