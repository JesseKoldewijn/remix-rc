const structure = {
  id: 0,
  name: "Some product name",
  price: 0,
  image: {
    mobile: {
      src: "Some image source",
      alt: "Some image alt",
    },
    desktop: {
      src: "Some image source",
      alt: "Some image alt",
    },
  },
  description: "Some description",
  category: [] as ("Clothing" | "Accessories" | "Home")[],
  rating: 5,
};

export type ListerData = typeof structure;

export const generateListerData = (count = 10) => {
  const data: ListerData[] = [];
  for (let i = 0; i < count; i++) {
    const keys = Object.keys(structure) as (keyof typeof structure)[];
    const item = {} as { [key: string]: any };
    for (const key of keys) {
      if (key === "image") {
        item[key] = {
          mobile: {
            src: `https://placehold.co/300x200?text=${i}`,
            alt: `Image ${i}`,
          },
          desktop: {
            src: `https://placehold.co/600x400?text=${i}`,
            alt: `Image ${i}`,
          },
        };
      } else if (key === "category") {
        const allKeys = ["Clothing", "Accessories", "Home"];
        const random = Math.floor(Math.random() * allKeys.length) + 1;
        const randomValues = allKeys.slice(0, random);
        const randomIndex = Math.floor(Math.random() * randomValues.length);
        item[key] = randomValues[randomIndex];
      } else if (key === "price") {
        item[key] = Math.floor(Math.random() * 1000) + 1;
      } else if (key === "rating") {
        item[key] = Math.floor(Math.random() * 5) + 1;
      } else {
        item[key] = `${structure[key as keyof typeof structure]} ${i}`;
      }
    }
    data.push(item as ListerData);
  }
  return data;
};
