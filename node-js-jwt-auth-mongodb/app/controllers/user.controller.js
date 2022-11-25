exports.allAccess = (req, res) => {
    res.status(200).send("Публичный контент.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("Контент пользователя.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Контент администратора.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Контент модератора.");
  };