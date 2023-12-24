import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  return user ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
