'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('admin', [{
      email: 'p.q.andy.ashong@gmail.com',
      password: 'e1687253f2e388edcc8e40d6ef1a68ffe644b8a7451eac113d93dbfa492a9d17',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('admin', null, {});
  }
};
