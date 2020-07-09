## Woke or Joke
A tinder based swiping web application that allows users to rate and contact the sitting US Senators from 2019.

Users may also create an account to log in and save their ratings to a personal database built with PostgreSQL and Ruby on Rails, to view a gallery of past ratings or rerate them at will.

## The Stack

React - Front-end framework
React Hooks - State management
Redux - State management
Ruby on Rails - Back-end framework
PostgreSQL - Database
Custom CSS for styling as well as the swiping feature for rating.

## How to use?
To use Woke or Joke on your own:

- Clone this repo
- CD into the API repository and run `bundle install`, `rails db:migrate`, `rails db:seed` to get everything set up
- Run `rails s -p 3001` to get the backend server running
- CD into the frontend repository and run `npm install && npm start`
