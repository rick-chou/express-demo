> Backend http://124.223.71.181:3001

```bash
╔════════════════════════════════════════════════════════════════════════════════════════╗
║               ____                                                __                   ║
║              /\  _`\                                             /\ \                  ║
║              \ \ \L\_\  __  _  _____   _ __    __    ____    ____\ \ \                 ║
║               \ \  _\L /\ \/'\/\ '__`\/\`'__\/'__`\ /',__\  /',__\\ \ \                ║
║                \ \ \L\ \/>  </\ \ \L\ \ \ \//\  __//\__, `\/\__, `\\ \_\               ║
║                 \ \____//\_/\_\\ \ ,__/\ \_\\ \____\/\____/\/\____/ \/\_\              ║
║                  \/___/ \//\/_/ \ \ \/  \/_/ \/____/\/___/  \/___/   \/_/              ║
║                                  \ \_\                                                 ║
║                                   \/_/                                                 ║
╟───────────────────────────────┬───────────────────────────┬────────────────────────────╢
║ Path                          │ Method                    │ MiddleWare                 ║
╟───────────────────────────────┼───────────────────────────┼────────────────────────────╢
║ /express                      │ GET                       │ anonymous                  ║
╟───────────────────────────────┼───────────────────────────┼────────────────────────────╢
║ /express/users                │ GET                       │ anonymous                  ║
╟───────────────────────────────┼───────────────────────────┼────────────────────────────╢
║ /express/file-upload/single   │ PUT                       │ multerMiddleware,anonymous ║
╟───────────────────────────────┼───────────────────────────┼────────────────────────────╢
║ /express/file-upload/multiple │ PUT                       │ multerMiddleware,anonymous ║
╟───────────────────────────────┼───────────────────────────┼────────────────────────────╢
║ /express/echo-code/:code      │ GET,DELETE                │ anonymous                  ║
╟───────────────────────────────┼───────────────────────────┼────────────────────────────╢
║ /express/echo-code            │ GET,DELETE,POST,PUT,PATCH │ anonymous                  ║
╚═══════════════════════════════╧═══════════════════════════╧════════════════════════════╝
```
