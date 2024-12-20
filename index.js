const apiKey = '86c9f03b25848c7b9826daf17bca6b8'; 
const apiUrl = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=886c9f03b25848c7b9826daf17bca6b8' ;

const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const articlesContainer = document.getElementById('articles');
const categoryBtns = document.querySelectorAll('.category-btn');

// Fetch articles from NewsAPI
const fetchArticles = async (query = '') => {
  try {
    const url = query ? `${apiUrl}&q=${query}` : apiUrl;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.status === 'ok') {
      displayArticles(data.articles);
    } else {
      articlesContainer.innerHTML = '<p>No articles found.</p>';
    }
  } catch (error) {
    console.error('Error fetching articles:', error);
    articlesContainer.innerHTML = '<p>Error loading articles.</p>';
  }
};

// Display articles on the page
const displayArticles = (articles) => {
  articlesContainer.innerHTML = ''; // Clear previous articles
  
  if (articles.length === 0) {
    articlesContainer.innerHTML = '<p>No articles found.</p>';
    return;
  }

  articles.forEach(article => {
    const articleElem = document.createElement('div');
    articleElem.classList.add('article');

    articleElem.innerHTML = `
      <img src="${article.urlToImage || 'https://via.placeholder.com/300x200'}" alt="Article Image">
      <h3>${article.title}</h3>
      <p>${article.description || 'No description available.'}</p>
      <a href="${article.url}" target="_blank">Read more</a>
    `;

    articlesContainer.appendChild(articleElem);
  });
};

// Handle search button click
searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim();
  fetchArticles(query);
});

// Handle category button click
categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;
    fetchArticles(category);
  });
});

// Initial fetch
fetchArticles();
