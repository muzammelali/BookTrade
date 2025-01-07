export const data = [
  {
    id: crypto.randomUUID(),
    cover: "Funny Story.jpeg",
    title: "Funny Story",
    description:
      "A heartfelt and witty exploration of love and self-discovery set against the backdrop of a vibrant, romantic world.",
    genre: "Romance",
    rating: 4,
    price: 29,
  },
  {
    id: crypto.randomUUID(),
    cover: "The Women .jpeg",
    title: "The Women",
    description:
      "An evocative historical tale capturing the struggles and triumphs of women during pivotal moments in history.",
    genre: "Historical Fiction",
    rating: 3,
    price: 90,
  },
  {
    id: crypto.randomUUID(),
    cover: "Just for the Summer .jpeg",
    title: "Just for the Summer",
    description:
      "A delightful romantic comedy about unexpected love and finding joy in the little things.",
    genre: "Romance",
    rating: 5,
    price: 25,
  },
  {
    id: crypto.randomUUID(),
    cover: "Wind and Truth.jpeg",
    title: "Wind and Truth",
    description:
      "A spellbinding fantasy epic filled with intrigue, magic, and the quest for ultimate truth.",
    genre: "Fantasy",
    rating: 4,
    price: 40,
  },
  {
    id: crypto.randomUUID(),
    cover: "A-Court-of-Thorns-and-Roses.jpeg",
    title: "A Court of Thorns and Roses",
    description:
      "A lush, imaginative retelling of classic fairy tales with a dark and seductive twist.",
    genre: "Fantasy",
    rating: 2,
    price: 19,
  },
];

export function getAllBooks() {
  return data;
}
