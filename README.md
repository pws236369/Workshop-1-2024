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

## Simulate Loading + Error

### Simulate Error State
1. Open DevTools.
2. Navigate to the "Network" tab.
3. In the top-left corner of the DevTools, find the "No throttling" dropdown.
4. Select "Offline" from the dropdown to simulate a network error.

### Simulate Loading State
1. Open DevTools.
2. Navigate to the "Network" tab.
3. In the top-left corner of the DevTools, find the "No throttling" dropdown.
4. Select "Slow 3G" from the dropdown to simulate a network error.

Remember to set the network conditions back to "No throttling" or "Online" to return to normal behavior.

## Submission

After completing the assignment, submit your solution:
1. Push the changes to your forked repository.
2. Add [pws236369](https://github.com/pws236369) as collaborator.
3. Webcourse - On the class website you will find an assignment item called “Workshop 1”. Upload a plain text (workshop1.txt) file with the following:
   - URL of your private GitHub repo, with permission to the course user.
   - ID and name.

- Submission Deadline - 06.02.24 at 23:50
- Submitting after the deadline wouldn’t be possible.
- Submission in **singles** only.


Good luck!
