export interface ReviewSegment {
  text: string
  highlight?: boolean
}

export interface Review {
  id: string
  author: string
  affiliation?: string
  segments: ReviewSegment[]
}

export interface ReviewsConfig {
  rating: number
  googleMapsUrl: string
  rotateInterval: number
}

export const reviewsConfig: ReviewsConfig = {
  rating: 5.0,
  googleMapsUrl:
    'https://www.google.com/maps/place/Boba+Wali/@29.8362815,-95.7908513,10z/data=!3m1!4b1!4m6!3m5!1s0x4237d01ac2e27abd:0xf78c6b7b4c406604!8m2!3d29.836095!4d-95.46119!16s%2Fg%2F11yrz36b5h',
  rotateInterval: 5000,
}

export const reviews: Review[] = [
  {
    id: 'myra-faruki',
    author: 'Myra Faruki',
    affiliation: 'H-Town Aesthetics',
    segments: [
      {
        text: 'Their South Asian–inspired bubble teas were not only unique and flavorful but ',
      },
      { text: 'a total hit with our guests', highlight: true },
      {
        text: '. Every drink was beautifully crafted, perfectly balanced, and incredibly refreshing. Boba Wali is ',
      },
      { text: 'a must', highlight: true },
      { text: '.' },
    ],
  },
  {
    id: 'nida-khan',
    author: 'Nida Khan',
    segments: [
      {
        text: 'Highly recommend Boba Wali! She was very professional, kind, and easy to work with. Everyone loved her drinks and the flavors! ',
      },
      { text: "I'm still dreaming about that cloud chai!!", highlight: true },
    ],
  },
  {
    id: 'nicollette-lopez',
    author: 'Nicollette Lopez',
    segments: [
      {
        text: "The Boba Wali team is incredible!! I booked her for my baby nephew's birthday and ",
      },
      { text: 'she was the guest favorite!', highlight: true },
      { text: ' Every drink was yummy and you get ' },
      { text: 'so much bang for your buck!', highlight: true },
    ],
  },
  {
    id: 'sara-ali',
    author: 'Sara Ali',
    segments: [
      { text: 'We hired Boba Wali for a baby shower and ' },
      {
        text: 'absolutely would recommend her for any event, big or small',
        highlight: true,
      },
      {
        text: '. She even made a custom menu to mention the guests of honor.',
      },
    ],
  },
  {
    id: 'russell-sheikh',
    author: 'Russell Sheikh',
    segments: [
      { text: 'Highly recommend them for providing ' },
      { text: 'a unique twist to boba', highlight: true },
      {
        text: ' for your events! They were super friendly and very professional with their service.',
      },
    ],
  },
]
