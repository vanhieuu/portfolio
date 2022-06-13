import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Fonts from '../components/fonts'

const Page = () => {
  return (
    <Container>
      <Fonts/>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        mt={10}
        align="center"
        fontSize={13}
      >
        Hello, I&apos;m a front-end Mobile developer
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Thân Văn Hiếu
          </Heading>
          <p> Front-end React Native Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/vanhieu.jpg"
            alt="Profile Images"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Công việc
        </Heading>
        <Paragraph>
          Hiện tại mình đang là lập trình viên front-end cho mảng ứng dụng điện
          thoại di động của công ty cổ phần giáo dục CoEdu. Ngôn ngữ lập trình
          mà mình đang dùng là React Native và ReactJs. Ngoài việc lập trình
          mình còn có thể xem Tarot và coi như là một nghề tay trái của mình.
        </Paragraph>
      </Section>
      <Box align="center" my={4}>
        <NextLink href="/works">
          <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            My Portfolio
          </Button>
        </NextLink>
      </Box>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Sinh tại Lạng Sơn, Việt Nam
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Tốt nghiệp khoa công nghệ thông tin, trường Đại học Kinh doanh và Công
          nghệ Hà Nội
        </BioSection>
        <BioSection>
          <BioYear>2022 đến nay</BioYear>
          Front-end Developer React Native tại Công ty cổ phần giáo dục CoeDu
        </BioSection>
      </Section>
 
    </Container>
  )
}
export default Page
