import React, {useState, createContext} from "react";


export const context = createContext();

export const ContextProvider = props => {
    const [userData, setUserData] = useState({});
    const [repos, setRepos] = useState({});
    const [starred, setStarred] = useState({});
    const [user, setUser] = useState({});

    return (
        <context.Provider value={{
            userData,
            repos,
            starred,
            user,
            setUserData,
            setRepos,
            setStarred,
            setUser,
        }}>
            {props.children}
        </context.Provider>
    )
}