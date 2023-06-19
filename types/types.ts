export interface Recipe {
  id: number;
  title: string;
  image: string;
  description: string;
}

export interface RecipeCardProps {
  recipe: Recipe;
}

export interface FeaturedRecipesSectionProps {
  recipes: Recipe[];
}
