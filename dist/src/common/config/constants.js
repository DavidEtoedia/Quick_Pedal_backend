"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = exports.TicketPriority = exports.TicketStatus = void 0;
var TicketStatus;
(function (TicketStatus) {
    TicketStatus["PENDING"] = "Pending";
    TicketStatus["WORKCREATED"] = "Work_Created";
    TicketStatus["WORKASSIGNED"] = "Work_Assigned";
    TicketStatus["PENDINGAPPROVAL"] = "Pending_Approval";
    TicketStatus["WORKSTARTED"] = "Work_Started";
    TicketStatus["WORKCOMPLETE"] = "Work_Complete";
})(TicketStatus || (exports.TicketStatus = TicketStatus = {}));
var TicketPriority;
(function (TicketPriority) {
    TicketPriority["LOW"] = "Low";
    TicketPriority["NORMAL"] = "Normal";
    TicketPriority["HIGH"] = "High";
})(TicketPriority || (exports.TicketPriority = TicketPriority = {}));
var UserRole;
(function (UserRole) {
    UserRole["AGENT"] = "AGENT";
    UserRole["ADMIN"] = "ADMIN";
    UserRole["CUSTOMER"] = "CUSTOMER";
})(UserRole || (exports.UserRole = UserRole = {}));
//# sourceMappingURL=constants.js.map