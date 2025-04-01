function MoodDisplay({ mood }) {
  return (
    <div>
      <h2>Current mood:</h2>
      <h1>
        {mood === "😊" ? `${mood} Happy` : null}
        {mood === "😢" ? `${mood} Sad` : null}
        {mood === "🤩" ? `${mood} Excited` : null}
        {mood === "😴" ? `${mood} Tired` : null}
      </h1>
    </div>
  );
}

export default MoodDisplay;
