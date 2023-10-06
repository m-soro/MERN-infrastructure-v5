import React from "react";
import * as usersService from "../utilities/users-service";

import { checkToken } from "../utilities/users-service";

const handleCheckToken = async function () {
  checkToken();
};
export default function OrderHistoryPage() {
  return (
    <div>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check my log in</button>
    </div>
  );
}
