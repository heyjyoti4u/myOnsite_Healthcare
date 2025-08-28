import sys
import os
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))

import argparse
from ai_core.generator import generate_selenium_code
from browser_automation.executor import execute_selenium_code
from reporting.reporter import create_report

def main():
    # Create output directories if they don't exist
    os.makedirs("outputs/reports", exist_ok=True)
    os.makedirs("outputs/screenshots", exist_ok=True)

    parser = argparse.ArgumentParser(description="TestSmith AI - Autonomous Selenium Test Engineer")
    parser.add_argument("command", type=str, help="The natural language command for the test case.")
    args = parser.parse_args()

    user_command = args.command
    test_name = "AI Generated Test"

    # Core Workflow
    generated_code = generate_selenium_code(user_command)

    if generated_code:
        execution_result = execute_selenium_code(generated_code, test_name)
        create_report(test_name, user_command, execution_result)
        print("\n🎉 TestSmith AI has completed the run.")
    else:
        print("\nCould not proceed with execution as code generation failed.")

if __name__ == "__main__":
    main()