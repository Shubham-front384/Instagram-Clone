const allReel = document.querySelector('.all-reels');
let sum = '';

const reelsData = [
  {
    id: 1,
    media: "https://videos.pexels.com/video1.mp4",
    profileImg: "https://randomuser.me/api/portraits/men/1.jpg",
    profileName: "Rohit Sharma",
    profilePara: "Exploring the streets of Mumbai!",
    musicName: "Tum Hi Ho - Aashiqui 2",
    musicImg: "https://i.scdn.co/image/ab67616d0000b2731a2e2fdc9d65bd1b2e3c2b1c",
    likes: 12900,
    comments: 432
  },
  {
    id: 2,
    media: "https://images.unsplash.com/photo-1554151228-14d9def656e4",
    profileImg: "https://randomuser.me/api/portraits/women/2.jpg",
    profileName: "Aisha Khan",
    profilePara: "Sunset vibes in Goa!",
    musicName: "Kesariya - Brahmastra",
    musicImg: "https://i.scdn.co/image/ab67616d0000b2733f3bcb3301f1d65dca3b7d33",
    likes: 22400,
    comments: 520
  },
  {
    id: 3,
    media: "https://videos.pexels.com/video2.mp4",
    profileImg: "https://randomuser.me/api/portraits/men/3.jpg",
    profileName: "Arjun Patel",
    profilePara: "Trying street food today!",
    musicName: "Srivalli - Pushpa",
    musicImg: "https://i.scdn.co/image/ab67616d0000b273f6f82fe5b1bdb2d0bbd10b51",
    likes: 18700,
    comments: 310
  },
  {
    id: 4,
    media: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profileImg: "https://randomuser.me/api/portraits/women/4.jpg",
    profileName: "Meera Nair",
    profilePara: "New photoshoot day!",
    musicName: "Malang Title Track",
    musicImg: "https://i.scdn.co/image/ab67616d0000b273a3d44a14bcbb157ccd1fcbb2",
    likes: 9800,
    comments: 200
  },
  {
    id: 5,
    media: "https://videos.pexels.com/video3.mp4",
    profileImg: "https://randomuser.me/api/portraits/men/5.jpg",
    profileName: "Sanjay Verma",
    profilePara: "Leg day at gym!",
    musicName: "Zinda - Bhaag Milkha Bhaag",
    musicImg: "https://i.scdn.co/image/ab67616d0000b2731fb0e706582633a556d7e3e4",
    likes: 5600,
    comments: 140
  },
  {
    id: 6,
    media: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    profileImg: "https://randomuser.me/api/portraits/women/6.jpg",
    profileName: "Kritika Sen",
    profilePara: "Chilling with friends!",
    musicName: "Levitating - Dua Lipa",
    musicImg: "https://i.scdn.co/image/ab67616d0000b273c8949cc29d2ae680db4453da",
    likes: 12500,
    comments: 390
  },
  {
    id: 7,
    media: "https://videos.pexels.com/video4.mp4",
    profileImg: "https://randomuser.me/api/portraits/men/7.jpg",
    profileName: "Vikram Joshi",
    profilePara: "Night ride again!",
    musicName: "Ilahi - Yeh Jawaani Hai Deewani",
    musicImg: "https://i.scdn.co/image/ab67616d0000b273c8a9c5e7701269234ab1a2b3",
    likes: 9900,
    comments: 260
  },
  {
    id: 8,
    media: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    profileImg: "https://randomuser.me/api/portraits/women/8.jpg",
    profileName: "Divya Kapoor",
    profilePara: "Traveling solo!",
    musicName: "Dil Diyan Gallan",
    musicImg: "https://i.scdn.co/image/ab67616d0000b273a916c7d31665e7b2b9c2b8d3",
    likes: 8700,
    comments: 190
  },
  {
    id: 9,
    media: "https://videos.pexels.com/video5.mp4",
    profileImg: "https://randomuser.me/api/portraits/men/9.jpg",
    profileName: "Nikhil Rao",
    profilePara: "Trying new dance steps!",
    musicName: "Naatu Naatu - RRR",
    musicImg: "https://i.scdn.co/image/ab67616d0000b273670eac385b887bcdd3ac0e8b",
    likes: 34500,
    comments: 890
  },
  {
    id: 10,
    media: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profileImg: "https://randomuser.me/api/portraits/women/10.jpg",
    profileName: "Ananya Singh",
    profilePara: "Coffee date vibes!",
    musicName: "Raabta - Agent Vinod",
    musicImg: "https://i.scdn.co/image/ab67616d0000b273e71df4cf0a1d2b36a0f5a6a7",
    likes: 15800,
    comments: 340
  },
  {
    id: 11,
    media: "https://videos.pexels.com/video6.mp4",
    profileImg: "https://randomuser.me/api/portraits/men/11.jpg",
    profileName: "Harshit Jain",
    profilePara: "Weekend coding grind!",
    musicName: "Apna Bana Le - Bhediya",
    musicImg: "https://i.scdn.co/image/ab67616d0000b273fe45b6c42fbaa2af9ce0eec6",
    likes: 6200,
    comments: 120
  },
  {
    id: 12,
    media: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profileImg: "https://randomuser.me/api/portraits/women/12.jpg",
    profileName: "Pooja Sharma",
    profilePara: "New outfit of the day!",
    musicName: "Param Sundari - Mimi",
    musicImg: "https://i.scdn.co/image/ab67616d0000b273503d17b63eca6ea4b68deeba",
    likes: 14300,
    comments: 380
  },
  {
    id: 13,
    media: "https://videos.pexels.com/video7.mp4",
    profileImg: "https://randomuser.me/api/portraits/men/13.jpg",
    profileName: "Sahil Gupta",
    profilePara: "Riding through Delhi!",
    musicName: "Mirchi - DIVINE",
    musicImg: "https://i.scdn.co/image/ab67616d0000b273eaa7d2e6d26e8ab125e9d1bd",
    likes: 9400,
    comments: 240
  },
  {
    id: 14,
    media: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profileImg: "https://randomuser.me/api/portraits/women/14.jpg",
    profileName: "Tanya Roy",
    profilePara: "Shooting new content!",
    musicName: "Bijlee Bijlee",
    musicImg: "https://i.scdn.co/image/ab67616d0000b273e3fd6cb7a539e6ea0fbadb71",
    likes: 12000,
    comments: 410
  },
  {
    id: 15,
    media: "https://videos.pexels.com/video8.mp4",
    profileImg: "https://randomuser.me/api/portraits/men/15.jpg",
    profileName: "Kabir Singh",
    profilePara: "Boxing practice!",
    musicName: "Sultan Title Track",
    musicImg: "https://i.scdn.co/image/ab67616d0000b2731e5bbfcd508c6f17df0ee06f",
    likes: 7900,
    comments: 150
  },
  {
    id: 16,
    media: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    profileImg: "https://randomuser.me/api/portraits/women/16.jpg",
    profileName: "Nidhi Verma",
    profilePara: "Books + Peace ☕",
    musicName: "Rafta Rafta - Atif Aslam",
    musicImg: "https://i.scdn.co/image/ab67616d0000b273721c6707c805825e7ebf2a16",
    likes: 10500,
    comments: 270
  },
  {
    id: 17,
    media: "https://videos.pexels.com/video9.mp4",
    profileImg: "https://randomuser.me/api/portraits/men/17.jpg",
    profileName: "Aman Yadav",
    profilePara: "Learning skating!",
    musicName: "No Lie - Sean Paul",
    musicImg: "https://i.scdn.co/image/ab67616d0000b273c776e90f8e270b2299dd7c16",
    likes: 6600,
    comments: 130
  },
  {
    id: 18,
    media: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    profileImg: "https://randomuser.me/api/portraits/women/18.jpg",
    profileName: "Shruti Malhotra",
    profilePara: "Beach day 🏖️",
    musicName: "Ocean Eyes - Billie Eilish",
    musicImg: "https://i.scdn.co/image/ab67616d0000b2732eb26e6cfa34ca63b09d2eff",
    likes: 18800,
    comments: 500
  },
  {
    id: 19,
    media: "https://videos.pexels.com/video10.mp4",
    profileImg: "https://randomuser.me/api/portraits/men/19.jpg",
    profileName: "Ravinder Nagar",
    profilePara: "Mountain trekking!",
    musicName: "Chal Ghar Chalen",
    musicImg: "https://i.scdn.co/image/ab67616d0000b2735e0be6bfae52aca5f05d39b9",
    likes: 11300,
    comments: 260
  },
  {
    id: 20,
    media: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
    profileImg: "https://randomuser.me/api/portraits/women/20.jpg",
    profileName: "Simran Kaur",
    profilePara: "Punjabi vibes!",
    musicName: "Excuses - AP Dhillon",
    musicImg: "https://i.scdn.co/image/ab67616d0000b2739e350a1479a42199f1183d10",
    likes: 43000,
    comments: 1020
  }
];

reelsData.forEach((ele) => {
  sum += `
  <div class="reel">

    <!-- Media (image/video) -->
    ${
      ele.media.endsWith(".mp4")
      ? `<video src="${ele.media}" class="reel-img" autoplay muted loop></video>`
      : `<img src="${ele.media}" alt="reel-img" class="reel-img">`
    }

    <div class="user-info">
      <div class="profile">
        <div class="profile1">
          <div class="profile-img">
            <img src="${ele.profileImg}" alt="profile-img">
          </div>

          <h5>
            <span class="profile-name">${ele.profileName}</span>
            <span class="profile-follow"> ⋅ follow </span>
          </h5>
        </div>

        <p class="profile-para">
          ${ele.profilePara.slice(0, 30)} ...more
        </p>

        <div class="profile-music">
          <i class="ri-music-2-fill"></i>
          <p>${ele.musicName}</p>
        </div>
      </div>
    </div>

    <div class="user-details">
      <ul>
        <li class="like">
          <span class="like-icon"><i class="ri-heart-3-line"></i></span>
          <span class="like-count">${ele.likes.toLocaleString()}</span>
        </li>

        <li class="comment">
          <span class="comment-icon"><i class="ri-chat-3-line"></i></span>
          <span class="comment-count">${ele.comments}</span>
        </li>

        <li class="share">
          <span class="share-icon"><i class="ri-send-plane-line"></i></span>
        </li>

        <li class="more">
          <span class="more-icon"><i class="ri-more-line"></i></span>
        </li>
      </ul>
    </div>

    <div class="music-img">
      <img src="${ele.musicImg}" alt="music-img">
    </div>
  </div>
  `;
});

allReel.innerHTML = sum;
