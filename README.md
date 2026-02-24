# Canvas

UI prototyping workspace for the NorthHarbor project family.

## Purpose

Canvas is a rapid prototyping environment for exploring UI concepts before committing to implementation. It supports two phases of work:

1. **Sketch Mockups** -- describe a UI concept in natural language and receive sketch-style visual mockups generated via Cursor's image generation. Two options are produced in parallel for comparison.
2. **Interactive Prototypes** -- promote a concept to a working HTML/CSS/JS prototype for simulating behaviors without a backend.

## Repo Structure

```
concepts/                     # Generated mockup images
  {concept-name}/
    option-a.png
    option-b.png
    brief.md                  # Concept description + iteration notes

prototypes/                   # Interactive prototypes (Vite + React + Tailwind)
  src/
    {concept-name}/           # Each concept as a route/page
```

## Workflow

1. **Describe** -- provide a natural language description of the UI concept
2. **Confirm** -- the assistant echoes back a structured brief for review
3. **Generate** -- two mockup options are generated in parallel
4. **Iterate** -- refine the description and regenerate as needed
5. **Promote** -- when ready, scaffold an interactive prototype

## Getting Started

### Prerequisites

- Node.js 20+
- [Task](https://taskfile.dev/) (optional, for workflow commands)

### Development

```bash
# Install dependencies
task setup

# Start dev server for prototypes
task dev

# Lint
task lint
```

## Tech Stack (Prototypes)

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- [TailwindCSS](https://tailwindcss.com/)
- [PaperCSS](https://getpapercss.com/) (optional, sketch aesthetic)
