import React, { useState, useEffect } from "react";

function useOnline(props: string) {
  const [online, setOnline] = useState(props);

  useEffect(() => {
    if (props === "") {
      setOnline("loading");
    }
    else if (props === "online") {
      setOnline("yes");
    } else {
      setOnline("no");
    }
  }, [props]);

  return online;
}
export default useOnline;
