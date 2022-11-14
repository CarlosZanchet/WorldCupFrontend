"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRequests = exports.RequestProvider = exports.RequestContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const UserService_1 = require("../services/UserService");
exports.RequestContext = (0, react_1.createContext)({});
const RequestProvider = ({ children }) => {
    const [requests, setRequests] = (0, react_1.useState)([]);
    function removeRequest(requestId) {
        const newList = requests.filter(req => req.id !== requestId);
        setRequests([...newList]);
    }
    function findRequest() {
        (0, UserService_1.findRequestByUser)().then((response) => {
            setRequests(response.data);
        });
    }
    return ((0, jsx_runtime_1.jsx)(exports.RequestContext.Provider, Object.assign({ value: { requests, findRequest, removeRequest } }, { children: children })));
};
exports.RequestProvider = RequestProvider;
const useRequests = () => {
    return (0, react_1.useContext)(exports.RequestContext);
};
exports.useRequests = useRequests;
//# sourceMappingURL=RequestContext.js.map