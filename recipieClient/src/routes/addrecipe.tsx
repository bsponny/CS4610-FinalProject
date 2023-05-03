import React, { useState } from 'react';
import '../App.css';


export const Add = () => {

    const [recipeName, setRecipeName] = useState('');
    const [chefName, setChefName] = useState('');
    const [numServings, setNumServings] = useState(1);
    const [ingredientList, setIngredientList] = useState(['']);
    const [directionsList, setDirectionsList] = useState(['']);
    
    const handleSubmit = (event :any) => {
        event.preventDefault();
        // handle form submission here
        console.log('Recipe name:', recipeName);
        console.log('Chef name:', chefName);
        console.log('Number of servings:', numServings);
        console.log('Ingredient list:', ingredientList);
        console.log('Directions list:', directionsList);
    }
    
    const handleAddIngredient = () => {
        setIngredientList([...ingredientList, '']);
    }
    
    const handleAddDirection = () => {
        setDirectionsList([...directionsList, '']);
    }
    
    const handleIngredientChange = (event :any, index : number) => {
        const newList = [...ingredientList];
        newList[index] = event.target.value;
        setIngredientList(newList);
    }
    
    const handleDirectionChange = (event:any, index: number) => {
        const newList = [...directionsList];
        newList[index] = event.target.value;
        setDirectionsList(newList);
    }
    
    const handleRemoveIngredient = (index:number) => {
        const newList = [...ingredientList];
        newList.splice(index, 1);
        setIngredientList(newList);
      }
    
      const handleRemoveDirection = (index:number) => {
        const newList = [...directionsList];
        newList.splice(index, 1);
        setDirectionsList(newList);
      }

    return (
        <div className= 'book'>
            <div className='add-recipe'>
                <h1>Add a Recipe!!!</h1>
                <form onSubmit={handleSubmit}>
                <label htmlFor="recipe-name">Recipe Name:</label>
                <input
                    type="text"
                    id="recipe-name"
                    name="recipe-name"
                    required
                    value={recipeName}
                    onChange={(event) => setRecipeName(event.target.value)}
                /><br />
            
                <label htmlFor="chef-name">Chef Name:</label>
                <input
                    type="text"
                    id="chef-name"
                    name="chef-name"
                    required
                    value={chefName}
                    onChange={(event) => setChefName(event.target.value)}
                /><br />
            
                <label htmlFor="num-servings">Number of Servings:</label>
                <input
                    type="number"
                    id="num-servings"
                    name="num-servings"
                    min="1"
                    required
                    value={numServings}
                    onChange={(event) => setNumServings(parseInt(event.target.value))}
                />
            
                <label htmlFor="ingredient-list"><h3>Ingredient List:</h3></label>
                {ingredientList.map((ingredient, index) => (
                    <div key={index}>
                    <input
                        type="text"
                        name={`ingredient-${index}`}
                        value={ingredient}
                        onChange={(event) => handleIngredientChange(event, index)}
                    />
                    {index === ingredientList.length - 1 && (
                        <>
                            <button type="button" onClick={handleAddIngredient}>+</button>
                            {index !== 0 && (
                                <button type="button" onClick={() => handleRemoveIngredient(index)}>−</button>
                            )}
                        </>
                        )}
                    </div>
                ))}

            
                <label htmlFor="directions-list"><h3>Directions List:</h3></label>
                {directionsList.map((direction, index) => (
                    <div key={index}>
                    <input className='directions'
                        type="text"
                        name={`direction-${index}`}
                        value={direction}
                        onChange={(event) => handleDirectionChange(event, index)}
                    />
                    {index === directionsList.length - 1 && (
                        <>
                            <button type="button" onClick={handleAddDirection}>+</button>
                            {index !== 0 && (
                                <button type="button" onClick={() => handleRemoveDirection(index)}>−</button>
                            )}
                        </>
                    )}
                    </div>
                ))}
                <br />
                <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};