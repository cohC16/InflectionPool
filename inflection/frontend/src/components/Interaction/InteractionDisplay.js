import React, { Component, useEffect } from "react";

const InteractionDisplay = ({
  _id,
  entry,
  userid,
  entryname,
  created_at,
  emotion1,
  emotionvalue1,
  emotion2,
  emotionvalue2,
  emotion3,
  emotionvalue3,
}) => {
  return (
    <div>
      <h4>Entry Id - {_id}</h4>
      <h5>Entry Name - "{entryname}";</h5>
      <p> Entry - "{entry}"; </p>
      <p> Created On - {created_at};</p>
      <p>
        {emotion1 ? `Emotions Tagged - ` : null}
        {emotion1 ? ` ${emotion1}` : null}
        {emotionvalue1 ? ` - (${emotionvalue1})` : null}
        {emotion2 ? `; ${emotion2}` : null}
        {emotionvalue2 ? ` - (${emotionvalue2})` : null}
        {emotion3 ? `; ${emotion3}` : null}
        {emotionvalue3 ? ` - (${emotionvalue3})` : null}
      </p>
    </div>
  );
};
export default InteractionDisplay;
