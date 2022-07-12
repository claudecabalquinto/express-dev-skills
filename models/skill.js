const skills = [
    {id: 125223, skills: 'swim', done: true},
    {id: 127904, skills: 'bike', done: false},
    {id: 139608, skills: 'drive', done: false}
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