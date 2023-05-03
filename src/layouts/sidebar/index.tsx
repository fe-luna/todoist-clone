import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Resizable, ResizeCallback } from "re-resizable";
import localForage from "localforage";
import { STORAGE_KEY, UI } from "consts";
import styles from "./style.module.scss";

function Sidebar() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    localForage.getItem<number>(STORAGE_KEY.SIDEBAR_WIDTH).then((res) => {
      setWidth(res || UI.SIDEBAR_DEFAULT_WIDTH);
    });
  }, []);

  const defaultSize = useMemo(() => ({ width, height: "auto" }), [width]);
  const handleClasses = useMemo(() => ({ right: styles.handle }), []);
  const enable = useMemo(
    () => ({
      top: false,
      right: true,
      bottom: false,
      left: false,
      topRight: false,
      bottomRight: false,
      bottomLeft: false,
      topLeft: false,
    }),
    []
  );
  const handleResize = useCallback<ResizeCallback>((event, direction, ref) => {
    localForage.setItem(STORAGE_KEY.SIDEBAR_WIDTH, ref.offsetWidth);
  }, []);

  if (!width) {
    return null;
  }

  return (
    <Resizable
      className={styles.sidebar}
      handleClasses={handleClasses}
      defaultSize={defaultSize}
      enable={enable}
      minWidth={UI.SIDEBAR_MIN_WIDTH}
      maxWidth={UI.SIDEBAR_MAX_WIDTH}
      onResize={handleResize}
    >
      sidebar
    </Resizable>
  );
}

export default Sidebar;
