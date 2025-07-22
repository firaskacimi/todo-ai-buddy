import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Trash2 } from "lucide-react";
import { Todo } from "@/types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const priorityColors = {
  low: "bg-muted text-muted-foreground",
  medium: "bg-todo-warning/20 text-todo-warning border-todo-warning/30",
  high: "bg-destructive/20 text-destructive border-destructive/30"
};

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div className="group flex items-center gap-4 p-4 rounded-lg bg-card/30 border border-border/50 backdrop-blur-sm hover:bg-card/50 transition-all duration-200 animate-fade-in">
      <Checkbox
        id={todo.id}
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo.id)}
        className="data-[state=checked]:bg-todo-success data-[state=checked]:border-todo-success"
      />
      
      <div className="flex-1 space-y-1">
        <label
          htmlFor={todo.id}
          className={`text-sm font-medium cursor-pointer transition-all duration-200 ${
            todo.completed 
              ? "line-through text-muted-foreground" 
              : "text-foreground"
          }`}
        >
          {todo.text}
        </label>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className={priorityColors[todo.priority]}>
            {todo.priority}
          </Badge>
          <span className="text-xs text-muted-foreground">
            {new Date(todo.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-destructive/20 hover:text-destructive"
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default TodoItem;