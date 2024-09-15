# app/Dockerfile
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the FastAPI app code
COPY app/ .

# Expose the port that FastAPI runs on
EXPOSE 8000

# Command to run the FastAPI app
CMD ["uvicorn", "main:app","--workers", "1", "--host", "0.0.0.0", "--port", "8000"]

