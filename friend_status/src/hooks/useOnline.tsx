import React, { useState, useEffect } from "react";

function useOnline(props: string) {
  const [online, setOnline] = useState<string>(props);

  useEffect(() => {
    if (props === "null") {
      setOnline("loading");
    }
    else if (props === "online") {
      setOnline("true");
    } else {
      setOnline("false");
    }
  }, [props]);

  return online;
}
export default useOnline;
