import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, removeBot, dischargeBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          handleClick={() => removeBot(bot)}
          handleDischarge={() => dischargeBot(bot)}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;
