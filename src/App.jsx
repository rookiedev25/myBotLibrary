import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { BotCard } from './components/BotCard'
import { useRecentBots } from './hooks/useRecentBots'
import { bots } from './data/bots'

function App() {
  const { recentBots, addRecentBot } = useRecentBots()

  const handleBotLaunch = (bot) => {
    // Track the bot launch
    addRecentBot(bot.id, bot.name)
    // Open bot in new tab
    window.open(bot.siemensGptUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        {/* Recent Bots Section */}
        {recentBots.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Recent Launches
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {recentBots.map((recentBot) => {
                const botData = bots.find((b) => b.id === recentBot.id)
                return botData ? (
                  <button
                    key={recentBot.id}
                    onClick={() => handleBotLaunch(botData)}
                    className="p-4 bg-siemens text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 shadow-md flex flex-col items-center space-y-2"
                  >
                    <div className="text-3xl">{botData.emoji}</div>
                    <p className="font-semibold text-xs text-center line-clamp-2">
                      {botData.name}
                    </p>
                  </button>
                ) : null
              })}
            </div>
          </section>
        )}

        {/* All Bots Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            All Bots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bots.map((bot) => (
              <BotCard
                key={bot.id}
                bot={bot}
                onLaunch={handleBotLaunch}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
