import os
from fastapi import FastAPI
from langchain_huggingface import HuggingFaceEndpoint
from langchain_core.messages import SystemMessage, HumanMessage, AIMessage
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize FastAPI
app = FastAPI()
hf_api_key = os.getenv("HUGGINGFACEHUB_API_TOKEN")

# Hugging Face Model
model_name = "mistralai/Mistral-7B-Instruct-v0.1"
model = HuggingFaceEndpoint(
    repo_id=model_name,
    huggingfacehub_api_token=hf_api_key,
   # model_kwargs={"temperature": 0.7, "max_length": 512}
)

# Chat history
chat_history = [SystemMessage(content="You are a chatbot developed for rental agreement recommendations and contract customization.")]

@app.post("/chat")
async def chat(user_input: str):
    """Handles chat responses"""
    chat_history.append(HumanMessage(content=user_input))

    if user_input.lower() == "end":
        return {"message": "Chat ended."}

    result = model.invoke(chat_history)
    chat_history.append(AIMessage(content=result))

    return {"response": result}
