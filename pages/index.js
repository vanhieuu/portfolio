import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} mt={10} align="center">
        Hello, I&apos;m a front-end Mobile developer
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Thân Văn Hiếu
          </Heading>
          <p>React-Native Developer</p>
        </Box>
      </Box>
    </Container>
  )
}
export default Page
