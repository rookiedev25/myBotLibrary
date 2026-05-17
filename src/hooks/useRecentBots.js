import { useState, useEffect } from 'react'

/**
 * Hook to manage recently launched bots in session storage
 * Keeps track of up to 5 most recent bot launches
 */
export const useRecentBots = () => {
  const [recentBots, setRecentBots] = useState([])

  // Load recent bots from session storage on mount
  useEffect(() => {
    const stored = sessionStorage.getItem('recentBots')
    if (stored) {
      try {
        setRecentBots(JSON.parse(stored))
      } catch (e) {
        console.error('Failed to parse recent bots from session storage', e)
      }
    }
  }, [])

  // Add bot to recent list
  const addRecentBot = (botId, botName) => {
    setRecentBots((prev) => {
      // Remove duplicate if exists
      const filtered = prev.filter((b) => b.id !== botId)
      // Add to front and keep only last 5
      const updated = [
        { id: botId, name: botName, timestamp: new Date().toISOString() },
        ...filtered,
      ].slice(0, 5)
      
      // Save to session storage
      sessionStorage.setItem('recentBots', JSON.stringify(updated))
      return updated
    })
  }

  return { recentBots, addRecentBot }
}
