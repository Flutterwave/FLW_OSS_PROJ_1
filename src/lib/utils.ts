export default function commaSeparatedListToArray(input: string) {
  // Separate entries by comma
  const entries = input.split(',');

  // Strip surrounding whitespace and limit whitespace between characters to 1
  const processedSkills = entries.map((entry) => entry.trim().replace(/\s+/g, ' '));

  return processedSkills;
}
