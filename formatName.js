function formatName(fullName) {
  const parts = fullName.split(" ");

  const formattedParts = parts.map(part => {
    return part.charAt(0).toUpperCase() + part.slice(1);
  });

  return formattedParts.join(" ");
}

module.exports = formatName;
