# My Responsive App

A simple responsive Next.js app with Home, About, and Contact pages. The project includes responsive navigation, a reusable layout, and custom styling using CSS.

## Table of Contents

- [Features](#features)
- [Project Setup](#project-setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Features

- **Responsive Design**: The app is fully responsive, adapting to both desktop and mobile screen sizes.
- **Multi-Page Navigation**: Includes Home, About, and Contact pages.
- **Reusable Layout**: A common layout with a navigation bar and footer is used across all pages.
- **CSS Styling**: Custom CSS for layout and responsiveness.

## Project Setup

### Prerequisites

Before setting up the project, make sure you have the following installed:

- **Node.js** (version 14.x or above)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/my-responsive-app.git
   cd my-responsive-app

2. **Install dependencies:**
    Using npm:
      ```bash
      npm install
    Or using yarn:
      ```bash
      yarn install
      
Running the App
To run the development server, use the following command:

Using npm: npm run dev

Using yarn:yarn dev

This will start the Next.js development server. Open http://localhost:3000 to view it in the browser.

**Building for Production**
To build the project for production:
     ```bash
      npm run build
**Project Structure**
The folder structure of the project is as follows:
  ```bash
    /app                   # App directory for pages
      /about               # About page
        page.js
      /contact             # Contact page
        page.js
      page.js              # Home page (index)
    /components            # Reusable components
      Layout.js            # Layout component with navigation and footer
    /styles                # CSS files
      Layout.module.css    # Custom CSS for Layout component
      globals.css          # Global styles
    /public                # Public static assets (images, icons, etc.)



##Technologies Used
Next.js: The React framework used for building server-rendered applications.
CSS: Custom styling for the layout and responsiveness.
JavaScript (ES6+): The primary programming language for the app.
HTML5: The structure of the app pages



