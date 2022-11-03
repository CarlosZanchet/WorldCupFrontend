import { createContext, useContext, useState } from "react";
import { Request } from "../entities/Request";
import { findRequestByUser } from "../services/UserService";

export interface RequestProviderProps {
  children: React.ReactNode;
}

export interface RequestContextData {
  requests: Request[],
  findRequest: () => void
  removeRequest: (requestId: string) => void
}

export const RequestContext = createContext<RequestContextData>(
  {} as RequestContextData
);

export const RequestProvider = ({ children }: RequestProviderProps) => {
  
  const [requests, setRequests] = useState<Request[]>([])

  function removeRequest(requestId: string) {
    const newList = requests.filter(req => req.id !== requestId)
    setRequests([...newList])
  }

  function findRequest() {
    findRequestByUser().then((response) => {
      setRequests(response.data)
    })
  }

  return (
    <RequestContext.Provider value={{ requests, findRequest, removeRequest }}>
      {children}
    </RequestContext.Provider>
  );
};

export const useRequests = () => {
  return useContext(RequestContext);
};

