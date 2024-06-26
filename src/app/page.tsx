import { getAllTodos } from "@/actions/todos.actions"

export default async function Home() {
  const todos = await getAllTodos();
  
  return (
    <main >
      {/* {JSON.stringify(todos)} */}
    </main>
  );
}
