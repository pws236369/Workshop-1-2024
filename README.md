# WSP (236369) - Workshop 1

## Introduction

Welcome to the workshop 1! 

The goal is to fetch data, handle loading states, and manage errors in the application using react hooks and state management.

## Getting Started

To start with the assignment, follow these steps:

1. **Fork the Repository:**
   - Fork this repository to your GitHub account.

2. **Clone the Repository:**
   - Clone your forked repository.

3. **Install Dependencies:**
   - Install the project dependencies using npm:
     ```bash
     npm install
     ```
## Building and Running the Application

After installing the dependencies, you can build and run the application using the following commands:

1. **Build:**

     ```bash
     npm run build
     ```

   This command generates a production-ready build in the `dist` folder.

2. **Run Development Server:**

     ```bash
     npm run dev
     ```

## Task

Your primary task is to fix the `App.tsx` file by implementing the data fetching logic, loading states, and error handling. 

## Guidelines

1. **Fetch Data:**
   - Fetch post comments data from `https://jsonplaceholder.typicode.com/posts/{post_number}/comments`.
   - The post number should be 1 at first, but it can be changed by the search component.

2. **Loading States:**
   - Show the loader while data is being fetched.

3. **Error Handling:**
   - Implement error handling to display an error state if there is an issue with the network or data fetching.

## Submission

After completing the assignment, submit your solution by pushing the changes to your forked repository.

Add [pws236369](https://github.com/pws236369) as collaborator.

Good luck!