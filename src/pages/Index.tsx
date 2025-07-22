import TodoList from "@/components/TodoList";

const Index = () => {
  return (
    <div className="min-h-screen bg-todo-subtle">
      <div className="container mx-auto px-4 py-8">
        <TodoList />
      </div>
    </div>
  );
};

export default Index;
