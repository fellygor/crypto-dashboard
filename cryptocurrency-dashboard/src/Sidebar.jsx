import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";

// CoinGecko API URL and options
const API_BASE_URL = 'https://api.coingecko.com/api/v3';
const API_OPTIONS = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};

const formatPrice = (price, currency) => {
    if (price === null) return 'N/A';
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency.toUpperCase()
    }).format(price);
};
const Sidebar = () => {
    const [cryptos, setCryptos] = useState([]);
    const [allCryptos, setAllCryptos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currency, setCurrency] = useState('usd');

    // Fetch crypto data from CoinGecko API
    const fetchCryptos = async (selectedCurrency) => {
        setLoading(true);
        setError(null);
        try {
            const url = `${API_BASE_URL}/coins/markets?vs_currency=${selectedCurrency}&order=market_cap_desc&per_page=100&page=1&price_change_percentage=24h`;
            const response = await fetch(url, API_OPTIONS);
            if (!response.ok) {
                throw new Error(`API error: ${response.statusText}`);
            }
            const data = await response.json();
            setAllCryptos(data);
            setCryptos(data);
        } catch (err) {
            console.error('Failed to fetch cryptocurrencies:', err);
            setError(`Error fetching data: ${err.message}. Please try again later.`);
        } finally {
            setLoading(false);
        }
    };

   
     // Initial data fetch on component mount
    useEffect(() => {
        fetchCryptos(currency);
    }, [currency]);

    // Handle search input
    useEffect(() => {
        const filteredCryptos = allCryptos.filter(crypto =>
            crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setCryptos(filteredCryptos);
    }, [searchTerm, allCryptos]);

   

    return(
    <>
        <div class="flex h-screen">
            {/* <!-- Sidebar --> */}
            <aside class="w-64 bg-gray-800 text-white list-disc">
                <h2>Crypto</h2>
                <ul className="list-none p-10 pb-20">
                    <li className="pb-15">Dashboard</li>
                    <li className="pb-15">Account</li>
                    <li className="pb-15"> Chart</li>
                    <li className="pb-15">Wallet</li>
                    <li className="pb-15">News</li>
                    <li className="pb-15">Settings</li>
                </ul>
            </aside>

            {/* <!-- Main Content --> */}
            <main class="flex-1 p-20">
                <div>
                    <input type="search" name="" id="" />
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
                <div className="flex gap-8">
                    <Card />
                    <Card />
                    <Card />
                </div>
               
                <div className="container mx-auto">
                <header className="text-center mb-10">
                    <h1 className="text-4xl md:text-xl font-bold text-sky-400 mb-2"> Dashboard</h1>
                </header>

                <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0 md:space-x-4">
                    <div className="relative w-full md:w-1/2">
                        <input
                            type="text"
                            placeholder="Search for a crypto..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-full bg-slate-800 text-white placeholder-gray-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <div className="w-full md:w-auto">
                        <select
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className="w-full md:w-auto rounded-full bg-slate-800 text-white border border-slate-700 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        >
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                            <option value="jpy">JPY</option>
                        </select>
                    </div>
                </div>

                {loading && (
                    <div className="text-center text-slate-400 flex flex-col items-center">
                        <svg className="animate-spin h-10 w-10 text-sky-500 mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Loading cryptocurrencies...</span>
                    </div>
                )}

                {error && (
                    <div className="text-center text-red-500 mt-4">
                        <p>{error}</p>
                    </div>
                )}

                {!loading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {cryptos.length > 0 ? (
                            cryptos.map(crypto => (
                                <div
                                    key={crypto.id}
                                    className="bg-slate-800 rounded-xl p-6 shadow-md cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
                                    
                                >
                                    <div className="flex items-center space-x-4 mb-4">
                                        <img src={crypto.image} alt={crypto.name} className="h-10 w-10 rounded-full" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/40x40/252f40/8e9ba9?text=C"; }} />
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">{crypto.name}</h3>
                                            <p className="text-slate-400 uppercase">{crypto.symbol}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-400">Current Price</span>
                                            <span className="text-white font-medium">{formatPrice(crypto.current_price, currency)}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-400">24h Change</span>
                                            <span className={crypto.price_change_percentage_24h >= 0 ? 'text-green-500 font-medium' : 'text-red-500 font-medium'}>
                                                {crypto.price_change_percentage_24h !== null ? crypto.price_change_percentage_24h.toFixed(2) + '%' : 'N/A'}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-400">Market Cap</span>
                                            {/* <span className="text-white font-medium">{formatMarketCap(crypto.market_cap)}</span> */}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center text-slate-400">No cryptocurrencies found.</div>
                        )}
                    </div>
                )}
            </div>

            </main>
        </div>
    </>
    )
}

export default Sidebar