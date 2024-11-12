import { useState, useEffect } from "react";

export const AdminFetch = (URL) => {
    const [dataAdmin, setData] = useState("");
    const [loading, setLoading] = useState(true);
    // /profile/${id}
    const url = `http://localhost:8080/api/admin${URL}`;

    const fetchDataByBackend = async () => {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            const result = await response.json();
            setData(result);
            setLoading(false);
        } catch (error) {
            console.log("server error " + " " + error);
        }
    }


    useEffect(() => {
        fetchDataByBackend();
    }, [URL])


    return { dataAdmin, loading };
}
