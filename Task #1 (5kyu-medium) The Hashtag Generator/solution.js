let input = "Do We have A Hashtag";

const REGEX = { FIRST_CAP: /\b\w/g, SPACES: /\s/g, MULTI_SPACES: /\s+/g };

function generateHashtag(str) {
  const cleanedString = str.trim().replace(REGEX.MULTI_SPACES, " ");
  if (!cleanedString) return false;

  const capitalWords = cleanedString.replace(REGEX.FIRST_CAP, (letter) =>
    letter.toUpperCase()
  );
  const spacesRemoved = capitalWords.replace(REGEX.SPACES, "");
  const hashtagAdded = "#" + spacesRemoved;

  return hashtagAdded.length > 140 ? false : hashtagAdded;
}

console.log(generateHashtag(input));
console.log(generateHashtag("")); // Expected an empty string to return false
console.log(generateHashtag("Codewars is nice")); // Should capitalize first letters of words.
console.log(generateHashtag("code" + " ".repeat(140) + "wars")); // #CodeWars
console.log(
  generateHashtag(
    "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
  )
); // Should return false if the final word is longer than 140 chars.
console.log(generateHashtag("a".repeat(139))); // Should work
console.log(generateHashtag("a".repeat(140))); // Too long
