# TS-Academy-Capstone-Project-GR3
# Capstone Project: Planet Data Grid Component

## Developer: Marvellous (Marvis)
Role: Frontend Developer 
Feature Implemented: Dynamic Planet Grid Section



## Feature Overview
For this software engineering capstone project, I was responsible for engineering the **Planet Grid Component**. This component dynamically fetches, parses, and displays structured planetary data (including Planet Name, Distance from the Sun, and Images) using React and semantic HTML5 elements.

## Key Accomplishments & Technical Implementation

### 1. Dynamic Fetch API Architecture
* Implemented the React `useEffect` and `useState` hooks to build a robust asynchronous data fetching lifecycle.
* Managed loading states and errors gracefully using `try/catch` logic to ensure a smooth user experience.
* [span_0](start_span)Utilized HTML5 `<figure>`, `<figcaption>`, and descriptive image tags to properly display the planetary profiles according to the project's semantic structure guidelines[span_0](end_span).

### 2. Custom Responsive Grid Engineering
* Built a desktop-first responsive layout utilizing strict CSS Grid configurations to manage diverse screen viewports cleanly.
* **Desktop View:** Displays a balanced 4-column layout layout with a `20px` grid gap.
* **Tablet View:** Uses a media query breakpoint at `1024px` to shift the layout into a clean 3-column view.
* **Mobile View:** Implements a strict media query breakpoint at `700px` to lock the cards into an optimal 2-column layout, ensuring text and layout structures scale seamlessly without overflowing or breaking columns.

### 3. Production Deployment Optimization
* Solved a critical "Failed to fetch" tracking error encountered during the live Netlify deployment phase.
* Established a dedicated, static `public/` folder directory within the root project structure to house the raw `Planets.json` data file. 
* This architectural fix ensured that the build engine (Vite) successfully copied the file directly to the live server root, mapping it correctly as an active asset endpoint for the runtime fetch request.

---

## Local Development Setup

To test this component locally on your computer, run these commands inside your terminal:

1. **Clone the repository branch:**
   ```bash
   git clone -b feature/planet-grid [https://github.com/Vinsax19/TS-Academy-Capstone-Project-GR3.git](https://github.com/Vinsax19/TS-Academy-Capstone-Project-GR3.git)
