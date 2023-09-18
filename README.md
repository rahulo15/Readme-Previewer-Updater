# Markdown Previewer with README Updater

## Overview

This Markdown Previewer is a React-based web application that allows you to preview and update the README.md file of an existing GitHub repository directly from the app. You can provide the name of the repository, make changes to the README content, and click the "Update README" button to save the changes to the repository using the GitHub API.


## Features

- Preview the current README content of a GitHub repository.
- Edit and preview changes in real-time using Markdown syntax.
- Update the README content in the GitHub repository without leaving the app.
- Simple and user-friendly interface.

## How to Use

1. Visit the Markdown Previewer web application.
2. Enter the name of the GitHub repository you want to edit.
3. Click the "Preview README" button.
4. The current README content will be displayed for preview.
5. Make your desired changes using Markdown syntax.
6. Click the "Update README" button to save your changes to the repository.

## Technologies Used

- [React](https://reactjs.org/)
- [GitHub API](https://developer.github.com/v3/)

## Installation

To run this Markdown Previewer application locally, follow these steps:

1. Clone this repository to your local machine.
   ```shell
   git clone https://github.com/your-username/markdown-previewer.git
   ```
2. Navigate to the project directory.
    ```shell
    cd markdown-previewer
    ```
3. Install the required dependencies.
    ```shell
    npm install
    ```
4. Start the application.
    ```shell
    npm start
    ```
5. Open your web browser and go to http://localhost:3000.

Configuration
To use the README updating feature, you'll need to provide a personal access token & owner name with repo scope in the .env file. This token will be used to authenticate API requests to GitHub. Remember to keep your access token secure.

