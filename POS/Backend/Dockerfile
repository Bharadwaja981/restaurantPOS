# Use an official lightweight Python image
FROM python:3.8-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY db_connect.py ./
COPY requirements.txt ./
# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Define environment variable
ENV FLASK_APP=db_connect.py

# Run app.py when the container launches
CMD ["flask", "run", "--host=0.0.0.0"]
