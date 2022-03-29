module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9169666b9722b8f91ceab18c2c7d003e'),
  },
});
