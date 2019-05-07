import React from "react";
import { withRouter } from "react-router";

export default (Component, unAuthed = false) => {
  const WithSession = ({ user = {}, streamToken, ...props }) =>
    user.id || unAuthed ? (
      <Component
        userId={user.id}
        user={user}
        session={window.streamSession}
        {...props}
      />
    ) : (
      <Component {...props} />
    );

  return withRouter(WithSession);
};
