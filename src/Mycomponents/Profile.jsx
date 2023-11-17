import React from 'react'

const Profile = () => {

    const user = {
        name: 'John Doe',
        username: 'johndoe123',
        joinDate: 'January 1, 2022',
        profilePic: 'path/to/profile-pic.jpg',
        headerImage: 'path/to/header-image.jpg',
        skills: ['React', 'JavaScript', 'CSS', 'Node.js'],
        posts: [
          {
            id: 1,
            content: 'This is my first post!',
            date: 'January 5, 2023',
            tags: ['React', 'Coding'],
          },
          // Add more posts as needed
        ],
      };
    
      return (
        <div>
          <div>
            <img src={user.headerImage} alt="Header" style={{ width: '100%' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', padding: '16px' }}>
            <img
              src={user.profilePic}
              alt="Profile"
              style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '16px' }}
            />
            <div>
              <h2>{user.name}</h2>
              <p>{user.username}</p>
              <p>Joined on {user.joinDate}</p>
            </div>
          </div>
          <div>
            <h3>Skills:</h3>
            <ul>
              {user.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Posts:</h3>
            {user.posts.map((post) => (
              <div key={post.id} style={{ border: '1px solid #ddd', padding: '16px', margin: '8px 0' }}>
                <p>{post.content}</p>
                <p>
                  Posted on {post.date} | Tags: {post.tags.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>
  )
}

export default Profile
