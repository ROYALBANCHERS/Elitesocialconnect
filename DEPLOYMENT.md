# Deployment Guide - EliteSocialConnect

This guide will help you deploy both the frontend and backend of EliteSocialConnect.

## 🌐 Frontend (GitHub Pages)

The frontend is configured to auto-deploy to GitHub Pages.

### Steps:

1. **Enable GitHub Pages:**
   - Go to: https://github.com/ROYALBANCHERS/Elitesocialconnect/settings/pages
   - Source: Select **GitHub Actions**
   - Click Save

2. **Access your site:**
   - URL: `https://royalbanchers.github.io/Elitesocialconnect/`

---

## 🔧 Backend (Render.com)

### Option 1: Deploy via Render Dashboard (Recommended)

1. **Create a Render Account:**
   - Go to: https://render.com
   - Sign up with GitHub

2. **Create New Web Service:**
   - Click **New** → **Web Service**
   - Connect your GitHub account
   - Select repository: `ROYALBANCHERS/Elitesocialconnect`

3. **Configure Service:**
   ```
   Name: elitesocialconnect-api
   Region: Singapore (or closest to you)
   Branch: main
   Root Directory: backend
   Runtime: Node
   Build Command: npm install
   Start Command: npm start
   ```

4. **Environment Variables:**
   Add these environment variables:
   ```
   NODE_ENV = production
   PORT = 10000
   ```

5. **Deploy:**
   - Click **Create Web Service**
   - Wait for deployment (2-3 minutes)

6. **Get Your API URL:**
   - Render will provide a URL like: `https://elitesocialconnect-api.onrender.com`

---

### Option 2: One-Click Deploy via Blueprint

1. Go to: https://render.com/dashboard/blueprints
2. Click "New Blueprint Instance"
3. Connect your GitHub account
4. Select `ROYALBANCHERS/Elitesocialconnect` repository
5. Click "Apply Blueprint"

---

## 🔗 Connect Frontend to Backend

After deploying the backend, update the frontend to use your API URL:

### Option 1: Update in GitHub (Manual)

1. Update `.env` file or add to repository:

**Create file:** `frontend/.env.production`
```
VITE_API_URL=https://your-backend-url.onrender.com/api
```

2. Commit and push changes.

### Option 2: Update in Vite Config

Edit `vite.config.ts` and add your API URL:

```typescript
export default defineConfig({
  // ... other config
  define: {
    'process.env.API_URL': JSON.stringify('https://your-backend-url.onrender.com/api')
  }
});
```

---

## 📋 Environment Variables Reference

### Backend (.env)

```bash
# Required
NODE_ENV=production
PORT=10000

# Optional (for email notifications)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@elitesocialconnect.com

# Admin (change in production!)
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-secure-password

# JWT Secret (generate random string)
JWT_SECRET=your-random-secret-key-here
```

---

## 🧪 Test the Deployment

### Test Backend Health

```bash
curl https://your-backend-url.onrender.com/api/health
```

Expected response:
```json
{
  "status": "healthy",
  "timestamp": "2025-01-15T10:30:00.000Z"
}
```

### Test API Endpoints

```bash
# Get services
curl https://your-backend-url.onrender.com/api/services

# Get portfolio
curl https://your-backend-url.onrender.com/api/portfolio

# Submit contact form
curl -X POST https://your-backend-url.onrender.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```

---

## 🔄 Auto-Deployment

- **Frontend:** Auto-deploys on push to `main` branch via GitHub Actions
- **Backend:** Auto-deploys on push to `main` branch via Render

---

## 📱 Alternative Backend Hosting

### Railway

1. Go to: https://railway.app
2. Click "New Project" → "Deploy from GitHub repo"
3. Select `ROYALBANCHERS/Elitesocialconnect`
4. Set Root Directory: `backend`
5. Add environment variables
6. Click "Deploy"

### Vercel (Backend)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd backend
vercel
```

---

## 🔐 Security Checklist

- [ ] Change default admin password
- [ ] Set up proper database (MongoDB/PostgreSQL)
- [ ] Enable HTTPS (automatic on Render)
- [ ] Set up proper email service
- [ ] Add rate limiting
- [ ] Implement proper JWT authentication
- [ ] Add request validation
- [ ] Set up logging (Winston/Pino)

---

## 📞 Support

If you encounter issues:

1. Check Render logs: https://dashboard.render.com
2. Check GitHub Actions logs: https://github.com/ROYALBANCHERS/Elitesocialconnect/actions
3. Verify environment variables are set correctly
4. Check CORS configuration

---

## 📊 Monitoring

- **Render:** Built-in metrics and logs
- **UptimeRobot:** https://uptimerobot.com (free uptime monitoring)

---

**URLs after deployment:**

| Service | URL |
|---------|-----|
| Frontend | `https://royalbanchers.github.io/Elitesocialconnect/` |
| Backend | `https://elitesocialconnect-api.onrender.com` (or your custom URL) |
