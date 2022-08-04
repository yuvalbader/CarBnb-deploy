"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          first_name: "Chen",
          last_name: "Azulai",
          profile_picture: `https://media-exp1.licdn.com/dms/image/C5603AQG0D1CPc8VVIQ/profile-displayphoto-shrink_100_100/0/1582954037166?e=1665014400&v=beta&t=h0b1bjspDJZ1H-TOEPkQzaYAKS3I3u4NlWIV3GWqK5k`,
          email: "chenazulay89@gmail.com",
          address: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Hassan",
          last_name: "Hassouna",
          profile_picture: `https://media-exp1.licdn.com/dms/image/D4D35AQHCG9AOuB6MAw/profile-framedphoto-shrink_100_100/0/1631017959526?e=1660150800&v=beta&t=MY5Xb5oOzn16gafayjCWfbAWT6mgwjWkahxjKRqW-Z0`,
          email: "hhasona@gmail.com",
          address: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Roni",
          last_name: "Ben simon",
          profile_picture: `https://media-exp1.licdn.com/dms/image/C4D03AQEe-dUpOmUDgg/profile-displayphoto-shrink_100_100/0/1623751762767?e=1665014400&v=beta&t=1nL3KfJl6n1GZ9Bx4XlNm-E0qmZFl4lGUZK4iObfHHM`,
          email: "roniana11@gmail.com",
          address: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Yuval",
          last_name: "Bader",
          profile_picture: `https://media-exp1.licdn.com/dms/image/C4D03AQE0B_33DAqe9g/profile-displayphoto-shrink_100_100/0/1641799636788?e=1665014400&v=beta&t=V2YfLvNfPZ5t978kazkork4GrqFGlRm43iZPQSNEBiQ`,
          email: "yuvalbader96@gmail.com",
          address: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Oron",
          last_name: "Morad",
          profile_picture: `https://media-exp1.licdn.com/dms/image/C4D03AQGXP9o155WTtg/profile-displayphoto-shrink_200_200/0/1643224942359?e=1665014400&v=beta&t=77QOR5eLgXbBcxERU8DEldOwwUY_sUvLycW7UkrLuvM`,
          email: `oron.morad@gmail.com`,
          address: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Nitzan",
          last_name: "Ezra",
          profile_picture: `https://media-exp1.licdn.com/dms/image/C4D03AQHcicrZ8AhCSg/profile-displayphoto-shrink_200_200/0/1598308689059?e=1665014400&v=beta&t=wjSs9dO6gDAoKRtVT7NnTS_cZzfeD-Gp0VJkxfqljC4`,
          email: "nitzanezra@gmail.com",
          address: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Sivan",
          last_name: "Meisel",
          profile_picture: `https://media-exp1.licdn.com/dms/image/C5603AQFgxoPkYUGuAQ/profile-displayphoto-shrink_200_200/0/1633642800593?e=1665014400&v=beta&t=XwTBcbqxVSaKMkr9EgWbcV3Ov-BkGyL_uXbMoZUQHjI`,
          email: `sivanme@monday.com`,
          address: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Yoni",
          last_name: "Levin",
          profile_picture: `https://media-exp1.licdn.com/dms/image/C4D03AQGmXYf_TxAzPw/profile-displayphoto-shrink_100_100/0/1632072801642?e=1665014400&v=beta&t=79GsiuEeV-bm0eywdl82RheIFtt4NM0fmHvbN1K4nkA`,
          email: `yonil@monday.com`,
          address: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Vlad",
          last_name: "Mystetskyi ",
          profile_picture: `https://media-exp1.licdn.com/dms/image/C5603AQEu6v7wvuAzAQ/profile-displayphoto-shrink_200_200/0/1558974230336?e=1665014400&v=beta&t=CH3QulpMYlbH3MWJ8-1nI9nSwYYvYnrjgZJsRXbRIU0`,
          email: `vlad@monday.com`,
          address: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
