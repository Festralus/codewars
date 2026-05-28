function formatDuration(seconds) {
  const units = [
    ["year", 31536000],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
    ["second", 1],
  ];

  const date = [];
  const remainder = null;

  // Cycle through units, leaving new remainders and populating date
  // figure out the -s ending
}

console.log(formatDuration(62)); // expect "1 minute and 2 seconds"
console.log(formatDuration(3662)); // expect "1 hour, 1 minute and 2 seconds"
