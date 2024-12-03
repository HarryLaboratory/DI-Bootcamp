// Define the Video class
class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
  
    watch() {
      console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
  }
  
  // First Video instance
  const firstVideo = new Video("JavaScript Tutorial", "Ari", 1800);
  firstVideo.watch(); 
  
  // Second Video instance 
  const secondVideo = new Video("React Basics", "John", 2400);
  secondVideo.watch(); 
  
  // Store 
  const videoData = [
    { title: "JavaScript Tutorial", uploader: "Ari", time: 1800 },
    { title: "React Basics", uploader: "John", time: 2400 },
    { title: "Node.js Overview", uploader: "Bryan", time: 1500 },
    { title: "HTML & CSS Crash Course", uploader: "David", time: 2000 },
    { title: "Python for Beginners", uploader: "Alice", time: 2100 }
  ];
  
  // Loop 
  videoData.forEach(video => {
    const videoInstance = new Video(video.title, video.uploader, video.time);
    videoInstance.watch();
  });
  
  