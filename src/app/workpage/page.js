import { Details, Explore, HomeCarousel } from '@/components'
import Collaborator from '@/components/collaborator'
import React from 'react'

const index = () => {
  return (
    <div>
      <HomeCarousel hideText={true}/>
      <Collaborator />
      <Details />
      <Explore />
    </div>
  )
}

export default index
