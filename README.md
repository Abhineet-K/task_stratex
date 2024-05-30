# Movie List Application

This is a responsive React application that displays a list of movies and allows users to mark their favorite movies. The application fetches movie data from an API and uses the TMDB API to fetch movie images. It uses Redux for state management and is styled with Tailwind CSS to ensure responsiveness across different devices.

## Features

- **Movie List Page:**
  - Fetches movies from an API.
  - Displays movies in a list sorted by rating from highest to lowest.
  - Each movie card displays various attributes like name, rating, and image.
  - Each movie card has a favorite/unfavorite icon (heart icon).
  - Clicking on a movie card redirects the user to the IMDb page of the movie.
- **Favorite Movies Page:**
  - Displays the list of movies marked as favorites.
  - The order of movies is the same as when they were added to the favorites list.
  - Each movie card displays the same attributes as on the first page.
- **Responsive Design:**
  - The UI is responsive across desktop, tablet, and mobile devices.
- **State Management:**
  - Uses Redux for managing movies and favorite movies data.

## Demo
- Link : [Click Here](https://moviedashboard-abhis-projects-d9a36415.vercel.app/)

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Abhineet-K/task_stratex.git
    cd movie-list-app
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your API URLs and TMDB API key:

    ```env
    API_URL=https://dummyapi.online/api/movies
    TMDB_API_KEY=API_KEY
    ```

    Replace `API_KEY` with your actual TMDB API key.

### Running the Application

1. Start the development server:

    ```sh
    npm run dev
    ```

2. Open your browser and navigate to `http://localhost:3000`.


## Usage

### Movie List Page

The movie list page fetches and displays movies from the specified API. Each movie card includes a heart icon that can be clicked to mark the movie as a favorite. Clicking on the movie card itself will redirect the user to the IMDb page of the movie.

### Favorite Movies Page

The favorite movies page displays all the movies that have been marked as favorites. The order of the movies is the same as when they were added to the favorites list.


