
const employees = [
  {
    id: 1,
    firstName: "Shashank",
    email: "employee1@gmail.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update project documentation",
        taskDescription: "Complete the documentation for the new features.",
        taskDate: "2025-01-12",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Review codebase",
        taskDescription: "Analyze the existing codebase for optimizations.",
        taskDate: "2025-01-10",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix server issues",
        taskDescription: "Resolve downtime problems on the staging server.",
        taskDate: "2025-01-09",
        category: "Maintenance",
      },
    ],
  },
  {
    id: 2,
    firstName: "Deekshith",
    email: "employee2@gmail.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare client report",
        taskDescription: "Draft the client report for Q4 results.",
        taskDate: "2025-01-12",
        category: "Reporting",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create marketing plan",
        taskDescription: "Develop a marketing strategy for the new product.",
        taskDate: "2025-01-13",
        category: "Marketing",
      },
    ],
  },
  {
    id: 3,
    firstName: "Gayathri",
    email: "employee3@gmail.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update website UI",
        taskDescription: "Implement new design features for the website.",
        taskDate: "2025-01-11",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Debug login issue",
        taskDescription: "Fix the login page issue reported by users.",
        taskDate: "2025-01-09",
        category: "Bug Fixing",
      },
    ],
  },
  {
    id: 4,
    firstName: "Yeshwanth",
    email: "employee4@gmail.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Conduct team meeting",
        taskDescription: "Organize a team meeting to discuss project updates.",
        taskDate: "2025-01-12",
        category: "Management",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Generate weekly report",
        taskDescription: "Compile data for the weekly status report.",
        taskDate: "2025-01-10",
        category: "Reporting",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Research new tools",
        taskDescription: "Explore tools to improve workflow efficiency.",
        taskDate: "2025-01-11",
        category: "Research",
      },
    ],
  },
  {
    id: 5,
    firstName: "Bunny",
    email: "employee5@gmail.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test API endpoints",
        taskDescription: "Perform unit testing for new API endpoints.",
        taskDate: "2025-01-12",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Complete feature documentation",
        taskDescription: "Write detailed documentation for the latest features.",
        taskDate: "2025-01-10",
        category: "Documentation",
      },
    ],
  },
];



const admin=[{
    "id": 1,
    "email": "admin@gmail.com",
    "password": "123"
  }]

export const SetLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const GetLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    
   
    return {employees,admin}
}