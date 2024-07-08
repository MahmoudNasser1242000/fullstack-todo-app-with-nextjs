import Modal from "@/components/Modal";
import TodoTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";

export default function Home() {
  const { userId } : { userId: string | null } = auth();
  return (
    <main className="container mx-auto px-20 mt-11">
      <div className="flex justify-end pr-16">
        <Modal userId={userId}/>
      </div>
      <TodoTable userId={userId}/>
    </main>
  );
}
