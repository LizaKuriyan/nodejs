function capitalizeName(fullName) {
  const parts = fullName.split(" ");
  
  const firstName = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
  const lastName = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
  
  return `${firstName} ${lastName}`;
}

module.exports = capitalizeName;
