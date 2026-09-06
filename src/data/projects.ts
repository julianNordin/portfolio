export type ProjectCategory =
  | "Backend & APIs"
  | "Frontend"
  | "Cloud & DevOps"
  | "Testing"
  | "Earlier";

export interface Project {
  /** Display name on the card. */
  title: string;
  /** One line: what the project is, or the problem it is built around. */
  description: string;
  /** Cover image in /public/projects/. */
  image: string;
  /** Source repository. */
  repo: string;
  /** Deployed instance, when one exists. */
  demo?: string;
  /** Shown as chips under the title. Keep to three or four. */
  stack: string[];
  category: ProjectCategory;
}

/** Section order on the page. "Earlier" is rendered separately, behind a toggle. */
export const featuredCategories: ProjectCategory[] = [
  "Backend & APIs",
  "Frontend",
  "Cloud & DevOps",
  "Testing",
];

export const projects: Project[] = [
  // ---------------------------------------------------------------- backend
  {
    title: "LibrarySystem API",
    description:
      "Book lending with the rules enforced server-side — active-loan caps, no double-lending, overdue tracking.",
    image: "/projects/library-api.svg",
    repo: "https://github.com/julianNordin/LibrarySystem.Api",
    stack: ["ASP.NET Core 9", "EF Core", "SQL Server"],
    category: "Backend & APIs",
  },
  {
    title: "Secure Notes",
    description:
      "Authentication as the feature: rotating refresh tokens, family reuse detection, and three styles of authorization.",
    image: "/projects/secure-notes.svg",
    repo: "https://github.com/julianNordin/secure-notes-identity-jwt",
    stack: [".NET 9 Identity", "JWT", "PostgreSQL"],
    category: "Backend & APIs",
  },
  {
    title: "Recipe API",
    description:
      "Specification-composed search over recipes and shared ingredients, with quantities that rescale to any serving count.",
    image: "/projects/recipe-api.svg",
    repo: "https://github.com/julianNordin/recipe-api-java-spring",
    stack: ["Java 21", "Spring Boot 3.5", "PostgreSQL"],
    category: "Backend & APIs",
  },
  {
    title: "Event Booking API",
    description:
      "Two requests race for the last seat. A row lock inside an interactive transaction settles it.",
    image: "/projects/event-booking.svg",
    repo: "https://github.com/julianNordin/event-booking-nestjs",
    stack: ["NestJS 11", "Prisma 7", "PostgreSQL 18"],
    category: "Backend & APIs",
  },
  {
    title: "Order Processing",
    description:
      "A transactional outbox, a queue and an idempotent worker — built around everything that can fail between two services.",
    image: "/projects/order-processing.svg",
    repo: "https://github.com/julianNordin/order-processing-worker",
    stack: [".NET", "RabbitMQ", "Docker"],
    category: "Backend & APIs",
  },

  // --------------------------------------------------------------- frontend
  {
    title: "LibrarySystem Web",
    description:
      "The lending system's frontend, built against a real REST API rather than mocked data.",
    image: "/projects/library-web.svg",
    repo: "https://github.com/julianNordin/LibrarySystem.Web",
    stack: ["React 19", "TypeScript", "TanStack Query"],
    category: "Frontend",
  },
  {
    title: "Expense Tracker",
    description:
      "Categorised spending, monthly budgets, and filters that live in the URL so a view can be shared.",
    image: "/projects/expense-tracker.svg",
    repo: "https://github.com/julianNordin/expense-tracker-angular",
    demo: "https://juliannordin.github.io/expense-tracker-angular/",
    stack: ["Angular", "Zoneless", "sv-SE / SEK"],
    category: "Frontend",
  },
  {
    title: "Recipe Journal",
    description:
      "Server Components read Postgres directly and Server Actions write through it — no client-side data layer at all.",
    image: "/projects/recipe-journal.svg",
    repo: "https://github.com/julianNordin/recipe-journal",
    stack: ["Next.js 16", "Prisma 7", "NextAuth"],
    category: "Frontend",
  },

  // --------------------------------------------------------- cloud & devops
  {
    title: "LibrarySystem on Azure",
    description:
      "Deployed entirely from code: Bicep templates, secrets in Key Vault via managed identity, and a pipeline that stores no credential.",
    image: "/projects/azure-deploy.svg",
    repo: "https://github.com/julianNordin/librarysystem-azure-deploy",
    stack: ["Azure", "Bicep", "OIDC"],
    category: "Cloud & DevOps",
  },
  {
    title: "ShortLink",
    description:
      "A deliberately tiny application, used as the vehicle for a real container build and delivery pipeline.",
    image: "/projects/shortlink.svg",
    repo: "https://github.com/julianNordin/shortlink-docker-cicd",
    stack: ["Docker", "Compose", "GHCR"],
    category: "Cloud & DevOps",
  },
  {
    title: "StatusPage",
    description:
      "A status page that does not depend on the system it reports on — the public page reads a snapshot, never the API.",
    image: "/projects/statuspage.svg",
    repo: "https://github.com/julianNordin/statuspage",
    demo: "https://white-ground-07fbe590f.5.azurestaticapps.net",
    stack: [".NET", "Azure Static Web Apps", "Blob"],
    category: "Cloud & DevOps",
  },

  // ---------------------------------------------------------------- testing
  {
    title: "LibrarySystem E2E",
    description:
      "A real browser driving the production bundle against a live API and SQL Server in a container.",
    image: "/projects/library-e2e.svg",
    repo: "https://github.com/julianNordin/library-test-automation",
    stack: ["Playwright", "TypeScript", "Docker"],
    category: "Testing",
  },

  // ---------------------------------------------------------------- earlier
  {
    title: "Federated Learning Image Classification",
    description:
      "Bachelor's thesis on privacy-preserving image classification, measuring accuracy against differential-privacy noise levels.",
    image: "/projects/federated-learning.svg",
    repo: "https://github.com/julianNordin/federated-learning-image-classification",
    stack: ["TensorFlow Federated", "Keras", "Python"],
    category: "Earlier",
  },
  {
    title: "Restaurant Order Management System",
    description:
      "A Jakarta EE REST API, MariaDB, and an Android client for orders, bookings and staff schedules.",
    image: "/projects/restaurant-system.svg",
    repo: "https://github.com/julianNordin/restaurant-order-management-system",
    stack: ["Jakarta EE", "MariaDB", "Android"],
    category: "Earlier",
  },
  {
    title: "MOTH Surveillance System",
    description:
      "Occupancy tracking with PIR sensors on a Raspberry Pi, a Node.js sensor service and a PHP dashboard.",
    image: "/projects/moth-surveillance.svg",
    repo: "https://github.com/julianNordin/moth-surveillance-system",
    stack: ["Node.js", "PHP", "Raspberry Pi"],
    category: "Earlier",
  },
  {
    title: "Maze++",
    description:
      "A 2D maze game with procedural generation, key and door mechanics, and a limited-visibility view.",
    image: "/projects/cpp-maze-game.svg",
    repo: "https://github.com/julianNordin/cpp-maze-game",
    stack: ["C++", "SFML"],
    category: "Earlier",
  },
  {
    title: "C++ Data Structures & Algorithms",
    description:
      "Sorting and searching algorithms implemented and empirically benchmarked, with results plotted in Python.",
    image: "/projects/cpp-dsa.svg",
    repo: "https://github.com/julianNordin/cpp-data-structures-algorithms",
    stack: ["C++", "Python"],
    category: "Earlier",
  },
  {
    title: "PHP Q&A Forum",
    description:
      "A Stack Overflow-style forum with authentication, posts, comments and search.",
    image: "/projects/php-forum.svg",
    repo: "https://github.com/julianNordin/php-guestbook-app",
    stack: ["PHP", "PDO", "MySQL"],
    category: "Earlier",
  },
];

/** Projects in one category, in declaration order. */
export function projectsIn(category: ProjectCategory): Project[] {
  return projects.filter((project) => project.category === category);
}
