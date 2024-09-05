import React from 'react'

export default function Filters({setReleaseYearRange,setRatingRange,selectedGenre,genres,releaseYearRange,ratingRange,setSelectedGenre}) {
  return (
    
<div className="modal fade" data-bs-theme="dark"  id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Filters:</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {/* Filter UI */}
      <div className="filters mb-4">
        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)} className="form-select">
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
        
        <div className="range-inputs">
          <label>Release Year Range:</label>
          <input
            type="number"
            value={releaseYearRange[0]}
            onChange={(e) => setReleaseYearRange([Number(e.target.value), releaseYearRange[1]])}
            min="1900"
            max={new Date().getFullYear()}
            className="form-control"
            />
          <input
            type="number"
            value={releaseYearRange[1]}
            onChange={(e) => setReleaseYearRange([releaseYearRange[0], Number(e.target.value)])}
            min="1900"
            max={new Date().getFullYear()}
            className="form-control"
            />
        </div>
        
        <div className="range-inputs">
          <label>Rating Range:</label>
          <input
            type="number"
            value={ratingRange[0]}
            onChange={(e) => setRatingRange([Number(e.target.value), ratingRange[1]])}
            min="0"
            max="10"
            step="0.1"
            className="form-control"
          />
          <input
            type="number"
            value={ratingRange[1]}
            onChange={(e) => setRatingRange([ratingRange[0], Number(e.target.value)])}
            min="0"
            max="10"
            step="0.1"
            className="form-control"
            />
        </div>
      </div>
      
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Apply</button>
        {/* <button type="button" className="btn btn-primary">Send message</button> */}
      </div>
    </div>
  </div>
</div>
  )
}
