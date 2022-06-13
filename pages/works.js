import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import CoEduThumb from '../public/images/works/coedu.png'

const Work = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Công việc
      </Heading>
      <SimpleGrid column={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="CoEdu" title="CoEdu" thumbnail={CoEduThumb} />
        </Section>
      </SimpleGrid>
    </Container>
  )
}
export default Work
