FROM python:3.9

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY app.py .
COPY model.joblib tokenizer.joblib ./

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "7860"]
