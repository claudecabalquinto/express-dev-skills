const skills = [
    {id: 125223, skill: 'swim', done: true},
    {id: 127904, skill: 'bike', done: false},
    {id: 139608, skill: 'drive', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
  }
  
  function getAll() {
    return skills;
  }