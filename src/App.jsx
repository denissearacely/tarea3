import { MantineProvider, Container } from '@mantine/core';
import '@mantine/core/styles.css';
import TodoApp from './components/Todoapp';

export default function App() {
  return (
    <MantineProvider>
      <>
      <h1>TAREA LISTA</h1>
        <TodoApp/>
      </>
    </MantineProvider>
  );
}