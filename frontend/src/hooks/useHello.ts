import { useQuery } from '@tanstack/react-query'
import React from 'react'

export function useHello() {
  const {
    data,
    isPending,
    error,
  } = useQuery({
    queryKey: ['hello'],
    queryFn: () =>
      fetch('http://localhost:8080/hello').then(res => res.json()),
  })

  return { data, isPending, error }
}
