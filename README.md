# PixCrunch

![WebAssembly](https://img.shields.io/badge/WebAssembly-Wasm-654FF0?logo=webassembly&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-Installable-5C95E1?logo=pwa&logoColor=white)
![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
[![Buy Me a Coffee](https://img.shields.io/badge/-Buy%20Me%20a%20Coffee-ffdd00?style=flat&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/lboz)

**Transform your images with speed, confidence, and ultimate flexibility, on any device.**

PixCrunch is a Progressive Web App (PWA) designed from the ground up to give you powerful image compression tools directly in your browser, with an absolute commitment to your privacy. Say goodbye to slow uploads, compromised data, and intrusive analytics. Install it once, use it everywhere, and enjoy a seamless experience tailored to your device, whether it's a smartphone, tablet, or desktop.

> **Acknowledgment:** PixCrunch is a fork of [Squoosh](https://squoosh.app), enhanced with additional features and optimizations focused on privacy, performance, and user experience.

---

## ✨ Features

- **Blazing-Fast On-Device Compression:** Powered by **Rust** compiled to **WebAssembly (Wasm)** with multi-threading via Web Workers, delivering near-native performance directly in your browser.
- **Uncompromising Privacy:** All image processing happens locally on your device. No uploads, no telemetry, no third-party servers.
- **Universal Installability (PWA):** Install PixCrunch on any device—mobile, tablet, or desktop—and use it like a native app, offline and anytime.
- **Intuitive & Responsive UI:** Built with **React** and **Tailwind CSS**, offering a smooth, touch-friendly interface that adapts to any screen size.
- **Broad Format Support:** Compress and convert images in AVIF, JPEG XL, HEIC, TIFF, JPEG, PNG, and WebP formats.
- **Advanced Compression Controls:** Customize output with features like custom JPEG quantization tables and per-channel compression settings for PNG/WebP.
- **Offline Functionality:** Works completely without an internet connection after the initial install.
- **Drag & Drop Support:** Easily add single images, multiple files, or entire folders (Chromium-based browsers) via drag-and-drop.
- **Batch & Folder Processing:** Efficiently compress large sets of images or whole folders locally.
- **Dynamic Preview Modes:** Compare original and compressed images with split-screen, side-by-side, and zoom functionalities.
- **Open-Source & Transparent:** Fully open-source codebase enabling audits, reproducible builds, and trust.

> **Note:** PixCrunch builds upon and extends the excellent foundation laid by [Squoosh](https://squoosh.app), incorporating additional privacy and performance improvements.

---

## 🚀 Live Demo

Experience PixCrunch directly in your browser:
**[Try PixCrunch Live!](https://lyubomir-bozhinov.github.io/pixcrunch)**

Open the link in any modern browser (Chrome, Edge, Firefox, Safari) and start compressing your images instantly.

## ⚡ Quick Start

PixCrunch is a Progressive Web App, meaning you can use it directly in your browser or install it like a native application.

### Using the Web Application

1. Open your preferred modern web browser (Chrome, Edge, Firefox, Safari).
2. Navigate to the live demo URL: **[https://lyubomir-bozhinov.github.io/pixcrunch](https://lyubomir-bozhinov.github.io/pixcrunch)**
3. Start dragging images onto the page or use the file selection button!

### Installing PixCrunch as an App (Recommended)

For a truly native-like experience, you can install PixCrunch directly to your device:

- **On Desktop (Chrome/Edge):** Look for the "Install App" icon (often a small computer with an arrow) in your browser's address bar. Click it and follow the prompts.
- **On Android:** Open the app in Chrome, tap the menu (⁝) icon, and select "Add to Home Screen" or "Install app."
- **On iOS (Safari):** Open the app in Safari, tap the Share button (↑), and select "Add to Home Screen."

Once installed, PixCrunch will launch as a standalone application, offering a distraction-free environment.

**No API Keys or Account Creation Required:** PixCrunch operates entirely on your device, ensuring maximum privacy and no external dependencies for its core functionality.

---

## 🛠️ Developer Guide

Want to contribute or run PixCrunch locally? Here's how to get started!

### Development Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/pixcrunch.git](https://github.com/your-username/pixcrunch.git)
    cd pixcrunch
    ```
2. To install node packages, run:
   ```sh
   npm install
   ```
3. Then build the app by running:
   ```sh
   npm run build
   ```
4. After building, start the development server by running:
   ```sh
   npm run dev
   ```

---

## ⚠️ Troubleshooting

- **"App not installing" / PWA issues:** Ensure your browser supports PWA installation and check the browser's developer tools (Application -> Manifest/Service Workers) for any errors.
- **Images not compressing / Errors:** Check the browser's developer console (F12) for JavaScript or WebAssembly errors.
- **Folder drag & drop not working:** This feature relies on the File System Access API, currently best supported in Chromium-based browsers (Chrome, Edge). Ensure you are using an up-to-date version of one of these browsers.
- **Slow performance for very large images:** While optimized, extremely high-resolution images might still take time. Ensure you have sufficient RAM and a modern CPU.

---

## 🗺️ Roadmap

- **AI-Assisted Compression Suggestions:** Integrate small, offline TinyML models to provide smart compression recommendations.
- **WebGPU Integration:** Explore leveraging WebGPU for even faster image manipulation and rendering where applicable.
- **Advanced Image Editing:** Add basic resizing, cropping, and rotation functionalities.
- **Custom Presets:** Allow users to save and load their favorite compression settings.
- **Undo/Redo History:** Implement a history of operations for easy reverts.
- **Direct Camera Capture:** Integrate with the `getUserMedia` API to compress photos directly from a device's camera.
- **Export as ZIP:** Option to download a batch of compressed images as a single ZIP archive.

---

## 🤝 Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to get started, report bugs, or suggest new features.

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## About Me

I build things — products, teams, systems… occasionally IKEA furniture (with mixed results). I’ve led engineering in everything from scrappy startups to big enterprises, but what I really love is turning ideas into real, useful tech.

I’m into mentoring, scaling systems, and solving problems that make people say “well, that’s impossible.” If you like what I’m building here, you can fuel my caffeine-powered code sessions:

☕ [Buy Me a Coffee](https://www.buymeacoffee.com/lboz)

Thanks for stopping by!

**Happy Crunching!** 🏞️➡️✨

