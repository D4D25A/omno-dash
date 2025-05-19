# Omno Rewards Platform 🚀

Omno Rewards is a comprehensive loyalty program platform for Omno, Singapore's home-grown luxury personal care brand. The platform enables customers to earn and redeem points, track their rewards, and enjoy exclusive benefits.

## ✨ Features

- 🔐 **Secure Authentication** with email/password and Google login
- 💎 **Points Tracking** for customer purchases and tier progression
- 🎁 **Rewards Management** for redeeming points and special offers
- 🎨 **Minimalist UI** with black and white design using Tailwind CSS & ShadCN
- 🗄️ **Database Integration** with Prisma & PostgreSQL for reliable data storage
- ⚡ **Optimized Performance** with Next.js 15 App Router

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Authentication:** BetterAuth (Credentials & Google Login)
- **Database:** PostgreSQL with Prisma ORM
- **Styling:** Tailwind CSS, ShadCN, custom Omno design system
- **Fonts:** Prata (headers) and Poppins (body text)

## 🚀 Getting Started

### 1️⃣ Install Dependencies

```bash
bun install
```

### 2️⃣ Set Up Environment Variables
Create a .env file and add the necessary credentials:

```bash
# Secret key for Auth (Use a strong, random secret)
BETTER_AUTH_SECRET=<your_auth_secret>

# The base URL of your application (Update this for production)
BETTER_AUTH_URL=http://localhost:3000  # Change this to your production domain in deployment

# PostgreSQL Database Connection URL
DATABASE_URL="postgresql://<username>:<password>@<host>/<database_name>?sslmode=require"

# Google OAuth Credentials (Required for social login)
GOOGLE_CLIENT_ID=<your_google_client_id>
GOOGLE_CLIENT_SECRET=<your_google_client_secret>
```

### 3️⃣ Run Database Migrations

```bash
bunx prisma migrate dev
```

### 4️⃣ Start the Development Server

```bash
bun dev
```

The app will be available at http://localhost:3000.

## 📱 Responsive Design

The Omno Rewards platform is fully responsive, providing a seamless experience across desktop and mobile devices. The platform uses a mobile-first approach with breakpoints to ensure optimal viewing on all screen sizes.

## 🌙 Branding Elements

- **Colors:** Black and white minimalist design with sharp corners
- **Typography:** Prata for headings, Poppins for body text
- **Logo:** Stylized "Ø" represents "zero nonsense and zero compromise"
- **Points Symbol:** Points are displayed with the Ø symbol, e.g., "450Ø"

## 🔒 Security

The platform includes several security features:
- Secure authentication with BetterAuth
- Protection against common web vulnerabilities (CSRF, XSS)
- Password protection and email verification
- Secure session management

---

# Built for Omno: Everything in Equilibrium

