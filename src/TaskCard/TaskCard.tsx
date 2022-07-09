import './TaskCard.css'
import { Box, Text, Tag, HStack } from '@chakra-ui/react'
import { Task } from '../Data/tasks'

type TaskProps = {
  task: Task;
};

function TaskCard(props: TaskProps) {

  return (
    <Box p="5" w="md" borderWidth="1px" bg='layer' boxShadow='lg' rounded='md' textAlign='start'>
      <HStack>
        {props.task.tags.map((tag) => (
          <Tag key={tag} variant='solid' colorScheme='teal'>
            Tag #{tag}
          </Tag>
        ))}
      </HStack>
      <Text ml={1} textTransform="uppercase" fontSize="xl" fontWeight="bold">
        {props.task.title}
      </Text>
      <Text mt={2} fontSize="sm" lineHeight="short" noOfLines={[1, 2, 3]}>
        {props.task.description}
      </Text>
    </Box>
  )
}

export default TaskCard
