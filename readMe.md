# React Chatbot Application

This is a simple React chatbot application that interacts with a backend server to provide responses to user queries.

## Description

The application allows users to input questions or queries and receive responses from a backend model. It utilizes React for the frontend interface and communicates with the backend server via HTTP requests.

## Features

- Users can input queries in a text field.
- The application sends the query to the backend server and displays the response.
- Error handling for empty queries and network errors.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your/repository.git

2. Navigate to the project directory. Then install dependencies:
   ```
   npm install

3. Start Developement Server
   ```
   npm start

## Usage
Input your query in the text field.
Click on the "Ask Me" button to send the query to the backend.
View the response displayed below the input field.

Optionally, click on the "Clear" button to clear the chat history.   

## Backend Server
The application communicates with a backend server located at http://localhost:8000/gemini. Ensure that the backend server is running and accessible.

## Technologies Used
1. React, Node, Express, Gemini Generative Model

2. useState hook for state management

3. Fetch API for making HTTP requests

4. JSON.stringify and JSON.parse for serializing and deserializing data