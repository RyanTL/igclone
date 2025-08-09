const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]




    const container = document.getElementById("posts-container")
    let posthtml = ""

    for (let i = 0; i < posts.length; i++){
        const post = posts[i]
        posthtml += `

            <div class = "user-info">
            <img src="${post.avatar}" class="user-avatar">
            <div class="name-location">
            <h3>${post.name}</h3>
            <p>${post.location}</p>
            </div>
        </div>

        <div class="post-imxage">
            <img src="${post.post}" class="post-image">
        </div>

        <div class="interaction-container">
            <div class="interaction-buttons">
            <img src="images/icon-heart.png" class="int-icon">
            <img src="images/icon-comment.png" class="int-icon">
            <img src="images/icon-dm.png" class="int-icon">
            </div>
            <p class="bold">${post.likes} likes</p>
            <p class="comments"> <span class="bold">${post.username}</span> ${post.comment}</p>
        </div>        
        
        `;
    }

    container.innerHTML = posthtml;





