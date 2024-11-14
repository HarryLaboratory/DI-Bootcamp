import requests
import time

def measure_load_time(url):
    start_time = time.time()
    try:
        response = requests.get(url)
        end_time = time.time()
        
        load_time = end_time - start_time
        
        print(f"Time to load {url}: {load_time:.4f} seconds")
        
        if response.status_code == 200:
            print("Page loaded successfully!")
        else:
            print(f"Failed to load page. Status code: {response.status_code}")
    
    except requests.RequestException as e:
        print(f"Error loading {url}: {e}")

    print("-" * 50)

urls = [
    "https://www.example.com",
    "https://www.google.com/",
    "https://www.youtube.com/",
    "https://octopus.developers.institute/courses/"
]

for url in urls:
    measure_load_time(url)


