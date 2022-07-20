import React from 'react'
import { Box,Button } from '@chakra-ui/react'
import { Samplecart } from '../CartCom/Samplecart'
const Header = () => {
  return (
    <Box>
    <Button>
      <Samplecart />
    </Button>
    </Box>
  )
}

export default Header