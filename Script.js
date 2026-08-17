document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const form = document.getElementById('todo-form');
    const input = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const emptyState = document.getElementById('empty-state');
    const taskCount = document.getElementById('task-count');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const clearCompletedBtn = document.getElementById('clear-completed-btn');

    const STORAGE_KEY = 'taskflow_data';
    
    // State
    let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    let currentFilter = 'all'; // 'all', 'active', 'completed'

    // Save to Local Storage
    const saveTasks = () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
        renderTasks();
    };

    // Format Timestamp
    const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        const today = new Date();
        const isToday = date.toDateString() === today.toDateString();
        
        if (isToday) {
            return `Today at ${date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
        }
        return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    };

    // Add new task
    const addTask = (text) => {
        if (!text.trim()) return;
        const newTask = {
            id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
            text: text.trim(),
            completed: false,
            createdAt: Date.now()
        };
        tasks.unshift(newTask); // Add to beginning
        saveTasks();
    };

    // Delete task
    const deleteTask = (id) => {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
    };

    // Toggle Complete
    const toggleComplete = (id) => {
        tasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        saveTasks();
    };

    // Edit task
    const editTask = (id, newText) => {
        if (!newText.trim()) return;
        tasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, text: newText.trim() };
            }
            return task;
        });
        saveTasks();
    };

    // Clear completed
    const clearCompleted = () => {
        tasks = tasks.filter(task => !task.completed);
        saveTasks();
    };

    // Setup Editing Mode in DOM
    const enterEditMode = (li, task) => {
        const textElement = li.querySelector('.task-text');
        const currentText = task.text;
        
        const inputEl = document.createElement('input');
        inputEl.type = 'text';
        inputEl.className = 'edit-input';
        inputEl.value = currentText;
        
        textElement.replaceWith(inputEl);
        inputEl.focus();

        const saveEdit = () => {
            if (inputEl.value.trim() !== currentText) {
                editTask(task.id, inputEl.value);
            } else {
                renderTasks(); // Revert if unchanged
            }
        };

        inputEl.addEventListener('blur', saveEdit);
        inputEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                inputEl.blur();
            } else if (e.key === 'Escape') {
                inputEl.value = currentText; // Reset and trigger blur
                inputEl.blur();
            }
        });
    };

    // Render Tasks
    const renderTasks = () => {
        taskList.innerHTML = '';
        
        // Filter logic
        let filteredTasks = tasks;
        if (currentFilter === 'active') {
            filteredTasks = tasks.filter(t => !t.completed);
        } else if (currentFilter === 'completed') {
            filteredTasks = tasks.filter(t => t.completed);
        }

        // Empty state visibility
        if (filteredTasks.length === 0) {
            emptyState.classList.remove('hidden');
        } else {
            emptyState.classList.add('hidden');
        }

        filteredTasks.forEach(task => {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''}`;
            li.dataset.id = task.id;

            li.innerHTML = `
                <div class="task-checkbox-wrapper">
                    <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
                </div>
                <div class="task-content">
                    <span class="task-text">${task.text}</span>
                    <span class="task-meta">
                        <i class="ph ph-clock"></i> ${formatTime(task.createdAt)}
                    </span>
                </div>
                <div class="task-actions">
                    <button class="action-icon edit" title="Edit Task">
                        <i class="ph ph-pencil-simple"></i>
                    </button>
                    <button class="action-icon delete" title="Delete Task">
                        <i class="ph ph-trash"></i>
                    </button>
                </div>
            `;

            // Event Listeners for this item
            const checkbox = li.querySelector('.task-checkbox');
            checkbox.addEventListener('change', () => toggleComplete(task.id));

            const deleteBtn = li.querySelector('.delete');
            deleteBtn.addEventListener('click', () => deleteTask(task.id));

            const editBtn = li.querySelector('.edit');
            editBtn.addEventListener('click', () => enterEditMode(li, task));
            
            // Double click to edit
            const contentDiv = li.querySelector('.task-content');
            contentDiv.addEventListener('dblclick', () => enterEditMode(li, task));

            taskList.appendChild(li);
        });

        // Update footer stats
        const activeCount = tasks.filter(t => !t.completed).length;
        taskCount.textContent = activeCount;

        // Show/hide clear completed button
        const hasCompleted = tasks.some(t => t.completed);
        if (hasCompleted) {
            clearCompletedBtn.classList.remove('hidden');
        } else {
            clearCompletedBtn.classList.add('hidden');
        }
    };

    // Event Listeners
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(input.value);
        input.value = '';
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active class
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update state and re-render
            currentFilter = btn.dataset.filter;
            renderTasks();
        });
    });

    clearCompletedBtn.addEventListener('click', clearCompleted);

    // Initial Render
    renderTasks();
});
