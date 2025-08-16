- Nodemon: reset code không cần  Ctrl C
    Install
    -> package.js -> tìm "scripts" -> chèn "start": "nodemon --inspect index.js"
- Morgan :  Để hiện  thông báo đã gửi về Server chưa
- Template Engine : 1 layout có sẵn
  => const { engine } = require("express-handlebars");
          app.engine(
      "hbs",
      engine({
        extname: ".hbs",
      })
    );
    app.set("view engine", "hbs");
    app.set("views", path.join(__dirname, "resources/views"));
