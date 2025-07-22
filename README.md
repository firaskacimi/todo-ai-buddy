# Modern Todo App ✨

A beautiful, responsive todo application built with React, TypeScript, and Tailwind CSS, featuring a modern glass-morphism design with gradient accents and smooth animations.

## 🚀 Features

### Core Functionality
- **Add, edit, and delete todos** - Full CRUD operations
- **Priority levels** - Low, Medium, High priority with color coding
- **Complete/incomplete todos** - Check off completed tasks
- **Filter system** - View All, Active, or Completed todos
- **Persistent storage** - Todos are saved to localStorage
- **Statistics dashboard** - Real-time stats for total, active, and completed todos

### Design & UX
- **Glass-morphism UI** - Modern frosted glass effect with backdrop blur
- **Gradient accents** - Beautiful purple-to-pink gradients
- **Smooth animations** - Fade-in and slide transitions
- **Responsive design** - Works perfectly on all devices
- **Dark theme optimized** - Designed for dark mode experience
- **Interactive feedback** - Hover states and transitions

## 🛠 Technical Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React useState with localStorage persistence
- **Form Handling**: Native React forms with validation

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── TodoForm.tsx       # Add new todo form
│   ├── TodoItem.tsx       # Individual todo item
│   └── TodoList.tsx       # Main todo container
├── pages/
│   ├── Index.tsx          # Main page
│   └── NotFound.tsx       # 404 page
├── types/
│   └── todo.ts           # TypeScript interfaces
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── index.css            # Global styles & design tokens
```

## 🎨 Design System

### Color Palette
- **Primary**: Purple gradient (`266° 100% 70%` → `310° 100% 80%`)
- **Success**: Green for completed items (`142° 76% 36%`)
- **Warning**: Orange for medium priority (`38° 92% 50%`)
- **Destructive**: Red for high priority and delete actions

### Design Tokens
- Glass-morphism effects with `backdrop-blur-sm`
- Custom shadows: `--todo-shadow`, `--todo-shadow-lg`
- Smooth transitions: `cubic-bezier(0.4, 0, 0.2, 1)`
- Responsive breakpoints following Tailwind standards

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm installed
- Modern web browser

### Installation

1. **Clone the repository**
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:8080`

### Building for Production
```bash
npm run build
```

## 📱 Usage

1. **Add a Todo**: Type in the input field, select priority, and click "Add Todo"
2. **Complete Todo**: Click the checkbox next to any todo
3. **Delete Todo**: Hover over a todo and click the trash icon
4. **Filter Todos**: Use All/Active/Completed buttons to filter view
5. **Clear Completed**: Remove all completed todos at once
6. **View Stats**: Monitor your progress with the stats cards

## 🎯 Future Enhancements

- **Due dates and reminders**
- **Categories and tags**
- **Search and sort functionality**
- **Export/import features**
- **Drag and drop reordering**
- **Dark/light mode toggle**
- **Cloud synchronization**

## 🛠 Deployment

### Via Lovable
Simply open [Lovable](https://lovable.dev) and click on Share → Publish.

### Via Other Platforms
This is a standard Vite React app that can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev) - AI-powered web development
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide React](https://lucide.dev)
- Styling with [Tailwind CSS](https://tailwindcss.com)
