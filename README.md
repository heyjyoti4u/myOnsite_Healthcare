 TestSmith AI - The Autonomous Selenium Test Engineer
1. Project Overview
TestSmith AI is an intelligent agent designed to automate the QA testing pipeline for web applications, as per the technical assessment from myOnsite Healthcare. The system interprets natural language commands, generates Python Selenium code on the fly, executes the tests in a headless browser, and produces structured reports in both JSON and Excel formats.

This project aims to accelerate QA cycles and ensure consistent quality through end-to-end automation.

2. Core Features
Natural Language Understanding: Parses user stories and commands in plain English to understand testing requirements.

Automatic Code Generation: Dynamically generates executable Python Selenium scripts using the Google Gemini API.

Headless Browser Execution: Runs tests autonomously in the background without a visible UI, capturing outcomes, logs, and screenshots on failure.

Structured Reporting: Creates detailed test reports in both JSON and Excel formats, detailing the test name, description, status, and error messages.

Containerized Environment: Packaged in a Docker container to ensure consistent and reliable execution across different systems.

3. Installation and Setup
Prerequisites
Docker must be installed and running on your system.

You must have a Google Gemini API key.

Setup Instructions
Clone the Repository:

Bash

git clone <your-repository-url>
cd testsmith-ai
Create the Environment File:
Create a file named .env in the root of the project and add your Google Gemini API key:

GOOGLE_API_KEY="your_secret_api_key_here"
Build the Docker Image:
From the root directory of the project, run the following command to build the Docker image.

Bash

docker build -t testsmith-ai .
4. How to Use (User Manual)
Execute the program via the Docker container. You must pass your test command as a string at the end of the docker run command.

Basic Syntax
Bash

docker run -v "$(pwd)/outputs:/app/outputs" testsmith-ai "YOUR NATURAL LANGUAGE COMMAND"
The -v "$(pwd)/outputs:/app/outputs" command is essential. It links the outputs folder inside the container to a folder on your computer, allowing the reports to be saved locally.

Example Commands
Example 1: Simple Search Test
Bash

docker run -v "$(pwd)/outputs:/app/outputs" testsmith-ai "Go to google.com and search for 'myOnsite Healthcare'"
Example 2: Multi-Step Test
Bash

docker run -v "$(pwd)/outputs:/app/outputs" testsmith-ai "Go to wikipedia.org, find the search input, and type 'Artificial Intelligence'"
Example 3: Failure Test
This command will fail (as intended) and generate a screenshot.

Bash

docker run -v "$(pwd)/outputs:/app/outputs" testsmith-ai "Go to google.com and click a button with the id 'nonexistent-button'"
After each run, the corresponding JSON and Excel reports (and any screenshots) will be available in the outputs folder on your machine.

5. Important Note on System Limitations
During development, significant challenges were encountered due to inconsistencies in the local Python environment. These system-specific compatibility issues caused persistent ModuleNotFoundError errors, even with a correct project structure.

To overcome this, the project was configured to be run exclusively within a Docker container. The provided Dockerfile creates a stable and predictable Linux-based environment where all dependencies are correctly installed and pathing issues are eliminated.

Therefore, attempting to run this project via python main.py on a local machine is not recommended or supported. The official and required method of execution is through the Docker commands specified in the user manual above. This ensures the application performs reliably as demonstrated.
