(function(userName) {
    const userContainer = document.getElementById('user-container');
    
    const userInfoDiv = document.createElement('div');
    userInfoDiv.classList.add('user-info');
    
    const profileImg = document.createElement('img');
    profileImg.src = 'https://www.w3schools.com/w3images/avatar2.png'; 
    profileImg.alt = `${userName}'s profile picture`;
    
    const userNameDiv = document.createElement('div');
    userNameDiv.textContent = `Welcome, ${userName}`;
    
    userInfoDiv.appendChild(profileImg);
    userInfoDiv.appendChild(userNameDiv);
    
    userContainer.appendChild(userInfoDiv);
  })('Bryan');
  