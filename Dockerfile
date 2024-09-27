# Base image
FROM python:3.12-slim

# Set environment variables
ENV PYTHONUNBUFFERED=1

# Install Git and other dependencies
RUN apt-get update && apt-get install -y git && apt-get clean

# Set working directory
WORKDIR /app

# Clone the repository and set it up
RUN git clone https://github.com/mur1chan/fin-frontend.git . && \
    python -m venv .venv && \
    .venv/bin/pip install --upgrade pip && \
    .venv/bin/pip install -r requirements.txt

# Expose the port the app runs on
EXPOSE 8582

# Pull the latest code and run the application
CMD git pull && .venv/bin/python3 main.py 
