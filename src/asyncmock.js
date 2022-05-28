const products = [
  {
    id: "1",
    title: "Camiseta Barcelona",
    description:
      "La camiseta del FC Barcelona local Stadium cuenta con una tela muy transpirable para absorber el sudor de la piel mientras animas a tu equipo. Este producto está fabricado al 100% con fibras de poliéster reciclado.",
    price: 10000,
    pictureUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/0518acd2-6e76-469c-b46c-1b930c28bbfd/jersey-de-f%C3%BAtbol-del-fc-barcelona-local-2021-22-stadium-T9vlrx.png",
    category: "futbol",
  },
  {
    id: "2",
    title: "Camiseta PSG",
    description:
      "La Camiseta Nike PSG 2021/22 Stadium Home es la que utilizan Mbappé, Neymar y todo el equipo cuando juegan de local. Este producto está hecho con una tela de microfibra y cuenta con tecnología Dri-FIT para una evaporación más rápida, ayudándote a mantenerte seco y cómodo.",
    price: 10000,
    pictureUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c5f3188b-ce0e-4d59-96b3-b8e60258093a/paris-saint-germain-2021-22-stadium-home-camiseta-de-futbol-MvxWKP.png",
    category: "futbol",
  },
  {
    id: "3",
    title: "Camiseta Lakers",
    description:
      "La camiseta Icon Edition representa el legado y la identidad emblemática de la franquicia, expresados mediante el llamativo color principal del equipo. La camiseta Nike NBA Swingman Icon Edition de Los Angeles Lakers se inspira en el look que llevan los profesionales. El tejido premium de doble punto tiene un estilo clásico y un corte perfecto desde cualquier ángulo.",
    price: 9000,
    pictureUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/884b3cb9-1716-45d3-a7ba-289fae30a14d/camiseta-nba-swingman-lakers-icon-edition-2020-hH6KpH.png",
    category: "basketball",
  },
  {
    id: "4",
    title: "Knicks",
    description: "Camiseta de New York Knicks.",
    price: 9000,
    pictureUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/9561d0b2-a8fd-469e-81a9-cbe0df449950/camiseta-nba-swingman-rj-barrett-knicks-icon-edition-2020-gxdwkz.png",
    category: "basketball",
  },
  {
    id: "5",
    title: "Canadá",
    description: "Camiseta de Canada.",
    price: 8000,
    pictureUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/70bfebef-15e2-43ca-8443-6aec0981a561/camiseta-de-hockey-canad%C3%A1-08XK7H.png",
    category: "hockey",
  },
  {
    id: "6",
    title: "Michigan",
    description: "Camiseta de Michigan.",
    price: 8000,
    pictureUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/e2e23d84-a74b-429b-aa19-acd00de1d83c/camiseta-de-f%C3%BAtbol-americano-edici%C3%B3n-limitada-college-michigan-CKGVQM.png",
    category: "hockey",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id));
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};
