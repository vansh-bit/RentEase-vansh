# Use official Python image as base
FROM python:3.10-slim

# Set the working directory
WORKDIR /app

# Copy requirements.txt and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application files
COPY . .

# Expose port (optional, useful if deploying as an API)
EXPOSE 8080

# Command to run the chatbot
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8080"]
