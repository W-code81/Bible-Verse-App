# Bible-API

A Node.js web application that serves random Bible verses from a MongoDB database. It provides a "Verse of the Day" feature by randomly selecting and displaying a verse.

## Features

- Random Bible verse generation
- Web interface using EJS templates
- MongoDB database for verse storage
- RESTful API endpoints
- Database seeding from JSON file

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ODM
- **Frontend:** EJS templating engine
- **Other:** dotenv for environment variables, Lodash for utilities

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Bible-API
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with:
   ```
   MONGODB_ATLAS_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. Seed the database with sample verses:
   ```bash
   npm start
   # Then visit http://localhost:3000/seed to populate the database
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```

2. Open your browser and go to `http://localhost:3000` to view a random Bible verse.

## API Endpoints

- `GET /` - Renders the home page with a random verse
- `GET /about` - Renders the about page
- `GET /seed` - Seeds the database with verses from `sample-verses.json` (development only)

## Database Schema

Each verse document contains:
- `book`: String (e.g., "John")
- `chapter`: Number
- `verse`: String (e.g., "3:16")
- `text`: String (the verse content)

## Sample Data

The `sample-verses.json` file contains sample Bible verses for seeding the database.

## Author

W-code81

## License

ISC</content>
<parameter name="filePath">c:\Users\oluwa\Documents\D-CODES\Bible-API\README.md