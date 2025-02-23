import React, { Suspense } from 'react'
import CreateLink from './ui/forms/CreateLink'

const SuspenseWrapper = () => {
  return (
    <Suspense><CreateLink/></Suspense>
  )
}

export default SuspenseWrapper