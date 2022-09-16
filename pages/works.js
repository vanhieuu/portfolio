import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import CoEduThumb from '../public/images/works/coedu.png'
import RNWeatherThumb from '../public/images/works/RNWeather.png'
const Work = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Công việc
      </Heading>
      <SimpleGrid column={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="CoEdu" title="CoEdu" thumbnail={CoEduThumb} >
            Ứng dụng học tập, tìm hiểu kiến thức xung quanh thông qua video 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id='RNWeather' title='RN Weather'  thumbnail={RNWeatherThumb}>
              Ứng dụng dự báo thời tiết đơn giản 
          </WorkGridItem>
        </Section>
        <Section>
         
        </Section>

      </SimpleGrid>
    </Container>
  )
}
export default Work
