import { Leaf, Wheat } from "lucide-react";

interface MenuItemProps {
  name: string;
  description?: string;
  price: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
  isGlutenFree?: boolean;
}

export function MenuItem({
  name,
  description,
  price,
  isVegetarian,
  isVegan,
  isGlutenFree,
}: MenuItemProps) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-border py-4 last:border-0">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-foreground">{name}</h3>
          <div className="flex gap-1">
            {isVegetarian && (
              <span className="rounded-full bg-accent/20 p-1" title="Vegetarian">
                <Leaf className="h-3 w-3 text-accent" />
              </span>
            )}
            {isVegan && (
              <span className="rounded-full bg-accent/30 p-1" title="Vegan">
                <Leaf className="h-3 w-3 text-accent" />
              </span>
            )}
            {isGlutenFree && (
              <span className="rounded-full bg-primary/10 p-1" title="Gluten-Free">
                <Wheat className="h-3 w-3 text-primary" />
              </span>
            )}
          </div>
        </div>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <span className="font-serif font-semibold text-primary">{price}</span>
    </div>
  );
}
