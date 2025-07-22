import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { Todo, FilterType } from "@/types/todo";
import { CheckSquare, Square, List } from "lucide-react";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string, priority: 'low' | 'medium' | 'high') => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      priority,
      createdAt: new Date().toISOString(),
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const stats = {
    total: todos.length,
    active: todos.filter(todo => !todo.completed).length,
    completed: todos.filter(todo => todo.completed).length,
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-card/30 border-border/50 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold bg-todo-gradient bg-clip-text text-transparent">
            Todo App
          </CardTitle>
          <p className="text-muted-foreground">Stay organized and productive</p>
        </CardHeader>
        <CardContent>
          <TodoForm onAddTodo={addTodo} />
        </CardContent>
      </Card>

      {/* Stats */}
      {todos.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="bg-card/30 border-border/50 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <List className="w-4 h-4 text-primary" />
                <Badge variant="outline">{stats.total}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Total</p>
            </CardContent>
          </Card>
          <Card className="bg-card/30 border-border/50 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Square className="w-4 h-4 text-todo-warning" />
                <Badge variant="outline">{stats.active}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Active</p>
            </CardContent>
          </Card>
          <Card className="bg-card/30 border-border/50 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckSquare className="w-4 h-4 text-todo-success" />
                <Badge variant="outline">{stats.completed}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Completed</p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Filter Buttons */}
      {todos.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center">
          <Button
            variant={filter === 'all' ? 'gradient' : 'outline'}
            onClick={() => setFilter('all')}
            size="sm"
          >
            All
          </Button>
          <Button
            variant={filter === 'active' ? 'gradient' : 'outline'}
            onClick={() => setFilter('active')}
            size="sm"
          >
            Active
          </Button>
          <Button
            variant={filter === 'completed' ? 'gradient' : 'outline'}
            onClick={() => setFilter('completed')}
            size="sm"
          >
            Completed
          </Button>
          {stats.completed > 0 && (
            <Button
              variant="destructive"
              onClick={clearCompleted}
              size="sm"
            >
              Clear Completed
            </Button>
          )}
        </div>
      )}

      {/* Todo List */}
      <Card className="bg-card/30 border-border/50 backdrop-blur-sm">
        <CardContent className="p-6">
          {filteredTodos.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-muted-foreground">
                {todos.length === 0 
                  ? "No todos yet. Add your first todo above!" 
                  : `No ${filter} todos.`
                }
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TodoList;