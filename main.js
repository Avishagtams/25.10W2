//PART1
class MediaItem {
    #title;
    #year;
    #genre;

    constructor(title, year, genre) {
        this.#title = title;
        this.#year = year;
        this.#genre = genre;
    }

    getTitle() {
        return this.#title;
    }

    getYear() {
        return this.#year;
    }

    getGenre() {
        return this.#genre;
    }

    getSummary() {
        return `${this.#title} (${this.#year}) - Genre: ${this.#genre}`;
    }
}

class Book extends MediaItem {
    #author;
    #pageCount;

    constructor(title, author, year, genre, pageCount) {
        super(title, year, genre); 
        this.#author = author;
        this.#pageCount = pageCount;
    }

    getSummary() {
        return `Book: '${this.getTitle()}' by ${this.#author}, ${this.#pageCount} pages`;
    }
}

class Movie extends MediaItem {
    #director;
    #durationMinutes;

    constructor(title, director, year, genre, durationMinutes) {
        super(title, year, genre); 
        this.#director = director;
        this.#durationMinutes = durationMinutes;
    }

    getSummary() {
        return `Movie: '${this.getTitle()}' directed by ${this.#director}, ${this.#durationMinutes} min`;
    }
}

class Library {
    #items;

    constructor() {
        this.#items = []; 
    }

    addItem(item) {
        if (item instanceof MediaItem) {
            this.#items.push(item);
        } else {
            console.log("Error: Item must be an instance of MediaItem");
        }
    }

    search(term) {
        const lowerCaseTerm = term.toLowerCase();
        return this.#items.filter(item => 
            item.getTitle().toLowerCase().includes(lowerCaseTerm)
        );
    }

    listByGenre(genre) {
        const lowerCaseGenre = genre.toLowerCase();
        return this.#items.filter(item => 
            item.getGenre().toLowerCase() === lowerCaseGenre
        );
    }
}


const lib = new Library();

lib.addItem(new Book("Dune", "Frank Herbert", 1965, "Sci-Fi", 412));
lib.addItem(new Movie("Dune", "Denis Villeneuve", 2021, "Sci-Fi", 155));
lib.addItem(new Book("The Hobbit", "J.R.R. Tolkien", 1937, "Fantasy", 310));

console.log("Search Results for 'dune': ");
const searchResults = lib.search("dune");
searchResults.forEach(item => console.log(item.getSummary()));

console.log("Items in 'Sci-Fi' Genre: ");
const genreResults = lib.listByGenre("Sci-Fi");
genreResults.forEach(item => console.log(item.getSummary()));