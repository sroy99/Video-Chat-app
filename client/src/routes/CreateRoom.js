import React from "react";
import { v1 as uuid } from "uuid";

function CreateRoom(props) {
  const create = () => {
    const id = uuid();
    props.history.push(`/room/${id}`);
  };
  return (
    <div>
      <button onClick={create}>Create Room</button>
    </div>
  );
}

export default CreateRoom;
