{"filter":false,"title":"Attendance.js","tooltip":"/face2/backend/models/Attendance.js","undoManager":{"mark":5,"position":5,"stack":[[{"start":{"row":5,"column":18},"end":{"row":5,"column":24},"action":"remove","lines":["Number"],"id":1},{"start":{"row":5,"column":18},"end":{"row":5,"column":24},"action":"insert","lines":["Number"]},{"start":{"row":5,"column":18},"end":{"row":5,"column":24},"action":"remove","lines":["Number"]},{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"insert","lines":["ㄴ"]},{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"remove","lines":["ㄴ"]},{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"insert","lines":["ㄴ"]}],[{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"remove","lines":["ㄴ"],"id":2}],[{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"insert","lines":["s"],"id":3},{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"insert","lines":["T"]},{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"insert","lines":["R"]},{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"insert","lines":["I"]},{"start":{"row":5,"column":22},"end":{"row":5,"column":23},"action":"insert","lines":["N"]}],[{"start":{"row":5,"column":22},"end":{"row":5,"column":23},"action":"remove","lines":["N"],"id":4},{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"remove","lines":["I"]},{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"remove","lines":["R"]},{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"remove","lines":["T"]},{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"remove","lines":["s"]}],[{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"insert","lines":["S"],"id":5},{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"insert","lines":["t"]},{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"insert","lines":["r"]},{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"insert","lines":["i"]},{"start":{"row":5,"column":22},"end":{"row":5,"column":23},"action":"insert","lines":["n"]},{"start":{"row":5,"column":23},"end":{"row":5,"column":24},"action":"insert","lines":["g"]}],[{"start":{"row":0,"column":0},"end":{"row":14,"column":0},"action":"remove","lines":["// backend/models/Attendance.js","const mongoose = require('mongoose');","","const attendanceSchema = new mongoose.Schema({","  stdName: { type: String, required: true },","  stdNum: { type: String, required: true },","  attendance: { type: String, required: true }, ","  date: { type: Date, default: Date.now },","});","","// 컬렉션 이름을 명시적으로 지정","const Attendance = mongoose.model('Attendance', attendanceSchema, 'attendances');","","module.exports = Attendance;",""],"id":8},{"start":{"row":0,"column":0},"end":{"row":15,"column":0},"action":"insert","lines":["// backend/models/Attendance.js","const mongoose = require('mongoose');","","const attendanceSchema = new mongoose.Schema({","  stdName: { type: String, required: true },","  stdNum: { type: String, required: true },","  attendance: { type: String, required: true }, ","  date: { type: Date, default: Date.now },","  subject: { type: String, required: true } // subject 필드 추가","});","","// 컬렉션 이름을 명시적으로 지정","const Attendance = mongoose.model('Attendance', attendanceSchema, 'attendances');","","module.exports = Attendance;",""]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":14,"column":28},"end":{"row":14,"column":28},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1730859866129,"hash":"6cc03d05f8be701305b475015e1b42664b8e1497"}