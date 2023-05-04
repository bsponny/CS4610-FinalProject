import React, { useEffect, useState } from 'react';
import '../App.css';
import { Recipe , RecipeProps} from '../components/recipe';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

export const Book = () => {
  const blank = {
    recipeName: '',
    chefName: '',
    servingSize: 0,
    ingredients: [],
    directions: [],
    comments: [],
    userId: '' 
  }
  
  useEffect(() => {
    const fetchRecipes = async () => {
      const recipesRef = collection(db, "recipes");
      const snapshot = await getDocs(recipesRef);
      const recipes = snapshot.docs.map(doc => doc.data() as RecipeProps);
      setRecipeList(recipes);
      setRecipe1(recipes[0]);
      setRecipe2(recipes[1]);
    };
    fetchRecipes();
  }, []);

  const [currentPage, setCurrentPage] = useState(0);
  const [recipeList, setRecipeList] = useState<RecipeProps[]>([]);
  const [recipe1, setRecipe1] = useState<RecipeProps>(blank);
  const [recipe2, setRecipe2] = useState<RecipeProps>(blank);


  useEffect(() => {
    if (currentPage + 1 > recipeList.length){
      setRecipe1(recipeList[currentPage]);
      setRecipe2(blank);
    }
    else {
      setRecipe1(recipeList[currentPage]);
      setRecipe2(recipeList[currentPage + 1]);
    }
  }, [currentPage])

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 2);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 2);
  };

  return (
    <div className='book'>
        <div className="left">
          {currentPage > 0 && (
            <button onClick={handlePrevPage} className='prevPage'>Previous Page</button>
          )}
          <Recipe {...recipe1}/>
        </div>
        <div className="right">
          {currentPage < recipeList.length - 2 && (
            <button onClick={handleNextPage}>Next Page</button>
          )}
          <Recipe {...recipe2}/>
        </div>
    </div>
  );
};

