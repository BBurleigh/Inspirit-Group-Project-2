const User = require('./User');
const Quote = require('./Quote');
const UserSaved = require('./UserSaved');

Quote.belongsToMany(User, {
  through: {
    model: UserSaved,
    unique: false
  },
  as: 'saved_quotes'
});

User.belongsToMany(Quote, {
  through: {
    model: UserSaved,
    unique: false
  },
  as: 'users_saved'
});

/*Quote.belongsTo(User, {
  foreignKey: "user_id"
})

User.belongsToMany(Quote, {
  foreignKey: "user_id"
})*/

module.exports = { User, Quote, UserSaved };
