import { Checkbox, Paper, Button } from '@mantine/core';

function TodoList({tareas, eliminar,
  taweno
}) {
  return ( <>
    {tareas.map((tarea
    ) => (
      <Paper key={tarea.id} shadow="md" radius="md" withBorder p="xl">    
      <Checkbox
      label={tarea.name}
      checked={tarea.completed}
      onChange={()=>taweno(tarea.id)}
      color="rgba(195, 219, 186, 1)"
      radius="xl"
   /> <Button variant="filled" color="rgba(196, 26, 162, 1)" radius="md" onClick={()=> eliminar(tarea.id)}>Eliminar</Button>
   </Paper>
    ))}
  </>






  );
}
export default TodoList;