import { TextInput,Group,Button } from '@mantine/core';
import { useField } from '@mantine/form';

function TodoForm({agregar}) {
  const field = useField({
    initialValue: '',
    validate: (value) => (value.trim() !== '' ? agregar(value) : 'Task cannot be empty'),
  });

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      field.validate();
    }
  };

  return (
    <Group> <TextInput
      {...field.getInputProps()}
      variant="filled"
      radius="lg"
      label="descripcion tarea"
      placeholder="tarea"
      onKeyDown={handleKeyDown}
    /><Button variant="filled" color="rgba(247, 210, 210, 1)" radius="md" onClick={field.validate}>Agregar</Button>
    </Group>
  );
}
export default TodoForm;