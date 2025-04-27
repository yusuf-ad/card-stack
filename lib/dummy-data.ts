export const dummyMeals = [
  {
    id: "1",
    cuisine: "Italian",
    title: "Spaghetti Carbonara",
    description:
      "Classic Roman pasta dish with eggs, cheese, pancetta, and pepper.",
    details: "30 min | ~600 kcal | Contains Gluten | High Protein",
    rating: 4,
    imageUri:
      "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-threeByTwoMediumAt2X-v2.jpg?quality=75&auto=webp",
  },
  {
    id: "2",
    cuisine: "Mexican",
    title: "Camarones A La Diabla",
    description:
      "Spicy Mexican shrimp dish, perfect for a quick and flavorful meal.",
    details: "25 min | ~350 kcal | Spicy | High Protein",
    rating: 5,
    imageUri:
      "https://www.seriouseats.com/thmb/AKv7r-Xt2anoVvsn0WpLqUehNzU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chicken-tikka-masala-for-the-grill-recipe-hero-2_1-cb493f49e30140efbffec162d5f2d1d7.JPG",
  },
  {
    id: "3",
    cuisine: "Indian",
    title: "Chicken Tikka Masala",
    description: "Creamy and flavorful curry with grilled chicken chunks.",
    details: "45 min | ~550 kcal | Contains Dairy | Medium Spice",
    rating: 4,
    imageUri:
      "https://cdn.usegalileo.ai/screenshots/046ff55c-2dee-4265-a8dd-3c468d63245d.webp",
  },
  {
    id: "4",
    cuisine: "Vegan",
    title: "Lentil Shepherd's Pie",
    description:
      "Hearty and comforting vegan version of the classic shepherd's pie.",
    details: "60 min | ~450 kcal | Vegan | Gluten-Free Option",
    rating: 3,
    imageUri:
      "https://cdn.loveandlemons.com/wp-content/uploads/2020/11/shepherds-pie.jpg",
  },
  {
    id: "5",
    cuisine: "Japanese",
    title: "Sushi Platter",
    description: "Assortment of fresh sushi rolls and nigiri.",
    details: "40 min | ~400 kcal | Contains Fish | Pescatarian",
    rating: 5,
    imageUri:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VzaGl8ZW58MHx8MHx8&w=1000&q=80",
  },
].reverse(); // Reverse so the last item (index 4) is rendered on top initially
