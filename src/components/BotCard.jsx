/**
 * BotCard Component
 * Displays individual bot information and launch button
 */
export const BotCard = ({ bot, onLaunch }) => {
  const handleClick = () => {
    onLaunch(bot)
  }

  return (
    <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-siemens transition-all duration-300">
      <div className="p-6 flex flex-col h-full">
        {/* Bot Icon */}
        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {bot.emoji}
        </div>

        {/* Bot Name */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {bot.name}
        </h3>

        {/* Bot Description */}
        <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
          {bot.description}
        </p>

        {/* Launch Button */}
        <button
          onClick={handleClick}
          className="w-full bg-siemens text-white font-medium py-2 px-4 rounded-md hover:bg-teal-700 active:bg-teal-800 transition-all duration-200"
        >
          Launch
        </button>
      </div>
    </div>
  )
}
