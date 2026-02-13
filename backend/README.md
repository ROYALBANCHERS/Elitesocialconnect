# EliteSocialConnect Backend API

Backend API for EliteSocialConnect - Digital Marketing Agency website.

## Features

- RESTful API with Express.js
- CORS enabled for GitHub Pages
- Rate limiting for security
- Contact form submissions
- Newsletter subscription
- Admin panel endpoints
- Services, Portfolio, Blog, Industries data
- In-memory data storage (easily upgradeable to MongoDB/PostgreSQL)

## Installation

```bash
cd backend
npm install
```

## Configuration

Copy `.env.example` to `.env` and update with your settings:

```bash
cp .env.example .env
```

## Running the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### Public Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/services` | Get all services |
| GET | `/api/services/:slug` | Get service by slug |
| GET | `/api/portfolio` | Get all portfolio items |
| GET | `/api/portfolio/:id` | Get portfolio item by ID |
| GET | `/api/industries` | Get all industries |
| GET | `/api/blogs` | Get all blog posts |
| GET | `/api/blogs/:slug` | Get blog post by slug |
| GET | `/api/stats` | Get company statistics |
| GET | `/api/team` | Get team members |
| POST | `/api/contact` | Submit contact form |
| POST | `/api/newsletter` | Subscribe to newsletter |

### Admin Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/admin/login` | Admin login |
| GET | `/api/admin/dashboard` | Get dashboard data |
| PUT | `/api/admin/stats` | Update statistics |
| POST | `/api/admin/blogs` | Create blog post |
| POST | `/api/admin/portfolio` | Add portfolio item |

## Example Requests

### Get all services
```bash
curl https://your-api-url.com/api/services
```

### Submit contact form
```bash
curl -X POST https://your-api-url.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "company": "Acme Corp",
    "message": "I would like to inquire about your services"
  }'
```

## Deployment

### Deploy to Render

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set build command: `cd backend && npm install`
4. Set start command: `cd backend && npm start`
5. Add environment variables from `.env`

### Deploy to Railway

1. Create a new project on Railway
2. Deploy from GitHub
3. Add environment variables

### Deploy to Vercel/Netlify

Use serverless functions or deploy to a different platform (Render/Railway recommended).

## Security Notes

⚠️ **Important for Production:**

1. Replace in-memory storage with a real database (MongoDB/PostgreSQL)
2. Implement proper JWT authentication for admin routes
3. Use environment variables for sensitive data
4. Set up proper email service (SendGrid/Mailgun)
5. Add input sanitization
6. Implement request validation with Joi/Zod
7. Add HTTPS only cookies
8. Set up proper logging (Winston/Pino)

## License

MIT
