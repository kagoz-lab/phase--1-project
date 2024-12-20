## NewsApp

NewsApp is a simple web application that allows users to explore the latest news from various categories like World, Politics, Sports, Business, and Technology. It also includes a search functionality to find news articles based on a keyword. The app fetches articles from the NewsAPI service.

## Features

Category-based News: Users can browse news by categories such as World, Politics, Sports, Business, and Technology.
Search Functionality: Users can search for news articles by entering keywords into a search bar.
Responsive Design: The application is fully responsive and optimized for both desktop and mobile devices.
Image Previews: Each news article displays an image, title, description, and a link to read more.
Technologies Used
HTML: Structure of the web page.
CSS: Styling the page and ensuring it is responsive.
JavaScript: Fetching and displaying news articles, handling events for search and category buttons.
NewsAPI: API service to fetch top headlines and news articles.
Getting Started
Prerequisites
A modern web browser (Google Chrome, Mozilla Firefox, etc.)
An internet connection to fetch articles via API.

## Installation
Clone this repository to your local machine.

git clone https://github.com/your-username/newsapp.git
Open the project folder.

cd newsapp
Open index.html in your browser to start using the app.

## API Key
The application uses NewsAPI to fetch articles. You need to replace the API key in the index.js file with your own.

Go to NewsAPI.
Sign up for an account to obtain your free API key.
Replace const apiKey = '86c9f03b25848c7b9826daf17bca6b8'; in the index.js file with your own API key.
javascript
Copy code
const apiKey = 'YOUR_API_KEY';
Usage
Search: Type a keyword into the search bar and press the "Search" button to fetch articles related to that keyword.
Category: Click on one of the category buttons (World, Politics, Sports, Business, Technology) to fetch articles from that category.

## Example
After entering a search query or selecting a category, the app will display a list of articles with the following details:

## Title

Description
An image (if available)
A link to the full article

## Folder Structure
/newsapp
  /index.html      # Main HTML file
  /styles.css      # CSS file for styling
  /index.js        # JavaScript file for fetching and displaying articles
  /images/          # Folder for any static images (if needed)
  README.md        # This README file
Screenshots

## Contributing
Feel free to fork this repository and create pull requests. If you find any issues or have suggestions, please open an issue in the GitHub repository.

## License
This project is open-source and available under the MIT License.

