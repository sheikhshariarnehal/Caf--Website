import { Layout } from "@/components/Layout";
import { MenuItem } from "@/components/MenuItem";
import { Leaf, Wheat } from "lucide-react";

const breakfastItems = [
  { name: "Classic Avocado Toast", description: "Smashed avocado on sourdough with cherry tomatoes", price: "$12", isVegetarian: true },
  { name: "Eggs Benedict", description: "Poached eggs, hollandaise sauce on English muffin", price: "$14" },
  { name: "Overnight Oats", description: "Steel-cut oats with berries, honey, and almonds", price: "$9", isVegan: true, isGlutenFree: true },
  { name: "Breakfast Burrito", description: "Scrambled eggs, cheese, beans, and fresh salsa", price: "$13", isVegetarian: true },
  { name: "French Toast", description: "Brioche bread with maple syrup and fresh berries", price: "$11", isVegetarian: true },
  { name: "Granola Bowl", description: "House-made granola with yogurt and seasonal fruit", price: "$10", isVegetarian: true },
];

const lunchItems = [
  { name: "Grilled Chicken Sandwich", description: "Free-range chicken, arugula, aioli on ciabatta", price: "$15" },
  { name: "Mediterranean Salad", description: "Mixed greens, feta, olives, cucumber, lemon vinaigrette", price: "$13", isVegetarian: true, isGlutenFree: true },
  { name: "Soup of the Day", description: "Chef's daily creation with crusty bread", price: "$8" },
  { name: "Veggie Wrap", description: "Hummus, grilled vegetables, spinach in whole wheat wrap", price: "$12", isVegan: true },
  { name: "Turkey Club", description: "Smoked turkey, bacon, lettuce, tomato on toasted sourdough", price: "$14" },
  { name: "Quinoa Power Bowl", description: "Quinoa, roasted vegetables, tahini dressing", price: "$14", isVegan: true, isGlutenFree: true },
];

const drinkItems = [
  { name: "Espresso", description: "Single or double shot of our signature blend", price: "$3.50" },
  { name: "Cappuccino", description: "Espresso with steamed milk and thick foam", price: "$5" },
  { name: "Latte", description: "Espresso with velvety steamed milk", price: "$5.50" },
  { name: "Cold Brew", description: "12-hour steeped coffee, smooth and bold", price: "$5" },
  { name: "Matcha Latte", description: "Ceremonial grade matcha with oat milk", price: "$6", isVegan: true },
  { name: "Chai Tea Latte", description: "Spiced black tea with steamed milk", price: "$5", isVegetarian: true },
  { name: "Fresh Juice", description: "Orange, apple, or seasonal blend", price: "$6", isVegan: true, isGlutenFree: true },
  { name: "Hot Chocolate", description: "Rich Belgian chocolate with whipped cream", price: "$5", isVegetarian: true },
];

const dessertItems = [
  { name: "Chocolate Cake", description: "Rich layers with ganache frosting", price: "$7", isVegetarian: true },
  { name: "Carrot Cake", description: "Classic recipe with cream cheese frosting", price: "$6.50", isVegetarian: true },
  { name: "Vegan Brownie", description: "Fudgy chocolate brownie", price: "$5", isVegan: true, isGlutenFree: true },
  { name: "Croissant", description: "Butter croissant, plain or chocolate", price: "$4", isVegetarian: true },
  { name: "Seasonal Fruit Tart", description: "Fresh pastry cream and seasonal fruits", price: "$7", isVegetarian: true },
];

export default function Menu() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Our Menu
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Crafted with love using the finest ingredients. From morning pick-me-ups to afternoon indulgences.
          </p>
          {/* Legend */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-accent/20 p-1">
                <Leaf className="h-3 w-3 text-accent" />
              </span>
              <span className="text-sm text-muted-foreground">Vegetarian/Vegan</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-primary/10 p-1">
                <Wheat className="h-3 w-3 text-primary" />
              </span>
              <span className="text-sm text-muted-foreground">Gluten-Free</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Breakfast */}
            <div className="rounded-lg bg-card p-6 shadow-sm md:p-8">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Breakfast
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Served until 11:30am
              </p>
              <div className="mt-6">
                {breakfastItems.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
              </div>
            </div>

            {/* Lunch */}
            <div className="rounded-lg bg-card p-6 shadow-sm md:p-8">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Lunch
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Served from 11am
              </p>
              <div className="mt-6">
                {lunchItems.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
              </div>
            </div>

            {/* Drinks */}
            <div className="rounded-lg bg-card p-6 shadow-sm md:p-8">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Drinks
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                All day, every day
              </p>
              <div className="mt-6">
                {drinkItems.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
              </div>
            </div>

            {/* Desserts */}
            <div className="rounded-lg bg-card p-6 shadow-sm md:p-8">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Desserts
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Freshly baked daily
              </p>
              <div className="mt-6">
                {dessertItems.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <p className="mt-12 text-center text-sm text-muted-foreground">
            Menu last updated: January 2025
          </p>
        </div>
      </section>
    </Layout>
  );
}
