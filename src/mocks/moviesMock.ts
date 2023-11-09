import { MovieStructure } from "../store/features/movies/types";

const moviesMock: MovieStructure[] = [
  {
    id: 1,
    title: "The Exorcist (1973)",
    director: "William Friedkin",
    image: "https://i.ibb.co/JzTDFp0/1.jpg",
    isWatched: true,
  },
  {
    id: 2,
    title: "The Texas Chain Saw Massacre (1974)",
    director: "Tobe Hooper",
    image: "https://i.ibb.co/KXfZYpc/2.jpg",
    isWatched: false,
  },
];

export default moviesMock;
