function formatDuration(seconds) {
  const units = [
    ["year", 31536000],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
    ["second", 1],
  ];

  const date = [];
  let remainder = null;

  remainder = seconds;
  for (const [unitName, secondsInUnit] of units) {
    const unitCount = Math.floor(remainder / secondsInUnit);

    if (unitCount > 0) {
      remainder %= secondsInUnit;

      const label = unitCount === 1 ? unitName : unitName + "s";
      date.push(`${unitCount} ${label}`);
    }
  }

  if (seconds === 0) return now;
  return date.length > 1
    ? date.slice(0, -1).join(", ") + " and " + date.slice(-1)
    : date[0];
}

console.log(formatDuration(62)); // expect "1 minute and 2 seconds"
console.log(formatDuration(3662)); // expect "1 hour, 1 minute and 2 seconds"
console.log(formatDuration(31094600662)); // expect "986 years, 1 day, 5 hours, 4 minutes and 22 seconds"
