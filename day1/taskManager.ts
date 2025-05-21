type Task = {
    id: number;
    title: string;
    description: string;
    done?: boolean;
  };
  
  let tasks: Task[] = [];
  
  const showMenu = () => {
    console.log(`
  === TO-DO APP MENU ===
  1. Add Task
  2. Remove Task
  3. Mark Task as Done
  4. List All Tasks
  5. Exit
    `);
  };
  
  const addTask = async () => {
    const title = await prompt("Enter title: ");
    const description = await prompt("Enter description: ");
    if (title && description) {
      const task: Task = {
        id: Date.now(),
        title,
        description,
        done: false,
      };
      tasks.push(task);
      console.log("✅ Task added.");
    } else {
      console.log("❌ Title and description are required.");
    }
  };
  
  const removeTask = async () => {
    const idInput = await prompt("Enter task ID to remove: ");
    const id = Number(idInput);
    if (!isNaN(id)) {
      tasks = tasks.filter((task) => task.id !== id);
      console.log("🗑️ Task removed.");
    } else {
      console.log("❌ Invalid ID.");
    }
  };
  
  const markDone = async () => {
    const idInput = await prompt("Enter task ID to mark as done: ");
    const id = Number(idInput);
    const task = tasks.find((task) => task.id === id);
    if (task) {
      task.done = true;
      console.log("✅ Task marked as done.");
    } else {
      console.log("❌ Task not found.");
    }
  };
  
  const listTasks = () => {
    if (tasks.length === 0) {
      console.log("📝 No tasks found.");
      return;
    }
    console.log("\n=== All Tasks ===");
    tasks.forEach((task) => {
      console.log(`ID: ${task.id}`);
      console.log(`Title: ${task.title}`);
      console.log(`Description: ${task.description}`);
      console.log(`Status: ${task.done ? "✅ Done" : "❌ Not Done"}`);
      console.log("----");
    });
  };
  
  const runApp = async () => {
    while (true) {
      showMenu();
      const choice = await prompt("Choose an option: ");
  
      switch (choice) {
        case "1":
          await addTask();
          break;
        case "2":
          await removeTask();
          break;
        case "3":
          await markDone();
          break;
        case "4":
          listTasks();
          break;
        case "5":
          console.log("👋 Goodbye!");
          return;
        default:
          console.log("❓ Invalid option. Try again.");
      }
    }
  };
  
  await runApp();
  