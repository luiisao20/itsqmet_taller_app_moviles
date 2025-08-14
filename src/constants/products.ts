export interface Product {
  id?: number;
  name: string;
  category:
    | "Action"
    | "Adventure"
    | "RPG"
    | "Shooter"
    | "Sports"
    | "Racing"
    | "Simulation"
    | "Strategy"
    | "Horror"
    | "Platformer";
  price: number;
  discount: number;
  pathImage: string;
  available: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "The Legend of Zelda: Tears of the Kingdom",
    category: "Adventure",
    price: 69.99,
    discount: 0.10,
    available: true,
    pathImage:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg/250px-The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg",
  },
  {
    id: 2,
    name: "Call of Duty: Modern Warfare III",
    category: "Shooter",
    price: 59.99,
    discount: 0.15,
    available: true,
    pathImage:
      "https://store-images.s-microsoft.com/image/apps.55183.13612848337674936.f9e71e15-6765-4282-8a3d-968dccfb729c.f59acc22-2c7b-41fb-96ca-d173dc290712",
  },
  {
    id: 3,
    name: "FIFA 25",
    category: "Sports",
    price: 49.99,
    discount: 0.20,
    available: true,
    pathImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf1HWC8pz78_XortwWT0FmBdFLRq79M37SyQ&s",
  },
  {
    id: 4,
    name: "Forza Horizon 6",
    category: "Racing",
    price: 59.99,
    discount: 0.5,
    available: false,
    pathImage:
      "https://static.wikia.nocookie.net/fantendo/images/f/f9/Forza-Horizon-6-Wallpaper.jpg/revision/latest/scale-to-width-down/1900?cb=20241018221700",
  },
  {
    id: 5,
    name: "Resident Evil 9",
    category: "Horror",
    price: 69.99,
    discount: 0.10,
    available: true,
    pathImage:
      "https://m.media-amazon.com/images/M/MV5BYzI5YTc2MzgtZDQ4NC00NjQ2LThkZTUtYTlhMTA0YWM0ZDEzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 6,
    name: "Final Fantasy VII",
    category: "RPG",
    price: 69.99,
    discount: 0,
    available: false,
    pathImage:
      "https://m.media-amazon.com/images/I/81zNq74N2pL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 7,
    name: "Animal Crossing: New Horizons",
    category: "Simulation",
    price: 49.99,
    discount: 0.5,
    available: true,
    pathImage:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Animal_Crossing_New_Horizons.jpg/250px-Animal_Crossing_New_Horizons.jpg",
  },
  {
    id: 8,
    name: "Super Mario Odyssey 2",
    category: "Platformer",
    price: 59.99,
    discount: 0.10,
    available: true,
    pathImage:
      "https://preview.redd.it/how-would-you-like-a-mario-odyssey-2-to-look-like-v0-jbtxth284iie1.jpeg?auto=webp&s=9ddaaf99517d392186ab709ec410822d6cb81bc8",
  },
  {
    id: 9,
    name: "Civilization VII",
    category: "Strategy",
    price: 39.99,
    discount: 0.25,
    available: false,
    pathImage:
      "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9798886637908/sid-meiers-civilization-vii-the-official-journal-9798886637908_hr.jpg",
  },
  {
    id: 10,
    name: "God of War: Ragnarök",
    category: "Action",
    price: 69.99,
    discount: 0.15,
    available: true,
    pathImage:
      "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$800px--t$",
  },
];
