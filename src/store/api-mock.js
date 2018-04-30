const posts = [
  {
    id: 1,
    imgsrc: 'https://images.unsplash.com/photo-1475439242971-afb6fcc1ba22?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=df117be9270756322e2e7342a932c84b&auto=format&fit=crop&w=700&q=60',
    author: 'Seetha Cattaneo',
    avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
    comments: [
      {
        id: 1,
        author: 'Blerta Capello',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      },
      {
        id: 2,
        author: 'Numitor Ranta',
        text: 'Integer nec odio. Praesent libero. Sed cursus ante dapibus'
      },
      {
        id: 3,
        author: 'Tsisana Putnam',
        text: 'Nulla quis sem at nibh elementum imperdiet.'
      },
      {
        id: 4,
        author: 'Suman Poole',
        text: ' Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.'
      },
      {
        id: 5,
        author: 'Heimirich Motta',
        text: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
      },
      {
        id: 6,
        author: 'Hugleikr Aalders',
        text: 'Curabitur sodales ligula in libero.'
      },
      {
        id: 7,
        author: 'Castor Leonardsson',
        text: 'Wow!'
      },
      {
        id: 8,
        author: 'Alexander Hagen',
        text: 'O-o!'
      },
      {
        id: 9,
        author: 'Anoop Sultana',
        text: 'Sed dignissim lacinia nunc. Curabitur tortor'
      }
    ]
  },
  {
    id: 2,
    imgsrc: 'https://images.unsplash.com/photo-1485670046541-0a355549f9a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af53cac2111506d5a8e5fe39ac4ed21a&auto=format&fit=crop&w=800&q=60',
    author: 'Éimhear Van Alst',
    avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairSides&accessoriesType=Kurt&hairColor=PastelPink&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtScoopNeck&clotheColor=Gray01&eyeType=EyeRoll&eyebrowType=Default&mouthType=Twinkle&skinColor=Brown',
    comments: [
      {
        id: 1,
        author: 'Farran MacNevin',
        text: 'Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. '
      },
      {
        id: 2,
        author: 'Eurydice Crisp',
        text: ' Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.'
      },
      {
        id: 3,
        author: 'Greta Apeldoor',
        text: 'Fusce ac turpis quis ligula lacinia aliquet'
      },
      {
        id: 4,
        author: 'Kateryna Garrard',
        text: ' Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.'
      },
      {
        id: 5,
        author: 'Adam Marušić',
        text: 'Quisque volutpat condimentum velit'
      },
      {
        id: 6,
        author: 'Pinchas Mateev',
        text: 'xD'
      },
      {
        id: 7,
        author: 'Berko Kistner',
        text: 'cool!'
      }
    ]
  },
  {
    id: 3,
    imgsrc: 'https://images.unsplash.com/photo-1522093537031-3ee69e6b1746?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a634781c01d2dd529412c2d1e2224ec0&auto=format&fit=crop&w=800&q=60',
    author: 'Josias Schrader',
    avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Prescription02&hairColor=Brown&facialHairType=BeardMedium&facialHairColor=Black&clotheType=ShirtVNeck&clotheColor=PastelYellow&eyeType=Close&eyebrowType=SadConcerned&mouthType=Smile&skinColor=DarkBrown',
    comments: [
      {
        id: 1,
        author: 'Sita Massey',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      },
      {
        id: 2,
        author: 'Juli Luther',
        text: 'Integer nec odio. Praesent libero. Sed cursus ante dapibus'
      },
      {
        id: 3,
        author: 'Clio Graeme',
        text: 'Nam nec ante..'
      },
      {
        id: 4,
        author: 'Noè Hickey',
        text: 'Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam'
      },
      {
        id: 5,
        author: 'Olympia Alberighi',
        text: 'Nulla facilisi'
      },
      {
        id: 6,
        author: 'Klaudie Crespo',
        text: 'Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.'
      }
    ]
  },
  {
    id: 4,
    imgsrc: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c2e086325efab49ac1c075b97afc495b&auto=format&fit=crop&w=600&q=60',
    author: 'Tod Albuquerque',
    avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Prescription02&hatColor=Red&hairColor=BrownDark&facialHairType=Blank&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=PastelBlue&graphicType=Bat&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=Eating&skinColor=Yellow',
    comments: [
      {
        id: 1,
        author: 'Tegid Fenstermacher',
        text: 'Bu-ga-ga'
      },
      {
        id: 2,
        author: 'Alasdair Chavarria',
        text: 'Vestibulum sapien.'
      },
      {
        id: 3,
        author: 'Darma Dubanowski',
        text: 'Proin quam. Etiam ultrices. '
      },
      {
        id: 4,
        author: 'Hideaki Church',
        text: ' Suspendisse in justo eu magna luctus suscipit.'
      },
      {
        id: 5,
        author: 'Cirillo Mohammed',
        text: 'Per conubia nostra, per inceptos himenaeos.'
      },
      {
        id: 6,
        author: 'Ekundayo Cookson',
        text: 'Sed lectus. Curabitur sodales ligula in libero.'
      },
      {
        id: 7,
        author: 'Jyotsana Waldvogel',
        text: 'Integer euismod lacus luctus magna!'
      },
      {
        id: 8,
        author: 'Valeria Pesce',
        text: 'Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. !'
      },
      {
        id: 9,
        author: 'Alberic Connelly',
        text: 'Curabitur tortor?'
      }
    ]
  },
  {
    id: 5,
    imgsrc: 'https://images.unsplash.com/photo-1521318829160-bfb0d7f8dc42?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=515f01564446c173edefab95bd587249&w=1000&q=80',
    author: 'Kishor Nevin',
    avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat1&accessoriesType=Kurt&hatColor=PastelYellow&facialHairType=BeardMedium&facialHairColor=Brown&clotheType=BlazerSweater&clotheColor=Blue03&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Disbelief&skinColor=Yellow',
    comments: [
      {
        id: 1,
        author: 'Nico Mata',
        text: 'Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam'
      },
      {
        id: 2,
        author: 'Haylie Fleming',
        text: 'Suspendisse in justo eu magna luctus suscipit.'
      },
      {
        id: 3,
        author: 'Jannike Boels',
        text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae'
      },
      {
        id: 4,
        author: 'Preeti Kendrick',
        text: 'Morbi lacinia molestie dui. Praesent blandit dolor. '
      },
      {
        id: 5,
        author: 'Aquila Du',
        text: 'Donec lacus nunc, viverra nec, blandit vel, egestas et,'
      }
    ]
  }
]

const apiCall = (payload) => new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      if (payload.method === 'GET' && payload.count) {
        let postsPreview = JSON.parse(JSON.stringify(posts))

        postsPreview.forEach((post) => {
          post.comments = post.comments.slice(0, payload.count)
        })

        resolve(postsPreview)
      } else if (payload.method === 'GET' && payload.postId) {
        let allPostComments = posts.filter((post) => {
          return post.id === payload.postId
        })
        resolve(allPostComments[0])
      } else if (payload.method === 'POST' && payload.postId) {
        posts.forEach(post => {
          if (post.id === payload.postId) {
            post.comments.push({
              id: Date.now(),
              author: 'you',
              text: payload.userComment
            })
          }
        })

        if (payload.isShownAllComments) {
          let allPostComments = posts.filter((post) => {
            return post.id === payload.postId
          })
          resolve(allPostComments[0])
        } else {
          resolve()
        }
      }
    } catch (err) {
      reject(new Error(err))
    }
  }, 1000)
})

export default apiCall
