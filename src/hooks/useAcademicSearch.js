import { useState } from "react";
import searchAcademicBooks from "../services/academicApi.js";

const useAcademicSearch = () => {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const search = async (event) => {
        event.preventDefault();

        if (!query.trim()) {
            setBooks([]);
            setErrorMessage("Digite um tema para buscar livros.");
            return;
        }

        setLoading(true);
        setErrorMessage("");
        setBooks([]);

        try {
            const response = await searchAcademicBooks(query);

            if (!response.ok) {
                setErrorMessage(
                    "A busca está indisponível no momento. Tente novamente."
                );
                return;
            }

            const data = await response.json();

            if (Array.isArray(data.docs)) {
                setBooks(data.docs);
            } else {
                setErrorMessage(
                    "A busca não retornou resultados em um formato esperado."
                );
            }
        } catch {
            setErrorMessage(
                "Não foi possível conectar à busca. Verifique sua conexão."
            );
        } finally {
            setLoading(false);
        }
    };

    return [query, setQuery, books, loading, errorMessage, search];
};

export default useAcademicSearch;
