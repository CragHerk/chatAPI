import axios from "axios";

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "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";

const sendMessage = async (message) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: "gpt-3.5-turbo-16k",
        messages: [{ role: "user", content: message }],
        max_tokens: 1000,
        temperature: 0.7,
        n: 1,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    //console.log(response.data.choices[0].message.content); // Wyświetlanie zawartości wiadomości

    const decodedText = response.data.choices[0].message.content;
    return decodedText.trim() || "Odpowiedź jest niedostępna";
  } catch (error) {
    console.error(error);
    return "Wystąpił błąd podczas wysyłania zapytania do API.";
  }
};

export default sendMessage;
