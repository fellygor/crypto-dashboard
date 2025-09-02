
# Cryptocurrency Dashboard 📊

A modern, responsive cryptocurrency dashboard built with React that allows users to track real-time prices, volume, market cap, and changes across top cryptocurrencies. This tool leverages the CoinGecko API to provide comprehensive cryptocurrency data without requiring authentication.

## 🌟 Features

- **Real-time Cryptocurrency Prices**: Track current prices of top cryptocurrencies 
- **Interactive Charts**: View historical price data with interactive charts
- **Advanced Search**: Search functionality for specific coins
- **Fully Responsive**: Optimized for both desktop and mobile devices
- **Market Analytics**: View volume, market cap, and price changes
- **Currency Conversion**: Support for multiple currencies

## 🚀 Live Demo

Check out the live application: [Crypto Dashboard Live Link](https://your-deployed-app-link.vercel.app)

## 🛠️ Tech Stack

- **Frontend**: React (functional components + hooks)
- **Styling**: Tailwind CSS
- **API**: CoinGecko API (no authentication required) 
- **Icons**: Lucide React 
- **Deployment**: Vercel/Netlify

## 📦 Installation & Setup

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- Git

### Step-by-Step Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/fellygor/crypto-dashboard/tree/main/cryptocurrency-dashboard
   cd cryptocurrency-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install required packages**
   ```bash
   npm install lucide-react 
   # or
   yarn add lucide-react 
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🔧 Configuration

The application uses the CoinGecko API which doesn't require an API key for basic usage . However, if you need increased rate limits, you can add an API key:

1. Create a `.env` file in the root directory
2. Add your CoinGecko API key (optional):
   ```
   REACT_APP_COINGECKO_API_KEY=your_api_key_here
   ```
3. The application will automatically use the key if available

## 📁 Project Structure

```
cryptocurrency-dashboard/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Sidebar/
│   │   ├── Dashboard/
│   ├── styles/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .env
├── package.json
└── README.md
```
## 📊 API Usage

This application uses the CoinGecko API to fetch cryptocurrency data . Key endpoints include:

- `/simple/price` - Get current price of coins
- `/coins/markets` - Get market data for multiple coins
- `/coins/{id}/market_chart` - Get historical market data


## 📱 Responsive Design

The application uses responsive design principles to ensure optimal viewing on all devices :

- Flexbox and CSS Grid for layouts
- Media queries for breakpoints

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `build`
4. Deploy!

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your GitHub repository for continuous deployment

### Environment Variables

For production deployment, remember to add environment variables in your hosting platform:

- `REACT_APP_COINGECKO_API_KEY` (optional)

## 🔗 Useful Links

- [CoinGecko API Documentation](https://www.coingecko.com/en/api/documentation)
- [Lucide React Documentation](https://lucide.dev/guide/packages/lucide-react)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

⭐ Star this repo if you found it helpful!
