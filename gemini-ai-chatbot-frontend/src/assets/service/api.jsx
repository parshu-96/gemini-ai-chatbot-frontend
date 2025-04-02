import axios from "axios";
const API_URL = "http://localhost:8080/api/qna/ask";
export const fetchChatResponse = async (question) => {
  try {
    console.log(question);
    const response = await axios.post(
      API_URL,
      { question },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
