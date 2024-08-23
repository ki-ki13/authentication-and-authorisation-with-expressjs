# User Deletion Feature - Authentication and Authorization Analysis

## Introduction

In this challenge, I was tasked with adding a delete user feature to the web application and evaluating whether the requirement “This delete user functionality can be done after authentication” is a good idea. This README provides a detailed explanation of the concepts of authentication and authorization, their differences, and why both are crucial when implementing such a feature.

## Understanding Authentication and Authorization

### Authentication
**Authentication** is the process of verifying the identity of a user or entity. It answers the question: "Who are you?" For example, when a user logs in with their username and password, the system checks these credentials against stored data to confirm the user’s identity.

### Authorization
**Authorization** comes after authentication and determines what an authenticated user is allowed to do. It answers the question: "What are you allowed to do?" For instance, after a user logs in, the system must check if the user has permission to delete accounts.

### Key Differences
- **Authentication** ensures that the user is who they claim to be.
- **Authorization** ensures that the authenticated user has the necessary permissions to perform certain actions.

## Evaluation of the Requirement: “This delete user functionality can be done after authentication”

### Is This a Good or Bad Idea?

- **Good Idea**: Requiring authentication before allowing a user to delete an account is a good practice. It ensures that only known users (those who have successfully logged in) can attempt to perform sensitive actions like deleting accounts.

- **Bad Idea If Not Combined with Authorization**: Relying solely on authentication is insufficient. Even if a user is authenticated, they should not be allowed to delete accounts unless they are specifically authorized to do so. For example, a regular user should not have the ability to delete other users’ accounts—this should be reserved for users with administrative privileges.

### Security Implications
Without proper authorization, authenticated users could potentially perform actions they are not supposed to, leading to severe security risks. For example, a compromised user account could be used to delete other user accounts if proper authorization checks are not in place.

## Recommended Implementation Flow

1. **Authentication**: Ensure that the user is authenticated (e.g., via login credentials).
2. **Authorization**: Verify that the authenticated user has the appropriate permissions to delete an account (e.g., check if the user is an admin).
3. **Action**: If both authentication and authorization checks pass, allow the user to proceed with the deletion. Otherwise, deny access and return an appropriate error message.

## Conclusion

The requirement to perform the delete user functionality only after authentication is a good idea, but it must be combined with proper authorization to ensure that only users with the necessary permissions can delete accounts. This combination of authentication and authorization is essential for maintaining the security and integrity of the application.

## Diagram of the Process

Below is a flowchart representing the process of user deletion, illustrating the steps of authentication, authorization, and the final action.

```text
+----------------------+        +------------------------+        +--------------------+
| User Authentication  | -----> | Authorization Check    | -----> | User Deletion      |
| (e.g., Login)        |        | (e.g., Admin Role?)    |        | (If authorized)    |
+----------------------+        +------------------------+        +--------------------+
           |                             |                                    |
           v                             v                                    v
      If Not Authenticated          If Not Authorized                   Deletion Denied
      Access Denied                 Access Denied
```

This flow ensures that only properly authenticated and authorized users can perform the delete action, maintaining the security of the system.

## Running the Application
To run the backend and frontend of this project, follow these steps:
### Backend
To start the backend server, use the following command:
```
node app.js
```
### Frontend
To serve the frontend, open the web-front-end/pages and use liveserver features in VSCode