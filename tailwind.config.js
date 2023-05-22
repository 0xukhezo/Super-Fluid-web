/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        container: "850px",
        containerCampaign: "370px",
        containerDetails: "600px",
      },
      width: { container: "798px", containerCampaign: "798px" },
      colors: {
        superfluid: {
          100: "#6AC886",
          200: "#6FD08C33",
        },
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
