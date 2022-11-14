import api from "../api/api";
export function denyRequest(idRequest) {
    return api.get(`/request-deny/${idRequest}`);
}
export function acceptRequest(idRequest) {
    return api.get(`/request-accept/${idRequest}`);
}
//# sourceMappingURL=RequestService.js.map