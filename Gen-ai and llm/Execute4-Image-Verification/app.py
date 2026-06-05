import os
import requests
import torch
import joblib
import numpy as np
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from sklearn.metrics.pairwise import cosine_similarity
from transformers import AutoModel, AutoTokenizer



# Initialize FastAPI
app = FastAPI()


# Load model and tokenizer
model_path = os.path.join(os.path.dirname(__file__), "model.joblib")
tokenizer_path = os.path.join(os.path.dirname(__file__), "tokenizer.joblib")

model = joblib.load(model_path)
tokenizer = joblib.load(tokenizer_path)


def get_embedding(text: str) -> np.ndarray:
    """Generate text embeddings."""
    inputs = tokenizer(text, return_tensors="pt", padding=True, truncation=True)
    with torch.no_grad():
        outputs = model(**inputs)
    return outputs.last_hidden_state.mean(dim=1).numpy()


@app.post("/compare_texts")
def compare_texts(text1: str, text2: str):
    """Compare the similarity between two text inputs."""
    text1_embedding = get_embedding(text1)
    text2_embedding = get_embedding(text2)
    similarity = cosine_similarity(text1_embedding, text2_embedding)[0][0]
    return {"similarity_score": round(similarity, 4)}
