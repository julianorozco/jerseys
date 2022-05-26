const products = [
  {
    id: 1,
    title: "Barcelona",
    description: "Camiseta de Fútbol Club Barcelona.",
    price: 3500,
    pictureUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/0518acd2-6e76-469c-b46c-1b930c28bbfd/jersey-de-f%C3%BAtbol-del-fc-barcelona-local-2021-22-stadium-T9vlrx.png",
    category: "Futbol",
  },
  {
    id: 2,
    title: "PSG",
    description: "Camiseta de París Saint-Germain.",
    price: 3500,
    pictureUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/b551bb21-efc5-4448-a1a9-c840f99a173d/playera-de-f%C3%BAtbol-dri-fit-paris-saint-germain-kylian-mbappe-sQ82SF.png",
    category: "Futbol",
  },
  {
    id: 3,
    title: "Lakers",
    description: "Camiseta de Los Angeles Lakers.",
    price: 4000,
    pictureUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/884b3cb9-1716-45d3-a7ba-289fae30a14d/camiseta-nba-swingman-lakers-icon-edition-2020-hH6KpH.png",
    category: "Basketball",
  },
  {
    id: 4,
    title: "Knicks",
    description: "Camiseta de New York Knicks.",
    price: 4000,
    pictureUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/9561d0b2-a8fd-469e-81a9-cbe0df449950/camiseta-nba-swingman-rj-barrett-knicks-icon-edition-2020-gxdwkz.png",
    category: "Basketball",
  },
  {
    id: 5,
    title: "Canadá",
    description: "Camiseta de Canada.",
    price: 3000,
    pictureUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/70bfebef-15e2-43ca-8443-6aec0981a561/camiseta-de-hockey-canad%C3%A1-08XK7H.png",
    category: "Hockey",
  },
  {
    id: 6,
    title: "Michigan",
    description: "Camiseta de Michigan.",
    price: 3000,
    pictureUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/e2e23d84-a74b-429b-aa19-acd00de1d83c/camiseta-de-f%C3%BAtbol-americano-edici%C3%B3n-limitada-college-michigan-CKGVQM.png",
    category: "Hockey",
  },
];


export const getProducts = () => {
return new Promise((resolve) => {
   setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getItem = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products[0]);
    }, 2000);
  });
};