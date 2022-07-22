import React from 'react'
import { Box, Heading, Image, Stack, Text,  Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator, } from '@chakra-ui/react'
    import { ChevronRightIcon } from '@chakra-ui/icons'
export const CheckoutHeader = () => {
  return (
    <Box>
       <Stack ml={"40%"} mt={10}>
        
        <Image width={"60%"} src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/blm-checkout-logo.png?110142"/>
        </Stack> 
        <Box>
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>About</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
        </Box>
    </Box>
  )
}
