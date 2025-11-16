# Nixon-GUI: A Kali Linux Portfolio 💻

A fully interactive, web-based simulation of the Kali Linux desktop environment, built to serve as a creative and in-depth personal portfolio. This project, named **Nixon-GUI**, is built with **Next.js** and **Tailwind CSS** to replicate the look, feel, and core functionalities of a Kali desktop, running entirely in your browser.

Instead of a traditional resume, you can explore a complete, simulated OS where applications open to reveal portfolio content, projects, and skills.

## ✨ Features

  * **🖥️ Simulated Desktop Environment:** A complete UI including a boot-up screen, lock screen, functional desktop, top navbar, and side app-launcher.
  * **🪟 Windowing System:** Launch applications in draggable, resizable, and minimizable windows, just like a real OS.
  * **📂 Portfolio as Apps:** Core portfolio sections (About Me, Projects, CLI) are presented as interactive, launchable applications.
  * **🎛️ Config-Driven Apps:** Easily add new applications by defining them in the `apps.config.js` file.
  * **🎨 Authentic Theming:** Uses the `Flat-Remix-Blue-Dark` icon theme and a collection of Kali-inspired wallpapers for an authentic look and feel.
  * **🖱️ Context Menus:** A custom right-click context menu on the desktop.
  * **🧩 Rich Component Library:** A modular system for building new apps and UI elements.

### 🧰 Simulated Applications

This project includes a wide variety of simulated applications. While many replicate real tools for authenticity, the most important ones are the custom portfolio apps:

  * **Core Portfolio:**

      * **`Nixon.js`**: The main portfolio application, likely showcasing projects, skills, and about-me information.
      * **`NixonCLI`**: A custom terminal application to demonstrate command-line skills and present information in a technical format.

  * **System Tools:**

      * `Terminal` & `Root Terminal`
      * `Settings`
      * `Neofetch`
      * `Gedit` & `Editor`
      * `Trash`
      * `Calculator (calc.js)`

  * **Security Tools:**

      * `Metasploit`
      * `Nmap`
      * `SQLMap`
      * `Shodan`
      * `ZoomEye`
      * `Exploit Database`
      * `Packet Tracer`
      * `Apache`

  * **Browsers & Web Apps:**

      * `Chrome`
      * `Firefox`
      * `GitHub`
      * `Todoist`
      * `Weather`

  * **Media:**

      * `VLC`
      * `Cherrytree`

-----

## 🛠️ Tech Stack

  * **Framework:** [Next.js](https://nextjs.org/) (React)
  * **Styling:** [Tailwind CSS](https://tailwindcss.com/)
  * **Deployment:** Configured for [Vercel](https://vercel.com/) (based on `vercel.json`)

-----

## 🚀 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/nixon-gui.git
    cd nixon-gui
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to see the application running.

-----

## 📂 Project Structure Overview

Here is a brief overview of the key directories:

```
.
├── apps.config.js         # Configuration file to define all apps
├── components
│   ├── apps/              # Contains the React component for each individual app
│   ├── base/              # Core components like the window manager and app base
│   ├── context menus/     # Right-click menu components
│   ├── screen/            # Main UI components (Desktop, Navbar, Lock Screen, etc.)
│   └── util components/   # Helper components (Clock, Status, etc.)
├── pages                  # Next.js routes (_app.js, index.js)
├── public                 # All static assets
│   ├── images/            # Wallpapers and logos
│   └── themes/            # Icon themes for apps
├── styles                 # Global CSS files
├── tailwind.config.js     # Tailwind theme configuration
└── next.config.js         # Next.js configuration
```
