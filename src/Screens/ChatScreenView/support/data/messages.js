export default [
  {
    _id: 13,
    text: 'Did you receive your order?',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'Patrioot',
      avatar: 'http://68.183.87.136/storage/media/profile_pics/Logo%20(New%20green)%203.png'
    },
    quickReplies: {
      type: 'radio', // or 'checkbox',
      keepIt: true,
      values: [
        {
          title: 'Yes',
          value: 'YES',
        },
        {
          title:'No',
          value: 'NO',
        },
      ],
    }
  },
  {
    _id: 12,
    text: '#awesome 3',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'Customer',
    },
  },
  {
    _id: 11,
    text: '#awesome 2',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'Customer',
    },
  },
  {
    _id: 10,
    text: '#awesome',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'Customer',
    },
  },
  {
    _id: 9,
    text: 'Paris',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'Patrioot',
      avatar: 'http://68.183.87.136/storage/media/profile_pics/Logo%20(New%20green)%203.png'
    },
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg/280px-Paris_-_Eiffelturm_und_Marsfeld2.jpg',
    sent: true,
    received: true,
  },
  {
    _id: 8,
    text: 'Send me a picture!',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'Customer',
    },
  },
  {
    _id: 7,
    text: 'Store Location',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'Patrioot',
      avatar: 'http://68.183.87.136/storage/media/profile_pics/Logo%20(New%20green)%203.png'
    },
    sent: true,
    received: true,
    location: {
      latitude: 48.864601,
      longitude: 2.398704,
    },
  },
  {
    _id: 6,
    text: 'Delivery Location',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'Patrioot',
      avatar: 'http://68.183.87.136/storage/media/profile_pics/Logo%20(New%20green)%203.png'
    },
    sent: true,
    received: true,
    location: {
      latitude: 48.864601,
      longitude: 2.398704,
    },
  },
  {
    _id: 5,
    text: 'Where are you?',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'Customer',
    },
  },
  {
    _id: 4,
    text: 'Yes, and I use #GiftedChat!',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'Patrioot',
      avatar: 'http://68.183.87.136/storage/media/profile_pics/Logo%20(New%20green)%203.png'
    },
    sent: true,
    received: true,
  },
  {
    _id: 3,
  //  text: 'Are you building a chat app?',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'Customer',
    },
  },
  {
    _id: 2,
    text: 'This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT',
    createdAt: new Date(),
    quickReplies: {
      type: 'radio', // or 'checkbox',
      keepIt: true,
      values: [
        {
          title: '😋 Yes',
          value: 'yes',
        },
        {
          title:
            '📷 Yes, let me show you with a picture! Again let me show you with a picture!',
          value: 'yes_picture',
        },
        {
          title: '😞 Nope. What?',
          value: 'no',
        },
      ],
    },
    user: {
      _id: 2,
      name: 'Patrioot',
      avatar: 'http://68.183.87.136/storage/media/profile_pics/Logo%20(New%20green)%203.png'
    },
  },
  /*{
    _id: 1,
    text: 'This is a quick reply. Do you love Gifted Chat? (checkbox)',
    createdAt: new Date(),
    quickReplies: {
      type: 'checkbox', // or 'checkbox',
      values: [
        {
          title: 'Yes',
          value: 'yes',
        },
        {
          title: 'Yes, let me show you with a picture!',
          value: 'yes_picture',
        },
        {
          title: 'Nope. Whats?',
          value: 'no',
        },
      ],
    },
    user: {
      _id: 2,
      name: 'Patrioot',
    },
  },*/
  /* {
     _id: 30,
     createdAt: new Date(),
     video: 'https://media.giphy.com/media/3o6ZthZjk09Xx4ktZ6/giphy.mp4',
     user: {
       _id: 2,
       name: 'React Native',
     },
   },
   {
     _id: 31,
     createdAt: new Date(),
     audio:
       'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3',
     user: {
       _id: 2,
       name: 'React Native',
     },
   },*/
]
