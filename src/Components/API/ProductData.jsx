const productData = [
  {
    id: 1,
    save: "SAVE 5%",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CopyofVITCMOIST_360x.jpg?v=1663393087",
    rating: "276",
    name:
      "Vitamin C + E Moisturizer With Sicilian Blood Orange & Vitamin E | Fades Pigmentation & Dark Spots| Oily & Dry Skin| For Skin Glow",
    mrp: "595",
    ourprice: "565"
  },
  {
    id: 2,
    save: "SAVE 10%",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/vitc_360x.jpg?v=1663393830",
    rating: "131",
    name:
      "20% Vitamin C Serum with Blood Orange & Ferulic Acid | For Skin Glow | Fades Pigmentation & Dark Spots | Combination, Oily, Dry Skin",
    mrp: "695",
    ourprice: "625"
  },
  {
    id: 3,
    save: "SAVE 5%",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Copyofcicasunscreen_360x.jpg?v=1663394260",
    rating: "76",
    name:
      "CICA Niacinamide Night Gel  With Green Tea, Tea Tree Oil & Hyaluronic| Reduces Acne & Dark Spots | Oily, Acne Prone & Sensitive Skin",
    mrp: "595",
    ourprice: "565"
  },
  {
    id: 4,
    save: "SAVE 5%",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Copyofcicanightgel_360x.jpg?v=1663393073",
    rating: "182",
    name:
      "10% Niacinamide Face Serum With Zinc I Ultimate Spot Corrector for Acne, Dark Spots & Acne Scars | For Oily, Sensitive, Acne Prone Skin",
    mrp: "495",
    ourprice: "470"
  },
  {
    id: 5,
    save: "SAVE 5%",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/cica_nia_1_360x.jpg?v=1663393895",
    rating: "7",
    name:
      "Retinol  & Ceramide Age Defense Night Cream For Face| Treats Fine Lines & Wrinkles | Mature, Combination, Dry Skin",
    mrp: "599",
    ourprice: "569"
  },
  {
    id: 6,
    save: "SAVE 26%",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Copyofretinol_360x.jpg?v=1663393080",
    rating: "252",
    name:
      "72 HR Hydrating Probiotic Gel Moisturizer For Face With Hyaluronic & Japanese Rice Water | For Healthy, Soft Skin| Normal to Oily Skin",
    mrp: "945",
    ourprice: "695"
  },
  {
    id: 7,
    save: "SAVE 5%",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/cica_cac_1_360x.jpg?v=1663393901",
    rating: "7",
    name:
      "Glow Revealing Vitamin C Face Serum With Hyaluronic & Kakadu Plum | For Skin Glow | Fades Pigmentation & Dark Spots | Oily, Dry, Combination Skin| Beginner Friendly",
    mrp: "399",
    ourprice: "379"
  },
  {
    id: 8,
    save: "",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Copyof72hr_360x.jpg?v=1663392956",
    rating: "282",
    name:
      "Argan Oil Anti Hairfall Shampoo With Moringa & Keratin | Helps Reduce Hair Fall & Breakage | For Silky, Smooth Hair| Dry & Frizzy Hair | 100% Sulphate Free",
    mrp: "745",
    ourprice: "595"
  },
  {
    id: 9,
    save: "SAVE 5%",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Copyofcicacleanser_360x.jpg?v=1663392065",
    rating: "82",
    name:
      "Salicylic & French Green Clay Face Mask With Matcha Tea & CICA | Detoxifies to Reduce Acne, Dark Spots & Blemishes | Oily & Acne Prone Skin",
    mrp: "295",
    ourprice: "280"
  },
  {
    id: 10,
    save: "SAVE 5%",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/waterserum_360x.jpg?v=1663393921",
    rating: "5",
    name:
      "Watermelon Super Glow Vitamin C Face Wash Gel| For Oil Control & Deep Cleansing | Combination & Oily Skin |100% Sulphate Free",
    mrp: "599",
    ourprice: "569"
  },
  {
    id: 11,
    save: "SAVE 10%",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/cicamoistnew_1_360x.jpg?v=1663393066",
    rating: "4",
    name:
      "Pineapple Glow Vitamin C Sleeping Mask With Hyaluronic | For Skin Glow | Fades Pigmentation & Dark Spots | Oily, Dry & Combination Skin",
    mrp: "395",
    ourprice: "355"
  },
  {
    id: 12,
    save: "SAVE 5%",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Copyofwatermelonmoist_360x.jpg?v=1663393032",
    rating: "73",
    name: "Pea Peptide + Cysteine Hair Volumising Serum",
    mrp: "495",
    ourprice: "470"
  },
  {
    id: 13,
    save: "SAVE 10%",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Copyofvitcserum_360x.jpg?v=1663393774",
    rating: "348",
    name:
      "Vitamin C+E Lip Sleeping Mask With Shea Butter, Hyaluronic & Almond Oil | Treats Dry, Pigmented Dark Lips | Cruelty Free",
    mrp: "795",
    ourprice: "715"
  },
  {
    id: 14,
    save: "SAVE 5%",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/barrcream_360x.jpg?v=1663393058",
    rating: "6",
    name:
      "Vitamin C + E Moisturizer With Sicilian Blood Orange & Vitamin E | Fades Pigmentation & Dark Spots| Oily & Dry Skin| For Skin Glow",
    mrp: "395",
    ourprice: "375"
  },
  {
    id: 15,
    save: "SAVE 5%",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Copyofvitcsleepmask_360x.jpg?v=1663394012",
    rating: "304",
    name:
      "20% Vitamin C Serum with Blood Orange & Ferulic Acid | For Skin Glow | Fades Pigmentation & Dark Spots | Combination, Oily, Dry Skin",
    mrp: "625",
    ourprice: "593"
  },
  {
    id: 16,
    save: "",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/facewash_3_360x.jpg?v=1663392059",
    rating: "6",
    name:
      "CICA Niacinamide Night Gel  With Green Tea, Tea Tree Oil & Hyaluronic| Reduces Acne & Dark Spots | Oily, Acne Prone & Sensitive Skin",
    mrp: "",
    ourprice: "295"
  },
  {
    id: 17,
    save: "",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/straw_360x.jpg?v=1663392510",
    rating: "10",
    name:
      "10% Niacinamide Face Serum With Zinc I Ultimate Spot Corrector for Acne, Dark Spots & Acne Scars | For Oily, Sensitive, Acne Prone Skin",
    mrp: "",
    ourprice: "249"
  },
  {
    id: 18,
    save: "SAVE 5%",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Copyofgreenclay_360x.jpg?v=1663392773",
    rating: "512",
    name:
      "Retinol  & Ceramide Age Defense Night Cream For Face| Treats Fine Lines & Wrinkles | Mature, Combination, Dry Skin",
    mrp: "550",
    ourprice: "522"
  },
  {
    id: 19,
    save: "SAVE 5%",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Copyoflipplumping_360x.jpg?v=1663392224",
    rating: "262",
    name:
      "72 HR Hydrating Probiotic Gel Moisturizer For Face With Hyaluronic & Japanese Rice Water | For Healthy, Soft Skin| Normal to Oily Skin",
    mrp: "445",
    ourprice: "422"
  },
  {
    id: 20,
    save: "",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/cherry_360x.jpg?v=1663392491",
    rating: "9",
    name:
      "Glow Revealing Vitamin C Face Serum With Hyaluronic & Kakadu Plum | For Skin Glow | Fades Pigmentation & Dark Spots | Oily, Dry, Combination Skin| Beginner Friendly",
    mrp: "",
    ourprice: "249"
  },
  {
    id: 21,
    save: "SAVE 20%",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Copyofmoringashampoo_360x.jpg?v=1663391723",
    rating: "64",
    name:
      "Argan Oil Anti Hairfall Shampoo With Moringa & Keratin | Helps Reduce Hair Fall & Breakage | For Silky, Smooth Hair| Dry & Frizzy Hair | 100% Sulphate Free",
    mrp: "695",
    ourprice: "556"
  },
  {
    id: 22,
    save: "SAVE 20%",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Copyofbodyscrubv_360x.jpg?v=1663391537",
    rating: "20",
    name: "VITAMIN C AVALON LEMON SUGAR BODY SCRUB",
    mrp: "545",
    ourprice: "436"
  },
  {
    id: 23,
    save: "SAVE 49%",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_23_360x.jpg?v=1662620906",
    rating: "NO",
    name:
      "10% Niacinamide Face Serum With Zinc I Ultimate Spot Corrector for Acne, Dark Spots & Acne Scars | For Oily, Sensitive, Acne Prone Skin",
    mrp: "4877",
    ourprice: "2499"
  },
  {
    id: 24,
    save: "SAVE 25%",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_3_360x.png?v=1663392484",
    rating: "5",
    name: "VITAMIN C AVALON LEMON SUGAR BODY SCRUB",
    mrp: "996",
    ourprice: "749"
  },
  {
    id: 25,
    save: "SAVE 20%",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/MORINGAMASK_1_360x.jpg?v=1663391753",
    rating: "20",
    name:
      "Salicylic & French Green Clay Face Mask With Matcha Tea & CICA | Detoxifies to Reduce Acne, Dark Spots & Blemishes | Oily & Acne Prone Skin",
    mrp: "",
    ourprice: "645"
  },
  {
    id: 26,
    save: "",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/waterlipo_360x.jpg?v=1663392522",
    rating: "7",
    name:
      "Watermelon Super Glow Vitamin C Face Wash Gel| For Oil Control & Deep Cleansing | Combination & Oily Skin |100% Sulphate Free",
    mrp: "",
    ourprice: "249"
  },
  {
    id: 27,
    save: "",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/mango_8f10f236-66b6-45fb-a684-adf7f7f5d28d_360x.png?v=1663392504",
    rating: "20",
    name: "VITAMIN C AVALON LEMON SUGAR BODY SCRUB",
    mrp: "",
    ourprice: "249"
  },
  {
    id: 28,
    save: "SAVE 20%",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Copyofavocado_360x.jpg?v=1663393051",
    rating: "38",
    name: "Pea Peptide + Cysteine Hair Volumising Serum",
    mrp: "",
    ourprice: "645"
  },
  {
    id: 29,
    save: "",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CopyofPEAPEPTIDESERUM_360x.jpg?v=1663391807",
    rating: "31",
    name:
      "Vitamin C+E Lip Sleeping Mask With Shea Butter, Hyaluronic & Almond Oil | Treats Dry, Pigmented Dark Lips | Cruelty Free",
    mrp: "",
    ourprice: "750"
  },
  {
    id: 30,
    save: "SAVE 20%",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CopyofSHAMPOO_360x.jpg?v=1663391825",
    rating: "20",
    name: "VITAMIN C AVALON LEMON SUGAR BODY SCRUB",
    mrp: "545",
    ourprice: "436"
  },
  {
    id: 31,
    save: "SAVE 20%",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/glow-getter_360x.jpg?v=1610086546",
    rating: "20",
    name: "VITAMIN C GLOW GITTER KIT",
    mrp: "2140",
    ourprice: "1699"
  },
  {
    id: 32,
    save: "SAVE 20%",
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Pollution_Acne_360x.jpg?v=1611576921",
    rating: "20",
    name: "ACNE BUSTING KIT - 15ml",
    mrp: "845",
    ourprice: "499"
  }
];

export default productData;
