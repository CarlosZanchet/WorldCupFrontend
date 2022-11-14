import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
import { findRequestByUser } from "../services/UserService";
export const RequestContext = createContext({});
export const RequestProvider = ({ children }) => {
    const [requests, setRequests] = useState([]);
    function removeRequest(requestId) {
        const newList = requests.filter(req => req.id !== requestId);
        setRequests([...newList]);
    }
    function findRequest() {
        findRequestByUser().then((response) => {
            setRequests(response.data);
        });
    }
    return (_jsx(RequestContext.Provider, { value: { requests, findRequest, removeRequest }, children: children }));
};
export const useRequests = () => {
    return useContext(RequestContext);
};
//# sourceMappingURL=RequestContext.js.map