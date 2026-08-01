require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const apiRoutes = require("./routes/api");
const logger = require("./middleware/logger");

const app = express();

// Security
app.use(helmet());
app.use(cors());

// Rate Limiter
const limiter = rateLimit({
	  windowMs: 15 * 60 * 1000,
	    max: 100,
	      message: {
	      	    success: false,
	      	        message: "Too many requests. Please try again later."
	      	          }
	      	          });

	      	          app.use(limiter);

	      	          // Middleware
	      	          app.use(express.json());
	      	          app.use(logger);

	      	          // Routes
	      	          app.use("/", apiRoutes);

	      	          module.exports = app;
	      }
})
