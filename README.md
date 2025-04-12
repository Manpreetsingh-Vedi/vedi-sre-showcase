
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/a48c65e7-d15d-470e-b335-25f452a9fd02

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/a48c65e7-d15d-470e-b335-25f452a9fd02) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Running with Docker

This project can be run using Docker, which ensures consistency across different environments.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/) (optional, but recommended)

### Option 1: Using Docker Compose (Recommended)

The easiest way to run the application is using Docker Compose:

```sh
# Build and start the container
docker-compose up -d

# View logs if needed
docker-compose logs -f

# Stop the container when done
docker-compose down
```

The application will be available at http://localhost:8080

### Option 2: Using Docker directly

If you prefer using Docker commands directly:

```sh
# Build the Docker image
docker build -t vedi-sre-showcase .

# Run the container
docker run -d -p 8080:80 --name vedi-sre-showcase vedi-sre-showcase

# Stop the container when done
docker stop vedi-sre-showcase
docker rm vedi-sre-showcase
```

The application will be available at http://localhost:8080

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/a48c65e7-d15d-470e-b335-25f452a9fd02) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes it is!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
