// I wrap everything in a DOMContentLoaded listener so the script only runs once the HTML is fully parsed
document.addEventListener('DOMContentLoaded', () => {

    // I grab the form so I can listen for its submit event (covers both click and Enter key)
    const todoForm = document.getElementById('todo-form');
    // I grab the input field so I can read and clear its value
    const taskInput = document.getElementById('task-input');
    // I grab the task list container so I can render task items into it
    const taskList = document.getElementById('task-list');
    // I grab the empty state paragraph so I can show/hide it based on task count
    const emptyState = document.getElementById('empty-state');
    // I grab the counter span so I can update just the number, not the whole sentence
    const taskCount = document.getElementById('task-count');

    // I define the localStorage key as a constant so I never mistype it across the file
    const STORAGE_KEY = 'syntecxhub_todo_tasks';

    // I initialize the tasks array by loading from localStorage, or an empty array if nothing is saved yet
    let tasks = loadTasks();

    // I define loadTasks so I can safely read and parse the saved tasks from localStorage
    function loadTasks() {
        // I try/catch here in case localStorage has corrupted or invalid JSON
        try {
            // I read the raw string from localStorage using my defined key
            const stored = localStorage.getItem(STORAGE_KEY);
            // I return the parsed array if data exists, otherwise I return an empty array
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            // I log the error so I can debug it, but I don't crash the app if parsing fails
            console.error('Error loading tasks from localStorage:', error);
            // I fall back to an empty array so the app still works even if storage is corrupted
            return [];
        }
    }

    // I define saveTasks so every mutation (add/delete/toggle) writes the current state back to localStorage
    function saveTasks() {
        // I stringify the tasks array since localStorage only stores strings
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }

    // I define renderTasks as the single function that redraws the entire list from the tasks array
    function renderTasks() {
        // I clear the current list HTML first so I don't duplicate items on every render
        taskList.innerHTML = '';

        // I check if there are zero tasks so I can show the empty state message
        if (tasks.length === 0) {
            // I remove the 'hidden' class so the empty state paragraph becomes visible
            emptyState.classList.remove('hidden');
        } else {
            // I add the 'hidden' class so the empty state paragraph disappears once tasks exist
            emptyState.classList.add('hidden');
        }

        // I loop through every task so I can build and append its corresponding list item
        tasks.forEach((task) => {
            // I create a new li element for this specific task
            const li = document.createElement('li');
            // I add the base class plus 'completed' conditionally, so CSS can style done tasks differently
            li.className = `task-item${task.completed ? ' completed' : ''}`;
            // I store the task's id on the element's dataset so click handlers know which task they affect
            li.dataset.id = task.id;

            // I build the inner HTML using a template literal so I can include text, and both action buttons
            li.innerHTML = `
                <span class="task-text"></span>
                <div class="task-actions">
                    <button class="action-btn complete-btn" aria-label="Mark task complete" title="Mark complete">✅</button>
                    <button class="action-btn delete-btn" aria-label="Delete task" title="Delete task">🗑️</button>
                </div>
            `;

            // I select the text span so I can set its content safely below
            const textSpan = li.querySelector('.task-text');
            // I use textContent instead of innerHTML here so task text can never inject unwanted HTML
            textSpan.textContent = task.text;

            // I grab the complete button so I can attach its click handler
            const completeBtn = li.querySelector('.complete-btn');
            // I grab the delete button so I can attach its click handler
            const deleteBtn = li.querySelector('.delete-btn');

            // I attach a click listener to toggle this specific task's completed status
            completeBtn.addEventListener('click', () => toggleComplete(task.id));
            // I attach a click listener to delete this specific task
            deleteBtn.addEventListener('click', () => deleteTask(task.id));

            // I append the fully built list item into the task list in the DOM
            taskList.appendChild(li);
        });

        // I call updateCounter every render so the remaining-tasks count always stays in sync
        updateCounter();
    }

    // I define addTask so form submission has a single place that creates and stores a new task
    function addTask(text) {
        // I trim whitespace so accidental spaces-only input doesn't create a blank task
        const trimmedText = text.trim();
        // I guard against empty input so the list never gets a blank task entry
        if (trimmedText === '') return;

        // I build a new task object matching the required shape: id, text, completed
        const newTask = {
            // I use Date.now() as required so each task gets a unique, chronological id
            id: Date.now(),
            // I store the cleaned-up task text
            text: trimmedText,
            // I default every new task to not completed
            completed: false
        };

        // I push the new task onto the in-memory array
        tasks.push(newTask);
        // I persist the updated array to localStorage immediately
        saveTasks();
        // I re-render the list so the new task appears on screen right away
        renderTasks();
    }

    // I define deleteTask so I can remove a specific task by its unique id
    function deleteTask(id) {
        // I filter out the task whose id matches, keeping everything else
        tasks = tasks.filter((task) => task.id !== id);
        // I persist the updated array so the deletion survives a page refresh
        saveTasks();
        // I re-render so the UI immediately reflects the removal
        renderTasks();
    }

    // I define toggleComplete so I can flip a specific task's completed state on or off
    function toggleComplete(id) {
        // I map over tasks so I can return a new array with just the matching task changed
        tasks = tasks.map((task) =>
            // I check id equality so only the clicked task's status is toggled
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        // I persist the updated array so the completed status survives a page refresh
        saveTasks();
        // I re-render so the strikethrough/opacity styling updates immediately
        renderTasks();
    }

    // I define updateCounter so the footer text always shows an accurate remaining-tasks count
    function updateCounter() {
        // I count only tasks where completed is false, since those are the ones still remaining
        const remaining = tasks.filter((task) => !task.completed).length;
        // I write that number into the counter span so the footer sentence stays accurate
        taskCount.textContent = remaining;
    }

    // I attach a submit listener to the form so both clicking Add and pressing Enter trigger the same logic
    todoForm.addEventListener('submit', (event) => {
        // I call preventDefault so the form doesn't reload the page on submit
        event.preventDefault();
        // I call addTask with the current input value to create the new task
        addTask(taskInput.value);
        // I clear the input field so it's ready for the next task
        taskInput.value = '';
        // I refocus the input so the user can keep typing tasks without re-clicking
        taskInput.focus();
    });

    // I call renderTasks once on initial load so any tasks saved from a previous session appear immediately
    renderTasks();
});
