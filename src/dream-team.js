module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const res = members.reduce((name, member) => {
    if (typeof member === 'string') {
      return [...name, member.replace(/ /g, '')[0].toUpperCase()];
    } else {
      return name;
    }
  }, []);
  return res.sort().join('');
};
