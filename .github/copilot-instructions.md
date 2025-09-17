# Text Cleanup Tool
Text Cleanup Tool is a static HTML5, CSS, and JavaScript web application that cleans messy text from unwanted formatting, special characters, and hidden artifacts commonly found when copying from AI tools, PDFs, websites, and documents.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively
- Bootstrap and setup the repository:
  - `cd /path/to/text-cleanup`
  - `npm install` -- installs local http-server (takes ~2 seconds)
- Run the development server:
  - **Primary method**: `npm run dev` or `npx http-server -p 3000 -o`
  - **Alternative method**: `python3 -m http.server 8000`
  - **Manual method**: `npx http-server -p 3000` (without auto-opening browser)
- Access the application:
  - Primary server: http://localhost:3000
  - Python server: http://localhost:8000
- No build step required - this is a static site with no compilation needed.

## Validation
- **CRITICAL**: Always manually test the complete user workflow after making ANY changes to the application:
  1. **Text Processing Test**: Paste text with formatting (markdown **bold**, *italic*, smart quotes "", em-dashes —) into the input area
  2. Click "Clean Text" button and verify the output removes formatting and normalizes characters
  3. **Copy Functionality Test**: Click "Copy to Clipboard" and verify the button shows "Copied!" feedback
  4. **Clear Functionality Test**: Click "Clear All" and verify both text areas are cleared and focus returns to input
- **Manual UI Testing**: Always test in a browser by navigating to http://localhost:3000 and exercising the above workflow
- The application runs entirely client-side - no server processing is involved
- No automated tests exist - manual validation is the only testing method

## Common Tasks
The following are outputs from frequently run commands. Reference them instead of viewing, searching, or running bash commands to save time.

### Repository Root Structure
```
text-cleanup/
├── index.html          # Main HTML file - contains UI structure
├── script.js           # JavaScript functionality - TextCleanup class
├── styles.css          # CSS styles - responsive design
├── package.json        # Project configuration - contains dev scripts
├── vercel.json         # Vercel deployment config
├── README.md           # Documentation
├── .gitignore          # Git ignore patterns
└── yarn.lock           # Dependency lock file
```

### Key Files and Their Purpose
- **index.html**: Main application interface with text input/output areas and control buttons
- **script.js**: Contains TextCleanup class with methods:
  - `cleanText()`: Main processing pipeline
  - `removeHiddenCharacters()`: Strips invisible Unicode
  - `normalizeWhitespace()`: Consolidates multiple spaces
  - `removeFormatting()`: Removes markdown formatting
  - `cleanSpecialCharacters()`: Normalizes quotes and dashes
  - `copyToClipboard()`: Handles copy functionality with fallback
- **styles.css**: Responsive CSS with modern design, button states, and mobile support

### package.json Scripts
```json
{
  "scripts": {
    "dev": "http-server -p 3000 -o",
    "dev:vercel": "vercel dev",
    "build": "echo 'No build step required'",
    "start": "echo 'Static site - no start command needed'"
  }
}
```

### Development Dependencies
- **http-server**: Local development server (installed via `npm install`)
- **No other dependencies**: Pure vanilla JavaScript application

## Deployment
- **Primary**: Vercel (configured via vercel.json)
- **Alternative platforms**: Netlify, GitHub Pages, any static hosting
- **Manual deployment**: Upload index.html, script.js, styles.css to any web server
- No build process required - files are served directly

## Code Architecture
- **Frontend only**: No backend server or API calls
- **Vanilla JavaScript**: No frameworks or libraries used
- **ES6+ features**: Uses classes, arrow functions, async/await
- **Browser compatibility**: Modern browsers with clipboard API support and fallback
- **Processing pipeline**: Input → Hidden chars removal → Whitespace normalization → Formatting removal → Special character cleanup → Output

## Making Changes
- **Always test locally first**: Start dev server and manually validate changes
- **Test all user scenarios**: Input text → Clean → Copy → Clear workflow
- **No linting/formatting tools**: Follow existing code style manually
- **No automated tests**: Manual browser testing is the only validation
- **Static files only**: Changes to HTML/CSS/JS are immediately reflected after refresh

## Common Debugging
- **Server won't start**: Install http-server locally with `npm install`
- **Copy functionality**: Modern browsers require HTTPS for clipboard API (uses fallback in HTTP)
- **Text not cleaning**: Check JavaScript console for errors in the processing pipeline
- **UI issues**: Inspect CSS styles - responsive design uses CSS Grid and Flexbox

## Timing Expectations
- **npm install**: ~2 seconds (installs only http-server)
- **Server startup**: Immediate (~1 second)
- **Application load**: Immediate (static files)
- **Text processing**: Instantaneous (client-side JavaScript)
- **No build times**: Static site requires no compilation

## File Change Impact
- **index.html changes**: Affects UI structure and layout
- **script.js changes**: Affects text processing logic and user interactions  
- **styles.css changes**: Affects visual appearance and responsive behavior
- **package.json changes**: Affects development server and deployment configuration