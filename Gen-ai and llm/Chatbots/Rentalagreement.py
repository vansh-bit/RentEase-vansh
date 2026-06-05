import os
from langchain.chat_models import ChatAnthropic
from langchain.llms import HuggingFaceHub
from langchain_core.messages import SystemMessage, HumanMessage, AIMessage
from dotenv import load_dotenv

load_dotenv()



model_name = "mistralai/Mistral-7B-Instruct-v0.1"


model = HuggingFaceHub(
    repo_id=model_name,
    model_kwargs={"temperature": 0.7, "max_length": 512}
)


chathistory = [SystemMessage(content="You are a chatbot developed for handling rental agreement recommendations and contract customization")]

while True:
    user_input = input("You: ")
    chathistory.append(HumanMessage(content=user_input))

    if user_input.lower() == "end":
        break


    result = model.invoke(chathistory)
    chathistory.append(AIMessage(content=result))

    print("AI:", result)

