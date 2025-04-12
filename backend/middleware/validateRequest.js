const validateSignup = (req, res, next) => {
    const { name, email, password, address } = req.body;
  
    // Validate Name (20 to 60 characters)
    if (!name || name.length < 20 || name.length > 60) {
      return res.status(400).send({
        message: "Name must be between 20 and 60 characters."
      });
    }
  
    // Validate Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).send({
        message: "Invalid email format."
      });
    }
  
    // Validate Password (8-16 characters, 1 uppercase, 1 special char)
    const passwordRegex = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,16}$/;
    if (!password || !passwordRegex.test(password)) {
      return res.status(400).send({
        message:
          "Password must be 8-16 characters, include at least one uppercase letter and one special character."
      });
    }
  
    // Validate Address (max 400 characters)
    if (address && address.length > 400) {
      return res.status(400).send({
        message: "Address cannot exceed 400 characters."
      });
    }
  
    next(); // Validation passed
  };
  
  module.exports = {
    validateSignup
  };
  