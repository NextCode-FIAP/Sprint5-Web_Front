const searchAcademicBooks = async (term) => {
    const encodedTerm = encodeURIComponent(term.trim());
    return await fetch(
        "https://openlibrary.org/search.json?q=" + encodedTerm + "&limit=8"
    );
};

export default searchAcademicBooks;
