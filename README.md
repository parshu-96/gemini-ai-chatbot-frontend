# Frontend - AI Chatbot Application

## Overview
This is the frontend of the AI Chatbot application, built using **React.js**. It provides a user-friendly interface to interact with the chatbot and displays responses along with token usage metadata.

## 📌 Technologies Used
- **React.js**
- **Axios** (for making API calls)

## 🚀 Setup Instructions

### 1️⃣ Clone the repository
```sh
git clone https://github.com/parshu-96/gemini-ai-chatbot-frontend.git
```

### 2️⃣ Navigate to the frontend project directory
```sh
cd gemini-ai-chatbot-frontend
```

### 3️⃣ Install dependencies
```sh
npm install
```

### 4️⃣ Start the development server
```sh
npm start
```

## 🔧 Configuring Environment Variables
Create a `.env` file in the frontend directory and specify:
```env
REACT_APP_BACKEND_URL=http://localhost:8080/api/qna/ask
```

## 🔥 Features
✅ Users can enter a question in a text box.
✅ A submit button triggers an API request to the backend.
✅ The chatbot displays the response below the input field.
✅ Metadata shows the number of tokens used:
  - **Prompt Tokens**: Number of tokens in the user’s query.
  - **Response Tokens**: Number of tokens in the chatbot’s reply.
  - **Total Tokens**: Sum of both.

## 🔗 Backend Repository Link
For the backend source code, visit: [gemini-ai-chat-bot](https://github.com/parshu-96/gemini-ai-chat-bot)

## 🚀 Deployment
- Can be hosted on **Vercel**, **Netlify**, or any static file server.

## 🤝 Contributing
1. **Fork** the repository.
2. **Create a new branch** for your feature or fix.
3. **Commit changes** and push to your branch.
4. **Open a Pull Request**.

## 📜 License
This project is licensed under the **MIT License**.

## 📞 Contact
For any questions, reach out via **[parshuvmahindrakar@gmail.com**.

