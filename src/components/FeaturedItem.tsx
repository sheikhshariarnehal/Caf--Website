interface FeaturedItemProps {
  image: string;
  title: string;
  description: string;
}

export function FeaturedItem({ image, title, description }: FeaturedItemProps) {
  return (
    <div className="group overflow-hidden rounded-lg bg-card shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
