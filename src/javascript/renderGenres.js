export function renderGenres(movie, allGenres) {
  const genresName = [];

  movie.genre_ids.forEach(genre => {
    allGenres.forEach(item => {
      if (item.id === genre) {
        genresName.push(item.name);
      }
    });
  });

  if (genresName.length > 2) {
    genresName.splice(2, genresName.length - 1, 'Other');
  }
  if (genresName.length === 0) {
    genresName.push('Other');
  }
  return genresName.join(', ');
}