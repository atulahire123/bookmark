import React, { useState } from 'react';

function BookmarkApp() {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmark = () => {
    if (title && url) {
      setBookmarks([...bookmarks, { title, url }]);
      setTitle('');
      setUrl('');
    } else {
      alert('Please enter both a title and a URL');
    }
  };

  const handleDeleteBookmark = (index) => {
    setBookmarks(bookmarks.filter((_, i) => i !== index));
  };

  const handleEditBookmark = (index) => {
    const newTitle = prompt('Enter new title', bookmarks[index].title);
    const newUrl = prompt('Enter new URL', bookmarks[index].url);

    if (newTitle && newUrl) {
      const updatedBookmarks = bookmarks.map((bookmark, i) =>
        i === index ? { title: newTitle, url: newUrl } : bookmark
      );
      setBookmarks(updatedBookmarks);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Bookmark Website</h1>
      <div style={{ textAlign: 'left', display: 'inline-block' }}>
        <div>
          <label>Website Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Website URL</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={{ marginLeft: '28px' }}
          />
        </div>
        <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <button onClick={handleAddBookmark}>Add</button>
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h2>All Bookmarks</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {bookmarks.map((bookmark, index) => (
            <li key={index} style={{ margin: '10px 0' }}>
              <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                {bookmark.title}
              </a>
              <button
                onClick={() => handleEditBookmark(index)}
                style={{ marginLeft: '10px' }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteBookmark(index)}
                style={{ marginLeft: '10px' }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BookmarkApp;
