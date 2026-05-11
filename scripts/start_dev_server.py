import subprocess
import os

def start_server():
    cwd = os.getcwd()
    print(f"Starting dev server in {cwd}...")
    # Using NODE_OPTIONS as per desarrollo_web_SOP if applicable
    env = os.environ.copy()
    env["NODE_OPTIONS"] = "--max-old-space-size=4096"
    
    try:
        # Start the process in the background
        process = subprocess.Popen(["npm", "run", "dev"], env=env, shell=True)
        print(f"Server started with PID: {process.pid}")
        return process
    except Exception as e:
        print(f"Error starting server: {e}")
        return None

if __name__ == "__main__":
    start_server()
