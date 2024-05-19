# Weather App
This is a simple weather application that retrieves and displays weather information for a given city using the OpenWeatherMap API. The app is built with HTML, CSS, and JavaScript.

## Features
* User can enter a city name to get current weather data.
* Displays temperature, weather description, an icon representing the weather, and additional details such as "feels like" temperature, humidity, and wind speed.
* Handles errors and displays an appropriate message if the weather data cannot be retrieved.

## Live Demo
You can try the live demo [here](https://vercel.com/deekshithamunigalas-projects/weather-app).

## Getting Started
### Prerequisites
To run this project, you need a modern web browser and an internet connection.

### Installation
1. Clone the repository:

```
git clone https://github.com/DeekshithaMunigala/weather-app.git
`cd weather-app`
```

2.Open the project directory and locate the app.js file.

3. Replace the api key with your OpenWeatherMap API key:
```javascript
const apiKey = "YOUR_API_KEY_HERE";
```
4. Open index.html in your web browser to run the application.

## Usage
1. Open the application in your web browser.
2. Enter the name of a city in the input field.
3. Click the "Get Weather" button.
4. The weather data for the entered city will be displayed.

## Project Structure
```plaintext
weather-app/
│
├── index.html
├── style.css
├── app.js
└── README.md
```
* index.html: The main HTML file that contains the structure of the web page.
* style.css: The CSS file for styling the web page.
* app.js: The JavaScript file that contains the logic for fetching and displaying weather data.
* README.md: The file you are currently reading.


## API Reference
This project uses the OpenWeatherMap API to fetch weather data. You will need to sign up for an API key and include it in the app.js file.

Example API Request
```http
GET https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&unit=metric```
```

## API Response
The API will return a JSON response containing weather data, including temperature, weather conditions, humidity, wind speed, etc.

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request.

1. Fork the repository.
2. Create a new branch: git checkout -b feature/your-feature.
3. Make your changes and commit them: git commit -m 'Add your feature'.
4. Push to the branch: git push origin feature/your-feature.
5. Submit a pull request.

## License
This project is open source and available under the MIT License.
