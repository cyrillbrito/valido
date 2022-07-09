import { useState } from 'react'
import './App.css'
import { Flex, HStack, Icon, IconButton, Link, Spacer, Text, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { tasksData } from './Data/tasks'
import TaskList from './TaskList/TaskList';


function App() {

  const { colorMode, toggleColorMode } = useColorMode();

  return (<>
    <header>
      <Flex p='2' borderBottom='1px'>
        <Text fontSize='4xl' fontWeight='bold'>ValiDo</Text>
        <Spacer />
        <HStack p='2'>
          <Link href='https://github.com/cyrillbrito/valido' isExternal aria-label='Go to GitHub repo'>
            <Icon>
              <path fill="currentColor"
                d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"
              ></path>
            </Icon>
          </Link>
          {
            colorMode === 'light'
              ? <IconButton aria-label='Switch to dark mode' icon={<MoonIcon />} onClick={toggleColorMode} />
              : <IconButton aria-label='Switch to light mode' icon={<SunIcon />} onClick={toggleColorMode} />
          }
        </HStack>
      </Flex>
    </header>

    <main style={{ padding: '50px' }}>
      <TaskList tasks={tasksData}></TaskList>
    </main>
  </>)
}

export default App
