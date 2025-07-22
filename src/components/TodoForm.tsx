import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";

interface TodoFormProps {
  onAddTodo: (text: string, priority: 'low' | 'medium' | 'high') => void;
}

const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text.trim(), priority);
      setText("");
      setPriority('medium');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="text"
          placeholder="Add a new todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 bg-card/50 border-border/50 backdrop-blur-sm transition-all duration-200 focus:bg-card"
        />
        <Select value={priority} onValueChange={(value: 'low' | 'medium' | 'high') => setPriority(value)}>
          <SelectTrigger className="w-full sm:w-32 bg-card/50 border-border/50 backdrop-blur-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">Low</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="high">High</SelectItem>
          </SelectContent>
        </Select>
        <Button 
          type="submit" 
          variant="gradient" 
          className="w-full sm:w-auto"
          disabled={!text.trim()}
        >
          <Plus className="w-4 h-4" />
          Add Todo
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;