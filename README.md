# Github Finder

See it live: [Github Finder](https://jocular-cajeta-526f29.netlify.app/)

## Description
A small web-app that allows a user to search for different Github profiles by name. The API returns 30 of the most popular profiles that fit the search query, and a user can then click on any one of these to view more detailed information on that particular profile.

## Background & Motivation
This was based on a tutorial I had done a while back by a popular YouTube coding instructor. For this version, however, I did completely my own implementation from scratch and gave it my own look and styling. I really like the idea of getting a list of information through an API and displaying it neatly on a page.

## Technologies
The current version of this project was done with:
* HTML
* Vanilla CSS (with some media queries)
* React
* Fetch API
* Custom fetch hook
* Local Storage

## State of Completion
Completed. I could have added more information to the individual user profile but my goal was to keep it simple, with a focus on functionality first and foremost.

## Learning Lessons & Challenges
### Using the Github API and a custom hook for Fetching data
I really enjoy working with APIs and this project was no exception. This time, I decided to do my fetching with a hook instead of doing it just inside components. I recenly saw a video where this was demonstrated and I can see why it's an efficient and re-usable way to perform fetch requests. This was great practice for me and I feel like I will be using custom fetch hooks more often going forward, as it keeps the component code cleaner by taking all the fetch logic outside of it.

### Displaying the list of Github profiles
I was able to display the list of Github profiles using just CSS Grid, without needing to use any media queries. I feel like this is a much neater and more concise way of creating responsive lists and I plan on using this method going forward. I did use a few media queries in this project, but not for this particular purpose.

### Using Vanilla CSS & CSS Modules
I had originally done this project with Bootstrap, but decided to change it to vanilla CSS just as a little challenge to myself. I use Bootstrap in my other projects, so I thought it would be nice to have at least one in plain CSS. I also decided to go with CSS Modules (although I could have done without them in a project this size) in order to keep things neater and avoid any potential CSS rules conflicts.

### Local Storage
I made a quick use of the localStorage object here in order to persist any past queries for the user. If the user has previously searched for github profiles, their search query is saved to local storage, so that next time then visit the app, that search data is automatically retrieved. I thought this was a good feature to complement as it leads to good user experience.

## Summary
I really enjoyed making this little app. While it's nothing fancy, I think it has a very clean look and feel to it that I am very pleased with.




