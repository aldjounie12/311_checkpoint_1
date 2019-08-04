const users = require('../data/index.js')
const sampleUser = require('../data/sampleUser.js')
const getAllUsers = (req, res) => {
  res.json(users)
}

const getUserById = (req, res) => {
  const user = users.find(function(item) {
    return item.id == req.params.id
  })
  res.json(user)
}


const createUser = (req, res) => {
    
            users.push(sampleUser)
            //requesting the list of users
            res.json(users)
}

const updateUserById = (req, res) => {
    const found = users.find(user => user._id == req.params.id);
        // console.log("found:", found._id)
        if (found) {
        const updateUser = {
          _id: req.body._id,
          name: req.body.name,
          occupation: req.body.occupation,
          avatar: req.body.avatar,
        }
        //first add updated field to users/ then push the entire update user 
        users.splice(found._id - 1, 1);
        users.push(updateUser)
        res.json(updateUser)}
}


//allow user to delete the first id
        const deleteUserByFirstName = (req, res) => {
    const found = users.find(user => user._id == req.params.id);
    if (found) {
      const userObject = users.filter(user => user._id == req.params.id);
      console.log(userObject[0]);
      users.splice(userObject[0]._id - 1, 1);
      res.send('bad request');
  } else {
    res.status(400).json({msg: `user id ${req.params.id} not found.`})
  }
  }

  module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserByFirstName
  }

