import Axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { url } from "../../constant";
import { useGet } from "../../hooks/useGet";
import { clasifications } from "./const";

export const SearchContext = createContext({
    search: "",
    post: [],
    clasification: [],
    toggleClasification: () => {},
    fetchData: () => {},
    handleChange: () => {},
});

export const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    const [post, setPosts] = useState([]);
    const [clasification, setClasification] = useState(clasifications);
    useEffect(() => {
        Axios.get(`${url}/api/v1/posts/`).then(({ data }) => {
            if (data.error) {
                throw new Error("");
            }
            setPosts(data);
        });
    });
    async function fetchData() {
        try {
            const { data } = await Axios.get(
                `${url}/api/v1/posts/search/${search}`
            );
            if (data.error) {
                throw new Error(data.message);
            }
            console.log(data);
            setPosts(() => data);
        } catch (error) {}
    }
    function handleChange(text) {
        setSearch(text);
    }
    function toggleClasification(item) {
        setClasification((prev) => [
            ...prev.map((clasification) => {
                if (clasification.key === item.key) {
                    return {
                        ...clasification,
                        selected: !item.selected,
                    };
                }
                return clasification;
            }),
        ]);
    }
    function fetchData() {}
    return (
        <SearchContext.Provider
            value={{
                fetchData,
                toggleClasification,
                search,
                post,
                clasification,
                handleChange,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};
