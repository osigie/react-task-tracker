"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "User",
      [
        {
          id: 1,
          text: "Go home by 12",
          day: "Tuesday 2:51am",
          reminder: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          text: "ye",
          day: "Sunday 2:50pm",
          reminder: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          text: "test 3",
          day: "Friday 3:20pm",
          reminder: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          text: "Trying hard to learn sequelize",
          day: "Monday 8:30pm",
          reminder: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
