const home = (req, res) => { res.json({ success: true, message: 
    "Welcome to RSQ API 🚀", version: "1.0.0"
  });
};
const health = (req, res) => { res.json({ status: "healthy", 
    server: "running", uptime: process.uptime()
  });
};
const status = (req, res) => { res.json({ success: true, status: 
    "online"
  });
};
const version = (req, res) => { res.json({ version: "1.0.0"
  });
};
module.exports = { home, health, status, version
};
