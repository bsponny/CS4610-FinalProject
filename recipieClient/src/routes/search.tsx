import { useState, useEffect, SetStateAction } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../lib/firebase';

interface User {
    username: string;
    uid: string;
}

export const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<User[]>([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            if(searchQuery.trim() !== ""){
                const usersRef = collection(db, "users");
                const q = query(usersRef, where("username", ">=", searchQuery));
                const snapshot = await getDocs(q);
                const results = snapshot.docs.map((doc) => doc.data() as User);
                setSearchResults(results);
            }
            else{
                setSearchResults([]);
            }
        };
        fetchSearchResults();
    }, [searchQuery]);

    const handleSearchQueryChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSearchQuery(event.target.value);
    }

    return(
        <div className="book">
            <div className="add-recipe">
                <h2>Search for Users</h2>
                <form>
                    <label htmlFor="searchQuery">Username: </label>
                    <input
                        type="text"
                        id="searchQuery"
                        value={searchQuery}
                        onChange={handleSearchQueryChange}
                    />
                </form>
                {searchResults.length > 0 ? (
                    <ul>
                        {searchResults.map((user) => (
                            <li key={user.uid}>{user.username}</li>
                        ))}
                    </ul>
                ) : (
                    <p></p>
                )}
            </div>
        </div>
    )
}