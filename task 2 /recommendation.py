# Movie Recommendation System

movies = {
    "Avatar": ["action", "adventure", "sci-fi"],
    "Avengers": ["action", "adventure", "sci-fi"],
    "Titanic": ["romance", "drama"],
    "The Notebook": ["romance", "drama"],
    "Interstellar": ["sci-fi", "adventure", "drama"],
    "John Wick": ["action", "thriller"],
    "Inception": ["action", "sci-fi", "thriller"],
    "Finding Nemo": ["animation", "adventure", "family"],
    "Toy Story": ["animation", "adventure", "family"],
    "The Conjuring": ["horror", "thriller"]
}


def recommend_movies(selected_movie):
    selected_genres = set(movies[selected_movie])

    scores = {}

    for movie, genres in movies.items():
        if movie == selected_movie:
            continue

        # Count common genres
        common_genres = selected_genres.intersection(genres)
        scores[movie] = len(common_genres)

    # Sort movies by similarity score
    recommendations = sorted(
        scores.items(),
        key=lambda item: item[1],
        reverse=True
    )

    print("\nRecommended Movies for You:")

    for movie, score in recommendations[:3]:
        if score > 0:
            print(f"- {movie} (Similarity: {score})")


print("🎬 MOVIE RECOMMENDATION SYSTEM")
print("\nAvailable Movies:")

for movie in movies:
    print("-", movie)

choice = input("\nEnter your favorite movie: ").strip()

# Find movie without case sensitivity
matched_movie = next(
    (movie for movie in movies if movie.lower() == choice.lower()),
    None
)

if matched_movie:
    recommend_movies(matched_movie)
else:
    print("Movie not found. Please choose a movie from the list.")
