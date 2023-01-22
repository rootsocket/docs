import React from 'react'
import { Container } from '../components/common/Container'
import { Icon } from 'src/components/common/Icon'
import { Label } from 'src/components/common/Label'

const NotFound = () => {
  return (
    <Container>
      <div className="relative overflow-hidden">
        <div className="relative flex flex-col items-center justify-center pt-32 md:pt-56">
          404
        </div>
      </div>
    </Container>
  )
}

export default NotFound
