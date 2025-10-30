export const navData={
  "brand": {
    "logo": "/src/assets/logo.png",
    "alt": "Travelo"
  },
  "navLinks": [
    { "name": "Home", "url": "/home" ,"dropdown": false ,"items":null},
    { "name": "About", "url": "/about" ,"dropdown": false ,"items":null},
    { "name": "Destination", "url": "/destination" ,"dropdown": false ,"items":null},
    {
      "name": "Pages",
      "dropdown": true,
      "items": [
        { "name": "Destination Details", "url": "/gallery" },
        { "name": "Elements", "url": "/team" }
      ]
    },
    {
      "name": "Blog",
      "dropdown": true,
      "items": [
        { "name": "Blog ", "url": "/blog" },
        { "name": "Single Blog", "url": "/single" }
      ]
    },
    { "name": "Contact", "url": "/contact" ,"dropdown": false ,"items":null}
  ],
  "contact": {
    "icon": "fa-solid fa-mobile-screen-button",
    "text": "10(256)-928 256"
  },
  "socialIcons": [
    { "platform": "Instagram", "icon": "fa-brands fa-instagram", "url": "/instagram" },
    { "platform": "LinkedIn", "icon": "fa-brands fa-linkedin", "url": "/linkedin" },
    { "platform": "Facebook", "icon": "fa-brands fa-facebook", "url": "/facebook" },
    { "platform": "Google", "icon": "fa-brands fa-google", "url": "/google" }
  ],
  "search": {
    "icon": "fa-solid fa-magnifying-glass",
    "action": "/search"
  }
}

export const section1data=[
  {
    title:"Switzerland",
    description:"Breathe in the Alps, exhale the stress",
    image:"/src/assets/switzerland.jpg",
    alt:"no img found",
    url:"/aus"
  },
  {
    title:"Australia",
    description:"Explore the wild, the wonderful, the unforgettable",
    image:"/src/assets/australia2.jpg",
    alt:"no img found",
    url:"/aus"
  },
  {
    title:"Indonesia",
    description:"Where every island is a new story",
    image:"/src/assets/indonesia.jpg",
    alt:"no img found",
    url:"/aus"
  }
]

export const section3data={
  heading: {
    title: "Popular Places",
    description: "Explore the most loved travel destinations around the globe. Whether you're seeking adventure, relaxation, or rich history, our curated list of popular spots will inspire your next journey"
  },
  card:[
    {img:"/src/assets/cali.jpg",alt:"no img found",state:"California",country:"United State of America",symbol:"fa-solid fa-star"},
    {img:"/src/assets/card4.jpg",alt:"no img found",state:"Miami Beach",country:"Florida",symbol:"fa-solid fa-star"},
    {img:"/src/assets/card3.jpg",alt:"no img found",state:"London",country:"England",symbol:"fa-solid fa-star"},
    {img:"/src/assets/card5.jpg",alt:"no img found",state:"Kuala Lampur",country:"Malaysia",symbol:"fa-solid fa-star"},
    {img:"/src/assets/card2.jpg",alt:"no img found",state:"Korala Megna",country:"United State of America",symbol:"fa-solid fa-star"},
    {img:"/src/assets/card6.jpg",alt:"no img found",state:"Marina Bay",country:"Singapore",symbol:"fa-solid fa-star"}
  ]
}

export const section5data={
  heading: {
    title: "Popular Destination",
    description: "Explore the most loved travel destinations around the globe. Whether you're seeking adventure, relaxation, or rich history, our curated list of popular spots will inspire your next journey"
  },
  card:[
    {img:"/src/assets/cali.jpg",alt:"no img found",state:"California",text:"07 Places"},
    {img:"/src/assets/card4.jpg",alt:"no img found",state:"Miami Beach",text:"03 Places"},
    {img:"/src/assets/card3.jpg",alt:"no img found",state:"London",text:"08 Places"},
    {img:"/src/assets/card5.jpg",alt:"no img found",state:"Kuala Lampur",text:"01 Places"},
    {img:"/src/assets/card2.jpg",alt:"no img found",state:"Korala Megna",text:"04 Places"},
    {img:"/src/assets/card6.jpg",alt:"no img found",state:"Marina Bay",text:"05 Places"}
  ]
}
export const section6data={heading:"Watch video ",src:"/src/assets/video.mp4",alt:"Video could not be played"};

export const section7data=[
  {icon:"fa-solid fa-train", heading:"Comfortable journey",desc:"A wonderful serenity has taken to the possession of my entire soul."},
  {icon:"fa-solid fa-hotel", heading:"Luxuries Hotel",desc:"A wonderful serenity has taken to the possession of my entire soul."},
  {icon:"fa-solid fa-globe", heading:"Travel Guide",desc:"A wonderful serenity has taken to the possession of my entire soul."}
]

export const section8data=[
  {img:"/src/assets/card4.jpg",alt:"no img found",date:"Oct 12, 2019",data:"Journeys Are Best Measured In New Friends"},
  {img:"/src/assets/card3.jpg",alt:"no img found",date:"Oct 12, 2019",data:"Journeys Are Best Measured In New Friends"},
  {img:"/src/assets/card6.jpg",alt:"no img found",date:"Oct 12, 2019",data:"Journeys Are Best Measured In New Friends"},
]

export const footerData={
    title: "TRAVELO",
    description: "5th flora, 700/D kings road, green lane New York-1782 +10 367 826 2567 contact@carpenter.com",
    company: {
        title: "Company",
        links: [{url: "/", label: "Pricing"}, 
            {url: "/", label: "About"}, 
            {url: "/", label: "Gallery"}]
    },
    destination: {
        title: "Popular Destination",
        links: [{url: "/", label: "Indonesia"}, 
            {url: "/", label: "Italy"}, 
            {url: "/", label: "France"},
            {url: "/", label: "India"},
            {url: "/", label: "America"},
            {url: "/", label: "Switzerland"},
            {url: "/", label: "Canada"},
            {url: "/", label: "England"}
          ]
    },
    insta:{
      title:"Instagram",
       links: [{url: "/src/assets/card3.jpg", alt: "no img"}, 
            {url: "/src/assets/card5.jpg", alt: "no img"}, 
            {url: "/src/assets/card2.jpg", alt: "no img"}, 
            {url: "/src/assets/card4.jpg", alt: "no img"}, 
            {url: "/src/assets/card6.jpg", alt: "no img"}, 
            {url: "/src/assets/cali.jpg", alt: "no img"}, 
            
          ]
    },
    copy:"Copyright ©2025 All rights reserved | This template is made with by Colorlib"
}