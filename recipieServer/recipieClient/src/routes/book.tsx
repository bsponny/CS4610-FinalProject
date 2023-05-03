import React, { useState } from 'react';
import '../App.css';
import { Recipe , RecipeProps} from '../components/recipe';

export const Book = () => {
  
  const [currentPage, setCurrentPage] = useState(0);
  const [recipe1, setrecipe1] = useState<RecipeProps>();
  const [recipe2, setrecipe2] = useState<RecipeProps>();

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className='book'>
        <div className="left">
          <Recipe 
            title = {'Spaghetti and Meatballs'}
            chefName = {'Giada De Laurentiis'}
            servingSize = {4}
            ingredients = {['1 pound spaghetti', '1 pound ground beef', '1 cup bread crumbs', '2 cloves garlic, minced']}
            directions = {['Cook spaghetti according to package instructions', 'Mix beef, bread crumbs, garlic, and salt and pepper', 'Form into meatballs and cook in a pan', 'Serve meatballs on top of spaghetti']}
            comments = {['This recipe is amazing!', 'I added some Parmesan cheese and it was even better','Oh definitely Parmesan a must have!','lorem ipsum bruh','lorem ipsum bruh','lorem ipsum bruh','lorem ipsum bruh','lorem ipsum bruh','lorem ipsum bruh','lorem ipsum bruh','lorem ipsum bruh','lorem ipsum bruh','lorem ipsum bruh','lorem ipsum bruh','lorem ipsum bruh','lorem ipsum bruh','lorem ipsum bruh','lorem ipsum bruh','lorem ipsum bruh']}
          />

        </div>
        <div className="right">
          RIGHT!
        </div>
    </div>
  );
};

