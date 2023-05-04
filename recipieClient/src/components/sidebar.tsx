import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import {doc, getDoc, getDocs, collection, where, query} from "firebase/firestore"
import { db } from '../lib/firebase';

interface UserProps {
    username: string,
    uid: string,
    following: string[]
    email: string
}

export const Sidebar = () => {
    const [following , setFollowing] = useState<UserProps[]>([]);
    
    useEffect (() =>  {
        const fetchFollows = async () => { 
            const auth = getAuth();
            const user = auth.currentUser;
            const docRef = collection(db, "users");
            const quser = query(docRef, where('uid', '==', user?.uid));
            const docSnap = await getDocs(quser);
            const myuser = docSnap.docs[0].data() as UserProps;
            
            const followids = myuser.following;
            const usersRef = collection(db, "users");
            const q = query(usersRef, where('uid', 'in', followids));
            const snapshot = await getDocs(q);
            const followUsers = snapshot.docs.map(doc => doc.data() as UserProps);
            console.log(followUsers);
            setFollowing(followUsers);
        }
        fetchFollows();
        // console.log(following);
    }, []);

    return (
        <>
            {following.map( followUser => {
                <div key={followUser.uid} className="follow">
                    work?
                </div>
            })};
        </>
    );

}


