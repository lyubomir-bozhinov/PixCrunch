# How to Contribute to PixCrunch

We're thrilled you're interested in contributing to PixCrunch! Your contributions help us make image compression faster, more private, and more accessible for everyone.

## Getting Started with Development

To set up your local development environment:

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Build the Application:**
    ```bash
    npm run build
    ```
3.  **Start the Development Server:**
    ```bash
    npm run dev
    ```
    This will start the application, typically accessible at `http://localhost:5000` (or the port specified by `DEV_PORT`).

## Project Structure & Technologies

PixCrunch is a Progressive Web App (PWA) built with a focus on performance and privacy. Key technologies include:

*   **Frontend:** React (Preact) and Tailwind CSS for the user interface.
*   **Core Logic:** Rust compiled to WebAssembly (Wasm) for blazing-fast, on-device image compression.
*   **Build System:** Rollup for bundling.
*   **Codecs:** Various image codecs (e.g., AVIF, JPEG XL, HEIC, JPEG, PNG, WebP) are integrated via WebAssembly.

Understanding these technologies will be beneficial for contributions.

## Code Style and Formatting

We use automated tools to maintain consistent code style. Before submitting a pull request, please ensure your code is formatted correctly. The project uses:

*   `prettier` for JavaScript, TypeScript, CSS, JSON, and Markdown files.
*   `clang-format` for C/C++/Header files.
*   `rustfmt` for Rust files.

These tools are configured to run automatically via `husky` and `lint-staged` before commits.

## Submitting Changes

1.  **Create a Branch:** Create a new branch for your feature or bug fix.
2.  **Make Your Changes:** Implement your changes, ensuring they align with the project's goals (privacy, performance, PWA).
3.  **Test Your Changes:** Manually test your changes thoroughly in the development environment.
4.  **Commit Your Changes:** Write clear and concise commit messages.
5.  **Push to Your Fork:** Push your branch to your forked repository.
6.  **Open a Pull Request:** Submit a pull request to the `main` branch of the PixCrunch repository.

## Code Reviews

All submissions, including submissions by project members, require review. We use GitHub pull requests for this purpose. Consult [GitHub Help](https://help.github.com/articles/about-pull-requests/) for more information on using pull requests.

## Reporting Bugs & Suggesting Features

*   **Bugs:** If you find a bug, please open an issue on GitHub, providing detailed steps to reproduce, expected behavior, and actual behavior.
*   **Feature Suggestions:** We welcome new ideas! Open an issue to discuss your feature idea, explaining its benefits and how it aligns with PixCrunch's vision. Consider checking the Roadmap in the `README.md` first.

## Roadmap & Future Directions

We have an exciting roadmap for PixCrunch, including AI-assisted compression, WebGPU integration, advanced editing features, and more. Feel free to pick up an item from the roadmap or suggest new ones!

Thank you for contributing to PixCrunch!
