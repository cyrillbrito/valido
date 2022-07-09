import './TaskList.css'
import { Box, Text, Tag, HStack, VStack } from '@chakra-ui/react'
import { Task } from '../Data/tasks'
import TaskCard from '../TaskCard/TaskCard';

type TaskProps = {
  tasks: Task[];
};

function Component(props: TaskProps) {

  return (
    <Box p="5" w="lg" borderWidth="1px" rounded='md'>
      <VStack>
        {props.tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </VStack>
    </Box>
  )
}

export default Component
