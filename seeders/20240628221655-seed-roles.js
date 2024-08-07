'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'roles',
      [
        { name: 'student', createdAt: new Date(), updatedAt: new Date() },
        { name: 'teacher', createdAt: new Date(), updatedAt: new Date() }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('roles', null, {})
  }
}
